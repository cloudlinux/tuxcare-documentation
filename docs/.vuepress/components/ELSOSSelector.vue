<template>
  <div class="os-selector">
    <div class="os-selector-heading">
      <h4>Which OS are you running?</h4>
      <p>Select your operating system to get started with ELS.</p>
    </div>

    <div class="os-grid">
      <a
        v-for="(os, index) in operatingSystems"
        :key="index"
        :href="os.link"
        class="os-card"
      >
        <span class="os-card-icon">
          <img :src="os.icon" :alt="os.name" />
        </span>
        <span class="os-card-name">{{ os.name }}</span>
        <span class="os-card-arrow">&rarr;</span>
      </a>
    </div>

    <p class="os-selector-footer">
      Need a different OS? Contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> to discuss your requirements.
    </p>
  </div>
</template>

<script setup>
const operatingSystems = [
  {
    name: "Alpine Linux 3.18",
    icon: "/images/alpine-linux.webp",
    link: "./alpine-linux-3-18-els",
  },
  {
    name: "CentOS 6",
    icon: "/images/centos.webp",
    link: "./centos-6-els",
  },
  {
    name: "CentOS 7",
    icon: "/images/centos.webp",
    link: "./centos-7-els",
  },
  {
    name: "CentOS 8",
    icon: "/images/centos.webp",
    link: "./centos-8-els",
  },
  {
    name: "CentOS Stream 8",
    icon: "/images/centos-stream.webp",
    link: "./centos-stream-8-els",
  },
  {
    name: "Debian 10",
    icon: "/images/debian.webp",
    link: "./debian-10-els",
  },
  {
    name: "Oracle Linux 6",
    icon: "/images/Oracle-Linux.webp",
    link: "./oracle-linux-6-els",
  },
  {
    name: "Oracle Linux 7",
    icon: "/images/Oracle-Linux.webp",
    link: "./oracle-linux-7-els",
  },
  {
    name: "RHEL 7",
    icon: "/images/redhat.webp",
    link: "./red-hat-enterprise-linux-7-els",
  },
  {
    name: "Ubuntu 16.04",
    icon: "/images/Ubuntu.webp",
    link: "./ubuntu-16-04-els",
  },
  {
    name: "Ubuntu 18.04",
    icon: "/images/Ubuntu.webp",
    link: "./ubuntu-18-04-els",
  },
  {
    name: "Ubuntu 20.04",
    icon: "/images/Ubuntu.webp",
    link: "./ubuntu-20-04-els",
  },
];
</script>

<style scoped>
.os-selector {
  margin: 1rem 0;
}

.os-selector-heading {
  text-align: center;
  margin-bottom: 1.25rem;
}

.os-selector-heading h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.os-selector-heading p {
  color: #5c6370;
  font-size: 0.95rem;
  margin: 0;
}

.os-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.os-card {
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

.os-card:hover {
  border-color: #F48243;
  background: #FEF6F2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 130, 67, 0.12);
}

.os-card:hover .os-card-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #F48243;
}

.os-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.os-card-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.os-card-name {
  flex: 1;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1b1f27;
  line-height: 1.3;
}

.os-card-arrow {
  font-size: 1.1rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: #5c6370;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.os-selector-footer {
  text-align: center;
  margin-top: 1.25rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #5c6370;
}

.os-selector-footer a {
  color: #007bff;
  text-decoration: none;
}

.os-selector-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .os-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.5rem;
  }

  .os-card {
    padding: 0.7rem 0.85rem;
  }

  .os-card-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
