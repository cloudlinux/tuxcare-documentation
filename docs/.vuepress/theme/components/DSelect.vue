<template>
  <VueSelect
      ref="dropdown"
      @update:model-value="changeSidebarItems"
      :model-value="modelValue"
      label="title"
      value="link"
      :clearable="false"
      :searchable="false"
      :options="options"
      :map-keydown="mapKeydown"
  >
    <template #open-indicator="{ attributes }">
      <div v-if="withIcon" class="select-icon" v-bind="attributes">
        <img :src="withBase(searchSelectIcon)" alt=""/>
      </div>
      <span v-else/>
    </template>
  </VueSelect>
</template>

<script setup>
import VueSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import {inject, onMounted, onUnmounted, ref} from "vue";
import {withBase} from "@vuepress/client";

const props = defineProps({
  // Accessible name of the control; matches the visible "Select TuxCare docs" label.
  label: {
    type: String,
    default: 'Select TuxCare docs'
  },
  withIcon: {
    type: Boolean,
    default: true
  },
  modelValue: {
    type: Object,
    default: () => ({
      label: '',
      value: ''
    })
  },
  options: {
    type: Array,
    default: () => []
  }
})
const {searchSelectIcon} = inject("themeConfig")
const emit = defineEmits(['changeSidebarItems', 'update:selectedValue', 'update:model-value'])

const changeSidebarItems = (e) => {
  emit('changeSidebarItems', e)
  emit('update:model-value', e)
}
const dropdown = ref();
const closeDropdown = () => {
  if (!dropdown.value) return
  dropdown.value.open = false
}
const onWindowClick = (event) => {
  if (!dropdown.value?.$el.contains(event.target)) closeDropdown()
}

// Keyboard support for the (non-searchable) select:
// Enter / Space / Arrow keys open the list, Esc closes it without moving
// focus away from the control.
const mapKeydown = (map, vm) => {
  const openIfClosed = (fallback) => (e) => {
    if (!vm.open) {
      e.preventDefault()
      vm.open = true
      return
    }
    return fallback?.(e)
  }
  return {
    ...map,
    13: openIfClosed(map[13]),
    32: openIfClosed(map[13]),
    38: openIfClosed(map[38]),
    40: openIfClosed(map[40]),
    27: (e) => {
      e.preventDefault()
      vm.open = false
    },
  }
}

onMounted(() => {
  window.addEventListener('click', onWindowClick)
  // vue-select hard-codes aria-label="Search for option" on the combobox;
  // its input is labelled by the combobox, so naming it fixes both.
  dropdown.value?.$el.querySelector('[role="combobox"]')?.setAttribute('aria-label', props.label)
})
onUnmounted(() => window.removeEventListener('click', onWindowClick))
</script>

<style lang="stylus">
@import '../../styles/config.styl'
.v-select
  .vs__selected-options
    padding 0.3125rem 0 0.3125rem 0.6875rem

  .vs__dropdown-option
    padding-left 1.125rem !important

  .vs__selected
    display block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 12.5rem

  // Visually hidden but still focusable: vue-select's keyboard handling lives
  // on this input, so it must stay in the tab order.
  .vs__search
    position absolute
    width 1px
    height 1px
    padding 0
    margin 0
    border 0
    opacity 0

  .vs__dropdown
    &-toggle
      width 100%
      height 2.6875rem
      border 1px solid $selectBorderColor
      outline none
      border-radius $selectBorderRadius
      background white

  &:focus-within .vs__dropdown-toggle
    outline 2px solid $accentColor
    outline-offset 2px

    &-menu
      margin-top 0.3125rem
      border-radius 0.25rem

    &-option
      padding 0.5rem

  .select-icon
    margin-right 1rem

@media (max-width: $mobileBreakpoint)
  .v-select
    .vs__selected
      margin 0
      border 0

      &-options
        padding 0.625rem 0 0.3125rem 1rem
</style>