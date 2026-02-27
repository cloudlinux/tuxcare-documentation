<template>
  <div class="docs-card-container" @click="goTo()">
    <div class="docs-card-container__header">
      <img width="20" height="20" :src="withBase('collections-bookmark.svg')" alt="document icon">
      <p v-if="card.title" class="docs-card-container__header-paragraph">{{ card.title }}</p>
    </div>
    <div class="docs-card-container__main">
      <p v-if="card.description" class="docs-card-container__main-paragraph">{{ card.description }}</p>
    </div>
    <div class="docs-card-container__footer">
      <span class="docs-card-container__footer-btn">View Documentation</span>
      <span class="docs-card-container__footer-arrow">&rarr;</span>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import { withBase } from "@vuepress/client";
const props = defineProps({
  card: {
    type: Object,
    default: null
  },
})
const router = useRouter()
const goTo = () => router.push(props.card?.link)
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.docs-card-container
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

  &__main
    padding 1.125rem 1.25rem 0 1.25rem
    margin-bottom 1.9375rem

    &-paragraph
      font-size $text-default
      line-height 1.3125rem
      color $textColor
      margin 0;

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
