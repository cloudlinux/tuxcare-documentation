<template>
  <div>
    <div class="drawer" :class="{'is-open': isOpenDrawer}">
      <div class="drawer-header">
        <div class="drawer-header__wrapper">
          <h2 class="drawer-header__paragraph">How can we help you?</h2>
          <div id="drawerSearch"></div>
        </div>
        <div class="drawer-cross">
          <img @click="onCloseDrawer" class="drawer-cross__img" :src="withBase('/global/cross.svg')" alt="cross">
          <p @click="onCloseDrawer" class="drawer-cross__text">close</p>
        </div>
      </div>
      <DrawerTabs v-model="selectedTabIndex" :data="tabs"/>
      <main class="drawer-main">
        <div class="drawer-main__wrapper">
          <div class="drawer-main__breadcrumb">
            <p v-if="drawerArticleResult.length" class="drawer-main__breadcrumb__text">Home
              <img :src="withBase('/arrows/arrow-right-breadcrumb.svg')" alt="breadcrumb icon"/>
              Documentation
            </p>
          </div>
          <DrawerSearchResult :modelValue="modelValue" :data="drawerArticleResult"/>
          <BackToTop/>
        </div>
      </main>
    </div>
    <Footer v-if="isOpenDrawer" class="drawer-footer"/>
  </div>
</template>

<script setup>
import {withBase} from "@vuepress/client";
import Footer from "../footer/Footer.vue";
import {computed, inject, ref, watch} from "vue";
import DrawerTabs from "./DrawerTabs.vue";
import DrawerSearchResult from "./DrawerSearchResult.vue";
import BackToTop from "../components/BackToTop.vue";

const props = defineProps({
  isOpenDrawer: {
    type: Boolean,
    required: true,
    default: false
  },
  modelValue: {
    type: String,
    required: true,
    default: ''
  },
  homeLayoutSearchResult: {
    type: Array,
    required: true,
    default: () => []
  }
})


const emit = defineEmits(['closeDrawer', 'update:modelValue'])

const selectedTabIndex = ref(0);

const tabs = computed(() => {
    const uniqueTitles = props.homeLayoutSearchResult.reduce((unique, result) => {
        const title = result.hierarchy?.lvl0;
        unique[title] = unique[title] || { title, numberResults: 0 };
        unique[title].numberResults++;
        return unique;
    }, {});
    return Object.values(uniqueTitles);
});

const drawerArticleResult = computed(() => {
  if (selectedTabIndex.value === -1) {
    return props.homeLayoutSearchResult || [];
  }
  const selectedTab = tabs.value[selectedTabIndex.value];
  return props.homeLayoutSearchResult.filter(result => result.hierarchy.lvl0 === selectedTab?.title);
})

const onCloseDrawer = () => {
  emit('closeDrawer')
  selectedTabIndex.value = 0
}

watch(() => props.isOpenDrawer, () => {
  document.body.classList.toggle('disable-scroll', props.isOpenDrawer)
})
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.disable-scroll
  overflow hidden !important

.drawer
  position fixed
  top 0
  left 0
  width 100%
  height calc(100% - 102px)
  overflow-y auto
  z-index 1000
  box-sizing border-box
  background: $drawerHeaderBgColor
  opacity: 0;
  transform: translateY(-100%);
  transition: 0.4s ease;

  &-header
    padding $layout-vertical-padding  $layout-horizontal-padding
    display flex
    justify-content space-between
    align-items center

    &__search
      width: $searchWidth
      position relative
      border-radius: $homeSearchBorderRadius
      border none
      padding $searchVerticallyPadding $searchHorizontallyPadding
      color: $searchColorText;
      font-size: $searchColorFontSize
      line-height: 16px
      outline: none

    &__wrapper
      display: flex;
      align-items center
      gap 40px

    &__paragraph
      margin 0
      color $headerSearchTitleColor
      font-weight $headerSearchFontWeight
      font-size $headerSearchFontSize
      line-height 35.8px

    &__input
      position relative
      display: flex;
      justify-content center
      align-content center

.drawer-cross
  margin-top 12px
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  gap 11px

  &__img
    cursor pointer
    width $crossImgSize
    height: $crossImgSize

  &__text
    margin 0
    color $crossColor
    cursor pointer

.drawer-main
  background $drawerMainBackgroundColor
  padding $layout-vertical-padding  $layout-horizontal-padding
  margin-top $drawerMainMarginTop
  min-height 80%

  &__breadcrumb__text
    font-size $drawerBreadcrumbFontSize
    color $drawerBreadcrumbColor
    line-height $drawerBreadcrumbLineHeight

  &__wrapper
    max-width $drawerMainMaxWidth
    margin-bottom $drawerMainMarginBottom


.drawer-footer
  position fixed !important
  bottom 0
  left 0
  width 100vw


.is-open {
  opacity: 1;
  transform: translateY(0);
}

</style>