<template>
  <div class="theme-container">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <HeaderLayout :isMobileWidth="isMobileWidth"/>
    <main id="main-content" role="main" tabindex="-1">
      <DocsCardsWrapper/>
    </main>
    <Footer/>
    <div class="sr-only" aria-live="polite" aria-atomic="true">{{ announcement }}</div>
  </div>
</template>

<script setup>
import DocsCardsWrapper from "../cards/DocsCardsWrapper.vue";
import Footer from "../footer/Footer.vue";
import HeaderLayout from '../header/HeaderLayout.vue'
import {inject, onMounted, onUnmounted, ref} from "vue";
import {useRouteAnnouncer} from "../composables/useRouteAnnouncer";

const { MOBILE_BREAKPOINT } = inject('themeConfig')
const isMobileWidth = ref(false);
const {announcement} = useRouteAnnouncer()
const handleResize = () => isMobileWidth.value = window.innerWidth <= MOBILE_BREAKPOINT;

onMounted(() => {
  window.addEventListener('resize', handleResize)
  isMobileWidth.value = window.innerWidth <= MOBILE_BREAKPOINT;
})
onUnmounted(() => window.removeEventListener('resize', handleResize));
</script>
