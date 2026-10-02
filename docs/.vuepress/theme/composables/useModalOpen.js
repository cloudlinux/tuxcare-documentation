// Floating widgets outside the layout that sit above the theme's dialogs.
const OUTSIDE_SELECTORS = ['#bot-ui']

const openModals = new Set()
// Only undo the inert we added; other components may set it too.
const inertedHere = new Set()

/**
 * Mark a theme dialog (search drawer, mobile sidebar) as open or closed.
 * While any is open, body gets the `modal-open` class and the chat widget is
 * made inert so it can't take focus over the dialog.
 */
export function setModalOpen(owner, open) {
  if (typeof document === 'undefined') return
  open ? openModals.add(owner) : openModals.delete(owner)
  const anyOpen = openModals.size > 0
  document.body.classList.toggle('modal-open', anyOpen)
  OUTSIDE_SELECTORS.forEach(selector => document.querySelectorAll(selector).forEach(el => {
    if (anyOpen && !el.inert) {
      el.inert = true
      inertedHere.add(el)
    } else if (!anyOpen && inertedHere.has(el)) {
      el.inert = false
      inertedHere.delete(el)
    }
  }))
}
