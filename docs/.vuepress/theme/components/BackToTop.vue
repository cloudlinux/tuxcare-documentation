<template>
  <div class="back-to-top">
    <button
        type="button"
        :class="{ active: isVisible }"
        class="nav-arrow top back-to-top__link"
        aria-label="Scroll up to the top of the page"
        @click="goToTop"
    >
      <span class="back-to-top__link-span" aria-hidden="true">Scroll up</span>
    </button>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const props = defineProps({
  boundary: {
    type: Number,
    default: 200
  },
})
const isVisible = ref(false);

const handleScroll = () => {
  if(window)  isVisible.value = window.pageYOffset > props.boundary;
}
const goToTop = () => {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top: 0, behavior: reduceMotion ? 'auto' : 'smooth'});
  // The button hides itself at the top; move focus to the main content so
  // keyboard and screen reader users are not left on a hidden element.
  const target = document.getElementById('main-content');
  if (target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({preventScroll: true});
  }
}

onMounted(() => {
  if (window) {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }
})

onUnmounted(() => {
  if (window) window.removeEventListener('scroll', handleScroll);
})
</script>

<style lang="stylus" scoped>
@import '../../styles/config.styl'
.back-to-top__link
  position fixed
  right 6rem
  bottom 10rem
  visibility hidden
  opacity 0
  transition visibility 0s, opacity 0.5s linear
  cursor pointer
  z-index 10
  text-underline none
  // reset native button styles; the arrow comes from .nav-arrow.top
  border 0
  padding 0
  background-color transparent
  font inherit
  color inherit

  &:focus-visible
    outline 2px solid $accentColor
    outline-offset 2px

  &-span
    position absolute
    left 8px
    font-weight 400
    bottom 0
    font-size 0.75rem
    line-height $text-default
    color black

  &.active
    visibility visible
    opacity 1

@media (prefers-reduced-motion: reduce)
  .back-to-top__link
    transition none

@media (max-width: $mobileBreakpoint)
  .back-to-top__link
    right 1rem;

</style>
