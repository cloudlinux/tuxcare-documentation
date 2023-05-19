<template>
  <div class="docs-card-container">
    <div class="docs-card-container__header">
      <img width="20" height="20" :src="withBase('collections-bookmark.svg')" alt="document icon">
      <p v-if="card.title" class="docs-card-container__header-paragraph">{{ card.title }}</p>
    </div>
    <div class="docs-card-container__main">
      <p v-if="card.description" class="docs-card-container__main-paragraph">{{ card.description }}</p>
    </div>
    <div class="docs-card-container__footer">
      <button @click="goTo()" class="docs-card-container__footer-btn">View tutorial</button>
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
  border-radius 5px

  &__header
    display: flex;
    gap: 17px
    align-items: center
    padding 1.25rem 1.25rem 1.125rem 1.25rem
    border-bottom 1px solid $cardBorderColor;

    &-paragraph
      font-size 16px
      line-height 18.64px
      color $cardParagraphColor;
      font-weight 500
      margin 0;

  &__main
    padding 1.125rem 1.25rem 0 1.25rem
    margin-bottom 31px

    &-paragraph
      font-size $text-default
      line-height 21px
      color $textColor
      margin 0;

  &__footer
    padding 1.125rem 1.25rem

    &-btn
      background $buttonColorBg
      color: white
      border-radius 8px
      padding 10px 12px
      font-weight 500
      font-size 14px
      line-height 20px
      cursor pointer
      border none
      outline none
</style>