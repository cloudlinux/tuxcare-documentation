<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="sidebar-section-header">
    <img :src="item.icon" class="language-logo" alt="language-logo" />
    <span class="language-title">{{ item.title }}</span>
  </div>
</template>

<style scoped>
.sidebar-section-header {
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem 0;
  gap: 0.5rem;
  position: relative;
  left: -1rem;
}

.language-logo {
  max-width: 2rem;
  height: auto;
}

.language-title {
  font-size: 1rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: 0.01em;
}
</style>
