// Minimal next-intl replacement: same message catalogs, same key shape,
// same `{param}` interpolation — but resolved statically at build time.
import enCommon from './messages/en/common.json'
import enDatetime from './messages/en/datetime.json'
import enError from './messages/en/error.json'
import enFriends from './messages/en/friends.json'
import enHome from './messages/en/home.json'
import enNote from './messages/en/note.json'
import enProjects from './messages/en/projects.json'
import enPost from './messages/en/post.json'
import zhCommon from './messages/zh/common.json'
import zhDatetime from './messages/zh/datetime.json'
import zhError from './messages/zh/error.json'
import zhFriends from './messages/zh/friends.json'
import zhHome from './messages/zh/home.json'
import zhNote from './messages/zh/note.json'
import zhProjects from './messages/zh/projects.json'
import zhPost from './messages/zh/post.json'

import type { Locale } from './config'
import { defaultLocale, locales } from './config'

export { defaultLocale, locales }
export type { Locale }

const catalogs = {
  zh: {
    common: zhCommon,
    datetime: zhDatetime,
    error: zhError,
    friends: zhFriends,
    home: zhHome,
    note: zhNote,
    post: zhPost,
    projects: zhProjects,
  },
  en: {
    common: enCommon,
    datetime: enDatetime,
    error: enError,
    friends: enFriends,
    home: enHome,
    note: enNote,
    post: enPost,
    projects: enProjects,
  },
} as const

export type Namespace = keyof (typeof catalogs)['zh']

type Params = Record<string, string | number>

const interpolate = (template: string, params?: Params) =>
  params
    ? template.replaceAll(/\{(\w+)\}/g, (match, name: string) =>
        name in params ? String(params[name]) : match,
      )
    : template

export const useTranslations = (locale: Locale, namespace: Namespace) => {
  const table: Record<string, unknown> = catalogs[locale][namespace]
  const fallback: Record<string, unknown> = catalogs[defaultLocale][namespace]
  return (key: string, params?: Params): string => {
    const raw = table[key] ?? fallback[key]
    if (typeof raw !== 'string') return key
    return interpolate(raw, params)
  }
}

/** zh (default) is unprefixed; en lives under /en — next-intl `as-needed`. */
export const localizePath = (locale: Locale, path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return locale === defaultLocale ? normalized : `/${locale}${normalized}`
}

export const getLocaleFromPath = (pathname: string): Locale => {
  const seg = pathname.split('/')[1]
  return (locales as readonly string[]).includes(seg!) && seg !== defaultLocale
    ? (seg as Locale)
    : defaultLocale
}

/** Strip the locale prefix from a pathname (for the locale switcher). */
export const unlocalizePath = (pathname: string): string => {
  for (const l of locales) {
    if (l === defaultLocale) continue
    if (pathname === `/${l}`) return '/'
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1)
  }
  return pathname
}
