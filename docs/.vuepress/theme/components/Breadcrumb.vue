<template>
  <div class="breadcrumb-wrapper">
    <router-link
      v-for="(crumb, index) in breadCrumbs"
      :key="crumb.path"
      class="breadcrumb"
      :to="crumb.path"
    >
      {{ crumb.title }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePageData, useSiteData } from "@vuepress/client";

const page = usePageData();
const site = useSiteData();

const siteTitle = computed(() => site.value.title);

const titleMap = {
  '/els-for-languages/': 'ELS for Languages',
  '/els-for-libraries/': 'ELS for Libraries',
  '/els-for-applications/': 'ELS for Applications',
  '/els-for-os/': 'ELS for OS',
  '/els-for-runtimes/': 'ELS for Runtimes',
};

const breadCrumbs = computed(() => {
  const segments = page.value.path.split("/").filter(Boolean);
  const crumbs = [{ path: "/", title: "Documentation" }];
  let cumulativePath = "";

  for (let i = 0; i < segments.length; i++) {
    cumulativePath += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const fullPath = cumulativePath.endsWith(".html") ? cumulativePath : `${cumulativePath}/`;

    let title;

    if (isLast) {
      title = page.value.title;
    } else {
      title = titleMap[fullPath] || fullPath;
    }

    crumbs.push({ path: fullPath, title });
  }

  return crumbs;
});
</script>

<style lang="stylus" scoped>
@import '../../styles/config.styl'

.breadcrumb
  color $breadcrumbColor
  text-decoration none

  &:not(:last-child)::after
    content " > "
    font-family inherit
    font-size inherit
    color $breadcrumbColor

  &:not(:last-child)
    cursor pointer

    &:hover
      color #1994f9

  &:last-child
    cursor default
    color $breadcrumbColor


</style>



