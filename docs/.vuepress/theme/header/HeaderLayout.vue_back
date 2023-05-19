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
              alt="logo header"
          >
        </router-link>
        <HeaderLayoutSearch v-if="!isGlobalLayout"/>
      </div>
      <div
          class="links"
          :style="{ 'max-width': linksWrapMaxWidth + 'px'}"
      >
        <HeaderProducts/>
        <a :href="submitRequestUrl" target="_blank" class="btn">
          {{ submitRequestTitle }}
        </a>

        <a :href="tryFreeLink" target="_blank" class="btn btn-free">
          {{ tryFreeTitle }}
        </a>
      </div>
    </div>
    <HeaderLayoutSearch v-if="isGlobalLayout"/>
  </header>

</template>

<script setup>
import HeaderLayoutSearch from "./HeaderLayoutSearch.vue";
import HeaderProducts from "./HeaderProducts.vue";
import {computed, inject, ref} from "vue";
import {usePageFrontmatter, useRouteLocale,withBase} from "@vuepress/client";

const {siteLogo, locales, defaultURL, tryFreeLink, submitRequestURL} = inject('themeConfig');
const linksWrapMaxWidth = ref(null)
const frontmatter = usePageFrontmatter()
const localePath = useRouteLocale()

const tryFreeTitle = computed(() => locales.tryFreeLink || 'Try Free')

const submitRequestTitle = computed(() => locales.submitRequest || 'Submit support request')

const isGlobalLayout = computed(() => frontmatter.value.layout === 'HomeLayout')

const homeUrl = computed(() => {
  const defaultUrl = localePath.value + defaultURL;
  // remove double slashes from path if any
  return defaultUrl.replace(/\/+/g, '/');
})

const submitRequestUrl = computed(() => submitRequestURL || "https://cloudlinux.zendesk.com/hc/en-us/requests/new")
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

.btn-free
  background-color: white;
  color black
  font-size 15px
  font-weight 500
  line-height 16px

</style>
