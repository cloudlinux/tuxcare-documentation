<template>
  <div class="header-layout__search-container">
    <h1 v-if="isGlobalLayout" class="header-layout__search-title">
      {{ headerSearch }}
    </h1>
    <teleport v-if="isOpenDrawer" to="#drawerSearch">
      <DrawerSearch
          :options="algoliaOptions"
          v-model="searchTextValue"
          @openDrawer="openDrawer"
          :isOpenDrawer="isOpenDrawer"
          @result="getResultsFromSearch"
      />
    </teleport>
    <DrawerSearch
        v-else
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
        :isOpenDrawer="isOpenDrawer"/>
  </div>
</template>

<script setup>
import {computed, inject, ref, watch} from "vue";
import {usePageFrontmatter} from "@vuepress/client";
import Drawer from "../drawer/Drawer.vue";
import DrawerSearch from "../drawer/DrawerSearch.vue";

const {headerSearch, algoliaOptions} = inject('themeConfig')
const frontmatter = usePageFrontmatter()

const isOpenDrawer = ref(false)

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

const openDrawer = () => {
  isOpenDrawer.value = true
}

const closeDrawer = () => {
  homeLayoutSearchResult.value.length = 0;
  searchTextValue.value = ''
  isOpenDrawer.value = false
}
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
    width: 610px
    border-radius: $homeSearchBorderRadius
    border none
    padding 1.4rem 2rem
    color: $gray-500;
    font-size: $text-default
    line-height: 16px
    margin-bottom 7.25rem
    outline: none

  &-default
    border-radius $defaultSearchBorderRadius
    border: none
    outline: none
    padding 12px 15px
    width 250px
    background rgba(0, 0, 0, 0.1)
    color white
    font-size: $text-default
    line-height: 16px

  &-default::placeholder
    color: white;


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
</style>