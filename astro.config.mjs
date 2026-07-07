// @ts-check
import { unified } from '@astrojs/markdown-remark'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
  site: 'https://yuzhangsjtu.github.io',
  integrations: [sitemap()],
  // v7 defaults to 'jsx' whitespace rules, which drop the space between
  // adjacent inline elements — keep HTML-rule compression.
  compressHTML: true,
  markdown: {
    // v7's default Sätteri processor doesn't run remark/rehype plugins —
    // keep the unified pipeline for KaTeX math.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
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
    // Tailwind must consume its at-rules (@theme/@source/@custom-variant)
    // before Vite's own CSS pipeline sees them — rolldown-vite's built-in
    // postcss-import can't resolve `@import 'tailwindcss'`.
    plugins: [tailwindcss()],
  },
})
