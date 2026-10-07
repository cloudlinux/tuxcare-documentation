<template>
  <!-- The desktop footer is shown as part of the open drawer, so the dialog
       wraps both and the focus trap covers the footer links too. -->
  <div ref="dialogRef"
       :class="{'drawer-dialog--open': isOpenDrawer}"
       role="dialog"
       aria-modal="true"
       aria-labelledby="drawer-title"
       :inert="!isOpenDrawer"
       @keydown.esc="onCloseDrawer"
       @keydown.tab="trapFocus"
  >
    <div class="drawer" :class="{'is-open': isOpenDrawer, 'drawer--animated': animationsReady}">
      <div class="drawer-header">
        <div class="drawer-header__wrapper">
          <h2 id="drawer-title" class="drawer-header__paragraph">How can we help you?</h2>
          <div id="drawerSearch"></div>
          <!-- Always mounted so result counts are announced (WCAG 4.1.3). -->
          <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">{{ statusMessage }}</p>
        </div>
        <button type="button" class="drawer-cross" @click="onCloseDrawer">
          <img class="drawer-cross__img" :src="withBase('/global/cross.svg')" alt="">
          <span class="drawer-cross__text">close</span>
        </button>
      </div>
      <section role="region" aria-label="Search results">
        <div class="drawer-main">
          <div class="drawer-main__wrapper">
            <div class="drawer-main__breadcrumb">
              <!-- Optional breadcrumb can stay here -->
            </div>
            <DrawerSearchResult :modelValue="modelValue" :searchedQuery="searchedQuery" :data="drawerArticleResult" @closeDrawer="onResultSelected"/>
          </div>
        </div>
        <Footer v-if="isOpenDrawer && isMobileWidth" class="drawer-footer__mobile" :landmark="false"/>
      </section>
    </div>
    <Footer v-if="isOpenDrawer && !isMobileWidth" class="drawer-footer" :landmark="false"/>
  </div>
</template>

<script setup>
import { withBase } from "@vuepress/client";
import Footer from "../footer/Footer.vue";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import DrawerSearchResult from "./DrawerSearchResult.vue";
import { useFocusTrap } from "../composables/useFocusTrap";
import { setModalOpen } from "../composables/useModalOpen";

const props = defineProps({
  isOpenDrawer: {
    type: Boolean,
    required: true,
    default: false
  },
  isMobileWidth: {
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
  },
  searchedQuery: {
    type: String,
    default: ''
  },
  statusMessage: {
    type: String,
    default: ''
  }
});

// closeDrawer payload: { restoreFocus } — false when a search result was picked,
// because focus then belongs to the page being navigated to.
const emit = defineEmits(['closeDrawer', 'update:modelValue']);
const dialogRef = ref(null);

const drawerArticleResult = computed(() => {
  return props.homeLayoutSearchResult; // Now directly returning all results since there are no tabs
});

const onCloseDrawer = () => {
  if (props.isOpenDrawer) emit('closeDrawer', { restoreFocus: true });
}

const onResultSelected = () => emit('closeDrawer', { restoreFocus: false });

// Keep Tab / Shift+Tab inside the open drawer.
const trapFocus = useFocusTrap(dialogRef, () => props.isOpenDrawer);

// The drawer starts hidden (translateY(-100%)). Enabling the slide transition
// only after the first paint prevents the close animation from flashing on
// initial page load — it then fires only on genuine open/close toggles.
const animationsReady = ref(false);
onMounted(() => {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    animationsReady.value = true;
  }));
});

watch(() => props.isOpenDrawer, () => {
  document.body.classList.toggle('disable-scroll', props.isOpenDrawer);
  setModalOpen('search', props.isOpenDrawer);
});

// The header swaps search instances between layouts; don't leave the page
// scroll-locked when an open drawer is unmounted.
onBeforeUnmount(() => {
  if (!props.isOpenDrawer) return;
  document.body.classList.remove('disable-scroll');
  setModalOpen('search', false);
});
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.disable-scroll
  overflow hidden !important

// Set by composables/useModalOpen.js while a theme dialog is open; the chat
// widget floats above the dialogs, so hide it (it is also made inert).
body.modal-open #bot-ui
  display none !important

// Give the open dialog a real box over the viewport (its panels are fixed),
// so assistive tech can highlight it and nothing behind it is clickable.
// It is teleported to <body>, so it must stack above the fixed header
// (z-index 9999 on mobile) and the skip link (10000).
.drawer-dialog--open
  position fixed
  inset 0
  z-index 10001

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

  // Transition is intentionally NOT set here so the initial hidden state is
  // applied instantly (no flash on first load). It is enabled via
  // .drawer--animated once the component has mounted.
  &.drawer--animated
    transition: 0.4s ease

    @media (prefers-reduced-motion: reduce)
      transition none

  &-header
    padding 1.25rem $layout-horizontal-padding
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
      line-height: 1rem
      outline: none

    &__wrapper
      display: flex;
      align-items center
      gap 2.5rem

    &__paragraph
      margin 0
      color $headerSearchTitleColor
      font-weight $headerSearchFontWeight
      font-size $headerSearchFontSize
      line-height 2.2375rem

    &__input
      position relative
      display: flex;
      justify-content center
      align-content center

.drawer-cross
  margin-top 0.75rem
  background none
  border 0
  padding 0
  font inherit
  color inherit
  cursor pointer
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  gap 0.6875rem

  &__img
    cursor pointer
    width $crossImgSize
    height: $crossImgSize

  &__text
    margin 0
    line-height 1.7
    color $crossColor
    cursor pointer

.drawer-main
  background $drawerMainBackgroundColor
  padding $layout-vertical-padding  $layout-horizontal-padding
  margin-top $drawerMainMarginTop
  min-height 100vh

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

.drawer-footer__mobile
  position static
  width 100vw


.is-open {
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: $mobileBreakpoint)
  #drawerSearch
    width 100%

  .drawer
    height 100%
    &-footer
      position static
      width 100vw

    &-header
      align-items normal
      padding 1.875rem 1.25rem 0 1.25rem


      &__search-icon
        top 9% !important
        right 8% !important

        & > img
          width 1.563rem
          height 1.563rem

      &__wrapper
        width 100%
        flex-direction column
        gap 1.875rem

      &__paragraph
        width 100%

    &-cross
      position absolute
      right 0.625rem
      top 0.75rem
      margin-top 0
      gap 0.375rem
      justify-content flex-start
      &__text
        font-size 0.625rem
      &__img
        width 0.9375rem
        height 0.9375rem

    &-main
      margin-top 0
      padding 2.625rem 1.25rem 0 1.25rem
      min-height 100vh

      &__wrapper
        margin-bottom 0 !important
        padding-bottom 2.6875rem

      &__breadcrumb__text
         margin-top 0
         margin-bottom 2.625rem !important
      &__search-results
        display flex
        flex-direction column
        gap 2.8125rem

    .no_results
      margin 0
      font-size 1.25rem
</style>