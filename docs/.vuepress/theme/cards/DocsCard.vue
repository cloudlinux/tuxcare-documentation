<template>
  <div class="docs-card-container">
    <div class="docs-card-container__header">
      <img width="20" height="20" :src="withBase('collections-bookmark.svg')" alt="">
      <p v-if="card.title" class="docs-card-container__header-paragraph">
        <router-link :to="card.link" class="docs-card-link">{{ card.title }}</router-link>
      </p>
    </div>
    <div class="docs-card-container__main">
      <p v-if="card.description" class="docs-card-container__main-paragraph">{{ card.description }}</p>
    </div>
    <div class="docs-card-container__footer" aria-hidden="true">
      <span class="docs-card-container__footer-btn">View Documentation</span>
      <span class="docs-card-container__footer-arrow">&rarr;</span>
    </div>
  </div>
</template>
<script setup>
import { withBase } from "@vuepress/client";
defineProps({
  card: {
    type: Object,
    default: null
  },
})
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.docs-card-container
  position relative
  display: flex;
  flex-direction column
  justify-content space-between
  border 1px solid $cardBorderColor;
  border-radius $cardBorderRadius
  cursor pointer
  transition all 0.2s ease

  &:hover
    border-color $buttonColorBg
    box-shadow 0 4px 16px rgba(22, 48, 85, 0.1)
    transform translateY(-2px)

  &:hover .docs-card-container__footer-arrow
    opacity 1
    transform translateX(0)

  // Ring on the whole card for keyboard focus only (not on mouse click).
  &:has(.docs-card-link:focus-visible)
    outline 2px solid $buttonColorBg
    outline-offset 2px

  &__header
    display: flex;
    gap: 1.0625rem
    align-items: center
    padding 1.25rem 1.25rem 1.125rem 1.25rem
    border-bottom 1px solid $cardBorderColor;

    &-paragraph
      font-size $cardParagraphFontSize
      line-height 1.165rem
      color $cardParagraphColor;
      font-weight $cardParagraphWeight
      margin 0;

  // The title link is the card's only link; stretch its hit area over the card.
  .docs-card-link
    color inherit
    text-decoration none

    &::after
      content ""
      position absolute
      inset 0

  &__main
    padding 1.125rem 1.25rem 0 1.25rem
    margin-bottom 1.9375rem

    &-paragraph
      font-size $text-default
      line-height 1.3125rem
      color $textColor
      margin 0;
      // Sit above the stretched link so the description can be selected and
      // copied; the rest of the card stays clickable.
      position relative
      z-index 1
      cursor text

  &__footer
    padding $cardFooterPaddingVertically $cardFooterPaddingHorizontally
    display flex
    align-items center
    justify-content space-between

    &-btn
      background $buttonColorBg
      color: $cardButtonColorText
      border-radius $cardButtonRadius
      padding 0.625rem 0.75rem
      font-weight 500
      font-size $cardButtonTextFontSize
      line-height 1.25rem
      cursor pointer
      border none
      outline none

    &-arrow
      font-size 1.25rem
      color $buttonColorBg
      opacity 0
      transform translateX(-4px)
      transition all 0.2s ease

// The card shows the focus ring instead (see :has above). Browsers without
// :has() keep the link's own focus outline.
@css {
  @supports selector(:has(*)) {
    .docs-card-container .docs-card-link:focus-visible {
      outline: none;
    }
  }
}

@media (max-width: $mobileBreakpoint)
  .docs-card-container
    max-height 24.375rem
    height fit-content
    justify-content flex-start

    &__header
      margin-bottom 0

    &__main
      padding-top 1.125rem
      padding-bottom 1.9375rem
      margin-bottom 0

    &__footer
      margin-bottom 0
      padding-top 0
</style>
