<template>
  <span :class="['els-badge', `els-badge--${color}`, { 'els-badge--heading': heading }]">
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup>
defineProps({
  text: { type: String, default: '' },
  color: { type: String, default: 'green', validator: v => ['green', 'blue', 'orange', 'gray'].includes(v) },
  heading: { type: Boolean, default: false },
});
</script>

<style scoped>
.els-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.5;
  vertical-align: middle;
}

.els-badge--heading {
  position: relative;
  top: -2.6rem;
  margin-bottom: -1.8rem;
  margin-left: 8rem;
}

.els-badge--green {
  background: #e6f7ee;
  color: #166534; /* 6.4:1 on #e6f7ee (WCAG 1.4.3) */
  border: 1px solid #bbf0d0;
}

.els-badge--blue {
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
}

.els-badge--orange {
  background: #fff7ed;
  color: #c2410c; /* 4.9:1 on #fff7ed */
  border: 1px solid #fed7aa;
}

.els-badge--gray {
  background: #f3f4f6;
  color: #4b5563;
  border: 1px solid #d1d5db;
}
</style>
