<template>
  <header class="navbar" :class="{'fixed': !isGlobalLayout}">
    <div class="navbar-header">
      <div class="navbar-header__logo-wrapper">
        <router-link
            :to="homeUrl"
            class="home-link"
        >
          <img
              class="logo"
              v-if="siteLogo"
              :src="withBase(siteLogo)"
              alt="TuxCare Documentation home"
          >
        </router-link>
        <HeaderLayoutSearch
            v-if="!isGlobalLayout"
            :closeSidebarDrawer="closeSidebarDrawer"
            ref="headerLayoutSearch"
            :class="{'header-mobile__hidden': !headerLayoutSearch?.mobileDrawerVisible}"
            :isMobileWidth="isMobileWidth"
        />
      </div>
      <div
          class="links"
          :style="{ 'max-width': linksWrapMaxWidth + 'px'}"
      >
        <button type="button" class="navbar-header__mobile-search" aria-label="Search documentation" @click="openMobileAlgoliaDrawer">
          <img :src="withBase(headerDefaultSearchIcon)" alt=""/>
        </button>
        <HeaderProducts :isMobileWidth="isMobileWidth"/>

        <a v-for="item in locales.navbarLinks"
        :key="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="item.class"
        @click="onClick(item.event)">{{ item.text }}<span class="sr-only"> (opens in new tab)</span></a>

      </div>
    </div>
    <HeaderLayoutSearch
        v-if="isGlobalLayout"
        :closeSidebarDrawer="closeSidebarDrawer"
        ref="headerLayoutSearch"
        :isMobileWidth="isMobileWidth"
        />
  </header>
</template>

<script setup>
import HeaderLayoutSearch from "./HeaderLayoutSearch.vue";
import HeaderProducts from "./HeaderProducts.vue";
import {computed, inject, ref} from "vue";
import {usePageFrontmatter, useRouteLocale,withBase} from "@vuepress/client";

const props = defineProps({
  isMobileWidth: {
    type: Boolean,
  },
  closeSidebarDrawer: {
    type: Function,
  }
})

const {siteLogo,  defaultURL, locales, headerDefaultSearchIcon} = inject('themeConfig');
const linksWrapMaxWidth = ref(null)
const frontmatter = usePageFrontmatter()
const localePath = useRouteLocale()
const headerLayoutSearch = ref(null)

const openMobileAlgoliaDrawer = () => headerLayoutSearch?.value?.openDrawer()

const isGlobalLayout = computed(() => frontmatter.value.layout === 'HomeLayout')

const homeUrl = computed(() => {
  const defaultUrl = localePath.value + defaultURL;
  // remove double slashes from path if any
  return defaultUrl.replace(/\/+/g, '/');
})

const onClick = (event) => {
  if (event?.type) {
    switch (event.type) {
        case 'event':
          var event = new CustomEvent(event.name);
          document.dispatchEvent(event);
      }
  }
}

</script>

<style src="../../styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
@import '../../styles/config.styl'

.navbar
  padding $layout-vertical-padding $layout-horizontal-padding
  line-height $navbarHeight - 1.5rem
  display flex;
  flex-direction column
  margin-bottom 3.125rem
  z-index 99

  &-header__mobile-search
    display none
    background none
    border 0
    padding 0
    color inherit
    cursor pointer

    img
      display block

  .sr-only
    position absolute
    width 1px
    height 1px
    padding 0
    margin -1px
    overflow hidden
    clip rect(0, 0, 0, 0)
    white-space nowrap
    border 0

  &-header__logo-wrapper
    display flex
    align-items center
    justify-content space-between
    gap: 2.5rem


  .logo
    height $navbarHeight - 1.6rem
    min-width $navbarHeight - 1.4rem
    margin-right 1.5rem
    vertical-align top

  .links
    box-sizing border-box
    background-color $mainColor
    white-space nowrap
    font-size 0.9rem
    display flex
    gap 0.625rem

    .nav-links
      flex 1

.navbar-header
  display flex
  align-items center
  justify-content space-between

.fixed
  width 100%
  position fixed

.btn
  padding 0.7rem 1.6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $mainColor;
  border: 2px solid $buttonBorderColor;
  border-radius: 4px;
  font-size: 0.88rem;
  line-height: 1rem;
  color: $buttonTextColor;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  font-weight 600

.btn-white
  background-color: white;
  color black
  font-size 0.9375rem
  font-weight 500
  line-height 1rem


// Keep keyboard focus from scrolling under the fixed header (WCAG 2.4.11).
html
  scroll-padding-top $navbarHeight + 0.5rem

// Narrow desktop widths (incl. 200% zoom): tighten the header row so the
// "Submit support request" button is not cut off.
@media (min-width: $mobileBreakpoint + 1) and (max-width: 900px)
  .navbar
    .navbar-header__logo-wrapper
      gap 1rem
    .logo
      margin-right 0
  .navbar .btn
    padding 0.7rem 1rem

@media (max-width: $mobileBreakpoint)
  .navbar
    padding  $layout-vertical-padding 1.25rem
    margin-bottom 0
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.22);
    z-index 9999

    &-header__mobile-search
      display flex
      align-items center
      justify-content center
      min-width 24px
      min-height 24px
      margin-right 1.25rem
  .links > a
    display none !important
  .header-mobile__hidden
    display none !important

// Very short viewports (landscape phones, 400% zoom): let the header scroll
// away with the page so it does not cover most of the screen (WCAG 1.4.10, 2.4.11).
@media (max-width: $mobileBreakpoint) and (max-height: 480px)
  .navbar.fixed
    position absolute
  html
    scroll-padding-top 0.5rem
</style>
