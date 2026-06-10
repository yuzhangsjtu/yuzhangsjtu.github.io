// Ported verbatim from apps/web/src/lib/accent-color.ts (Yohaku),
// minus the 'server-only' marker — in Astro this runs at build time.
import chroma from 'chroma-js'
import Color from 'colorjs.io'

/**
 * 将十六进制颜色转换为OKLCH字符串
 */
const hexToOklchString = (hex: string) => new Color(hex).oklch

/**
 * 默认背景色
 */
const DEFAULT_BACKGROUNDS = {
  light: '#fefefb',
  dark: 'rgb(28, 28, 30)',
} as const

/**
 * 颜色样式生成配置
 */
interface AccentColorStyleConfig {
  /** 主题颜色映射 */
  colors: {
    light: string
    dark: string
  }
  /** 自定义根背景混合比例 */
  mixRatio?: {
    light: number
    dark: number
  }
  /** 是否使用themed类选择器 */
  useThemedClass?: boolean
}

/**
 * 生成主题色相关的CSS样式
 */
export async function generateAccentColorStyle(
  config: AccentColorStyleConfig,
): Promise<string> {
  const {
    colors,
    useThemedClass = false,
    mixRatio = { light: 0.004, dark: 0.002 },
  } = config

  const lightOklch = hexToOklchString(colors.light)
  const darkOklch = hexToOklchString(colors.dark)

  const [hl, sl, ll] = lightOklch
  const [hd, sd, ld] = darkOklch

  let cssContent = ''

  const lightRootBg = chroma
    .mix(DEFAULT_BACKGROUNDS.light, colors.light, mixRatio.light, 'rgb')
    .hex()
  const darkRootBg = chroma
    .mix(DEFAULT_BACKGROUNDS.dark, colors.dark, mixRatio.dark, 'rgb')
    .hex()

  const themeSelector = useThemedClass ? 'html.themed' : 'html'
  cssContent += `
        ${themeSelector}[data-theme='light'], .rich-content[data-theme='light'] {
          --color-accent: oklch(${hl} ${sl} ${ll});
        }
        ${themeSelector}[data-theme='dark'], .rich-content[data-theme='dark'] {
          --color-accent: oklch(${hd} ${sd} ${ld});
        }`

  if (useThemedClass) {
    cssContent += `
        html.themed[data-theme='light'] {
          --color-root-bg: ${lightRootBg};
        }
        html.themed[data-theme='dark'] {
          --color-root-bg: ${darkRootBg};
        }`
  } else {
    cssContent += `
        :root[data-theme='light'] {
          --color-root-bg: ${lightRootBg};
        }
        :root[data-theme='dark'] {
          --color-root-bg: ${darkRootBg};
        }`
  }

  return cssContent
}

/**
 * 单色主题样式生成（用于页面级别的颜色覆盖）
 */
export async function generateSingleColorStyle(
  color: string,
  options: {
    useThemedClass?: boolean
    mixRatio?: { light: number; dark: number }
  } = {},
): Promise<string> {
  return generateAccentColorStyle({
    colors: {
      light: color,
      dark: color,
    },
    ...options,
  })
}

// Ported from AccentColorStyleInjector.tsx — the five paired Japanese
// traditional colors the original randomly picks from per render.
export const accentColorLight = [
  // 梅 ume — rose red (primary)
  '#C56473',
  // 江戸紫 edomurasaki — purple-blue
  '#745399',
  // 鶯色 uguisuiro — olive
  '#76712C',
  // 代赭 taisha — burnt sienna
  '#9C5728',
  // 金茶 kincha — golden orange
  '#C87833',
]
export const accentColorDark = [
  // 梅淡 — light ume
  '#E095A4',
  // 江戸紫淡 — light edomurasaki
  '#A088BB',
  // 鶯色淡 — light uguisuiro
  '#ACA559',
  // 代赭淡 — light taisha
  '#C7864F',
  // 金茶淡 — light kincha
  '#E2A06A',
]

export async function buildAccentColorStyleTag(): Promise<string> {
  const Length = Math.max(accentColorLight.length, accentColorDark.length)
  const randomSeedRef = (Math.random() * Length) | 0
  const currentAccentColorLRef = accentColorLight[randomSeedRef]!
  const currentAccentColorDRef = accentColorDark[randomSeedRef]!

  const cssContent = await generateAccentColorStyle({
    colors: {
      light: currentAccentColorLRef,
      dark: currentAccentColorDRef,
    },
    useThemedClass: false,
  })

  return cssContent
}
