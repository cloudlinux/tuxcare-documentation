<template>
  <div class="prereqs">
    <div class="prereqs-header">
      <h4><slot name="title">Prerequisites</slot></h4>
    </div>
    <div class="prereqs-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.prereqs {
  border-radius: 10px;
  border: 1px solid #D9EDFF;
  background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%);
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}

.prereqs-header h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: #1b1f27;
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
  color: #16a34a;
  font-weight: 700;
  font-size: 0.85rem;
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
