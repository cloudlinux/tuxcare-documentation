<template>
  <form id="search-form" class="drawer-header__input">
    <input :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           id="algolia-search-input"
           :placeholder="placeholder"
           :class="activeSearchClass"
           @keypress.enter.prevent="$emit('openDrawer')"
    />
    <div :class="activeSearchIconClass">
      <img @click="$emit('openDrawer')" alt="search icon" :src="withBase(activeSearchIcon)"/>
    </div>
  </form>
</template>

<script setup>
import {usePageFrontmatter, withBase} from "@vuepress/client";
import {computed, inject, watch} from "vue";
const {headerDefaultSearchIcon, headerSearchIcon} = inject('themeConfig')

const props = defineProps({
  options: {
    type: [Object, Array],
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  isOpenDrawer: {
    type: Boolean,
    required: true
  },
});
const emit = defineEmits(["openDrawer", 'update:modelValue', 'result'])

const {headerSearchPlaceholder} = inject('themeConfig')


const frontmatter = usePageFrontmatter()
const isGlobalLayout = computed(() => {
  return frontmatter.value.layout === 'HomeLayout'
})

const activeSearchClass = computed(() => {
  return props.isOpenDrawer ? 'drawer-header__search' : isGlobalLayout.value ? 'header-layout__search' : 'header-layout__search-default'
})

const activeSearchIconClass = computed(() => {
  return props.isOpenDrawer ? 'drawer-header__search-icon' : isGlobalLayout.value ? 'header-layout__search-icon' : 'header-layout__search-icon-default'
})

const activeSearchIcon = computed(() => {
  return isGlobalLayout.value || props.isOpenDrawer ? headerSearchIcon : headerDefaultSearchIcon
})

const placeholder = computed(() => {
  return props.isOpenDrawer ? 'Search' : isGlobalLayout.value ? headerSearchPlaceholder : 'Search'
})


const initialize = async (userOptions) => {
  if (typeof window === "undefined") {
    return;
  }
  const [docsearchModule] = await Promise.all([
    import(/* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.js"),
    import(/* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.css"),
  ]);
  const docsearch = docsearchModule.default;
  docsearch(
      Object.assign({}, userOptions, {
        inputSelector: "#algolia-search-input",
        handleSelected: () => {
          emit('openDrawer')
        },
        transformData: (hits) => {
          emit('result', hits)
        },
      })
  );
};
watch(
    () => props.options,
    async (newValue) => {
     await initialize(newValue);
    }, {
      immediate: true
    }
);
</script>


<style lang="stylus">
@import '../../styles/config.styl'
.algolia-autocomplete
  .ds-dropdown-menu
    display none !important

.drawer-header__search
  width: $searchWidth
  position relative
  border-radius: $homeSearchBorderRadius
  border none
  padding $searchVerticallyPadding $searchHorizontallyPadding
  color: $searchColorText;
  font-size: $searchColorFontSize
  line-height: 16px
  outline: none

  &-icon
    position absolute
    top: 23%;
    right 5%
    cursor pointer

.drawer-header__wrapper
  display: flex;
  align-items center
  gap 40px

.drawer-header__paragraph
  margin 0
  color $headerSearchTitleColor
  font-weight $headerSearchFontWeight
  font-size $headerSearchFontSize
  line-height 35.8px

.drawer-header__input
  position relative
  display: flex;
  justify-content center
  align-content center
</style>
