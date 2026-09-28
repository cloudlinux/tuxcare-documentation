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
    />
    <Drawer
        :homeLayoutSearchResult="homeLayoutSearchResult"
        v-model="searchTextValue"
        @closeDrawer="closeDrawer"
        :isOpenDrawer="isOpenDrawer"
        :isMobileWidth="isMobileWidth"
    />
  </div>
</template>

<script setup>
import {computed, inject, nextTick, ref, watch} from "vue";
import {usePageFrontmatter} from "@vuepress/client";
import Drawer from "../drawer/Drawer.vue";
import DrawerSearch from "../drawer/DrawerSearch.vue";

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

const isOpenDrawer = ref(false)
const mobileDrawerVisible = ref(false)
const searchTextValue = ref('')
const homeLayoutSearchResult = ref([]);

watch(() => searchTextValue.value, () => {
  if (!searchTextValue.value) {
    homeLayoutSearchResult.value = [];
  }
})

const getResultsFromSearch = (hits) => {
  homeLayoutSearchResult.value = hits;
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
  if(props.closeSidebarDrawer) props.closeSidebarDrawer()
  if (!wasOpen) {
    drawerOpener = document.activeElement
    nextTick(focusSearchInput)
  }
}

const closeDrawer = ({restoreFocus = true} = {}) => {
  homeLayoutSearchResult.value.length = 0;
  searchTextValue.value = ''
  isOpenDrawer.value = false
  mobileDrawerVisible.value = false
  const opener = drawerOpener
  drawerOpener = null
  if (!restoreFocus) return
  nextTick(() => {
    if (opener && opener.isConnected && opener.id !== SEARCH_INPUT_ID) opener.focus()
    else focusSearchInput()
  })
}
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