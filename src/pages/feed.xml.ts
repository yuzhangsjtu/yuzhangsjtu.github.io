import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'

import { getPosts, postPath } from '~/lib/content'
import { localizedSite, siteConfig } from '~/site.config'

export const GET: APIRoute = async (context) => {
  const posts = await getPosts('zh')
  return rss({
    title: localizedSite.zh.seo.title,
    description: localizedSite.zh.seo.description,
    site: context.site ?? siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: postPath(post),
    })),
    customData: `<language>zh-CN</language><generator>Yohaku</generator>`,
  })
}
