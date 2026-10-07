<template>
  <div class="header-products-wrapper">
    <div ref="menu" class="dropdown" @keydown.esc="closeMenu(true)" @focusout="onFocusOut">
      <button type="button"
              ref="toggleButton"
              class="header-products-container"
              :aria-expanded="openedMenu"
              aria-controls="header-products-menu"
              :aria-label="productsTitle"
              @click="openedMenu = !openedMenu"
              @keydown.tab="onToggleTab">
        <!-- Grid ("apps") icon on mobile, so it doesn't look like the docs menu button. -->
        <svg class="header-products-container__img" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <g fill="white" fill-opacity="0.76">
            <rect x="0" y="0" width="5" height="5" rx="1"/><rect x="7.5" y="0" width="5" height="5" rx="1"/><rect x="15" y="0" width="5" height="5" rx="1"/>
            <rect x="0" y="7.5" width="5" height="5" rx="1"/><rect x="7.5" y="7.5" width="5" height="5" rx="1"/><rect x="15" y="7.5" width="5" height="5" rx="1"/>
            <rect x="0" y="15" width="5" height="5" rx="1"/><rect x="7.5" y="15" width="5" height="5" rx="1"/><rect x="15" y="15" width="5" height="5" rx="1"/>
          </g>
        </svg>
        <span class="header-products-wrapper-paragraph">{{ productsTitle }}</span>
        <img class="products-icon__default"
             :class="{'products-icon__rotate': openedMenu}"
             width="10" height="8"
             :src="withBase(arrowDownIcon)"
             alt=""/>
      </button>
     <!-- The menu stays in the DOM (v-show) so aria-controls always points to it. -->
     <teleport v-if="isMobileWidth" to="body">
       <div v-show="openedMenu"
            id="header-products-menu"
            ref="mobileMenu"
            class="dropdown-wrapper"
            @keydown.esc="closeMenu(true)"
            @keydown.tab="onMobileMenuTab"
            @focusout="onFocusOut">
          <p class="dropdown-content__paragraph" v-for="(product, index) in productsList" :key="product">
            <a class="dropdown-content__link" :href="productsURLs[index]">{{ product }}</a>
          </p>
       </div>
     </teleport>
      <div v-if="!isMobileWidth" v-show="openedMenu" id="header-products-menu" class="dropdown-wrapper">
        <p class="dropdown-content__paragraph" v-for="(product, index) in productsList" :key="product">
          <a class="dropdown-content__link" :href="productsURLs[index]">{{ product }}</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {withBase} from "@vuepress/client";
import {inject, onMounted, onUnmounted, ref} from "vue";
defineProps({
  isMobileWidth: {
    type: Boolean,
  },
})
const {productsTitle, arrowDownIcon, productsList, productsURLs} = inject('themeConfig');

const openedMenu = ref(false)
const menu = ref(null)
const mobileMenu = ref(null)
const toggleButton = ref(null)

// On mobile the list is teleported to <body>, so it is not a DOM child of `menu`.
const isInsideMenu = (node) =>
    !!node && (menu.value?.contains(node) || !!mobileMenu.value?.contains(node))

const closeMenu = (restoreFocus = false) => {
  if (!openedMenu.value) return
  openedMenu.value = false
  if (restoreFocus) toggleButton.value?.focus()
}

const clickOutside = (event) => {
  const path = event.composedPath()
  const inside = path.includes(menu.value) || (mobileMenu.value && path.includes(mobileMenu.value))
  !inside && (openedMenu.value = false)
}

// Close when keyboard focus leaves the menu. A null relatedTarget (focus went to
// the page itself, e.g. a click on non-focusable space) is left to clickOutside.
const onFocusOut = (event) => {
  if (event.relatedTarget && !isInsideMenu(event.relatedTarget)) closeMenu()
}

const getMobileLinks = () => [...(mobileMenu.value?.querySelectorAll('a') || [])]

// The teleported mobile list sits at the end of <body>, so the natural Tab order
// would skip it. Move focus into it from the button, and back out after the last link.
const onToggleTab = (event) => {
  if (!openedMenu.value || !mobileMenu.value || event.shiftKey) return
  const [first] = getMobileLinks()
  if (!first) return
  event.preventDefault()
  first.focus()
}

const onMobileMenuTab = (event) => {
  const links = getMobileLinks()
  if (event.shiftKey && document.activeElement === links[0]) {
    event.preventDefault()
    toggleButton.value?.focus()
  } else if (!event.shiftKey && document.activeElement === links[links.length - 1]) {
    event.preventDefault()
    const focusable = [...document.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])')]
        .filter(el => !mobileMenu.value.contains(el) && el.offsetParent !== null)
    const next = focusable[focusable.indexOf(toggleButton.value) + 1]
    closeMenu()
    next ? next.focus() : toggleButton.value?.focus()
  }
}

onMounted(() => {
  document.addEventListener('click', clickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', clickOutside)
})
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.header-products-wrapper
  display: flex;
  align-items center
  justify-content space-between
  gap 0.75rem
  margin-right 1.5625rem

  &-paragraph
    display block
    margin 1em 0
    font-size $text-default
    cursor pointer
    line-height 1rem
    color white

.header-products-container
  display: flex;
  align-items center
  justify-content center
  gap 0.875rem
  min-width 1.5rem
  min-height 1.5rem
  background none
  border 0
  padding 0
  font inherit
  color inherit
  cursor pointer

  &__img
    display none

.dropbtn
  color: black;
  font-size: 0.8125rem
  line-height 0.9375rem
  border: none;
  cursor: pointer;

.dropdown
  position: relative;
  display: inline-block;

  & > img
    cursor pointer

.dropdown-wrapper
  display: block;
  position: absolute;
  background-color: $dropdownBgColor;
  min-width: 12.5rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  z-index: 9999;
  left: -7.3125rem;
  top: 2.6875rem;

.dropdown-content__paragraph
  color: black;
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  display: block;
  cursor pointer
  margin 0

.dropdown .dropdown-wrapper
  display: block;


.dropdown-content__link
  color black
  text-decoration none

.dropdown-wrapper p:hover
  background-color: white;

.products-icon
  &__rotate
    cursor pointer
    transform rotate(180deg)
    transition-duration 500ms

  &__default
    cursor pointer
    transition-duration 500ms

@media (max-width: $mobileBreakpoint)
  .dropdown-wrapper
    top 2.6875rem
    left 9.6875rem

  .products-icon__default
    display: none

  .header-products-wrapper
    margin-right 0
    &-paragraph
      display: none

  .header-products-container__img
    display block
</style>