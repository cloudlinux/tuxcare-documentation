<script setup>
import { ref, computed, useSlots, onMounted, watch, nextTick, useId } from 'vue'

const slots = useSlots()
const tabKeys = Object.keys(slots)
const activeTab = ref(tabKeys[0] ?? '')
const currentTab = computed(() => activeTab.value)
const wrapperRef = ref(null)
// Unique per instance (SSR-safe) so the <label for> pairing works and several
// TableTabs on one page never share an id.
const selectId = `tabletabs-${useId()}`

function formatKey(key) {
  return key.replace(/[__]/g, ' ')
}

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  // Accessible name used when there is no visible label.
  ariaLabel: {
    type: String,
    default: ''
  },
  labels: {
    type: Object,
    default: () => ({})
  },
  bottomLine: {
    type: Boolean,
    default: true
  }
})

// Without a visible label, name the select after the section it sits in
// (the nearest preceding heading), falling back to a generic name.
const fallbackName = ref('Select table view')
const selectName = computed(() => props.label ? undefined : (props.ariaLabel || fallbackName.value))

function nearestHeadingText(el) {
  let node = el
  while (node && node !== document.body) {
    let sib = node.previousElementSibling
    while (sib) {
      if (/^H[1-6]$/.test(sib.tagName)) {
        return sib.textContent.replace(/^#\s*/, '').trim()
      }
      sib = sib.previousElementSibling
    }
    node = node.parentElement
  }
  return ''
}

onMounted(() => {
  if (!props.label && !props.ariaLabel && wrapperRef.value) {
    const heading = nearestHeadingText(wrapperRef.value)
    if (heading) fallbackName.value = `${heading}: select table view`
  }
  const hash = decodeURIComponent(window.location.hash.slice(1))
  if (tabKeys.includes(hash)) {
    activeTab.value = hash
    nextTick(() => {
      const el = wrapperRef.value
      if (el) {
        const offset = 80
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    })
  }
})

watch(activeTab, (newVal) => {
  if (newVal) {
    history.replaceState(null, '', `#${encodeURIComponent(newVal)}`)
  }
})
</script>

<template>
  <div ref="wrapperRef" class="table-tabs">
    <div class="tab-header">
      <label v-if="label" :for="selectId" class="label-text">
        {{ label }}
      </label>
      <select :id="selectId" v-model="activeTab" class="tab-select" :aria-label="selectName" :aria-controls="`${selectId}-panel`">
        <option v-for="key in tabKeys" :key="key" :value="key">
          {{ labels[key] || formatKey(key) }}
        </option>
      </select>
    </div>

    <div class="tab-content" :id="`${selectId}-panel`">
      <slot :name="currentTab" />
    </div>

    <div v-if="bottomLine" class="bottom-line" />
  </div>
</template>


<style scoped>
.table-tabs {
  background: #fff;
  scroll-margin-top: 4rem;
}

.tab-header {
  display: flex; align-items: center; gap: .75rem; flex-wrap: wrap;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  border: 1px solid #d9edff;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.label-text {
  color: #163055;
  font-size: .9rem;
  font-weight: 600;
}

.tab-select {
  appearance: none; -webkit-appearance: none; cursor: pointer;
  font-size: .9rem; font-weight: 600; color: #163055;
  background: #fff url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="%23163055" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    no-repeat right .8rem center;
  padding: .55rem 2.5rem .55rem .95rem;
  border: 1.5px solid #163055; border-radius: 8px;
  box-shadow: 0 1px 3px rgba(22, 48, 85, .12);
  transition: border-color .15s ease, box-shadow .15s ease;
}

.tab-select:hover { border-color: #0b5cad; box-shadow: 0 2px 6px rgba(22, 48, 85, .18); }

/* Outline (not box-shadow only) so the ring survives forced-colors mode and
   reaches 3:1 against the light header (WCAG 2.4.7, 1.4.11). */
.tab-select:focus-visible {
  outline: 2px solid #0b5cad; outline-offset: 2px;
  border-color: #0b5cad;
}

@media (forced-colors: active) {
  .tab-select:focus-visible { outline-color: Highlight; }
}

.bottom-line {
  border-top: 1px solid #d1d5db;
  margin-top: 1rem; 
}

.tab-content :deep(.els-steps) {
  margin-top: 0.5rem;
  padding-top: 0;
}
</style>

