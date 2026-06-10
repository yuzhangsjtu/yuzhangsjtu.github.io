// Static replacement for apiClient.project.getAll() — edit freely.
// Prefilled from yuzhang.net's own work; descriptions are guesses where the
// source post didn't state one — adjust as you like.
export interface ProjectItem {
  name: string
  description?: string
  projectUrl?: string
  createdAt?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'HIBL',
    description: '人类有趣行为实验室：分享有趣的社会科学研究与论文导读',
    projectUrl:
      'https://yuzhang.net/2024/01/18/20240118-Introduction%20of%20HIBL/',
    createdAt: '2024-01-18',
  },
  {
    name: 'AAAR',
    description: 'AI 加速学术研究（AI Accelerated Academic Research）：常用提示词集合',
    projectUrl:
      'https://yuzhang.net/2024/06/05/20240605-AAAR-AI%E5%8A%A0%E9%80%9F%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6/',
    createdAt: '2024-06-05',
  },
  {
    name: "Yu's Space",
    description: '个人博客：Hexo + Fluid，现已迁移至 Astro + Yohaku',
    projectUrl: 'https://yuzhang.net',
    createdAt: '2020-03-28',
  },
]
