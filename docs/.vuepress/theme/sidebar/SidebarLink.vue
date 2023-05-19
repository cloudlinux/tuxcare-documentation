<script>
import {groupHeaders, isActive} from '../util'
import {h} from "vue"
import {usePageData} from "@vuepress/client";
import {RouterLink, useRoute} from "vue-router";

export default {
  functional: true,
  props: ['item'],
  render({item}) {
    if (!item) return;
    const $page = usePageData();
    const $route = useRoute();
    const selfActive = isActive($route, item?.path);
    const active = item?.type === 'auto'
        ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
        : selfActive;
    const link = renderHeader(h, item?.path, item.title || item?.path, active, item.headers);
    const configDepth = $page.value.frontmatter?.sidebarDepth != null
        ? $page.value.frontmatter?.sidebarDepth
        : 2;
    const maxDepth = configDepth == null ? 1 : configDepth;
    if (item?.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)]
    } else {
      if (item.headers && item.headers.length) {
        const children = groupHeaders(item.headers);
        return [link, renderChildren(h, children, item?.path, $route, maxDepth)];
      }
      return renderLink(h, item?.path, item.title || item?.path, active, item.children);
    }
  }
}

function renderLink(h, to, text, active, children, depth = 0) {
  const link = h(RouterLink, {
    'data-anchor': to,
    to,
    activeClass: '',
    exactActiveClass: '',
    class: {
      active,
      'sidebar-link': true,
      ['link-depth-level-' + depth]: true,
    },
  }, () => [text]);
  return h('div', {
    class: {
      active,
      'sidebar-link-container': !!children?.length
    },
    onClick: (e) => {
      const classes = e.target.classList;
      classes.toggle('collapsed')
    },
  }, [link]);
}

function renderHeader(h, to, text, active, childHeaders) {
  const hasDirectChildren = !!childHeaders && childHeaders.some(child => child.level === 2);
  return h('div', {
    class: {
      active,
      'collapsed': active,
      'sidebar-header': true,
      'sidebar-link': true,
      'sidebar-header--empty': !hasDirectChildren,
    },
    onClick: (e) => {
      const classes = e.target.classList;
      classes.toggle('collapsed')
    },
  }, [renderLink(h, to, text, active, null)])
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;

  return h('ul', {class: 'sidebar-sub-headers'}, children.map(c => {
    const active = isActive(route, path + '#' + c.slug);
    return h('li', {
      class: {
        'collapsible': depth < 2,
        'sidebar-sub-header': true
      }
    }, [
      renderLink(h, path + '#' + c.slug, c.title, active, c.children, depth),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1)
    ])
  }))
}
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.sidebar .sidebar-sub-header
  font-size 0.95em

  &.collapsible
    & > div
      margin-left 2rem

    & > .sidebar-link-container
      background-image url("../../public/expand-more-down.svg")
      background-repeat no-repeat
      background-position: left 17px top 16px
      background-size 16px 9px
      padding-left 2rem
      cursor pointer
      margin-left 0

      &.active
        background-color: $alice-blue;

      &.collapsed
        background-image url("../../public/expand-more.svg")
        background-size 16px 9px
        background-position: left 17px top 14.5px

        & + .sidebar-sub-headers
          display none

      .sidebar-link
        padding-left 0
        margin-left 1rem

  .sidebar-sub-headers
    margin-left 3rem

    &:first-child
      margin-left 0


.sidebar-link
  font-weight 400
  display inline-block
  color $textColor
  margin 0
  line-height 1.4
  cursor pointer

  &.sidebar-header
    background-image url("../../public/expand-more.svg")
    background-repeat no-repeat
    background-position left 5px center
    background-size 16px 9px
    position relative
    &:not(.sidebar-header--empty)::before
      content: ''
      position: absolute
      width: 100%
      height: 100%

    & + .sidebar-sub-headers
      display none

    &.collapsed
      border-left-color $accentColor
      background-image url("../../public/expand-more-down.svg")
      background-size 16px 9px
      background-position left 5px center


  &:hover
    color $accentColor

  &.active
    font-weight 600
    color $sidebarHeadingColorText

  &.collapsed + .sidebar-sub-headers
    display block

  .sidebar-group &
    padding 0.6rem 0 0.6rem 0.43rem

  .sidebar-group &.sidebar-header
    padding 0 0 0 2rem

  .sidebar-header &
    margin 0
    padding 0.55rem 0 0.5rem 0

  .sidebar-sub-headers &
    &.active
      font-weight 500
      border-right 3px solid $accentColor
      background-color $sidebarActiveColor

.sidebar-header--empty
  background-image none !important

</style>
