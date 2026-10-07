<template>
  <div class="ecosystem-selector">
    <div class="ecosystem-selector-heading">
      <h2>Supported ecosystems</h2>
    </div>

    <div class="ecosystem-grid">
      <div
        v-for="(eco, index) in ecosystems"
        :key="index"
        class="ecosystem-card"
        :class="{ 'ecosystem-card--soon': eco.soon }"
      >
        <span class="ecosystem-card-icon">
          <img :src="eco.icon" alt="" aria-hidden="true" />
        </span>
        <span class="ecosystem-card-text">
          <span class="ecosystem-card-name">{{ eco.name }}</span>
          <span v-if="eco.soon" class="ecosystem-card-badge">Coming soon</span>
          <span v-else class="ecosystem-card-badge ecosystem-card-badge--available">Available</span>
        </span>
      </div>
    </div>

    <p class="ecosystem-selector-footer">
      Available for JavaScript at launch, with Python, Java, Go, and PHP on the roadmap.<br />
      Contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> for status or to request early access.
    </p>
  </div>
</template>

<script setup>
const ecosystems = [
  { name: "JavaScript", icon: "/images/javascript.webp" },
  { name: "Python", icon: "/images/python.webp", soon: true },
  { name: "Java", icon: "/images/java.webp", soon: true },
  { name: "Go", icon: "/images/go_logo.webp", soon: true },
  { name: "PHP", icon: "/images/php.webp", soon: true },
];
</script>

<style scoped>
.ecosystem-selector {
  margin: 1rem 0;
}

.ecosystem-selector-heading {
  text-align: center;
  margin-bottom: 1.25rem;
}

.ecosystem-selector-heading h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  padding-bottom: 0;
}

.ecosystem-selector-heading p {
  color: #5c6370;
  font-size: 0.95rem;
  margin: 0;
}

.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.ecosystem-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid #e0e3e8;
  background: #fff;
  text-decoration: none;
  color: inherit;
  cursor: default;
}

.ecosystem-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.ecosystem-card-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.ecosystem-card-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;
  min-height: 36px;
}

.ecosystem-card-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1b1f27;
  line-height: 1.3;
}

.ecosystem-card--soon {
  background: #f7f8fa;
  border-style: dashed;
}

.ecosystem-card--soon .ecosystem-card-icon img {
  filter: grayscale(1);
  opacity: 0.55;
}

.ecosystem-card--soon .ecosystem-card-name {
  color: #5c6370;
}

.ecosystem-card-badge {
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.3rem 0.5rem;
  border-radius: 999px;
  background: #e9ecf1;
  color: #5c6370;
  white-space: nowrap;
}

.ecosystem-card-badge--available {
  background: #e3f5ea;
  color: #1f7a3f;
}


.ecosystem-selector-footer {
  text-align: left;
  margin-top: 1.25rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #5c6370;
}

.ecosystem-selector-footer a {
  color: #0B5CAD;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.ecosystem-selector-footer a:hover {
  text-decoration-thickness: 2px;
}

@media (max-width: 768px) {
  .ecosystem-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.5rem;
  }

  .ecosystem-card {
    padding: 0.7rem 0.85rem;
  }

  .ecosystem-card-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
