<template>
  <div ref="dialogRef"
       class="sidebar-drawer__mobile"
       role="dialog"
       aria-modal="true"
       aria-label="Documentation menu"
       tabindex="-1"
       @keydown.esc="onEscape"
       @keydown.tab="trapFocus"
  >
    <Sidebar
        :closeSidebarDrawer="closeSidebarDrawer"
        :items="allPages"
        :isMobileWidth="isMobileWidth"
    >
      <template #top>
        <button type="button"
                class="sidebar-drawer__close"
                aria-label="Close documentation menu"
                @click="closeSidebarDrawer()"
        >
          <svg class="sidebar-drawer__close-img" viewBox="0 0 20 21" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M19.7449 20.1119C19.4084 20.4484 18.862 20.4484 18.5255 20.1119L10 11.5852L1.47184 20.1119C1.13534 20.4484 0.588869 20.4484 0.252372 20.1119C-0.0841241 19.7753 -0.0841241 19.2288 0.252372 18.8922L8.78054 10.3656L0.255064 1.83629C-0.0814321 1.49975 -0.0814321 0.953206 0.255064 0.616664C0.591561 0.280122 1.13803 0.280122 1.47453 0.616664L10 9.14598L18.5282 0.619356C18.8647 0.282815 19.4111 0.282815 19.7476 0.619356C20.0841 0.955898 20.0841 1.50244 19.7476 1.83898L11.2195 10.3656L19.7449 18.8949C20.0814 19.2315 20.0814 19.7753 19.7449 20.1119Z"/>
          </svg>
          <span class="sidebar-drawer__close-text">close</span>
        </button>
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
import {onBeforeUnmount, onMounted, ref} from "vue";
import Sidebar from "../sidebar/Sidebar.vue";
import DSelect from "../components/DSelect.vue";
import {useFocusTrap} from "../composables/useFocusTrap";
import {setModalOpen} from "../composables/useModalOpen";

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

const dialogRef = ref<HTMLElement | null>(null)

// Modal: keep Tab inside the drawer (the page behind is made inert by Layout.vue).
const trapFocus = useFocusTrap(dialogRef)

// Escape closes the drawer (Page.vue returns focus to the menu button),
// unless it is closing the open docs select inside it.
const onEscape = (event: KeyboardEvent) => {
  if ((event.target as HTMLElement | null)?.closest('.vs--open')) return
  props.closeSidebarDrawer()
}

// The drawer is only mounted while open.
onMounted(() => setModalOpen('sidebar', true))
onBeforeUnmount(() => setModalOpen('sidebar', false))
</script>

<style lang="stylus">
@import "../../styles/config.styl"
// A real box under the header, matching the fixed .sidebar it wraps, so the
// dialog itself can take focus.
.sidebar-drawer__mobile
  z-index 2000 !important
  position fixed
  top 3.875rem
  right 0
  bottom 0
  left 0

  &:focus
    outline none

.sidebar-drawer__close
  position absolute
  top 0.75rem
  right 0.625rem
  z-index 1
  min-width 2.5rem
  min-height 2.5rem
  background none
  border 0
  padding 0.25rem
  font inherit
  color $textColor
  cursor pointer
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  gap 0.375rem

  &-img
    width 0.9375rem
    height 0.9375rem

  &-text
    font-size 0.625rem
    line-height 1

@media (max-width: $mobileBreakpoint)
  .sidebar-header
    padding-right 2.5rem !important
  .sidebar-header__paragraph
    margin-top 2.5rem !important
</style>
