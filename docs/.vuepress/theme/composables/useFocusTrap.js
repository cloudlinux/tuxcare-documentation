const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

// True when the element is rendered and not inside an inert subtree,
// so calling focus() on it will actually move focus.
export const canFocus = (el) =>
    !!el && el.isConnected && el.getClientRects().length > 0 && !el.closest('[inert]')

export const getFocusable = (container) =>
    [...container.querySelectorAll(FOCUSABLE)]
        .filter(el => el.offsetParent !== null || getComputedStyle(el).position === 'fixed')

/**
 * Keep Tab / Shift+Tab inside a modal container.
 * @param containerRef ref to the dialog element
 * @param isActive optional getter; the trap does nothing while it returns false
 * @returns keydown.tab handler for the container
 */
export function useFocusTrap(containerRef, isActive = () => true) {
  return (event) => {
    const container = containerRef.value
    if (!isActive() || !container) return
    const focusable = getFocusable(container)
    if (!focusable.length) {
      event.preventDefault()
      return
    }
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = document.activeElement
    if (event.shiftKey && (active === first || active === container || !container.contains(active))) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && (active === last || !container.contains(active))) {
      event.preventDefault()
      first.focus()
    }
  }
}
