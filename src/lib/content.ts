// Content-collection accessors replacing the mx-space apiClient calls.
// Entries are stored as <locale>/<slug> ids; these helpers split that and
// expose post/note shapes close to the original models.
import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

import type { Locale } from '~/i18n/config'

export type PostEntry = CollectionEntry<'posts'>
export type NoteEntry = CollectionEntry<'notes'>
export type PageEntry = CollectionEntry<'pages'>

const localeOf = (id: string) => id.split('/')[0] as Locale
export const slugOf = (id: string) => id.split('/').slice(1).join('/')

const byDateDesc = (
  a: { data: { date: Date } },
  b: { data: { date: Date } },
) => b.data.date.getTime() - a.data.date.getTime()

export const getPosts = async (locale: Locale): Promise<PostEntry[]> =>
  (await getCollection('posts', (e) => localeOf(e.id) === locale)).sort(
    byDateDesc,
  )

export const getNotes = async (locale: Locale): Promise<NoteEntry[]> =>
  (await getCollection('notes', (e) => localeOf(e.id) === locale)).sort(
    byDateDesc,
  )

export const getPages = async (locale: Locale): Promise<PageEntry[]> =>
  await getCollection('pages', (e) => localeOf(e.id) === locale)

export const postPath = (post: PostEntry) =>
  `/posts/${post.data.category.slug}/${slugOf(post.id)}`

export const notePath = (note: NoteEntry) => `/notes/${note.data.nid}`

// Rough CJK-aware word count for the hero stats (replaces the backend
// site_info.totalWordCount aggregate).
export const countWords = (text: string) => {
  const cjk = text.match(/[぀-ヿ一-鿿가-힯]/g)?.length ?? 0
  const latinWords =
    text
      .replaceAll(/[぀-ヿ一-鿿가-힯]/g, ' ')
      .split(/\s+/)
      .filter(Boolean).length ?? 0
  return cjk + latinWords
}
