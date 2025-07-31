<script setup>
import { ref, computed, useSlots, onMounted, watch, nextTick } from 'vue'

const slots = useSlots()
const tabKeys = Object.keys(slots)
const activeTab = ref(tabKeys[0] ?? '')
const currentTab = computed(() => activeTab.value)
const wrapperRef = ref(null)

function formatKey(key) {
  return key.replace(/[__]/g, ' ')
}

defineProps({
  label: {
    type: String,
    default: ''
  }
})

onMounted(() => {
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
  <div ref="wrapperRef" class="table-tabs" :id="activeTab">
    <div class="tab-header">
      <span v-if="label" class="label-text">
        {{ label }}
      </span>
      <select v-model="activeTab" class="tab-select">
        <option v-for="key in tabKeys" :key="key" :value="key">
          {{ formatKey(key) }}
        </option>
      </select>
    </div>

    <div class="tab-content">
      <slot :name="currentTab" />
    </div>

    <div class="bottom-line" />
  </div>
</template>


<style scoped>
.table-tabs {
  background: #fff;
  scroll-margin-top: 4rem;
}

.tab-header {
  border-top: 1px solid #d1d5db;
  padding: 1rem 0;
}

.label-text {
  color: #314659;
}

.tab-select {
  background-color: #fff;
  color: #314659;
  font-size: 0.9rem;
  padding: 0.25rem 0.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
}

.tab-select:focus {
  border-color: #5897fb;
  box-shadow: 0 0 0 1px #5897fb;
}

.bottom-line {
  border-top: 1px solid #d1d5db;
  margin-top: 1rem; 
}
</style>

