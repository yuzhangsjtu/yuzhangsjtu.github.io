// Adapted from @yohaku/design-system scripts/check.ts for this Astro port.
// Validates:
//   1. Every hex in design-system/CHEATSHEET.md matches src/styles/tokens.css
//   2. No src/**/*.astro uses the banned Tailwind neutral-50…950 palette,
//      default text sizes (text-xs/sm/base/lg/xl/…), or hardcoded text-[Npx]
// Known verbatim-from-upstream exceptions are allowlisted below.
import { readdir, readFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const HEX_RE = /#[\da-f]{3,8}\b/i
const BANNED_NEUTRAL_CLASS =
  /\b(?:text|bg|border|ring|fill|stroke|from|to|via)-neutral-(?:50|100|200|300|400|500|600|700|800|900|950)(?:\/[\d.[\]]+)?\b/g
const BANNED_TEXT_SIZE =
  /\btext-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b/g
const BANNED_TEXT_PX = /\btext-\[[\d.]+px\]/g

// Upstream Yohaku app code uses these exact dark-surface classes in the nav
// (HeaderContent.tsx) and dropdown popup — ported verbatim, so tolerated.
const ALLOWLIST = [
  { file: 'src/components/layout/Header.astro', pattern: 'dark:bg-neutral-900' },
  { file: 'src/components/layout/Header.astro', pattern: 'dark:border-neutral-700' },
  { file: 'src/components/layout/LocaleSwitcher.astro', pattern: 'dark:bg-neutral-900' },
  { file: 'src/components/layout/LocaleSwitcher.astro', pattern: 'dark:border-neutral-700' },
]

const errors = []

// ---- 1. cheatsheet ↔ tokens drift -----------------------------------------
const tokensCss = await readFile(join(root, 'src/styles/tokens.css'), 'utf8')
const cheatsheet = await readFile(
  join(root, 'design-system/CHEATSHEET.md'),
  'utf8',
)

const tokens = new Map()
for (const m of tokensCss.matchAll(
  /(--color-[\da-z-]+|--font-[\da-z-]+):\s*([^;]+);/g,
)) {
  const hex = m[2].trim().match(HEX_RE)
  tokens.set(m[1], hex ? hex[0].toLowerCase() : m[2].trim())
}

for (const line of cheatsheet.split('\n')) {
  const trimmed = line.trim()
  if (!trimmed.startsWith('|')) continue
  let varName, hexValue
  for (const cell of trimmed.split('|').map((c) => c.trim())) {
    const v = cell.match(/`(--[\da-z-]+)`/)
    if (v) varName = v[1]
    const h = cell.match(/`(#[\da-f]{3,8})`/i)
    if (h) hexValue = h[1].toLowerCase()
  }
  if (!varName || !hexValue) continue
  const actual = tokens.get(varName)
  if (actual && actual !== hexValue) {
    errors.push(
      `cheatsheet drift: ${varName} is ${hexValue} in CHEATSHEET.md but ${actual} in tokens.css`,
    )
  }
}

// ---- 2. banned patterns in src --------------------------------------------
async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else yield p
  }
}

const isAllowed = (rel, snippet) =>
  ALLOWLIST.some((a) => rel === a.file && snippet.includes(a.pattern))

for await (const file of walk(join(root, 'src'))) {
  if (!/\.(astro|tsx?|css)$/.test(file)) continue
  if (file.includes('/styles/')) continue // upstream CSS is verbatim
  const rel = relative(root, file)
  const content = await readFile(file, 'utf8')
  const lines = content.split('\n')
  lines.forEach((line, i) => {
    for (const re of [BANNED_NEUTRAL_CLASS, BANNED_TEXT_SIZE, BANNED_TEXT_PX]) {
      re.lastIndex = 0
      for (const m of line.matchAll(re)) {
        const ctx = line.slice(
          Math.max(0, m.index - 8),
          m.index + m[0].length + 8,
        )
        if (isAllowed(rel, ctx) || isAllowed(rel, m[0])) continue
        errors.push(`${rel}:${i + 1} banned class \`${m[0]}\``)
      }
    }
  })
}

if (errors.length) {
  console.error(`design check failed (${errors.length}):\n`)
  for (const e of errors) console.error('  ✗', e)
  process.exit(1)
}
console.log('design check passed ✓')
