// Static replacement for the mx-space aggregation/theme config payload.
// Identity ported from yuzhang.net (Yu's Space).
import type { Locale } from '~/i18n/config'

export interface HeroTitleNode {
  type?: string // 'br' for line break, otherwise an inline tag name
  text?: string
  class?: string
}

interface LocalizedSiteStrings {
  seo: { title: string; description: string }
  hero: {
    title: { template: HeroTitleNode[] }
    description: string
    hitokoto?: { custom?: string; random?: boolean }
  }
}

export const siteConfig = {
  url: 'https://yuzhangsjtu.github.io',
  user: {
    name: 'Zhang Yu',
    avatar: '/avatar.png',
    socialIds: {
      github: 'yuzhangnju',
      mail: 'yuzhangsjtu@sjtu.edu.cn',
      // QR-popover entries: the value is the QR image path, not a profile id.
      wechat: '/images/wechat-qr.jpg',
      wechatMp: '/images/wechat-mp-qr.png',
      bilibili: '34994155',
    } as Record<string, string>,
  },
  footer: {
    otherInfo: {
      date: '2020-{{now}}',
      icp: null as { text: string; link: string } | null,
    },
  },
  // 本站第一篇「关于」落款 2020.3.28 — used by the hero "days" counter.
  firstPublishDate: '2020-03-28',
} as const

export const localizedSite: Record<Locale, LocalizedSiteStrings> = {
  zh: {
    seo: {
      title: "Yu's Space",
      description:
        '在这里，我会不定期发布一些文章，有时候是经过整理的文本，有时候是碎碎念、呓语。',
    },
    hero: {
      title: {
        template: [
          { type: 'span', text: '你好，我是' },
          { type: 'br' },
          { type: 'b', text: 'Zhang Yu' },
          { type: 'span', text: '。' },
        ],
      },
      description: 'AN EXPERT IN DOING NOTHING',
      hitokoto: {
        custom: '前天看到了小兔子，昨天是小鹿，今天是你。',
      },
    },
  },
  en: {
    seo: {
      title: "Yu's Space",
      description:
        'Essays posted now and then — sometimes polished writing, sometimes murmurs and musings.',
    },
    hero: {
      title: {
        template: [
          { type: 'span', text: "Hi, I'm" },
          { type: 'br' },
          { type: 'b', text: 'Zhang Yu' },
          { type: 'span', text: '.' },
        ],
      },
      description: 'AN EXPERT IN DOING NOTHING',
      hitokoto: {
        custom:
          'The day before yesterday I saw a rabbit, yesterday a deer, and today, you.',
      },
    },
  },
}
