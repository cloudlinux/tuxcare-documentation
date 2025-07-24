<script setup>
import { ref, computed, useSlots } from 'vue'

const slots = useSlots()
const tabKeys = Object.keys(slots)
const activeTab = ref(tabKeys[0] ?? '')
const currentTab = computed(() => activeTab.value)
</script>

<template>
  <div class="table-tabs mt-8 border rounded-lg overflow-hidden text-sm">
    <div class="bg-gray-50 flex justify-between items-center border-b">
<!--  <span class="font-medium text-gray-700">Optional Text:span>   -->
      <select
        v-model="activeTab"
        class="bg-white text-gray-800 text-sm rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option v-for="key in tabKeys" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
    </div>

    <div class="tab-content prose prose-sm max-w-none">
      <slot :name="currentTab" />
    </div>
  </div>
</template>


