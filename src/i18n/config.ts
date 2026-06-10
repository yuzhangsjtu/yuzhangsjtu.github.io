// Mirrors apps/web/src/i18n/config.ts, narrowed to zh/en.
export const locales = ['zh', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'zh'
export const defaultTimeZone = 'Asia/Shanghai'
