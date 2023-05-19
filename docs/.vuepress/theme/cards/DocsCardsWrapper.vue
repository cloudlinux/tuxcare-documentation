<template>
  <div class="docs-cards-wrapper">
    <template v-for="(card, index) in documents" :key="index">
      <DocsCard :card="card" />
    </template>
  </div>
</template>

<script setup>
import DocsCard from "./DocsCard.vue"
import { inject } from "vue";
const { documents } = inject('themeConfig')
</script>

<style lang="stylus">
.docs-cards-wrapper
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  max-width 1170px
  margin 0 auto
  margin-bottom 14rem
</style>