<template>
  <div class="header-products-wrapper">
    <div ref="menu" class="dropdown">
      <div v-if="openedMenu" class="dropdown-wrapper">
        <p class="dropdown-content__paragraph" v-for="product in productsList" :key="product">
          <a class="dropdown-content__link" href="#">{{ product }}</a>
        </p>
      </div>
      <div @click="openedMenu = !openedMenu" class="header-products-container">
        <p class="header-products-wrapper-paragraph">{{ productsTitle }}</p>
        <img class="products-icon__default"
             :class="{'products-icon__rotate': openedMenu}"
             width="10" height="8"
             :src="withBase(arrowDownIcon)"
             alt="arrow down icon"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import {withBase} from "@vuepress/client";
import {inject, onMounted, onUnmounted, ref} from "vue";

const {productsTitle, arrowDownIcon, productsList} = inject('themeConfig');

const openedMenu = ref(false)
const menu = ref(null)

const clickOutside = (event) => {
  !event.composedPath().includes(menu.value) && (openedMenu.value = false)
}


onMounted(() => {
  document.addEventListener('click', clickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', clickOutside)
})
</script>




<style lang="stylus">
@import '../../styles/config.styl'

.header-products-wrapper
  display: flex;
  align-items center
  justify-content space-between
  gap 0.75rem
  margin-right 25px

  &-paragraph
    font-size $text-default
    cursor pointer
    line-height 16px
    color white

.header-products-container
  display: flex;
  align-items center
  gap 14px

.dropbtn
  color: black;
  font-size: 13px;
  line-height 15px
  border: none;
  cursor: pointer;

.dropdown
  position: relative;
  display: inline-block;

  & > img
    cursor pointer

.dropdown-wrapper
  display: none;
  position: absolute;
  background-color: $dropdownBgColor;
  min-width: 200px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: -117px;
  top: 43px;

.dropdown-content__paragraph
  color: black;
  padding: 8px 20px;
  text-decoration: none;
  display: block;
  cursor pointer
  margin 0

.dropdown .dropdown-wrapper
  display: block;


.dropdown-content__link
  color black
  text-decoration none

.dropdown-wrapper p:hover
  background-color: white;

.products-icon
  &__rotate
    cursor pointer
    transform rotate(180deg)
    transition-duration 500ms

  &__default
    cursor pointer
    transition-duration 500ms
</style>
