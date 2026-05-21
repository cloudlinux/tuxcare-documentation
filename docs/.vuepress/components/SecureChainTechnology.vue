<template>
  <div class="heading text-center">
    <h2>Get your open-source packages — verified, signed, and supported for as long as they're in your stack.</h2>
  </div>

  <div class="supported-product-sorting">
    <input
      v-model="search"
      type="text"
      placeholder="Search for a Technology"
      class="search-box"
    />

    <div class="sp-sort-head">
      <ul>
        <li class="head-ecosystem">Ecosystem</li>
        <li class="head-product">Product</li>
        <li class="head-versions">Versions</li>
      </ul>
    </div>

    <div class="sp-sort-body">
      <div class="ecosystem-tabs">
        <ul>
          <li
            v-for="(item, index) in filteredData"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            <img :src="item.ecosystemIcon" class="ecosystem-icon" alt="" aria-hidden="true" />
            {{ item.ecosystem }}
          </li>
        </ul>
      </div>

      <div class="sp-sort-row" v-if="filteredData[activeTab]">
        <div class="scroll-container">
          <ul class="project-list">
            <li
              v-for="(project, pIndex) in getFilteredProjects(filteredData[activeTab])"
              :key="pIndex"
            >
              <a
                v-if="project.link"
                :href="getProjectHref(project)"
                class="project-row clickable"
              >
                <span class="project-name">{{ project.name }}</span>
                <span class="project-versions">
                  <span v-if="project.detailsHash">
                    versions vary per module
                  </span>
                  <span v-else>{{ project.versions }}</span>
                </span>
                <span class="project-arrow">&rarr;</span>
              </a>
              <div v-else class="project-row">
                <span class="project-name">{{ project.name }}</span>
                <span class="project-versions">
                  <span v-if="project.detailsHash">
                    versions vary per module — details
                  </span>
                  <span v-else>{{ project.versions }}</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const activeTab = ref(0);

// Only JavaScript ships at launch. Other ecosystems are kept commented out
// so they can be uncommented per ecosystem rollout.
const techData = [
  {
    ecosystem: "JavaScript",
    ecosystemIcon: "/images/javascript.webp",
    projects: [
      {
        name: "Lodash",
        versions: "TBD",
        link: "./lodash/",
      },
    ],
  },
/*  
  {
    ecosystem: "Python",
    ecosystemIcon: "/images/python.webp",
    projects: [],
  },
  {
    ecosystem: "Java",
    ecosystemIcon: "/images/java.webp",
    projects: [],
  },
  {
    ecosystem: "Go",
    ecosystemIcon: "/images/go_logo.webp",
    projects: [],
  },
  {
    ecosystem: "PHP",
    ecosystemIcon: "/images/php-logo.webp",
    projects: [],
  },
*/
];

const filteredData = computed(() => {
  const term = search.value.toLowerCase();
  const result = techData
    .map((item) => {
      const matchEcosystem = item.ecosystem.toLowerCase().includes(term);
      const filteredProjects = item.projects.filter((p) =>
        p.name.toLowerCase().includes(term)
      );
      if (term && !matchEcosystem && filteredProjects.length === 0) return null;
      return {
        ...item,
        projects:
          filteredProjects.length > 0 || matchEcosystem
            ? filteredProjects.length > 0
              ? filteredProjects
              : item.projects
            : [],
      };
    })
    .filter(Boolean);

  if (activeTab.value >= result.length) activeTab.value = 0;

  return result;
});

function getFilteredProjects(item) {
  return item.projects;
}

function getProjectHref(project) {
  if (project.detailsHash) {
    return `${project.link}#${project.detailsHash}`;
  }
  return project.link;
}
</script>

<style scoped>
.supported-product-sorting {
  border-radius: 23px;
  border: 3px solid #D9EDFF;
  box-shadow: 0px 4px 58px 0px rgba(53, 156, 243, 0.15);
  padding: 30px;
  padding: 1rem;
  background-color: #fff;
}

.heading.text-center {
  text-align: center;
  margin-bottom: 1rem;
}

.search-box {
  width: 50%;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  margin: 0 auto 1rem auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: block;
}

.sp-sort-head ul {
  display: flex;
  list-style: none;
  padding: 0.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
}

.sp-sort-head li {
  text-align: left;
  padding-left: 0.5rem;
}

.sp-sort-head .head-ecosystem {
  flex: 0 0 33.333%;
}

.sp-sort-head .head-product {
  flex: 0 0 29.7%;
}

.sp-sort-head .head-versions {
  flex: 1;
}

.sp-sort-body {
  display: flex;
  gap: 0;
  border-radius: 8px;
  overflow: hidden;
}

.ecosystem-tabs {
  width: 33.333%;
  border-right: none;
}

.ecosystem-tabs ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ecosystem-tabs li {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  min-height: 2.5rem;
  margin-bottom: 0.4rem;
  border-bottom: none;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  transition: background-color 0.15s ease;
}

.ecosystem-tabs li:hover {
  background-color: #f5f7fa;
}

.ecosystem-tabs li.active {
  background-color: #FEF6F2;
  color: #000;
  font-weight: bold;
}

.ecosystem-icon {
  height: auto;
  width: 20px;
  margin-right: 0.5rem;
}

.sp-sort-row {
  width: 66%;
}

.scroll-container {
  max-height: 300px;
  overflow-y: auto;
  width: auto;
}

.project-list {
  list-style: none;
  margin: 0;
  background-color: #FEF6F2;
  padding: 0.25rem 0.5rem;
}

.project-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid #f0d4c2;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  border-radius: 6px;
}

.project-row.clickable {
  cursor: pointer;
}

a.project-row.clickable:hover {
  background: #FEF6F2;
  box-shadow: 0 2px 8px rgba(244, 130, 67, 0.1);
}

a.project-row.clickable:hover .project-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #F48243;
}

a.project-row.clickable:hover .project-name,
a.project-row.clickable:hover .project-versions {
  color: #F48243;
}

.project-list > li:last-child .project-row {
  border-bottom: none;
}

.project-name {
  flex: 0 0 45%;
  min-width: 0;
  word-wrap: break-word;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1b1f27;
  transition: color 0.2s ease;
}

.project-versions {
  flex: 1;
  font-size: 0.85rem;
  line-height: 1.4;
  word-wrap: break-word;
  color: #5c6370;
}

.project-arrow {
  font-size: 1.1rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: #5c6370;
  flex-shrink: 0;
}
</style>
