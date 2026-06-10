// Inline-in-<head> replacement for next-themes (attribute: data-theme,
// storageKey: 'theme', enableSystem, color-scheme sync). Must run before
// first paint to avoid a flash of the wrong theme.
;(function () {
  var storageKey = 'theme'
  var el = document.documentElement
  var media = window.matchMedia('(prefers-color-scheme: dark)')

  function systemTheme() {
    return media.matches ? 'dark' : 'light'
  }

  function getTheme() {
    try {
      return localStorage.getItem(storageKey) || 'system'
    } catch (e) {
      return 'system'
    }
  }

  function apply(theme) {
    var resolved = theme === 'system' ? systemTheme() : theme
    el.setAttribute('data-theme', resolved)
    el.style.colorScheme = resolved
  }

  apply(getTheme())

  window.__theme = {
    get: getTheme,
    set: function (theme) {
      try {
        localStorage.setItem(storageKey, theme)
      } catch (e) {
        /* noop */
      }
      apply(theme)
      window.dispatchEvent(
        new CustomEvent('themechange', { detail: { theme } }),
      )
    },
  }

  media.addEventListener('change', function () {
    if (getTheme() === 'system') apply('system')
  })
})()
