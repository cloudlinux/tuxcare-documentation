<template>
  <nav class="breadcrumb-wrapper" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li
        v-for="(crumb, index) in breadCrumbs"
        :key="crumb.path"
        class="breadcrumb-item"
      >
        <span
          v-if="index === breadCrumbs.length - 1"
          class="breadcrumb breadcrumb--current"
          aria-current="page"
        >{{ crumb.title }}</span>
        <template v-else>
          <router-link class="breadcrumb" :to="crumb.path">{{ crumb.title }}</router-link>
          <span class="breadcrumb-separator" aria-hidden="true">&gt;</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { usePageData, useSiteData } from "@vuepress/client";

const page = usePageData();
const site = useSiteData();

const siteTitle = computed(() => site.value.title);

const titleMap = {
  '/els-for-languages/': 'ELS for Languages',
  '/els-for-libraries/': 'ELS for Language Ecosystems',
  '/els-for-applications/': 'ELS for Applications',
  '/els-for-os/': 'ELS for OS',
  '/els-for-runtimes/': 'ELS for Runtimes',
  '/enterprise-support-for-almalinux/': 'Enterprise Support for AlmaLinux',
  '/securechain/': 'SecureChain for Open Source Software',
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

.breadcrumb-list
  display flex
  flex-wrap wrap
  align-items center
  list-style none
  margin 0
  padding 0

.breadcrumb-item
  display inline-flex
  align-items center

.breadcrumb
  display inline-block
  min-height 24px
  line-height 24px
  color $breadcrumbColor
  text-decoration none

  &:hover
    color #1994f9

.breadcrumb--current
  cursor default

  &:hover
    color $breadcrumbColor

.breadcrumb-separator
  margin 0 0.3em
  color $breadcrumbColor
</style>
