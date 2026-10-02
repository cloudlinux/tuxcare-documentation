import {nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'

// Set once a layout has mounted in the browser (onMounted never runs during
// SSR), so a layout mounted later was reached by client-side navigation.
let layoutMounted = false

// Move focus to the start of the new page: the #hash target if there is one,
// otherwise the page's h1, otherwise <main>.
const focusPageStart = (route) => {
  const id = route.hash ? decodeURIComponent(route.hash.slice(1)) : ''
  const target = (id && document.getElementById(id))
      || document.querySelector('#main-content h1')
      || document.querySelector('h1')
  if (target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
    target.focus({preventScroll: true})
  } else {
    document.getElementById('main-content')?.focus({preventScroll: true})
  }
}

/**
 * SPA page changes: move focus to the new page and announce its title in a
 * polite live region (render `announcement` in the layout).
 * @param canMoveFocus optional getter; false while a dialog holds focus
 */
export function useRouteAnnouncer(canMoveFocus = () => true) {
  const route = useRoute()
  const announcement = ref('')
  let active = true

  const onPageChange = () => {
    announcement.value = ''
    // Wait for the new page to render and VuePress to update document.title.
    nextTick(() => setTimeout(() => {
      if (!active) return
      if (canMoveFocus()) focusPageStart(route)
      announcement.value = document.title
    }, 0))
  }

  // Hash-only changes stay on the same page and are left to the browser.
  watch(() => route.path, onPageChange)

  onMounted(() => {
    if (layoutMounted) onPageChange()
    layoutMounted = true
  })
  onBeforeUnmount(() => active = false)

  return {announcement}
}
