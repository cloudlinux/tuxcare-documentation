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
    ecosystemIcon: "/images/java.webp",
    projects: [
      {
        name: "Spring®",
        versions: "Multiple",
        link: "./spring/",
      },
      {
        name: "Apache Avro",
        versions: "1.10.2",
        link: "./java-libraries/",
      },
      {
        name: "Dom4j",
        versions: "1.6.1",
        link: "./java-libraries/",
      },
      {
        name: "SnakeYAML",
        versions: "1.23 | 1.26 | 1.29 | 1.30 | 1.33",
        link: "./java-libraries/",
      },
      {
        name: "Google Gson",
        versions: "2.8.5 | 2.9.1",
        link: "./java-libraries/",
      },
      {
        name: "Google Guava",
        versions: "20.0 | 30.1-jre | 31.1-jre",
        link: "./java-libraries/",
      },
      {
        name: "Google Guice",
        versions: "4.2.1",
        link: "./java-libraries/",
      },
      {
        name: "H2 Database",
        versions: "1.4.200",
        link: "./java-libraries/",
      },
      {
        name: "HtmlUnit",
        versions: "2.70.0",
        link: "./java-libraries/",
      },
      {
        name: "Apache Struts™",
        versions: "1.3.5 | 2.5.33",
        link: "./apache-struts/",
      },
      {
        name: "Apache Spark™",
        versions: "2.4.8",
        link: "./apache-spark/",
      },
      {
        name: "Apache Tomcat®",
        versions: "8.5.100 | 9.0.50 | 9.0.75 | 9.0.83 | 9.0.87 | 9.0.90 | 9.0.100",
        link: "./apache-tomcat/",
      },
      {
        name: "Okio",
        versions: "2.8.0 | 2.10.0",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons BeanUtils",
        versions: "1.9.4",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons Compress",
        versions: "1.20",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons HttpClient",
        versions: "3.1",
        link: "./java-libraries/",
      },
      {
        name: "Apache CXF",
        versions: "3.5.9 | 3.5.11",
        link: "./apache-cxf/",
      },
      {
        name: "Apache HttpComponents Client",
        versions: "4.5.2",
        link: "./java-libraries/",
      },
      {
        name: "Apache Maven",
        versions: "3.8.1",
        link: "./java-libraries/",
      },
      {
        name: "Apache Maven Shared Utils",
        versions: "3.2.1",
        link: "./java-libraries/",
      },
      {
        name: "DNSJava",
        versions: "2.1.7",
        link: "./java-libraries/",
      },
      {
        name: "el-spec",
        versions: "3.0.0",
        link: "./java-libraries/",
      },
      {
        name: "Apache Kafka®",
        versions: "3.2.3",
        link: "./apache-kafka/",
      },
      {
        name: "Apache Lucene®",
        versions: "5.5.5",
        link: "./apache-lucene/",
      },
      {
        name: "Jackson",
        versions: "1.9.13",
        link: "./jackson/",
      },
      {
        name: "JSON Assert",
        versions: "1.2.3",
        link: "./java-libraries/",
      },
      {
        name: "JSON Smart v2",
        versions: "2.4.8",
        link: "./java-libraries/",
      },
      {
        name: "Hibernate",
        versions: "5.4.32.Final | 5.6.15.Final",
        link: "./hibernate/",
      },
      {
        name: "Hibernate Search",
        versions: "5.11.10.Final",
        link: "./hibernate/",
      },
      {
        name: "Eclipse Jetty",
        versions: "9.4.24.v20191120 | 9.4.53.v20231009",
        link: "./jetty/",
      },
      {
        name: "Logback",
        versions: "1.1.7 | 1.2.13",
        link: "./java-libraries/",
      },
      {
        name: "Netty",
        versions: "4.1.115.Final | 4.1.63.Final",
        link: "./java-libraries/",
      },
      {
        name: "Nimbus JOSE + JWT",
        versions: "9.22 | 9.24.4",
        link: "./java-libraries/",
      },
      {
        name: "Querydsl",
        versions: "5.1.0",
        link: "./java-libraries/",
      },
      {
        name: "Reactor BOM",
        versions: "2020.0.38",
        link: "./java-libraries/",
      },
      {
        name: "Reactor Netty",
        versions: "1.0.39",
        link: "./java-libraries/",
      },
      {
        name: "Plexus Utils",
        versions: "1.5.8",
        link: "./java-libraries/",
      },
      {
        name: "PostgreSQL driver",
        versions: "42.2.16 | 42.5.0",
        link: "./postgresql-driver/",
      },
      {
        name: "Protobuf",
        versions: "2.5.0 | 2.6.1",
        link: "./protobuf/",
      },
      {
        name: "Reload4j",
        versions: "1.2.17",
        link: "./java-libraries/",
      },
      {
        name: "Snappy Java",
        versions: "1.1.8.4",
        link: "./java-libraries/",
      },
      {
        name: "Apache Thrift",
        versions: "0.9.3",
        link: "./java-libraries/",
      },
      {
        name: "Thymeleaf",
        versions: "3.0.15.RELEASE",
        link: "./java-libraries/",
      },
      {
        name: "Undertow",
        versions: "2.2.33.Final | 2.3.10.Final",
        link: "./java-libraries/",
      },
      {
        name: "Apache Velocity Engine™",
        versions: "1.7",
        link: "./apache-velocity-engine/",
      },
      {
        name: "Woodstox",
        versions: "5.0.3",
        link: "./java-libraries/",
      },
      {
        name: "XMLUnit",
        versions: "2.9.1 | 2.9.0"
        ,link: "./java-libraries/",
      },
      {
        name: "Apache Commons IO",
        versions: "2.5 | 2.7",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons Lang",
        versions: "2.4 | 2.6 | 3.4 | 3.10 | 3.12.0",
        link: "./apache-commons-lang/",
      },
      {
        name: "Apache Santuario XML Security For Java",
        versions: "2.0.10 | 2.3.1",
        link: "./java-libraries/",
      },
    ],
  },
  {
    ecosystem: "JavaScript",
    ecosystemIcon: "/images/javascript.webp",
    projects: [
      {
        name: "Angular",
        versions: "9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18",
        link: "./angular/",
      },
      {
        name: "AngularJS",
        versions: "1.4.4 | 1.5.11 | 1.6.10 | 1.7.9 | 1.8.2 | 1.8.3",
        link: "./angularjs/",
      },
      {
        name: "ansi-html",
        versions: "0.0.7",
        link: "./javascript-libraries/",
      },
      {
        name: "base64url",
        versions: "0.0.6",
        link: "./javascript-libraries/",
      },
      {
        name: "Bootstrap",
        versions: "3.2.0 | 3.4.1 | 4.1.1 | 4.6.2",
        link: "./bootstrap/",
      },
      {
        name: "bootstrap-sass",
        versions: "3.4.0",
        link: "./bootstrap-sass/",
      },
      {
        name: "braces",
        versions: "2.3.2",
        link: "./javascript-libraries/",
      },
      {
        name: "bson",
        versions: "0.5.7 | 1.0.9",
        link: "./javascript-libraries/",
      },
      {
        name: "cookie",
        versions: "0.4.2",
        link: "./javascript-libraries/",
      },
      {
        name: "copy-anything",
        versions: "2.0.6",
        link: "./javascript-libraries/",
      },
      {
        name: "cross-spawn",
        versions: "5.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "CryptoJS",
        versions: "3.3.0",
        link: "./javascript-libraries/",
      },
      {
        name: "debug",
        versions: "4.1.1",
        link: "./javascript-libraries/",
      },
      {
        name: "DOMPurify",
        versions: "2.3.0 | 2.4.3",
        link: "./javascript-libraries/",
      },
      {
        name: "elliptic",
        versions: "6.6.0",
        link: "./javascript-libraries/",
      },
      {
        name: "express",
        versions: "3.21.2",
        link: "./express/",
      },
      {
        name: "express-jwt",
        versions: "0.1.3",
        link: "./javascript-libraries/",
      },
      {
        name: "fastify",
        versions: "3.29.5",
        link: "./fastify/",
      },
      {
        name: "formidable",
        versions: "2.1.2",
        link: "./javascript-libraries/",
      },
      {
        name: "Form-Data",
        versions: "2.3.3",
        link: "./javascript-libraries/",
      },
      {
        name: "http-proxy-middleware",
        versions: "0.19.1 | 2.0.8",
        link: "./javascript-libraries/",
      },
      {
        name: "i18next",
        versions: "23.16.8",
        link: "./javascript-libraries/",
      },
      {
        name: "ini",
        versions: "1.3.5",
        link: "./javascript-libraries/",
      },
      {
        name: "ip",
        versions: "1.1.5 | 2.0.0",
        link: "./javascript-libraries/",
      },
      {
        name: "jQuery",
        versions: "1.8.2 | 1.12.4 | 2.2.4 | 3.4.1",
        link: "./jquery/",
      },
      {
        name: "JSON Web Token (JWT)",
        versions: "0.4.0 | 8.5.1",
        link: "./jsonwebtoken/",
      },
      {
        name: "JSONPath Plus",
        versions: "7.2.0",
        link: "./javascript-libraries/",
      },
      {
        name: "jsPDF",
        versions: "2.5.2",
        link: "./javascript-libraries/",
      },
      {
        name: "karma",
        versions: "4.1.0 | 5.0.9",
        link: "./karma/",
      },
      {
        name: "Knockout",
        versions: "2.3.0 | 3.4.2",
        link: "./knockout/",
      },
      {
        name: "koa",
        versions: "1.7.1",
        link: "./koa/",
      },
      {
        name: "Lodash",
        versions: "4.5.0 | 4.17.x",
        link: "./lodash/",
      },
      {
        name: "LoopBack",
        versions: "2.42.0",
        link: "./loopback/",
      },
      {
        name: "marked",
        versions: "4.0.9",
        link: "./javascript-libraries/",
      },
      {
        name: "micromatch",
        versions: "3.1.10",
        link: "./javascript-libraries/",
      },
      {
        name: "minimatch",
        versions: "3.0.4",
        link: "./javascript-libraries/",
      },
      {
        name: "MongoDB Driver",
        versions: "2.2.36",
        link: "./mongodb-driver/",
      },
      {
        name: "Mongoose",
        versions: "5.13.23",
        link: "./mongoose/",
      },
      {
        name: "multer",
        versions: "1.4.5-lts",
        link: "./javascript-libraries/",
      },
      {
        name: "MySQL2",
        versions: "2.3.3",
        link: "./mysql2/",
      },
      {
        name: "next",
        versions: "12.3.7 | 13.5.11 | 16.0.6",
        link: "./next/",
      },
      {
        name: "node-fetch",
        versions: "1.7.3 | 2.6.1",
        link: "./node-fetch/",
      },
      {
        name: "Nuxt",
        versions: "2.18.1 | 3.2.0",
        link: "./nuxt/",
      },
      {
        name: "node-forge",
        versions: "0.10.0",
        link: "./javascript-libraries/",
      },
      {
        name: "nth-check",
        versions: "1.0.2",
        link: "./javascript-libraries/",
      },
      {
        name: "passport",
        versions: "0.5.3",
        link: "./passport/",
      },
      {
        name: "pdfjs-dist",
        versions: "2.16.105",
        link: "./javascript-libraries/",
      },
      {
        name: "picocolors",
        versions: "0.2.1",
        link: "./javascript-libraries/",
      },
      {
        name: "PostCSS",
        versions: "7.0.39 | 8.3.6",
        link: "./postcss/",
      },
      {
        name: "Quill",
        versions: "1.3.7",
        link: "./javascript-libraries/",
      },
      {
        name: "React",
        versions: "15.6.2 | 19.2.0",
        link: "./react/",
      },
      {
        name: "react-dom",
        versions: "16.4.1",
        link: "./react-dom/",
      },
      {
        name: "react-pdf",
        versions: "7.7.1",
        link: "./react-pdf/",
      },
      {
        name: "react-router",
        versions: "6.3.0 | 7.5.1",
        link: "./react-router/",
      },
      {
        name: "RequireJS",
        versions: "2.3.6",
        link: "./requirejs/",
      },
      {
        name: "Request",
        versions: "2.88.0",
        link: "./javascript-libraries/",
      },
      {
        name: "Rollup",
        versions: "2.1.0 | 2.26.5 | 2.38.4 | 2.79.1 | 2.79.2",
        link: "./javascript-libraries/",
      },
      {
        name: "semver",
        versions: "7.1.3 | 7.3.2",
        link: "./javascript-libraries/",
      },
      {
        name: "ssr-window",
        versions: "4.0.2",
        link: "./javascript-libraries/",
      },
      {
        name: "tailwindcss",
        versions: "2.1.1",
        link: "./tailwindcss/",
      },
      {
        name: "terser",
        versions: "4.6.10 | 4.8.1 | 5.3.0 | 5.5.1",
        link: "./javascript-libraries/",
      },
      {
        name: "tinymce",
        versions: "6.8.6",
        link: "./javascript-libraries/",
      },
      {
        name: "tough-cookie",
        versions: "2.4.3 | 2.5.0",
        link: "./javascript-libraries/",
      },
      {
        name: "UAParser.js",
        versions: "0.7.21",
        link: "./javascript-libraries/",
      },
      {
        name: "undici",
        versions: "5.28.5",
        link: "./undici/",
      },
      {
        name: "Vite",
        versions: "4.5.5",
        link: "./vite/",
      },
      {
        name: "Vuetify",
        versions: "2.5.5",
        link: "./vuetify/",
      },
      {
        name: "vue",
        versions: "2.7.16",
        link: "./vue/",
      },
      {
        name: "vue-template-compiler",
        versions: "2.6.11",
        link: "./vue-template-compiler/",
      },
      {
        name: "webpack",
        versions: "5.55.0 | 5.76.1",
        link: "./webpack/",
      },
      {
        name: "YUI",
        versions: "2.9.0 | 3.18.1",
        link: "./yui/",
      },
      {
        name: "webpack-dev-server",
        versions: "3.11.0 | 4.7.3 | 4.15.1",
        link: "./webpack-dev-server/",
      },
      {
        name: "webpack-subresource-integrity",
        versions: "1.4.0",
        link: "./javascript-libraries/",
      },
      {
        name: "xml2js",
        versions: "0.4.23",
        link: "./javascript-libraries/",
      },
      {
        name: "yargs-parser",
        versions: "11.1.1",
        link: "./javascript-libraries/",
      },
      {
        name: "@sentry/browser",
        versions: "5.7.1",
        link: "./javascript-libraries/",
      },
    ],
  },
    {
    ecosystem: "Python",
    ecosystemIcon: "/images/python.webp",
    projects: [
      {
        name: "aiohttp",
        versions: "3.8.1 | 3.8.4 | 3.8.5",
        link: "./python-libraries/",
      },
      {
        name: "anyio",
        versions: "3.7.1",
        link: "./python-libraries/",
      },
      {
        name: "celery",
        versions: "5.1.2",
        link: "./celery/",
      },
      {
        name: "certifi",
        versions: "2021.10.8 | 2022.12.7 | 2023.7.22",
        link: "./python-libraries/",
      },
      {
        name: "cryptography",
        versions: "3.4.8 | 41.0.7 | 42.0.0 | 42.0.8 | 43.0.1 | 43.0.3",
        link: "./python-libraries/",
      },
      {
        name: "deepdiff",
        versions: "6.2.3",
        link: "./python-libraries/",
      },
      {
        name: "Django",
        versions: "3.2.25 | 4.0 | 4.2 | 5.0 | 5.0.1 | 5.0.2 | 5.1 | 5.1.4 | 5.1.9",
        link: "./django/",
      },
      {
        name: "dnspython",
        versions: "2.3.0",
        link: "./python-libraries/",
      },
      {
        name: "fastapi",
        versions: "0.63.0 | 0.104.1",
        link: "./fastapi/",
      },
      {
        name: "Flask",
        versions: "0.12.5 | 1.1.2 | 1.1.4 | 2.2.1",
        link: "./flask/",
      },
      {
        name: "flask-cors",
        versions: "4.0.2",
        link: "./python-libraries/",
      },
      {
        name: "future",
        versions: "1.0.0",
        link: "./python-libraries/",
      },
      {
        name: "GitPython",
        versions: "3.1.31",
        link: "./python-libraries/",
      },
      {
        name: "gunicorn",
        versions: "20.0.4 | 20.1.0 | 21.2.0 | 22.0.0",
        link: "./python-libraries/",
      },
      {
        name: "httpx",
        versions: "0.22.0",
        link: "./python-libraries/",
      },
      {
        name: "idna",
        versions: "2.1 | 2.8 | 2.10 | 3.6",
        link: "./python-libraries/",
      },
      {
        name: "Jinja2",
        versions: "2.11.3 | 3.0.3",
        link: "./python-libraries/",
      },
      {
        name: "MLflow",
        versions: "2.22.4",
        link: "./python-libraries/",
      },
      {
        name: "MySQL Connector/Python",
        versions: "8.4.0",
        link: "./python-libraries/",
      },
      {
        name: "NumPy",
        versions: "1.15.4 | 1.16.0",
        link: "./numpy/",
      },
      {
        name: "orjson",
        versions: "3.8.5",
        link: "./python-libraries/",
      },
      {
        name: "pandas",
        versions: "2.2.0 | 2.2.2",
        link: "./python-libraries/",
      },
      {
        name: "paramiko",
        versions: "3.0.0",
        link: "./python-libraries/",
      },
      {
        name: "pdfkit",
        versions: "0.6.1",
        link: "./python-libraries/",
      },
      {
        name: "piexif",
        versions: "1.1.3",
        link: "./python-libraries/",
      },
      {
        name: "Pillow",
        versions: "8.4.0 | 9.4.0 | 9.5.0 | 11.2.1",
        link: "./python-libraries/",
      },
      {
        name: "protobuf",
        versions: "4.24.3",
        link: "./python-libraries/",
      },
      {
        name: "pydantic",
        versions: "1.10.5",
        link: "./python-libraries/",
      },
      {
        name: "PyJWT",
        versions: "1.7.1 | 2.3.0 | 2.8.0 | 2.10.1",
        link: "./python-libraries/",
      },
      {
        name: "pymongo",
        versions: "3.13.0",
        link: "./python-libraries/",
      },
      {
        name: "pypdf",
        versions: "5.9.0",
        link: "./python-libraries/",
      },
      {
        name: "python-jose",
        versions: "3.3.0",
        link: "./python-libraries/",
      },
      {
        name: "python-multipart",
        versions: "0.0.6",
        link: "./python-libraries/",
      },
      {
        name: "PyYAML",
        versions: "3.13 | 5.3.1",
        link: "./python-libraries/",
      },
      {
        name: "redis-py",
        versions: "4.5.1",
        link: "./python-libraries/",
      },
      {
        name: "requests",
        versions: "2.25.1 | 2.30.0 | 2.31.0 | 2.32.3",
        link: "./python-libraries/",
      },
      {
        name: "setuptools",
        versions: "65.5.1 | 68.0.0 | 70.3.0 | 75.0.0 | 75.8.0",
        link: "./python-libraries/",
      },
      {
        name: "starlette",
        versions: "0.27.0",
        link: "./starlette/",
      },
      {
        name: "statsmodels",
        versions: "0.14.4 | 0.14.5",
        link: "./python-libraries/",
      },
      {
        name: "torch",
        versions: "1.13.1",
        link: "./python-libraries/",
      },
      {
        name: "tqdm",
        versions: "4.66.1",
        link: "./python-libraries/",
      },
      {
        name: "twisted",
        versions: "20.3.0",
        link: "./python-libraries/",
      },
      {
        name: "urllib3",
        versions: "1.25.11 | 1.26.4 | 1.26.20",
        link: "./python-libraries/",
      },
      {
        name: "uvicorn",
        versions: "0.11.6",
        link: "./python-libraries/",
      },
      {
        name: "waitress",
        versions: "2.1.2",
        link: "./python-libraries/",
      },
      {
        name: "websockets",
        versions: "8.1",
        link: "./python-libraries/",
      },
      {
        name: "Werkzeug",
        versions: "1.0.1 | 2.2.3",
        link: "./werkzeug/",
      },
    ],
  },
  {
    ecosystem: "PHP",
    ecosystemIcon: "/images/php-logo.webp",
    projects: [
      {
        name: "AWS SDK for PHP",
        versions: "3.263.4",
        link: "./aws-sdk-php/",
      },
      {
        name: "Browsershot",
        versions: "3.61.0",
        link: "./browsershot/",
      },
      {
        name: "CakePHP",
        versions: "2.10.24",
        link: "./cakephp/",
      },
      {
        name: "Carbon",
        versions: "1.26.6",
        link: "./carbon/",
      },
      {
        name: "DomPDF",
        versions: "0.8.x | 1.2.x",
        link: "./dompdf/",
      },
      {
        name: "Firebase PHP-JWT",
        versions: "6.11.1",
        link: "./firebase-php-jwt/",
      },
      {
        name: "Laravel",
        versions: "5.8.38 | 8 | 10 | 11",
        link: "./laravel/",
      },
      {
        name: "League Commonmark",
        versions: "1.6.7",
        link: "./league-commonmark/",
      },
      {
        name: "Livewire",
        versions: "3.x",
        link: "./livewire/",
      },
      {
        name: "PhpSpreadsheet",
        versions: "4.5.0",
        link: "./phpspreadsheet/",
      },
      {
        name: "Symfony HttpFoundation",
        versions: "2.8.x | 3.4.x | 4.4.x",
        link: "./symfony/",
      },
      {
        name: "SwiftMailer",
        versions: "5.4.12",
        link: "./swiftmailer/",
      },
      {
        name: "Symfony Process",
        versions: "5.x | 6.x",
        link: "./symfony/",
      },
    ],
  },
  {
    ecosystem: ".NET",
    ecosystemIcon: "/images/dotnet-logo.webp",
    projects: [
      {
        name: ".NET",
        versions: "6 | 8 | 10",
        link: "./dotnet/",
      },
      {
        name: "Microsoft.Owin",
        versions: "3.1.0",
        link: "./dotnet/",
      },
      {
        name: "Microsoft.Owin.Security.Cookies",
        versions: "3.1.0",
        link: "./dotnet/",
      },
      {
        name: "Newtonsoft.Json",
        versions: "4.5.11 | 6.0.8 | 8.0.3 | 9.0.1 | 10.0.3 | 11.0.2 | 12.0.3",
        link: "./dotnet/",
      },
      {
        name: "SharpZipLib",
        versions: "0.86.0",
        link: "./dotnet/",
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



