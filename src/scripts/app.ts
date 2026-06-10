// Client-side behaviors ported from the original React providers/components:
// header scroll opacity + float-in, mobile menu, relative time, MiSans loader.

import { transitionViewIfSupported } from './view-transition'

/* ------------------------------------------------------------------ *
 * Header scroll behavior
 * Ported thresholds from header/internal/hooks.ts:
 *   threshold = 84 + 63 + 50 = 197, distance = 50
 *   menuOpacity = 1 - headerBgOpacity
 * Float-in (HeaderContent.tsx): scroll up while pageY > 600 → solid bar
 * slides in from y=-20; otherwise opacity is scroll-driven.
 * ------------------------------------------------------------------ */
const setupHeader = () => {
  const portal = document.getElementById('header-nav-portal')
  const navRoot = document.getElementById('header-nav-root')
  const logoArea = document.getElementById('header-logo-area')
  if (!portal || !navRoot) return

  // Pages that keep the nav permanently visible set data-header-fade="false"
  // (mirrors useSetHeaderShouldShowBg(false) on post list/detail pages).
  const fadeMode = document.body.dataset.headerFade !== 'false'

  const threshold = 84 + 63 + 50
  const distance = 50

  const headerBgOpacity = (y: number) => {
    if (y < threshold) return 0
    return y >= distance + threshold
      ? 1
      : Math.floor(((y - threshold) / distance) * 100) / 100
  }

  let prevY = 0
  let floatRaw = false
  let shouldFloat = false
  let floatTimer: ReturnType<typeof setTimeout> | undefined

  const sync = () => {
    const y = window.scrollY
    const isScrollUp = y < prevY
    prevY = y

    floatRaw = isScrollUp && y > 600
    const next = fadeMode && floatRaw
    if (next !== shouldFloat) {
      clearTimeout(floatTimer)
      // useDebounceValue(…, 120)
      floatTimer = setTimeout(() => {
        shouldFloat = next
        render(y)
      }, 120)
    }
    render(y)
  }

  const render = (y: number) => {
    const menuOpacity = 1 - headerBgOpacity(y)
    const scrolledPast = y > 160
    const solid = shouldFloat || (!fadeMode && scrolledPast)

    if (shouldFloat) {
      portal.style.opacity = '1'
      portal.style.transform = 'translateY(0)'
      portal.classList.add('is-float')
    } else {
      portal.style.opacity = String(fadeMode ? menuOpacity : 1)
      portal.style.transform = 'translateY(0)'
      portal.classList.remove('is-float')
    }
    navRoot.classList.toggle('nav-solid', solid)

    if (logoArea) {
      logoArea.style.opacity = String(1 - headerBgOpacity(y))
    }

    const mobile = document.getElementById('mobile-header')
    if (mobile) {
      const isOpen = mobile.dataset.open === 'true'
      const isScrollUpAndOver = floatRaw && y > 300
      const shouldShow = menuOpacity > 0 || isOpen || isScrollUpAndOver
      mobile.style.opacity = shouldShow ? '1' : '0'
      mobile.style.transform = shouldShow ? 'translateY(0)' : 'translateY(-6px)'
      mobile.classList.toggle('pointer-events-none', !shouldShow)
    }
  }

  window.addEventListener('scroll', sync, { passive: true })
  sync()
}

/* ------------------------------------------------------------------ *
 * Mobile header expandable menu (MobileHeader.tsx)
 * ------------------------------------------------------------------ */
const setupMobileMenu = () => {
  const mobile = document.getElementById('mobile-header')
  const toggle = document.getElementById('mobile-header-toggle')
  const panel = document.getElementById('mobile-header-panel')
  if (!mobile || !toggle || !panel) return

  const close = () => {
    mobile.dataset.open = 'false'
    toggle.setAttribute('aria-expanded', 'false')
    panel.style.height = '0px'
    panel.style.opacity = '0'
    document.body.style.overflow = ''
  }
  const open = () => {
    mobile.dataset.open = 'true'
    toggle.setAttribute('aria-expanded', 'true')
    panel.style.height = `${panel.scrollHeight}px`
    panel.style.opacity = '1'
    document.body.style.overflow = 'hidden'
  }

  toggle.addEventListener('click', () => {
    mobile.dataset.open === 'true' ? close() : open()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobile.dataset.open === 'true') close()
  })
}

/* ------------------------------------------------------------------ *
 * Theme switcher (FooterThemeSwitcher.tsx) — light · system · dark text
 * buttons, switched inside a root view transition (turnOn/turnOff
 * keyframes in variables.css).
 * ------------------------------------------------------------------ */
const setupThemeSwitcher = () => {
  const containers = document.querySelectorAll<HTMLElement>(
    '[data-theme-switcher]',
  )
  if (!containers.length) return

  const activeClass =
    'text-neutral-8 underline decoration-current/30 underline-offset-2'
  const inactiveClass =
    'text-neutral-6 transition-colors duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-8'

  const renderAll = () => {
    const theme = window.__theme?.get() ?? 'system'
    for (const container of containers) {
      for (const btn of container.querySelectorAll<HTMLButtonElement>(
        'button[data-theme-value]',
      )) {
        btn.className =
          btn.dataset.themeValue === theme ? activeClass : inactiveClass
      }
    }
  }

  for (const container of containers) {
    container.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(
        'button[data-theme-value]',
      )
      if (!btn) return
      const value = btn.dataset.themeValue!
      transitionViewIfSupported(
        () => {
          window.__theme?.set(value)
          renderAll()
        },
        { rootAnimation: true },
      )
    })
  }
  renderAll()
  window.addEventListener('themechange', renderAll)
}

/* ------------------------------------------------------------------ *
 * Locale switcher dropdown (LocaleSwitcher + LanguageSelector)
 * ------------------------------------------------------------------ */
const setupLocaleSwitcher = () => {
  for (const root of document.querySelectorAll<HTMLElement>(
    '[data-locale-switcher]',
  )) {
    const trigger = root.querySelector<HTMLButtonElement>('button')
    const menu = root.querySelector<HTMLElement>('[data-locale-menu]')
    if (!trigger || !menu) continue

    const hide = () => {
      menu.classList.add('hidden')
      trigger.removeAttribute('data-popup-open')
    }
    trigger.addEventListener('click', (e) => {
      e.stopPropagation()
      const isHidden = menu.classList.contains('hidden')
      if (isHidden) {
        menu.classList.remove('hidden')
        trigger.setAttribute('data-popup-open', '')
      } else hide()
    })
    document.addEventListener('click', hide)
  }
}

/* ------------------------------------------------------------------ *
 * RelativeTime (ui/relative-time + use-relative-time.ts) — hydrates
 * <time data-relative-time datetime="…"> with the same thresholds and
 * datetime.json messages; falls back to an absolute long date after 29
 * days, exactly like displayAbsoluteTimeAfterDay.
 * ------------------------------------------------------------------ */
interface DatetimeMessages {
  relative_justNow: string
  relative_secondsAgo: string
  relative_minutesAgo: string
  relative_hoursAgo: string
  relative_daysAgo: string
  relative_monthsAgo: string
  relative_yearsAgo: string
}

const setupRelativeTime = () => {
  const el = document.getElementById('datetime-messages')
  if (!el) return
  const messages: DatetimeMessages = JSON.parse(el.textContent || '{}')
  const lang = document.documentElement.lang || 'zh'
  const interpolate = (tpl: string, count: number) =>
    tpl.replaceAll('{count}', String(count))

  const relativeTimeFromNow = (time: Date, current = new Date()) => {
    const msPerMinute = 60 * 1000
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerMonth = msPerDay * 30
    const msPerYear = msPerDay * 365

    const elapsed = +current - +time

    if (elapsed < msPerMinute) {
      const gap = Math.ceil(elapsed / 1000)
      return gap <= 0
        ? messages.relative_justNow
        : interpolate(messages.relative_secondsAgo, gap)
    } else if (elapsed < msPerHour) {
      return interpolate(
        messages.relative_minutesAgo,
        Math.round(elapsed / msPerMinute),
      )
    } else if (elapsed < msPerDay) {
      return interpolate(
        messages.relative_hoursAgo,
        Math.round(elapsed / msPerHour),
      )
    } else if (elapsed < msPerMonth) {
      return interpolate(
        messages.relative_daysAgo,
        Math.round(elapsed / msPerDay),
      )
    } else if (elapsed < msPerYear) {
      return interpolate(
        messages.relative_monthsAgo,
        Math.round(elapsed / msPerMonth),
      )
    }
    return interpolate(
      messages.relative_yearsAgo,
      Math.round(elapsed / msPerYear),
    )
  }

  const formatTime = (date: Date, relativeBeforeDay = 29) => {
    const daysDiff = Math.abs(
      Math.floor((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
    )
    if (daysDiff > relativeBeforeDay) {
      return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : lang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }).format(date)
    }
    return relativeTimeFromNow(date)
  }

  const tick = () => {
    for (const t of document.querySelectorAll<HTMLTimeElement>(
      'time[data-relative-time]',
    )) {
      const date = new Date(t.dateTime)
      if (!Number.isNaN(+date)) t.textContent = formatTime(date)
    }
  }
  tick()
  setInterval(tick, 1000)
}

/* ------------------------------------------------------------------ *
 * MiSansLoader.tsx — load MiSans webfont for zh on non-Apple systems.
 * ------------------------------------------------------------------ */
const setupMiSans = () => {
  const locale = document.documentElement.lang
  if (locale !== 'zh' && locale !== 'zh-TW') return
  if (/Macintosh|Mac OS X|iPhone|iPad|iPod/.test(navigator.userAgent)) return
  if (document.querySelector(`link[data-font="misans"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/fonts/misans.css'
  link.dataset.font = 'misans'
  document.head.appendChild(link)
}

setupHeader()
setupMobileMenu()
setupThemeSwitcher()
setupLocaleSwitcher()
setupRelativeTime()
setupMiSans()
