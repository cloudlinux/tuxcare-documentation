<template>
  <div class="header-layout__search-container">
    <h1 v-if="isGlobalLayout" class="header-layout__search-title">
      {{ headerSearch }}
    </h1>
    <teleport v-if="isOpenDrawer" to="#drawerSearch">
      <DrawerSearch
          :options="algoliaOptions"
          v-model="searchTextValue"
          :isMobileWidth="isMobileWidth"
          @openDrawer="openDrawer"
          :isOpenDrawer="isOpenDrawer"
          @result="getResultsFromSearch"
          @searching="onSearching"
      />
    </teleport>
    <DrawerSearch
        v-else
        :isMobileWidth="isMobileWidth"
        :options="algoliaOptions"
        v-model="searchTextValue"
        @openDrawer="openDrawer"
        :isOpenDrawer="isOpenDrawer"
        @result="getResultsFromSearch"
        @searching="onSearching"
    />
    <Drawer
        :homeLayoutSearchResult="homeLayoutSearchResult"
        v-model="searchTextValue"
        @closeDrawer="closeDrawer"
        :isOpenDrawer="isOpenDrawer"
        :isMobileWidth="isMobileWidth"
        :searchedQuery="searchedQuery"
        :statusMessage="searchStatus"
    />
  </div>
</template>

<script setup>
import {computed, inject, nextTick, ref, watch} from "vue";
import {usePageFrontmatter} from "@vuepress/client";
import {useRoute} from "vue-router";
import Drawer from "../drawer/Drawer.vue";
import DrawerSearch from "../drawer/DrawerSearch.vue";
import {canFocus} from "../composables/useFocusTrap";

const props = defineProps({
  isMobileWidth: {
    type: Boolean,
    default: false
  },
  closeSidebarDrawer: {
    type: Function,
  }
})

const {headerSearch, algoliaOptions} = inject('themeConfig')
const frontmatter = usePageFrontmatter()
const route = useRoute()

const isOpenDrawer = ref(false)
const mobileDrawerVisible = ref(false)
const searchTextValue = ref('')
const homeLayoutSearchResult = ref([]);
// Query of the last search that returned (not the text being typed).
const searchedQuery = ref('')

watch(() => searchTextValue.value, () => {
  if (!searchTextValue.value) {
    homeLayoutSearchResult.value = [];
    searchedQuery.value = '';
  }
})

// Message for the drawer's live region.
const searchStatus = ref('')
let statusTimer = null
const setSearchStatus = (message, delay = 0) => {
  clearTimeout(statusTimer)
  // Clear first so the same message is announced again on a repeat search.
  searchStatus.value = ''
  statusTimer = setTimeout(() => searchStatus.value = message, delay)
}

const onSearching = ({query, failed = false}) => {
  setSearchStatus(failed ? 'Search failed. Please try again.' : 'Searching…')
}

const getResultsFromSearch = (hits, query = searchTextValue.value) => {
  homeLayoutSearchResult.value = hits;
  searchedQuery.value = query
  const count = hits.length
  // Wait for a drawer that is opening now to leave the inert state first.
  setSearchStatus(count
      ? `${count} ${count === 1 ? 'result' : 'results'} for “${query}”`
      : `No results for “${query}”`, isOpenDrawer.value ? 0 : 150)
}

const isGlobalLayout = computed(() =>  frontmatter.value.layout === 'HomeLayout')

// Element that opened the drawer, to return focus to on close.
let drawerOpener = null
const SEARCH_INPUT_ID = 'algolia-search-input'

// Opening/closing teleports DrawerSearch in or out of the drawer, which remounts
// the input, so focus has to be placed on the new #algolia-search-input.
const focusSearchInput = () => {
  const input = document.getElementById(SEARCH_INPUT_ID)
  if (input && input.offsetParent !== null) input.focus()
}

const openDrawer = () => {
  const wasOpen = isOpenDrawer.value
  isOpenDrawer.value = true
  mobileDrawerVisible.value = true
  // Focus goes to the search input, not back to the sidebar menu button.
  if(props.closeSidebarDrawer) props.closeSidebarDrawer({returnFocus: false})
  if (!wasOpen) {
    drawerOpener = document.activeElement
    nextTick(focusSearchInput)
  }
}

const closeDrawer = ({restoreFocus = true} = {}) => {
  homeLayoutSearchResult.value.length = 0;
  searchTextValue.value = ''
  searchedQuery.value = ''
  clearTimeout(statusTimer)
  searchStatus.value = ''
  isOpenDrawer.value = false
  mobileDrawerVisible.value = false
  const opener = drawerOpener
  drawerOpener = null
  if (!restoreFocus) return
  nextTick(() => {
    // The opener may be hidden by now (e.g. the mobile search button after
    // the viewport crossed the breakpoint); fall back to the search input.
    if (opener && opener.id !== SEARCH_INPUT_ID && canFocus(opener)) opener.focus()
    else focusSearchInput()
  })
}

// Don't leave the modal drawer open over a page the user navigated to
// (browser Back/Forward, or a link outside the drawer).
watch(() => route.fullPath, () => {
  if (isOpenDrawer.value) closeDrawer({restoreFocus: false})
}, {flush: 'pre'})
defineExpose({
  openDrawer,
  closeDrawer,
  mobileDrawerVisible
})
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.header-layout__search
  &-container
    display: flex
    justify-content: center
    align-items: center
    flex-direction column

  &-title
    font-weight: 500
    font-size: 3.4rem
    line-height: 4rem
    color white
    margin-top 5.625rem
    margin-bottom: 2.5rem

  &
    width: $homeSearchWidth
    border-radius: $homeSearchBorderRadius
    border none
    padding 1.4rem 2rem
    color: $gray-500;
    font-size: $text-default
    line-height: 1rem
    margin-bottom 7.25rem
    outline: none

  // White field on the dark home header: draw the ring inside the field.
  &:focus-visible
    outline 2px solid #0a4ea8
    outline-offset -4px

  &-default
    border-radius $defaultSearchBorderRadius
    border: none
    outline: none
    padding 0.75rem 0.9375rem
    width 15.625rem
    background #163055
    color white
    font-size: $text-default
    line-height: 1rem

  &-default::placeholder
    color: white;

  // Dark field on the dark navbar: a white ring outside the field.
  &-default:focus-visible
    outline 2px solid #fff
    outline-offset 2px


  &-icon
    position absolute
    top: 8%;
    right 5%
    cursor pointer

    &-default
      position absolute
      top: 8%;
      cursor pointer
      right 7%


@media (max-width: $mobileBreakpoint)
  .header-layout__search
    box-sizing border-box
    width 100% !important
    margin-bottom 2.5625rem
    padding 0.78125rem 1.25rem
    font-size 0.8125rem

    &-icon
      right 6.3%
      top 9%

      & > img
        width 1.5625rem
        height 1.5625rem

    &-title
      font-size 2.1875rem
      font-weight 500
      line-height 2.548125rem
      margin-top 2.5625rem
      margin-bottom 1.875rem
</style>