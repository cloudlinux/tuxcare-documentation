<script>
import {groupHeaders, isActive} from '../util'
import {h, inject} from "vue"
import {usePageData} from "@vuepress/client";
import {RouterLink, useRoute,useRouter} from "vue-router";

// Expand/collapse state shared by every link of one sidebar (see Sidebar.vue).
const noExpansion = {isExpanded: () => false, toggle: () => {}}

export default {
  functional: true,
  props: ['item', 'closeSidebarDrawer'],
  render({item,closeSidebarDrawer}) {
    if (!item) return;
    const $page = usePageData();
    const $route = useRoute();
    const $router = useRouter();
    const expansion = inject('sidebarExpansion', noExpansion);
    // A link chosen in the mobile drawer closes it; focus then goes to the content.
    const onLinkChosen = () => closeSidebarDrawer && closeSidebarDrawer({returnFocus: 'content'});
    const ctx = {$router, expansion, onLinkChosen};
    const selfActive = isActive($route, item?.path);
    const active = item?.type === 'auto'
        ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
        : selfActive;
    const configDepth = $page.value.frontmatter?.sidebarDepth != null
        ? $page.value.frontmatter?.sidebarDepth
        : 5;
    const maxDepth = configDepth == null ? 1 : configDepth;
    const hasList = maxDepth >= 1;
    if (item?.type === 'auto') {
      const link = renderHeader(h, item?.path, item.title || item?.path, active, item.headers, ctx, item?.icon, hasList);
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth, 1, ctx, item?.path)]
    } else {
      if (item.headers && item.headers.length) {
        const children = groupHeaders(item.headers);
        const link = renderHeader(h, item?.path, item.title || item?.path, active, item.headers, ctx, item?.icon, hasList);
        return [link, renderChildren(h, children, item?.path, $route, maxDepth, 1, ctx, item?.path)];
      }
      return renderLink(h, item?.path, item.title || item?.path, active, 0, ctx, item?.icon);
    }
  }
}

// Stable id for the sub-list a toggle button controls.
const listId = (to) => 'sidebar-list-' + to.replace(/[^\w-]+/g, '-')

// Same-page #hash links are plain anchors: RouterLink would mark every one of
// them aria-current="page", since the router ignores the hash when matching.
function renderAnchor(h, to, attrs, content, {$router, onLinkChosen}) {
  if (!to.includes('#')) {
    return h(RouterLink, {
      ...attrs,
      to,
      activeClass: '',
      exactActiveClass: '',
      onClick: onLinkChosen,
    }, () => content);
  }
  return h('a', {
    ...attrs,
    href: $router.resolve(to).href,
    onClick: (e) => {
      onLinkChosen();
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      $router.push(to);
    },
  }, content);
}

function renderToggle(h, to, text, expanded, hasList, onToggle) {
  return h('button', {
    type: 'button',
    class: 'sidebar-toggle',
    'aria-expanded': String(expanded),
    'aria-controls': hasList ? listId(to) : undefined,
    'aria-label': `${text} subsections`,
    onClick: (e) => {
      e.stopPropagation();
      onToggle();
    },
  });
}

function renderLink(h, to, text, active, depth = 0, ctx, icon, toggle) {
  const linkContent = icon
    ? [
        h('img', {
          src: icon,
          class: 'sidebar-link-icon',
          alt: '',
          'aria-hidden': 'true',
          loading: 'lazy',
          role: 'presentation'
        }),
        text
      ]
    : [text];

  const link = renderAnchor(h, to, {
    'data-anchor': to,
    class: {
      active,
      'sidebar-link': true,
      'sidebar-link--with-icon': !!icon,
      ['link-depth-level-' + depth]: true,
    },
  }, linkContent, ctx);

  // `toggle` is set for sub-headings whose nested list can be collapsed.
  if (!toggle) return h('div', {class: {active}}, [link]);

  const expanded = ctx.expansion.isExpanded(to);
  return h('div', {
    class: {
      active,
      'collapsed': !expanded,
      'sidebar-link-container': true
    },
  }, [renderToggle(h, to, text, expanded, toggle.hasList, () => ctx.expansion.toggle(to)), link]);
}

function renderHeader(h, to, text, active, childHeaders, ctx, icon, hasList) {
  const hasDirectChildren = !!childHeaders && childHeaders.some(child => child.level !== 1);
  // Page entries: sub-headings show for the current page unless toggled.
  const expanded = ctx.expansion.isExpanded(to, active);
  return h('div', {
    class: {
      active,
      'collapsed': expanded,
      'sidebar-header': true,
      'sidebar-link': true,
      'sidebar-header--empty': !hasDirectChildren,
      'sidebar-header--with-icon': !!icon,
    },
    // Mouse clicks on the row (outside the link and the toggle) open the page.
    onClick: (e) => {
      if (e.target !== e.currentTarget) return;
      ctx.expansion.toggle(to, active);
      ctx.$router.push(to);
    }
  }, [
    hasDirectChildren && renderToggle(h, to, text, expanded, hasList, () => ctx.expansion.toggle(to, active)),
    renderLink(h, to, text, active, 0, ctx, icon)
  ])
}

function renderChildren(h, children, path, route, maxDepth, depth = 1, ctx, to) {
  if (!children || depth > maxDepth) return null;

  return h('ul', {class: 'sidebar-sub-headers', id: to ? listId(to) : undefined}, children.map(c => {
    const childTo = path + '#' + c.slug;
    const active = isActive(route, childTo);
    const collapsible = depth < 3 && !!c.children?.length;
    const hasList = depth + 1 <= maxDepth;
    return h('li', {
      class: {
        'collapsible': depth < 3,
        'sidebar-sub-header': true
      }
    }, [
      renderLink(h, childTo, c.title, active, depth, ctx, undefined, collapsible && {hasList}),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1, ctx, childTo)
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
      position relative
      background-image url("../../public/expand-more-down.svg")
      background-repeat no-repeat
      background-position: left 1.0625rem top 1rem
      background-size 1rem 0.5625rem
      padding-left 2rem
      cursor pointer
      margin-left 0

      &.active
        background-color: $alice-blue;

      &.collapsed
        background-image url("../../public/expand-more.svg")
        background-size 1rem 0.5625rem
        background-position: left 1.0625rem top 0.90625rem

        & + .sidebar-sub-headers
          display none

      .sidebar-link
        padding-left 0
        margin-left 1rem

  .sidebar-sub-headers
    margin-left 1.5rem

    &:first-child
      margin-left 0

    .sidebar-sub-headers
      margin-left 3rem

// Expand/collapse button over the arrow drawn by the row (at least 24x24px).
.sidebar-toggle
  position absolute
  left 0.5625rem
  top 0.5rem
  width 2rem
  height 1.5rem
  margin 0
  padding 0
  background none
  border 0
  cursor pointer

  .sidebar-header > &
    left 0
    top 50%
    width 1.625rem
    transform translateY(-50%)

.sidebar-link-icon
  max-width 1.5rem
  height auto
  margin-right 0.5rem
  vertical-align middle
  display inline-block

.sidebar-link
  font-weight 400
  display inline-block
  color $textColor
  margin 0
  line-height 1.4
  cursor pointer

  &.sidebar-link--with-icon
    display flex
    align-items center

  &.sidebar-header
    background-image url("../../public/expand-more.svg")
    background-repeat no-repeat
    background-position left 5px center
    background-size 1rem 0.5625rem
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
      background-size 1rem 0.5625rem
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

.sidebar-header--empty
  background-image none !important

@media (max-width: $mobileBreakpoint)

  .sidebar-sub-headers:has(.sidebar-sub-header > div.active)
    margin-left 0

  .sidebar .sidebar-sub-header .sidebar-sub-headers > .sidebar-sub-header > div:not(.active)
    margin-left 3.2rem

  .sidebar .sidebar-sub-header .sidebar-sub-headers,
  .sidebar .sidebar-sub-header .sidebar-sub-headers .sidebar-sub-headers
    margin-left 0

  .sidebar-sub-headers > div:is(.active)
    margin 0 !important;

  .sidebar-link.sidebar-header, .sidebar-link.sidebar-header.collapsed
    background-position left 2px center

  .sidebar .sidebar-sub-header.collapsible > div:is(.active)
    margin 0 !important

  .sidebar-sub-headers .sidebar-link.active
    border-right none !important
    border-radius 7px
    padding-left 3.5rem

  .sidebar .sidebar-sub-header.collapsible > .sidebar-link-container.active
    background-color: $sidebarActiveColor !important
    border-radius 7px

  .active:is(.active > .link-depth-level-1)
    background $sidebarActiveColor
    border-right none !important
    border-radius 7px
    padding-left 2.65rem

  .active:is(.active > .link-depth-level-3)
    padding-left 7rem !important
</style>
