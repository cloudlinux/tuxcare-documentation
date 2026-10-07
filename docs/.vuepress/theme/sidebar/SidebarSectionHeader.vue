<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  collapsible: {
    type: Boolean,
    default: false
  },
  expanded: {
    type: Boolean,
    default: true
  }
});

defineEmits(['toggle']);
</script>

<template>
  <div
      class="sidebar-section-header"
      :class="{ collapsible, expanded }"
      :role="collapsible ? 'button' : undefined"
      :tabindex="collapsible ? 0 : undefined"
      :aria-expanded="collapsible ? expanded : undefined"
      @click="collapsible && $emit('toggle')"
      @keydown.enter.prevent="collapsible && $emit('toggle')"
      @keydown.space.prevent="collapsible && $emit('toggle')"
  >
    <span v-if="collapsible" class="section-arrow" aria-hidden="true"></span>
    <img :src="item.icon" class="language-logo" alt="" loading="lazy" />
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

.sidebar-section-header.collapsible {
  cursor: pointer;
  user-select: none;
}

.sidebar-section-header.collapsible:hover .language-title {
  color: #1a73e8;
}

.sidebar-section-header.collapsible:focus-visible {
  outline: 2px solid #1a73e8;
  outline-offset: 2px;
  border-radius: 4px;
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

.section-arrow {
  flex-shrink: 0;
  width: 1rem;
  height: 0.5625rem;
  background-image: url("../../public/expand-more.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1rem 0.5625rem;
}

.sidebar-section-header.expanded .section-arrow {
  background-image: url("../../public/expand-more-down.svg");
}
</style>
