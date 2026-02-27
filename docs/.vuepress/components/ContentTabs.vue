<template>
  <div class="content-tabs">
    <div class="content-tabs-buttons">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >{{ tab }}</button>
    </div>
    <div class="content-tabs-body">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <slot :name="'tab-' + index" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);
</script>

<style scoped>
.content-tabs {
  margin: 1rem 0;
}

.content-tabs-buttons {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #e0e3e8;
  margin-bottom: 1rem;
}

.content-tabs-buttons button {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  font-weight: 500;
  color: #5c6370;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.content-tabs-buttons button:hover {
  color: #1b1f27;
}

.content-tabs-buttons button.active {
  color: #163055;
  border-bottom-color: #163055;
  font-weight: 600;
}
</style>
