<template>
  <div class="sidebar-drawer__mobile" tabindex="-1" @keydown.esc="closeOnEscape">
    <Sidebar
        :closeSidebarDrawer="closeSidebarDrawer"
        :items="allPages"
        :isMobileWidth="isMobileWidth"
    >
      <template #top>
        <div class="sidebar-header">
          <p class="sidebar-header__paragraph">Select TuxCare docs</p>
          <DSelect
              :modelValue="modelValue"
              @update:model-value="$emit('update:model-value', $event)"
              @changeSidebarItems="$emit('changeSidebarItems', $event)"
              with-icon
              :options="documents"
          />
        </div>
      </template>
    </Sidebar>
  </div>
</template>

<script lang="ts" setup>
import {nextTick} from "vue";
import Sidebar from "../sidebar/Sidebar.vue";
import DSelect from "../components/DSelect.vue";

const props = defineProps({
  allPages: {
    type: Array,
    required: true,
    default: () => []
  },
  documents: {
    type: Array,
    required: true,
    default: () => []
  },
  closeSidebarDrawer:{
    type: Function,
    default: () => {}
  },
  modelValue:{
    type: Object,
    required: true,
    default: ()=>{}
  },
  isMobileWidth: {
    type: Boolean,
  },
})
defineEmits(['changeSidebarItems','update:model-value'])

// Escape closes the drawer and returns focus to the button that opened it.
const closeOnEscape = () => {
  props.closeSidebarDrawer()
  nextTick(() => (document.querySelector('.page-mobile__sidebar-menu') as HTMLElement | null)?.focus())
}
</script>

<style lang="stylus">
@import "../../styles/config.styl"
.sidebar-drawer__mobile
  z-index 2000 !important
  width 100vw !important
  position relative

  &:focus
    outline none

@media (max-width: $mobileBreakpoint)
  .sidebar-header
    padding-right 2.5rem !important
  .sidebar-header__paragraph
    margin-top 2.5rem !important
</style>