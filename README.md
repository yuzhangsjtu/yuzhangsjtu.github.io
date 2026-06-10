# 余白 / Yohaku — Astro 版

[余白 / Yohaku](https://github.com/Innei/Yohaku) 主题（Next.js 16 + mx-space）的 Astro 静态站移植。

主题样式、布局、字体、黑夜模式与中英双语全部沿用原项目代码；依赖 mx-space 后端的功能已移除，内容由 Astro content collections 驱动。

## 命令

```sh
pnpm install
pnpm dev       # 开发（localhost:4321）
pnpm build     # 静态构建到 dist/
pnpm preview   # 预览构建产物
```

## 从原项目原样保留的部分

| 内容 | 来源 |
| --- | --- |
| 设计 tokens（色阶/字阶/字体栈/`@custom-variant dark`） | `packages/design-system/src/tokens.css` → `src/styles/tokens.css` |
| 全部主题 CSS（纸张噪点、页面光晕、时间轴、滚动条、动画、打印…） | `apps/web/src/styles/*` → `src/styles/*`（原文件逐个拷贝） |
| 暗色机制：`<html data-theme>` + localStorage `theme` + 系统跟随 + 切换时的 `turnOn/turnOff` 视图过渡 | next-themes 行为 + `lib/dom.ts` → `src/scripts/theme-init.js` / `view-transition.ts` |
| 动态 accent：五对日本传统色随机取一对，OKLCH 注入 `--color-accent` 与 `--color-root-bg` | `AccentColorStyleInjector` + `lib/accent-color.ts` → `src/lib/accent-color.ts`（构建时生成） |
| 页面光晕（seed 驱动 hue） | `PageColorGradient` + `lib/glow.server.ts` → 同名组件/库 |
| 布局：AppShell / Header（桌面浮动导航 + 锚点定位 active pill + 移动端展开菜单）/ Footer / 容器 / 信纸 Paper（毛边 + 3D 纸叠） | 对应 React 组件逐一转为 `.astro`，class 与 DOM 结构保持一致 |
| 字体：Instrument Sans + Noto Serif SC（@fontsource 自托管），zh 非 Apple 端按需加载 MiSans（jsdelivr），per-locale 字体栈 | `lib/fonts.ts` / `font-locale.ts` / `MiSansLoader` |
| i18n：next-intl 的 zh/en 消息目录原样拷贝（common/home/post/note/friends/datetime/error），路由 zh 无前缀、`/en` 有前缀 | `src/i18n/`，`useTranslations(locale, ns)` 同名 API |
| 页面：首页（Hero/近期笔墨/年度时间轴）、文稿列表+详情、手记列表+详情、时间线、朋友们、独立页、404 撕纸便笺 | 对应页面组件逐一移植 |
| 相对时间、时间轴渐显（IntersectionObserver stagger）等交互 | 原 hooks 逻辑移植为少量原生 JS |

## 移除的后端功能

评论、阅读/点赞计数、实时在线（Socket.IO）、登录/鉴权、搜索、说说/思考、订阅、Activity 状态、OG 图生成、管理后台入口。季节性 canvas 粒子背景（樱花/紫藤/雪/萤火虫）为 React+shader 子系统，本次未移植（如需可作为 React island 原样接入）。

## 内容写作

```
src/content/
├── posts/{zh,en}/<slug>.md   # 文稿：title/date/category{name,slug}/tags/summary/pin
├── notes/{zh,en}/<slug>.md   # 手记：title/date/nid/mood/weather/summary
└── pages/{zh,en}/<slug>.md   # 独立页：title/subtitle
```

站点信息（标题、头像、社交、Hero 文案、备案等）在 `src/site.config.ts`；友链在 `src/data/friends.ts`。

## 设计契约（design-system/）

`design-system/` 收录了上游公开设计仓库的契约文档：`CHEATSHEET.md`（一页速查：色阶三层制、字阶 role+px、间距/圆角/毛玻璃决策表）、`references/`（tokens/排版/组件/反模式全规格）、`templates/`（已合规的 HTML 片段起手式）。改样式或新增页面前先扫一眼速查表。

```sh
pnpm check   # 校验 cheatsheet ↔ tokens.css 无漂移；src 内无被禁类
             # （neutral-50…950、text-xs/sm/…、text-[Npx]）
```

上游应用代码自带的两处例外（导航暗色表面的 dark:bg-neutral-900 等）已在 scripts/check-design.mjs 里列入白名单。

## 两个工程化注意点

1. **不要把任何样式文件命名为 `tailwindcss.css`**：vite 的 CSS resolver 相对路径优先，`@import "tailwindcss"` 会解析到同目录同名文件造成自引用循环（构建 OOM/EMFILE）。本仓库已改名 `main.css`。
2. **`vite.css.transformer` 必须是 `'postcss'`**（已在 `astro.config.mjs` 固定）：lightningcss 路径会静默丢弃 Tailwind v4 的 `@theme/@source/@custom-variant`。
