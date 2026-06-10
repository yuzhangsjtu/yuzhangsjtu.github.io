// Migrate Hexo posts (/Users/yu/blog/source/_posts) into the Astro content
// collections and translate them to English via the DeepSeek API.
//
//   DEEPSEEK_API_KEY=... node scripts/migrate-translate.mjs [--limit N]
//     [--only <srcFileName>]... [--concurrency N] [--dry]
//
// Writes src/content/posts/{zh,en}/<slug>.md and records progress in
// scripts/migration-manifest.json (re-runs skip completed entries).
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const SRC_DIR = '/Users/yu/blog/source/_posts'
const ROOT = new URL('..', import.meta.url).pathname
const OUT_ZH = path.join(ROOT, 'src/content/posts/zh')
const OUT_EN = path.join(ROOT, 'src/content/posts/en')
const MANIFEST = path.join(ROOT, 'scripts/migration-manifest.json')

const API_URL = 'https://api.deepseek.com/chat/completions'
const MODEL = 'deepseek-v4-pro'
const API_KEY = process.env.DEEPSEEK_API_KEY
if (!API_KEY) {
  console.error('DEEPSEEK_API_KEY is not set')
  process.exit(1)
}

const args = process.argv.slice(2)
const flag = (name) => {
  const i = args.indexOf(name)
  return i === -1 ? undefined : args[i + 1]
}
const LIMIT = Number(flag('--limit') ?? Infinity)
const ONLY = args.flatMap((a, i) => (a === '--only' ? [args[i + 1]] : []))
const CONCURRENCY = Number(flag('--concurrency') ?? 6)
const DRY = args.includes('--dry')

const CATEGORIES = {
  essay: { zh: '随笔', en: 'Essay' },
  research: { zh: '研究笔记', en: 'Research Notes' },
  tech: { zh: '技术', en: 'Tech' },
}

// ---------- Hexo frontmatter parsing ----------
function parseHexo(raw, file) {
  const text = raw.replace(/\r\n/g, '\n')
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) throw new Error(`${file}: no frontmatter`)
  const body = text.slice(m[0].length).replace(/^\n+/, '').trimEnd()
  const fm = {}
  let curKey = null
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/)
    if (kv) {
      curKey = kv[1]
      fm[curKey] = kv[2] === '' ? [] : unquote(kv[2])
    } else {
      const item = line.match(/^\s+-\s*(.*)$/)
      if (item && curKey && Array.isArray(fm[curKey])) {
        fm[curKey].push(unquote(item[1]))
      }
    }
  }
  if (!fm.title || !fm.date) throw new Error(`${file}: missing title/date`)
  const d = String(fm.date).match(
    /^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?/,
  )
  if (!d) throw new Error(`${file}: bad date "${fm.date}"`)
  const pad = (n) => String(n).padStart(2, '0')
  const iso = `${d[1]}-${pad(d[2])}-${pad(d[3])}T${pad(d[4] ?? 0)}:${pad(d[5] ?? 0)}:${pad(d[6] ?? 0)}+08:00`
  return {
    title: String(fm.title),
    date: iso,
    tags: Array.isArray(fm.tags) ? fm.tags.map(String) : [],
    excerpt: fm.excerpt ? String(fm.excerpt) : '',
    sticky: fm.sticky !== undefined && fm.sticky !== [] ? true : false,
    body,
  }
}

function unquote(s) {
  s = s.trim()
  if (s.startsWith("'") && s.endsWith("'") && s.length >= 2)
    return s.slice(1, -1).replace(/''/g, "'")
  if (s.startsWith('"') && s.endsWith('"') && s.length >= 2)
    return JSON.parse(s)
  return s
}

// YAML double-quoted scalar via JSON escaping (valid YAML)
const y = (s) => JSON.stringify(String(s))

// ---------- DeepSeek ----------
async function chat(messages, opts = {}, retries = 4) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages,
          thinking: { type: 'disabled' },
          stream: false,
          ...opts,
        }),
      })
      if (!res.ok) {
        const text = await res.text()
        // 400s won't get better on retry, except rate-limit-ish ones
        if (res.status === 400 || res.status === 401 || res.status === 402)
          throw Object.assign(new Error(`HTTP ${res.status}: ${text}`), {
            fatal: true,
          })
        throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`)
      }
      const json = await res.json()
      const choice = json.choices?.[0]
      if (!choice || choice.finish_reason !== 'stop')
        throw new Error(`finish_reason=${choice?.finish_reason}`)
      return { content: choice.message.content, usage: json.usage }
    } catch (err) {
      if (err.fatal || attempt > retries) throw err
      const wait = Math.min(60000, 2000 * 2 ** attempt)
      console.warn(`  retry ${attempt}/${retries} in ${wait / 1000}s: ${err.message}`)
      await new Promise((r) => setTimeout(r, wait))
    }
  }
}

async function getMetadata(post) {
  const sys = `You prepare metadata for migrating a Chinese personal-blog post to a bilingual blog. Reply with a single JSON object, no other text, with keys:
- "slug": URL slug from the English title, lowercase kebab-case, 2-6 words, ASCII only
- "title_en": natural English translation of the title (keep leading source labels like "Science-" or "EJ-" as "Science — " style prefixes; keep numbering like (一) as "(1)")
- "summary_en": English translation of the Chinese summary (or of your generated one), one sentence, keep the author's tone
- "tags_en": array translating each tag to short English tags (keep acronyms as-is)
- "category": exactly one of "essay" (life, feelings, diary-like prose, poems), "research" (academic notes, papers, methods, data, policy analysis), "tech" (site building, tooling, software how-tos)
${post.excerpt ? '' : '- "summary_zh": a one-sentence Chinese summary of the post in the author’s tone (≤30 chars)\n'}`
  const user = `Title: ${post.title}
Tags: ${post.tags.join(', ') || '(none)'}
Summary: ${post.excerpt || '(none — write summary_zh yourself)'}
Post opening (for context only):
${post.body.slice(0, 800)}`
  const { content } = await chat(
    [
      { role: 'system', content: sys },
      { role: 'user', content: user },
    ],
    { response_format: { type: 'json_object' }, temperature: 1.0, max_tokens: 800 },
  )
  const meta = JSON.parse(content)
  if (!meta.slug || !meta.title_en || !CATEGORIES[meta.category])
    throw new Error(`bad metadata: ${content.slice(0, 200)}`)
  meta.slug = meta.slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
  return meta
}

const TRANSLATE_SYS = `You are a professional translator localizing a Chinese personal blog into natural, fluent English. The author's voice ranges from lyrical personal essays to precise academic notes — match the register of each text.

Rules:
- Preserve ALL Markdown structure exactly: headings and their levels, lists, tables, blockquotes, horizontal rules, footnotes, bold/italic.
- Never alter URLs, link targets, image syntax/paths, code blocks, inline code, LaTeX math ($...$, $$...$$), or raw HTML (e.g. <iframe>...). Translate image alt text and link labels only when they are Chinese prose.
- Translate code comments inside code blocks only if they are Chinese; never change the code itself.
- Keep proper nouns idiomatic: institutions, journals and people get their standard English names; cited paper/book titles keep their official English titles when they have one.
- Translate faithfully even where the source seems inconsistent, unusual or erroneous — reproduce it in English as written. Never insert corrections, clarifications, bracketed asides or any other text of your own.
- No commentary, no preamble, no translator's notes. Output ONLY the translated Markdown document.`

async function translateBody(post) {
  // English output can reach ~2 tokens per Chinese source char
  const maxTokens = Math.max(8192, Math.min(200000, post.body.length * 2 + 3000))
  const { content, usage } = await chat(
    [
      { role: 'system', content: TRANSLATE_SYS },
      { role: 'user', content: post.body },
    ],
    { temperature: 1.3, max_tokens: maxTokens },
  )
  return { text: content.trim(), usage }
}

// ---------- output ----------
function renderZh(post, meta) {
  const cat = CATEGORIES[meta.category]
  const lines = [
    '---',
    `title: ${y(post.title)}`,
    `date: ${post.date}`,
    `category: { name: ${y(cat.zh)}, slug: ${meta.category} }`,
    `tags: [${post.tags.map(y).join(', ')}]`,
  ]
  const summary = post.excerpt || meta.summary_zh
  if (summary) lines.push(`summary: ${y(summary)}`)
  if (post.sticky) lines.push('pin: true')
  lines.push('---', '', post.body, '')
  return lines.join('\n')
}

function renderEn(post, meta, bodyEn) {
  const cat = CATEGORIES[meta.category]
  const lines = [
    '---',
    `title: ${y(meta.title_en)}`,
    `date: ${post.date}`,
    `category: { name: ${y(cat.en)}, slug: ${meta.category} }`,
    `tags: [${(meta.tags_en ?? []).map(y).join(', ')}]`,
  ]
  if (meta.summary_en) lines.push(`summary: ${y(meta.summary_en)}`)
  if (post.sticky) lines.push('pin: true')
  lines.push('---', '', bodyEn, '')
  return lines.join('\n')
}

// ---------- main ----------
const manifest = existsSync(MANIFEST)
  ? JSON.parse(await readFile(MANIFEST, 'utf8'))
  : {}
const saveManifest = () =>
  writeFile(MANIFEST, JSON.stringify(manifest, null, 2))

// titles already present in the Astro zh collection (hand-migrated posts)
const existingTitles = new Set()
const usedSlugs = new Set()
for (const f of await readdir(OUT_ZH)) {
  if (!f.endsWith('.md')) continue
  usedSlugs.add(f.replace(/\.md$/, ''))
  const t = (await readFile(path.join(OUT_ZH, f), 'utf8')).match(
    /^title:\s*(.+)$/m,
  )
  if (t) existingTitles.add(unquote(t[1]))
}

let files = (await readdir(SRC_DIR)).filter((f) => f.endsWith('.md')).sort()
if (ONLY.length) files = files.filter((f) => ONLY.includes(f))

const work = []
for (const file of files) {
  const post = parseHexo(await readFile(path.join(SRC_DIR, file), 'utf8'), file)
  if (existingTitles.has(post.title)) {
    if (!manifest[file]) manifest[file] = { status: 'skipped-existing', title: post.title }
    continue
  }
  if (manifest[file]?.status === 'done') continue
  work.push({ file, post })
}
const queue = work.slice(0, LIMIT)
console.log(
  `${files.length} source files; ${Object.values(manifest).filter((m) => m.status === 'skipped-existing').length} already hand-migrated; ${Object.values(manifest).filter((m) => m.status === 'done').length} done previously; processing ${queue.length}${DRY ? ' (dry run)' : ''}`,
)
if (DRY) {
  for (const { file, post } of queue)
    console.log(`- ${file} | ${post.title} | ${post.date} | tags=${post.tags.join(',')}${post.sticky ? ' | PIN' : ''}${post.excerpt ? '' : ' | NO-EXCERPT'}`)
  process.exit(0)
}

await mkdir(OUT_ZH, { recursive: true })
await mkdir(OUT_EN, { recursive: true })

let done = 0
let failed = 0
let tokensIn = 0
let tokensOut = 0

async function processPost({ file, post }) {
  const t0 = Date.now()
  const meta = await getMetadata(post)
  let slug = meta.slug
  for (let n = 2; usedSlugs.has(slug); n++) slug = `${meta.slug}-${n}`
  usedSlugs.add(slug)

  const { text: bodyEn, usage } = await translateBody(post)
  tokensIn += usage?.prompt_tokens ?? 0
  tokensOut += usage?.completion_tokens ?? 0

  await writeFile(path.join(OUT_ZH, `${slug}.md`), renderZh(post, meta))
  await writeFile(path.join(OUT_EN, `${slug}.md`), renderEn(post, meta, bodyEn))
  manifest[file] = {
    status: 'done',
    slug,
    title: post.title,
    title_en: meta.title_en,
    category: meta.category,
    seconds: Math.round((Date.now() - t0) / 1000),
  }
  await saveManifest()
  done++
  console.log(`[${done + failed}/${queue.length}] ✓ ${slug}  (${post.title}, ${manifest[file].seconds}s)`)
}

const iterator = queue[Symbol.iterator]()
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    for (let next = iterator.next(); !next.done; next = iterator.next()) {
      try {
        await processPost(next.value)
      } catch (err) {
        failed++
        manifest[next.value.file] = { status: 'failed', error: String(err.message).slice(0, 300) }
        await saveManifest()
        console.error(`[${done + failed}/${queue.length}] ✗ ${next.value.file}: ${err.message}`)
        if (err.fatal) throw err
      }
    }
  }),
)

console.log(`\nDone: ${done} ok, ${failed} failed. Tokens: ${tokensIn} in / ${tokensOut} out (~$${((tokensIn * 0.435 + tokensOut * 0.87) / 1e6).toFixed(2)})`)
