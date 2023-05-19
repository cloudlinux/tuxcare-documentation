<template>
  <div class="theme-container">
    <HeaderLayout/>
    <Sidebar
        v-if="allPages.length"
        :items="allPages"
    >
      <template #top>
        <div v-if="documents" class="sidebar-header">
          <p class="sidebar-header__paragraph">Select CL docs</p>
          <DSelect
              with-icon
              v-model="selectedValue"
              @changeSidebarItems="changeSidebarItems"
              :options="documents"
          />
        </div>
      </template>
    </Sidebar>
    <Page :sidebarItems="sidebarItems" :allPages="allPages"/>
    <Footer/>
  </div>
</template>


<script setup>
import Footer from '../footer/Footer.vue'
import Sidebar from "../sidebar/Sidebar.vue";
import HeaderLayout from "../header/HeaderLayout.vue";
import Page from "../components/Page.vue";
import DSelect from "../components/DSelect.vue";
import {useRoute, useRouter} from "vue-router";
import {computed, inject, onMounted, ref} from "vue";
import { usePageData } from "@vuepress/client";
import {pagesData} from "../../.temp/internal/pagesData.js";
import {resolveSidebarItems} from "../util.js";

const { documents } = inject('themeConfig')

const selectedValue = ref(null);
const router = useRouter();
const route = useRoute();
const page = usePageData()
const allPages = ref([])

const sidebarItems = computed(() => page.value && allPages.value.length ? resolveSidebarItems(page.value, route, allPages.value) : [])

const changeSidebarItems = (e) => router.push(e.link)

const getStartedString = () => {
  const str = page.value?.path
  const index = str.indexOf("/", str.indexOf("/") + 1);
  return str.substr(0, index);
}

onMounted(() => {
  Object.values(pagesData).map(f => f().then(res => {
    allPages.value.push(res)
  }))
  selectedValue.value = documents.find((item) => item.link?.startsWith(getStartedString()));
})

</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../../styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
@import "../../styles/config.styl";
.sidebar-header
  padding: 0 10px 0 20px

  &__paragraph
    font-size 14px
    font-weight 500
    color $layoutParagraphColor
    line-height 20px
    margin 20px 0 8px 0

  &__select
    width 100%
    border 1px solid $selectBorderColor
    outline none
    padding 10px 10px 10px 1rem
    border-radius 8px
</style>