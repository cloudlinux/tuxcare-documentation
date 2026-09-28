<template>
  <div class="ecosystem-selector">
    <div class="ecosystem-selector-heading">
      <h2>Select your ecosystem to get started with SecureChain.</h2>
    </div>

    <div class="ecosystem-grid">
      <a
        v-for="(eco, index) in ecosystems"
        :key="index"
        :href="eco.link"
        class="ecosystem-card"
      >
        <span class="ecosystem-card-icon">
          <img :src="eco.icon" alt="" aria-hidden="true" />
        </span>
        <span class="ecosystem-card-name">{{ eco.name }}</span>
        <span class="ecosystem-card-arrow">&rarr;</span>
      </a>
    </div>

    <p class="ecosystem-selector-footer">
      Python, Java, Go, and PHP are on the roadmap. Contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> for status or to request early access.
    </p>
  </div>
</template>

<script setup>
const ecosystems = [
  {
    name: "JavaScript",
    icon: "/images/javascript.webp",
    link: "./javascript/",
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
  transition: all 0.2s ease;
  cursor: pointer;
}

.ecosystem-card:hover {
  border-color: #F48243;
  background: #FEF6F2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 130, 67, 0.12);
}

.ecosystem-card:hover .ecosystem-card-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #F48243;
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

.ecosystem-card-arrow {
  font-size: 1.1rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: #5c6370;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.ecosystem-selector-footer {
  text-align: center;
  margin-top: 1.25rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #5c6370;
}

.ecosystem-selector-footer a {
  color: #0B5CAD;
  text-decoration: none;
}

.ecosystem-selector-footer a:hover {
  text-decoration: underline;
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
