// @ts-check
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
  site: 'https://yuzhangsjtu.github.io',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    routing: {
      // Mirrors next-intl `localePrefix: 'as-needed'` — zh has no prefix, /en/* is prefixed.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    // Imported .css must go through PostCSS (postcss.config.cjs →
    // @tailwindcss/postcss); Astro's lightningcss path would silently drop
    // Tailwind v4 at-rules (@theme/@source/@custom-variant).
    css: { transformer: 'postcss' },
  },
})
