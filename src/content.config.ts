import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

// Entries live at src/content/<collection>/<locale>/<slug>.md — the id keeps
// the "<locale>/<slug>" shape, which lib/content.ts uses to split locale.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    category: z.object({ name: z.string(), slug: z.string() }),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    pin: z.boolean().default(false),
  }),
})

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    // Sequential id rendered as「№ nid」, mirrors mx-space note nid
    nid: z.number(),
    mood: z.string().optional(),
    weather: z.string().optional(),
    summary: z.string().optional(),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
})

export const collections = { posts, notes, pages }
