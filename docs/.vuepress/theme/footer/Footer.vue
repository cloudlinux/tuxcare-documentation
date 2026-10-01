<template>
  <footer class="footer" :class="{'footer-default-layout': !isGlobalLayout}" role="contentinfo">
    <div class="footer__img">
      <a :href="cloudlinuxSite" aria-label="TuxCare website">
        <img :src="withBase(footerCustomLogo)"
             :alt="footerLogoAlt">
      </a>
    </div>
    <div class="footer-company-title">&copy; {{ year }} All rights reserved. TuxCare Inc.</div>

    <div class="social">
      <div class="social_links">
        <a v-for="item in locales.bottomLinks" :key="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.text }}<span class="sr-only"> (opens in new tab)</span></a>
      </div>
      <span class="footer-social-text">{{ locales.stayInTouch }}</span>
      <div class="social-icons-wrapper">
        <a v-for="item in social" :key="item.url" class="social-icons-link" :href="item?.url" target="_blank" rel="noopener noreferrer" :aria-label="(item?.text || 'Social link') + ' (opens in new tab)'">
          <img v-if="item.icon" class="social-icons-link-img" :src="withBase(item?.icon)" alt=""/>
        </a>
      </div>
    </div>
  </footer>
</template>


<script setup>
import {computed, inject} from "vue";
import {usePageFrontmatter, withBase} from "@vuepress/client";

const {social, cloudlinuxSite, footerCustomLogo, footerCustomAltText, locales} = inject('themeConfig');
const frontmatter = usePageFrontmatter()

const year = computed(() => (new Date()).getFullYear());
const isGlobalLayout = computed(() => frontmatter.value.layout === 'HomeLayout');
const footerLogoAlt = computed(() => footerCustomAltText || "TuxCare");
</script>
<style lang="stylus" scoped>
@import '../../styles/config.styl'

.footer
  box-sizing border-box
  padding $layout-vertical-padding 1rem $layout-vertical-padding $layout-horizontal-padding
  color $textColor
  border-top 1px solid $borderColor
  height $footerHeight
  background #fff
  display flex
  align-items center
  justify-content space-between


  &__img img
    height 2rem
    width auto

  &-company-title
    font-size 0.8rem
    color #4a5568

.social
  display flex
  justify-content center
  align-items center

  &_links
    display: flex;
    align-items center
    justify-content space-between
    gap 1.375rem
    margin-right: 1.1rem

  &-icons-wrapper
    display: flex;
    align-items center
    justify-content space-between

  .social_links a
    color #0b5cad

  .footer-social-text
    margin-right 0.8125rem
    line-height 1.25rem
    padding-left 0.75rem
    border-left 1px solid #ccc

  &-icons-link
    display: flex
    flex-shrink 0
    height 3.125rem

    &-img
      width 100%
      height 100%

.footer-default-layout
  position static
  width 100%

// The docs sidebar is fixed to the left edge; start the page footer after it
// so the logo link and copyright are not hidden underneath (WCAG 2.4.11).
@media (min-width: $mobileBreakpoint + 1)
  .footer-default-layout:not(.drawer-footer)
    margin-left $sidebarWidth
    width auto

// Less room next to the sidebar: let the footer items wrap instead of
// squeezing the social icons.
@media (min-width: $mobileBreakpoint + 1) and (max-width: 1365px)
  .footer:not(.drawer-footer)
    flex-wrap wrap
    height auto
    min-height $footerHeight
    gap 1rem 2rem

    .social
      flex-wrap wrap
      row-gap 1rem

.sidebar-width
  width $sidebarWidth + 2rem

@media (max-width:$mobileBreakpoint)
  .footer
    flex-direction column
    height fit-content
    justify-content flex-start

    &__img
      order 4
      margin-top 2.5rem

    &-company-title
      order 5
    &-social-text
      border-left none !important

  .social
    gap 1.5625rem
    margin-top 1.25rem
    flex-direction column
</style>
