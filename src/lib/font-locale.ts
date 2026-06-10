// Ported from apps/web/src/lib/font-locale.ts (Yohaku), narrowed to zh/en.
// next/font CSS variables are replaced by @fontsource families declared in
// src/styles/fonts.css (--app-font-sans, --app-font-serif-sc).
import type { Locale } from '~/i18n/config'

const sansFontStacks: Record<Locale, string> = {
  zh: [
    "'MiSans'",
    'system-ui',
    '-apple-system',
    "'PingFang SC'",
    "'Microsoft YaHei'",
    "'Segoe UI'",
    'Roboto',
    'Helvetica',
    "'Noto Sans SC'",
    "'Hiragino Sans GB'",
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Not Color Emoji',
  ].join(', '),
  en: [
    'system-ui',
    '-apple-system',
    "'Segoe UI'",
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Not Color Emoji',
  ].join(', '),
}

const serifFontStacks: Record<Locale, string> = {
  zh: [
    'var(--app-font-serif-sc)',
    "'Noto Serif CJK SC'",
    "'Noto Serif SC'",
    "'Source Han Serif SC'",
    "'Source Han Serif'",
    'source-han-serif-sc',
    "'SongTi SC'",
    'SimSun',
    'serif',
  ].join(', '),
  // English serif: avoid pulling in the Noto Serif SC unicode-range chunks. CJK
  // glyphs in English copy are negligible; system serif is fine.
  en: ['Georgia', "'Times New Roman'", 'serif'].join(', '),
}

export const getLocaleFontStyle = (locale: Locale) =>
  `--app-font-sans-cjk: ${sansFontStacks[locale]}; --app-font-serif: ${serifFontStacks[locale]};`
