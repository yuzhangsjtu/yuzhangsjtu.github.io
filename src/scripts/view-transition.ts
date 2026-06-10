// Ported from apps/web/src/lib/dom.ts — transitionViewIfSupported.
export const transitionViewIfSupported = (
  updateCb: () => void,
  options: { rootAnimation?: boolean } = {},
) => {
  if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
    updateCb()
    return
  }
  if (!document.startViewTransition) {
    updateCb()
    return
  }
  if (!options.rootAnimation) {
    document.startViewTransition(updateCb)
    return
  }
  document.documentElement.dataset.vtRoot = ''
  const t = document.startViewTransition(updateCb)
  t.finished.finally(() => {
    delete document.documentElement.dataset.vtRoot
  })
}

declare global {
  interface Window {
    __theme?: {
      get: () => string
      set: (theme: string) => void
    }
    version?: string
  }
}
