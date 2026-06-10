// Ported from yuzhang.net/links/ — avatars mirrored under
// public/images/friends/.
export interface FriendLink {
  name: string
  url: string
  avatar?: string
  description?: string
}

export const friends: FriendLink[] = [
  {
    name: 'Panwang Yuang',
    url: 'https://pwya.github.io/',
    avatar: '/images/friends/panwang-yuang.jpg',
    description: '熟练的数据工人',
  },
  {
    name: 'Yifei (Frank) Zhu',
    url: 'https://sites.google.com/view/frank-yifei/about',
    avatar: '/images/friends/yifei-zhu.jpeg',
    description:
      '朱逸飞是香港大学政治与公共行政系的政治学博士生，使用因果推断与大数据研究中国的官僚治理与分配政治',
  },
  {
    name: 'Shutter Zor',
    url: 'https://shutterzor.cn/',
    avatar: '/images/friends/shutter-zor.jpg',
    description: '致力于分享开箱即用的Stata与Python学术公共品',
  },
  {
    name: '吃白饭的休伯利安号',
    url: 'https://www.eatrice.cn/',
    avatar: '/images/friends/eatrice.jpg',
    description: '用电脑搬砖的土木工程师',
  },
  {
    name: 'Yongye (Gary) LIU',
    url: 'https://sites.google.com/view/yongye-liu/about-me',
    avatar: '/images/friends/yongye-liu.jpeg',
    description: '社会学里最会画画的人',
  },
  {
    name: 'Zhiren Hu',
    url: 'https://sites.google.com/view/zhiren-hu/about-me',
    avatar: '/images/friends/zhiren-hu.jpeg',
    description: '非常Strong的胡司令',
  },
  {
    name: 'Yufeng Xia',
    url: 'https://sites.google.com/view/yufengxia/home',
    avatar: '/images/friends/yufeng-xia.jpeg',
    description:
      'A Ph.D. student @BUQuestrom interested in strategy, innovation and entrepreneurship',
  },
  {
    name: 'FGZ',
    url: 'https://fgzfgz.github.io/',
    avatar: '/images/friends/fgz.png',
    description: '致力于代码公开的学术大杂烩网站',
  },
  {
    name: '鸭哥',
    url: 'https://yage.ai/',
    avatar: '/images/friends/yage.jpg',
    description: 'An AI-related blog',
  },
  {
    name: '西门美月匈XD',
    url: 'https://xmmxovo.online/',
    avatar: '/images/friends/ximen.png',
    description: '一定会成为一个很棒的大人！',
  },
]
