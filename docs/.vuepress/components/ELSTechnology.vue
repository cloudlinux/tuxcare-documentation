<template>
  <div class="heading text-center">
    <h4>Available Guides for ELS for Runtimes and Libraries.</h4>
    <p>If something's missing or you have questions, <a href="https://tuxcare.com/support-portal/">contact support</a>.</p>
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
        <li>Ecosystem</li>
        <li>Project</li>
        <li>Versions</li>
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
            <img :src="item.ecosystemIcon" class="ecosystem-icon" />
            {{ item.ecosystem }}
          </li>
        </ul>
      </div>

      <div class="sp-sort-row" v-if="filteredData[activeTab]">
        <div class="scroll-container">
          <div class="project-version-box">
            <div class="project-col">
              <ul>
                <li
                  v-for="(project, pIndex) in getFilteredProjects(filteredData[activeTab])"
                  :key="pIndex"
                >
                  <a
                    v-if="project.link"
                    :href="project.link"
                    rel="noopener noreferrer"
                  >
                    {{ project.name }}
                  </a>
                  <span v-else>{{ project.name }}</span>
                </li>
              </ul>
            </div>

            <div class="version-col">
              <ul>
                <li
                  v-for="(project, pIndex) in getFilteredProjects(filteredData[activeTab])"
                  :key="'v' + pIndex"
                >
                  <span class="badge">{{ project.versions }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const activeTab = ref(0);

const techData = [
  {
    ecosystem: "Java",
    ecosystemIcon: "/images/java.png",
    projects: [
      {
        name: "Spring",
        versions: "Multiple",
        link: "./spring/",
      },
      {
        name: "OpenJDK",
        versions: "7 | 8 | 11 | 17",
        link: "./openjdk/",
      },
      {
        name: "Log4j",
        versions: "1.2.17 | 2.14.1",
      },
      {
        name: "dom4j",
        versions: "1.6.1",
      },
      {
        name: "SnakeYAML",
        versions: "1.26 | 1.30",
      },
      {
        name: "Google Guava",
        versions: "31.1-jre",
      },
      {
        name: "Apache Struts",
        versions: "2.5.33",
      },
      {
        name: "Hibernate",
        versions: "5.4.33 | 5.6.15 | 6.0.2 | 6.5.3",
      },
      {
        name: "Apache Commons Collections",
        versions: "3.2.2",
      },
      {
        name: "Apache Tapestry",
        versions: "5.7.3",
      },
      {
        name: "Apache Spark",
        versions: "2.4.8 | 3.4.4",
      },
      {
        name: "Apache Lucene",
        versions: "7.7.3 | 8.11.4",
      },
      {
        name: "Apache Camel",
        versions: "3.22.4 | 4.4.5 | 4.8.7",
      },
      {
        name: "Apache Cocoon",
        versions: "2.3.0",
      },
      {
        name: "Apache Velocity",
        versions: "1.7.0",
      },
      {
        name: "Okio",
        versions: "2.8.0",
      },
    ],
  },
  {
    ecosystem: "JavaScript",
    ecosystemIcon: "/images/javascript.png",
    projects: [
      {
        name: "AngularJS",
        versions: "1.5.x | 1.6.x | 1.7.x | 1.8.x",
        link: "./angularjs/",
      },
      {
        name: "Lodash",
        versions: "4.5.0 | 4.17.x",
        link: "./lodash/",
      },
      {
        name: "request",
        versions: "2.88.0 | 2.88.2",
        link: "./request/",
      },
      {
        name: "tough-cookie",
        versions: "2.4.3 | 2.5.0",
        link: "./tough-cookie/",
      },
      {
        name: "crypto-js",
        versions: "3.3.0",
        link: "./crypto-js/",
      },
      {
        name: "vue-template-compiler",
        versions: "2.6.11",
        link: "./vue-template-compiler/",
      },
      {
        name: "webpack",
        versions: "4.41.2 | 4.46.0",
        link: "./webpack/",
      },
      {
        name: "@sentry/browser",
        versions: "5.7.1",
      },
      {
        name: "jsonwebtoken",
        versions: "0.4.0 | 8.5.1",
        link: "./jsonwebtoken/",
      },
      {
        name: "ip",
        versions: "1.1.5 | 2.0.0",
        link: "./ip/",
      },
      {
        name: "Quill",
        versions: "1.3.7",
      },
      {
        name: "undici",
        versions: "5.28.5",
      },
      {
        name: "rollup",
        versions: "2.79.1 | 2.79.2",
      },
      {
        name: "copy-anything",
        versions: "2.0.6",
      },
      {
        name: "picocolors",
        versions: "0.2.1",
      },
      {
        name: "formidable",
        versions: "2.1.2",
      },
      {
        name: "bootstrap",
        versions: "4.6.2",
      },
      {
        name: "braces",
        versions: "2.3.2",
      },
      {
        name: "dompurify",
        versions: "2.3.0 | 2.4.3",
      },
      {
        name: "express",
        versions: "3.21.2",
      },
      {
        name: "express-jwt",
        versions: "0.1.3",
      },
      {
        name: "form-data",
        versions: "2.3.3",
      },
      {
        name: "i18next",
        versions: "23.16.8",
      },
      {
        name: "jquery",
        versions: "1.12.4",
      },
      {
        name: "jsonpath-plus",
        versions: "7.2.0",
      },
      {
        name: "jspdf",
        versions: "2.5.2",
      },
      {
        name: "marked",
        versions: "2.3.3",
      },
      {
        name: "mongodb",
        versions: "2.2.36",
      },
      {
        name: "multer",
        versions: "1.4.5-lts",
      },
      {
        name: "node-forge",
        versions: "0.10.0",
      },
      {
        name: "mysql2",
        versions: "2.3.3",
      },
      {
        name: "ssr-window",
        versions: "4.0.2",
      },

    ],
  },
    {
    ecosystem: "Python",
    ecosystemIcon: "/images/python.png",
    projects: [
      {
        name: "Python",
        versions: "2.7 | 3.6 ",
        link: "./python/",
      },
      {
        name: "certifi",
        versions: "2021.10.8 | 2022.12.7 | 2023.7.22",
        link: "./python-libraries/",
      },
      {
        name: "setuptools",
        versions: "65.5.1",
        link: "./python-libraries/",
      },
      {
        name: "gunicorn",
        versions: "20.1.0 | 21.2.0 | 22.0.0",
        link: "./python-libraries/",
      },
      {
        name: "waitress",
        versions: "2.1.2",
        link: "./python-libraries/",
      },
      {
        name: "idna",
        versions: "2.1 | 2.8",
        link: "./python-libraries/",
      },
      {
        name: "cryptography",
        versions: "42.0.8 | 43.0.1 | 43.0.3",
        link: "./python-libraries/",
      },
      {
        name: "Werkzeug",
        versions: "1.0.1 | 2.2.3",
        link: "./python-libraries/",
      },
      {
        name: "sentry-sdk",
        versions: "1.45.1",
        link: "./python-libraries/",
      },
      {
        name: "anyio",
        versions: "3.7.1",
        link: "./python-libraries/",
      },
      {
        name: "Flask",
        versions: "1.1.2",
        link: "./python-libraries/",
      },
      {
        name: "Jinja2",
        versions: "2.11.3",
        link: "./python-libraries/",
      },
      {
        name: "pymongo",
        versions: "3.13.0",
        link: "./python-libraries/",
      },
      {
        name: "Pillow",
        versions: "9.4.0",
        link: "./python-libraries/",
      },
      {
        name: "setuptools",
        versions: "75.8.0",
        link: "./python-libraries/",
      },
      {
        name: "statsmodels",
        versions: "0.14.4",
      },
    ],
  },
  {
    ecosystem: "PHP",
    ecosystemIcon: "/images/php.png",
    projects: [
      {
        name: "PHP",
        versions: "5.2 | 5.3 | 5.4 | 5.5 | 5.6 | 7.0 | 7.1 | 7.2 | 7.3 | 7.4 | 8.0 | 8.1 | 8.2 | 8.3 | 8.4",
        link: "./php/",
      },
    ],
  },
  {
    ecosystem: "C#",
    ecosystemIcon: "/images/csharp.png",
    projects: [
      {
        name: ".NET",
        versions: "6",
        link: "./dotnet/",
      },
    ],
  },
    {
    ecosystem: "Ruby",
    ecosystemIcon: "/images/ruby.png",
    projects: [
      {
        name: "Ruby",
        versions: "3.1",
      },
    ],
  },
  {
    ecosystem: "TypeScript",
    ecosystemIcon: "/images/typescript.png",
    projects: [
      {
        name: "Angular",
        versions: "14 | 15 | 16 | 17 | 18 ",
        link: "./angular/",
      },
    ],
  },
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

  // reset activeTab if out of range
  if (activeTab.value >= result.length) activeTab.value = 0;

  return result;
});

function getFilteredProjects(item) {
  return item.projects;
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
  flex: 1;
  text-align: left;
  padding-left: 0.5rem;
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
}

.ecosystem-tabs li.active {
  background-color: #FEF6F2;
  color: #000;
  font-weight: bold;
}

.ecosystem-icon {
  height: 20px;
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

.project-version-box {
  display: flex;
  background-color: #FEF6F2;
  padding: 0.5rem;
  gap: 1.4rem;
  width: auto;
}

.project-col,
.version-col {
  width: 50%;
}

.project-col ul,
.version-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-col li,
.version-col li {
  min-height: 2.5rem;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  border-bottom: none;
  border-bottom: 1px solid #F48243; 
}

.version-col li {
  line-height: 1.1;
  justify-content: flex-start;
}

.project-col a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
}

.project-col a,
.version-col .badge {
  display: block;
  word-wrap: break-word;
  white-space: normal;
  text-align: left;
}

.badge {
  background: none;
  color: inherit;
  padding: 0;
  border-radius: 0;
  font-size: 0.9rem;
}
</style>



