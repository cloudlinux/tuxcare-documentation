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
      >
        <span class="ecosystem-card-icon">
          <img :src="eco.icon" alt="" aria-hidden="true" />
        </span>
        <span class="ecosystem-card-name">{{ eco.name }}</span>
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
  {
    name: "JavaScript",
    icon: "/images/javascript.webp",
  },
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
  align-items: center;
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

.ecosystem-card-name {
  flex: 1;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1b1f27;
  line-height: 1.3;
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
