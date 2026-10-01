<template>
  <div ref="rootRef" class="prereqs">
    <div class="prereqs-header">
      <component :is="headingTag" ref="headingRef" :id="headingId" class="prereqs-title"><slot name="title">Prerequisites</slot></component>
    </div>
    <div class="prereqs-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

// id is rendered server-side so the section anchor exists in the static HTML.
// Override with <ELSPrerequisites id="..."> if a page has more than one block.
//
// level: heading level of the "Prerequisites" title. The default (3) fits the
// usual placement under a "## Installation"-style section. Pass :level="2"
// when the block sits directly under the page <h1>, so no level is skipped.
const props = withDefaults(defineProps<{ id?: string; level?: number | string }>(), {
  id: undefined,
  level: 3,
});
const headingId = computed(() => props.id || 'prerequisites');
const headingTag = computed(() => {
  const n = Math.min(6, Math.max(2, Number(props.level) || 3));
  return `h${n}`;
});

const rootRef = ref<HTMLElement | null>(null);
const headingRef = ref<HTMLElement | null>(null);

function anchorPrerequisites() {
  const heading = headingRef.value as HTMLElement | null;
  if (!heading || heading.dataset.anchored) return;
  heading.dataset.anchored = '1';

  const anchor = document.createElement('a');
  anchor.className = 'header-anchor prereq-anchor';
  anchor.setAttribute('href', `#${heading.id}`);
  anchor.setAttribute('aria-hidden', 'true');
  anchor.setAttribute('tabindex', '-1');
  anchor.textContent = '#';
  // On the left of the heading wording, vertically aligned with it.
  heading.insertBefore(anchor, heading.firstChild);
}

onMounted(() => {
  setTimeout(anchorPrerequisites, 0);
});
</script>

<style scoped>
.prereqs {
  border-radius: 10px;
  border: 1px solid #D9EDFF;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  /* Land below the fixed navbar when navigated to via the section anchor. */
  scroll-margin-top: 6rem;
}

.prereqs-header .prereqs-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: #1b1f27;
}

/* The anchor floats left at its natural position with a fixed width and a
   minimal gap; the body list below is indented to match (see .prereqs-body).
   font-size in rem (not em) keeps it identical to the ELSSteps anchor. */
.prereqs-header .prereqs-title :deep(a.prereq-anchor) {
  opacity: 0;
  font-size: 1rem;
  width: 0.7rem;
  padding-right: 0;
  margin-left: 0;
  /* Match the heading's line-height and nudge down so the floated # starts at
     the same level as the wording instead of riding above it. */
  line-height: inherit;
  margin-top: 0.1rem;
  transition: opacity 0.15s ease;
}

.prereqs-header .prereqs-title:hover {
  cursor: pointer;
}

.prereqs-header .prereqs-title:hover :deep(a.prereq-anchor) {
  opacity: 1;
}

/* Indent the body by the anchor's reserved width so the list aligns with the
   "Prerequisites" wording, which the floated anchor pushes right. */
.prereqs-body {
  padding-left: 0.7rem;
}

.prereqs-body :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.prereqs-body :deep(ul li) {
  position: relative;
  padding-left: 1.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-size: 0.92rem;
  color: #374151;
  line-height: 1.6;
}

.prereqs-body :deep(ul li::before) {
  content: "\2713";
  position: absolute;
  left: 0;
  top: 0.2rem;
  color: #16a34a;
  font-weight: 700;
  font-size: 0.92rem;
  line-height: 1.6;
}

.prereqs-body :deep(p) {
  margin: 0.25rem 0;
  font-size: 0.92rem;
  color: #374151;
}

.prereqs-body :deep(code) {
  background: rgba(37, 99, 235, 0.08);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.prereqs-body :deep(a) {
  color: #2563eb;
  text-decoration: none;
}

.prereqs-body :deep(a:hover) {
  text-decoration: underline;
}
</style>
