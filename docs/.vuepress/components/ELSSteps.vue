<template>
  <div class="els-steps">
    <div class="els-steps-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.els-steps {
  margin: 1.5rem 0;
  padding-top: 1.25rem;
}

.els-steps-body :deep(ol) {
  list-style: none;
  counter-reset: step-counter;
  margin: 1rem 0;
  padding-left: 0;
}

.els-steps-body :deep(ol > li) {
  counter-increment: step-counter;
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 1.25rem;
  margin-bottom: 0;
  border-left: 2px solid #e0e3e8;
  margin-left: 0.9rem;
}

.els-steps-body :deep(ol > li:last-child) {
  border-left-color: transparent;
  padding-bottom: 0;
}

.els-steps-body :deep(ol > li::before) {
  content: counter(step-counter);
  position: absolute;
  left: -1rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #163055;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.els-steps-body :deep(ol > li > p:first-child) {
  font-weight: 600;
  color: #0d1a26;
  margin-top: 0;
}

.els-steps-body :deep(ol > li > p) {
  margin: 0.25rem 0 0.5rem 0;
}

.els-steps-body :deep(ol ol) {
  counter-reset: step-counter;
  margin: 0.5rem 0;
}

.els-steps-body :deep(ol ol > li) {
  margin-left: 0;
  padding-left: 2.5rem;
  border-left-color: #eef0f2;
}

.els-steps-body :deep(ol ol > li::before) {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  left: -0.75rem;
  background: #5c6370;
}

.els-steps-body :deep(div[class*="language-"]),
.els-steps-body :deep(.code-with-copy) {
  margin: 0.5rem 0;
}

.els-steps-body :deep(code) {
  font-size: 0.85rem;
}
</style>
