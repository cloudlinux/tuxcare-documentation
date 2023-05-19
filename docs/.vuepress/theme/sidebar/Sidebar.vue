<template>
  <div class="sidebar">
    <slot name="top"/>
    <ul class="sidebar-links" v-if="sidebarItemsTest.length">
      <li v-for="(item, i) in sidebarItemsTest" :key="i">
        <SidebarGroup
            v-if="item.type === 'group'"
            :item="item"
            :first="i === 0"
            :open="i === openGroupIndex"
            :collapsable="!!(item.collapsable || item.collapsible)"
            @toggle="toggleGroup(i)"
        />
        <SidebarLink v-else :item="item" :closeFirstSidebarItem="item.closeFirstSidebarItem"/>
      </li>
    </ul>
    <slot name="bottom"/>
  </div>
</template>


<script setup>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'
import {isActive, resolveSidebarItems} from '../util'
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {usePageData} from "@vuepress/client";

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const propsItems = computed(() => {
  return props.items
})

const route = useRoute()
const page = usePageData()

const sidebarItemsTest = computed(() => resolveSidebarItems(page.value, route, propsItems.value))

const openGroupIndex = ref(0)

const refreshIndex = () => {
  const index = resolveOpenGroupIndex(
      route,
      props.items
  )
  if (index > -1) {
    openGroupIndex.value = index
  }
}

const toggleGroup = (index) => {
  openGroupIndex.value = index === openGroupIndex.value ? -1 : index
}

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= window.innerHeight - 350
  );
}
watch(() => route, refreshIndex)
const checkIfScroll = () => {
  const pageAnchors = document.querySelectorAll('.header-anchor')
  const sidebar = document.querySelector('.sidebar')
  const sidebarAnchors = sidebar.querySelectorAll('a')
  const sidebarAnchorsContainer = sidebar.querySelectorAll('.collapsible.sidebar-sub-header')
  const sidebarStringLinks = Array.from(sidebarAnchors).map(a => a.getAttribute('data-anchor'))

  pageAnchors.forEach((a)=>{
    if(a.getAttribute('data-anchor')) return
    a.setAttribute('data-anchor', page.value.path+a.hash)
  })

  pageAnchors.forEach(a => {
    if (isInViewport(a)) {
      const currentLink = sidebarStringLinks.find(link => link === a.getAttribute('data-anchor'))
      sidebarAnchorsContainer.forEach(container => {
        container.querySelectorAll('.sidebar-link-container').forEach(cl => {
          if (container.querySelector(`a[data-anchor="${currentLink}"]`)) cl.classList.remove("collapsed")
          else cl.classList.add("collapsed")
        })
      })

      if (sidebar.querySelector(`a[data-anchor="${currentLink}"]`)) {
        sidebarAnchors.forEach(a => a.classList.remove("active"))
        sidebar.querySelector(`a[data-anchor="${currentLink}"]`).classList.add("active")
      }
    }
  })
}

const resolveOpenGroupIndex = (route, items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}

onMounted(() => {
  refreshIndex()
  window.addEventListener("scroll", checkIfScroll)
})

onUnmounted(() => window.removeEventListener("scroll", checkIfScroll))
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.sidebar
  ul
    padding 0
    margin 0
    list-style-type none

  a
    display block

  .sidebar-group-items
    margin-left 32px
    margin-right 10px

</style>
