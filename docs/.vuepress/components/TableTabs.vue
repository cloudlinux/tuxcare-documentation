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

// Display select
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
  <div
    ref="wrapperRef"
    class="table-tabs mt-8 border rounded-lg overflow-hidden text-sm scroll-mt-24"
    :id="activeTab"
  >
    <div class="bg-gray-50 flex justify-between items-center border-b px-4 py-2">
<!--      <span class="font-medium text-gray-700">Optional Text:</span>   -->
      <select
        v-model="activeTab"
        class="bg-white text-gray-800 text-sm rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option v-for="key in tabKeys" :key="key" :value="key">
          {{ formatKey(key) }}
        </option>
      </select>
    </div>

    <div class="tab-content prose prose-sm max-w-none p-4">
      <slot :name="currentTab" />
    </div>
  </div>
</template>

