<template>
  <div class="heading text-center">
    <h2>Available Guides for ELS for Libraries</h2>
    <p>If something's missing or you have questions, contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p>
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

const techData = [
  {
    ecosystem: "Java",
    ecosystemIcon: "/images/java.webp",
    projects: [
      {
        name: "Apache Avro",
        versions: "1.7.6 | 1.7.7 | 1.10.2 | 1.11.3",
        link: "./java-libraries/",
      },
      {
        name: "Apache Axis",
        versions: "1.4",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons BeanUtils",
        versions: "1.6 | 1.8.3 | 1.9.4",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons Compress",
        versions: "1.19 | 1.20 | 1.26.2",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons HttpClient",
        versions: "3.1",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons IO",
        versions: "2.5 | 2.6 | 2.7 | 2.11.0",
        link: "./java-libraries/",
      },
      {
        name: "Apache Commons Lang",
        versions: "2.4 | 2.6",
        link: "./apache-commons-lang/",
      },
      {
        name: "Apache Commons Lang3",
        versions: "3.4 | 3.8.1 | 3.10 | 3.12.0 | 3.14.0 | 3.17.0",
        link: "./apache-commons-lang/",
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
        name: "Apache Kafka®",
        versions: "3.2.3",
        link: "./apache-kafka/",
      },
      {
        name: "Apache Log4j",
        versions: "1.2.16 | 1.2.17",
        link: "./apache-log4j/",
      },
      {
        name: "Apache Lucene®",
        versions: "5.5.5",
        link: "./apache-lucene-and-solr/",
      },
      {
        name: "Apache Solr",
        versions: "5.5.5",
        link: "./apache-lucene-and-solr/",
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
        name: "Apache Spark™",
        versions: "2.4.8",
        link: "./apache-spark/",
      },
      {
        name: "Apache Struts™",
        versions: "1.3.5 | 2.5.33",
        link: "./apache-struts/",
      },
      {
        name: "Apache Thrift",
        versions: "0.9.1 | 0.9.3",
        link: "./java-libraries/",
      },
      {
        name: "Apache Tomcat®",
        versions: "8.5.100 | 9.0.46 | 9.0.50 | 9.0.75 | 9.0.83 | 9.0.87 | 9.0.90 | 9.0.100 | 10.1.18 | 10.1.42",
        link: "./apache-tomcat/",
      },
      {
        name: "Apache Velocity Engine™",
        versions: "1.7",
        link: "./apache-velocity-engine/",
      },
      {
        name: "Apache XMLBeans",
        versions: "2.6.0",
        link: "./java-libraries/",
      },
      {
        name: "Bouncy Castle",
        versions: "1.64 | 1.76",
        link: "./java-libraries/",
      },
      {
        name: "DNSJava",
        versions: "2.1.7",
        link: "./java-libraries/",
      },
      {
        name: "Dom4j",
        versions: "1.6.1",
        link: "./java-libraries/",
      },
      {
        name: "Eclipse JGit",
        versions: "5.7.0 | 5.13.3",
        link: "./java-libraries/",
      },
      {
        name: "Eclipse Parsson",
        versions: "1.0.0",
        link: "./java-libraries/",
      },
      {
        name: "EdDSA",
        versions: "0.3.0",
        link: "./java-libraries/",
      },
      {
        name: "el-spec",
        versions: "3.0.0",
        link: "./java-libraries/",
      },
      {
        name: "Google Gson",
        versions: "2.8.5 | 2.9.1",
        link: "./java-libraries/",
      },
      {
        name: "Google Guava",
        versions: "16.0.1 | 18.0 | 20.0 | 25.1-android | 25.1-jre | 27.1-android | 27.1-jre | 30.1-jre | 31.1-jre",
        link: "./java-libraries/",
      },
      {
        name: "Google Guice",
        versions: "4.2.1",
        link: "./java-libraries/",
      },
      {
        name: "Google OAuth Client",
        versions: "1.25.0",
        link: "./java-libraries/",
      },
      {
        name: "H2 Database",
        versions: "1.4.200",
        link: "./java-libraries/",
      },
      {
        name: "Hazelcast",
        versions: "4.2.8",
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
        name: "HtmlUnit",
        versions: "2.70.0",
        link: "./java-libraries/",
      },
      {
        name: "iText",
        versions: "2.1.7",
        link: "./java-libraries/",
      },
      {
        name: "Jackson",
        versions: "1.9.13",
        link: "./jackson/",
      },
      {
        name: "JBoss XNIO",
        versions: "3.8.0",
        link: "./java-libraries/",
      },
      {
        name: "JDOM",
        versions: "1.0 | 1.1.3",
        link: "./java-libraries/",
      },
      {
        name: "JSON",
        versions: "20090211 | 20140107",
        link: "./java-libraries/",
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
        name: "Logback",
        versions: "1.1.7 | 1.2.13 | 1.4.14",
        link: "./java-libraries/",
      },
      {
        name: "LZ4",
        versions: "1.8.1",
        link: "./java-libraries/",
      },
      {
        name: "Mozilla Rhino",
        versions: "1.7.10 | 1.7.15",
        link: "./java-libraries/",
      },
      {
        name: "NekoHTML",
        versions: "1.9.22",
        link: "./java-libraries/",
      },
      {
        name: "Netty",
        versions: "4.1.115.Final | 4.1.48.Final | 4.1.49.Final | 4.1.52.Final | 4.1.58.Final | 4.1.60.Final | 4.1.63.Final | 4.1.73.Final | 4.1.75.Final | 4.1.82.Final | 4.1.92.Final | 4.1.93.Final",
        link: "./java-libraries/",
      },
      {
        name: "Nimbus JOSE + JWT",
        versions: "9.22 | 9.24.4",
        link: "./java-libraries/",
      },
      {
        name: "OkHttp3",
        versions: "3.14.9",
        link: "./java-libraries/",
      },
      {
        name: "Okio",
        versions: "2.8.0 | 2.10.0",
        link: "./java-libraries/",
      },
      {
        name: "Plexus Utils",
        versions: "1.4.5 | 1.5.8",
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
        name: "Querydsl",
        versions: "5.1.0",
        link: "./java-libraries/",
      },
      {
        name: "Reactor BOM",
        versions: "2020.0.23 | 2020.0.38 | 2022.0.15",
        link: "./java-libraries/",
      },
      {
        name: "Reactor Netty",
        versions: "1.0.23 | 1.0.32 | 1.0.39 | 1.1.15",
        link: "./java-libraries/",
      },
      {
        name: "RSocket",
        versions: "1.1.3",
        link: "./java-libraries/",
      },
      {
        name: "SnakeYAML",
        versions: "1.23 | 1.26 | 1.29 | 1.30 | 1.33",
        link: "./java-libraries/",
      },
      {
        name: "Snappy Java",
        versions: "1.1.8.4",
        link: "./java-libraries/",
      },
      {
        name: "Sonatype Aether",
        versions: "1.13.1",
        link: "./java-libraries/",
      },
      {
        name: "Spring® Framework",
        versions: "3.1 | 4.0 | 4.1 | 4.3 | 5.2 | 5.3 | 6.0 | 6.1",
        link: "./spring/",
        detailsHash: "Framework",
      },
      {
        name: "Spring® AMQP",
        versions: "2.4.17",
        link: "./spring/",
      },
      {
        name: "Spring® Batch",
        versions: "4.3.10",
        link: "./spring/",
      },
      {
        name: "Spring® Boot",
        versions: "2.4 | 2.6 | 2.7 | 3.1",
        link: "./spring/",
        detailsHash: "Boot",
      },
      {
        name: "Spring® Cloud",
        versions: "3.1.9",
        link: "./spring/",
      },
      {
        name: "Spring® Data",
        versions: "2021.2",
        link: "./spring/",
        detailsHash: "Data",
      },
      {
        name: "Spring® Security",
        versions: "5.7 | 5.8 | 6.1",
        link: "./spring/",
        detailsHash: "Security",
      },
      {
        name: "Spring® Security OAuth",
        versions: "1.1.1",
        link: "./spring/",
      },
      {
        name: "Spring® Web Services",
        versions: "3.1.8",
        link: "./spring/",
      },
      {
        name: "Spring® Integration",
        versions: "5.5.20",
        link: "./spring/",
      },
      {
        name: "Spring® HATEOAS",
        versions: "1.5.6",
        link: "./spring/",
      },
      {
        name: "Spring® LDAP",
        versions: "2.4.1 | 2.4.4",
        link: "./spring/",
        detailsHash: "LDAP",
      },
      {
        name: "Spring® GraphQL",
        versions: "1.0.6",
        link: "./spring/",
      },
      {
        name: "Spring® Retry",
        versions: "1.3.4",
        link: "./spring/",
      },
      {
        name: "Spring® Plugin",
        versions: "2.0.0",
        link: "./spring/",
      },
      {
        name: "Spring® Web Flow",
        versions: "2.3.1 | 2.3.3",
        link: "./spring/",
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
        name: "Woodstox",
        versions: "5.0.3",
        link: "./java-libraries/",
      },
      {
        name: "Xerces",
        versions: "2.11.0 | 2.12.0",
        link: "./java-libraries/",
      },
      {
        name: "XMLUnit",
        versions: "2.9.1 | 2.9.0",
        link: "./java-libraries/",
      },
      {
        name: "Eclipse Jetty",
        versions: "8.2.0.v20160908 | 9.4.24.v20191120 | 9.4.48.v20220622 | 9.4.53.v20231009 | 9.4.59 | 9.4.60 | 10.0.27 | 10.0.28 | 11.0.19 | 11.0.27 | 11.0.28",
        link: "./jetty/",
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
        versions: "4-19",
        link: "./angular/",
      },
      {
        name: "AngularJS",
        versions: "1.4.4 | 1.5.11 | 1.6.10 | 1.7.9 | 1.8.2 | 1.8.3",
        link: "./angularjs/",
      },
      {
        name: "ajv",
        versions: "4.11.8 | 5.5.2 | 6.12.6 | 6.14.0 | 8.6.2 | 8.9.0 | 8.11.0 | 8.12.0 | 8.17.1",
        link: "./javascript-libraries/",
      },
      {
        name: "ansi-html",
        versions: "0.0.7",
        link: "./javascript-libraries/",
      },
      {
        name: "async",
        versions: "2.6.1",
        link: "./javascript-libraries/",
      },
      {
        name: "Astro",
        versions: "0.26.1 | 1.9.2 | 2.10.15 | 3.6.5",
        link: "./astro/",
      },
      {
        name: "axios",
        versions: "0.18.1 | 0.27.2",
        link: "./javascript-libraries/",
      },
      {
        name: "base64url",
        versions: "0.0.6",
        link: "./javascript-libraries/",
      },
      {
        name: "body-parser",
        versions: "1.8.4 | 1.13.3 | 1.14.2",
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
        versions: "1.8.5 | 2.3.2 | 3.0.3",
        link: "./javascript-libraries/",
      },
      {
        name: "bson",
        versions: "0.5.7 | 1.0.9",
        link: "./javascript-libraries/",
      },
      {
        name: "clean-css",
        versions: "2.2.23 | 3.4.28",
        link: "./javascript-libraries/",
      },
      {
        name: "chownr",
        versions: "0.0.2 | 1.0.1",
        link: "./javascript-libraries/",
      },
      {
        name: "concat-stream",
        versions: "1.4.8 | 1.5.0",
        link: "./javascript-libraries/",
      },
      {
        name: "connect",
        versions: "1.9.2 | 2.6.0 | 2.7.5",
        link: "./javascript-libraries/",
      },
      {
        name: "cookie",
        versions: "0.0.5 | 0.1.3 | 0.3.1 | 0.4.2 | 0.5.0",
        link: "./javascript-libraries/",
      },
      {
        name: "copy-anything",
        versions: "2.0.6",
        link: "./javascript-libraries/",
      },
      {
        name: "cross-spawn",
        versions: "0.2.9 | 5.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "CryptoJS",
        versions: "3.3.0",
        link: "./javascript-libraries/",
      },
      {
        name: "debug",
        versions: "1.0.5 | 2.1.1 | 2.2.0 | 2.3.3 | 3.2.6 | 4.1.1",
        link: "./javascript-libraries/",
      },
      {
        name: "devalue",
        versions: "2.0.1 | 4.3.3",
        link: "./javascript-libraries/",
      },
      {
        name: "diff",
        versions: "1.0.2 | 1.4.0 | 7.0.0",
        link: "./javascript-libraries/",
      },
      {
        name: "dompurify",
        versions: "2.3.0 | 2.4.3 | 2.5.8 | 2.5.9 | 3.1.6 | 3.2.3",
        link: "./javascript-libraries/",
      },
      {
        name: "ejs",
        versions: "1.0.0 | 2.7.4",
        link: "./javascript-libraries/",
      },
      {
        name: "Ember.js",
        versions: "0.2.7 | 2.18.2 | 3.28.6 | 4.12.13",
        link: "./ember/",
      },
      {
        name: "elliptic",
        versions: "6.6.0 | 6.6.1",
        link: "./javascript-libraries/",
      },
      {
        name: "engine.io",
        versions: "3.2.1",
        link: "./javascript-libraries/",
      },
      {
        name: "es5-ext",
        versions: "0.10.7",
        link: "./javascript-libraries/",
      },
      {
        name: "esbuild",
        versions: "0.13.8 | 0.14.22 | 0.14.25 | 0.14.54 | 0.15.18 | 0.15.5 | 0.17.19 | 0.18.17 | 0.18.20 | 0.19.12 | 0.20.1 | 0.21.5",
        link: "./javascript-libraries/",
      },
      {
        name: "express",
        versions: "3.21.2",
        link: "./express/",
      },
      {
        name: "extend",
        versions: "3.0.0",
        link: "./javascript-libraries/",
      },
      {
        name: "express-jwt",
        versions: "0.1.3 | 0.1.4",
        link: "./javascript-libraries/",
      },
      {
        name: "fast-xml-parser",
        versions: "4.5.3",
        link: "./javascript-libraries/",
      },
      {
        name: "fastify",
        versions: "3.29.5 | 4.29.1",
        link: "./fastify/",
      },
      {
        name: "follow-redirects",
        versions: "0.0.3 | 1.15.11",
        link: "./javascript-libraries/",
      },
      {
        name: "Form-Data",
        versions: "0.0.8 | 0.1.4 | 0.2.0 | 1.0.0-rc3 | 1.0.1 | 2.0.0 | 2.1.4 | 2.3.3",
        link: "./javascript-libraries/",
      },
      {
        name: "formidable",
        versions: "2.1.2 | 2.1.5",
        link: "./javascript-libraries/",
      },
      {
        name: "forwarded",
        versions: "0.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "fresh",
        versions: "0.2.4 | 0.3.0 | 0.5.2",
        link: "./javascript-libraries/",
      },
      {
        name: "fstream",
        versions: "1.0.8",
        link: "./javascript-libraries/",
      },
      {
        name: "got",
        versions: "2.9.2 | 8.3.2 | 9.6.0",
        link: "./javascript-libraries/",
      },
      {
        name: "growl",
        versions: "1.7.0",
        link: "./javascript-libraries/",
      },
      {
        name: "handlebars",
        versions: "1.0.12 | 1.3.0 | 2.0.0 | 3.0.3",
        link: "./javascript-libraries/",
      },
      {
        name: "hapi-hoek",
        versions: "6.2.4",
        link: "./javascript-libraries/",
      },
      {
        name: "hawk",
        versions: "0.13.1 | 1.0.0 | 1.1.1 | 2.3.1 | 3.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "highlight.js",
        versions: "9.18.5",
        link: "./javascript-libraries/",
      },
      {
        name: "hoek",
        versions: "0.8.5 | 0.9.1 | 2.11.1 | 2.12.0 | 2.14.0 | 2.16.3 | 4.2.1",
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
        versions: "1.1.5 | 1.1.9 | 2.0.0 | 2.0.1",
        link: "./javascript-libraries/",
      },
      {
        name: "is-my-json-valid",
        versions: "2.10.1 | 2.12.2",
        link: "./javascript-libraries/",
      },
      {
        name: "jQuery",
        versions: "1.8.2 | 1.12.4 | 2.2.4 | 3.4.1",
        link: "./jquery/",
      },
      {
        name: "jQuery UI",
        versions: "1.10.4",
        link: "./jquery-ui/",
      },
      {
        name: "jquery-validation",
        versions: "1.19.0",
        link: "./javascript-libraries/",
      },
      {
        name: "js-yaml",
        versions: "3.3.1 | 3.7.0 | 4.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "json5",
        versions: "0.4.0 | 0.5.1",
        link: "./javascript-libraries/",
      },
      {
        name: "JSON Web Token (JWT)",
        versions: "0.4.0 | 0.4.1 | 8.5.1",
        link: "./jsonwebtoken/",
      },
      {
        name: "JSONPath Plus",
        versions: "7.2.0",
        link: "./javascript-libraries/",
      },
      {
        name: "jsonpointer",
        versions: "1.1.0 | 2.0.0 | 4.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "jsPDF",
        versions: "2.5.2 | 3.0.4",
        link: "./javascript-libraries/",
      },
      {
        name: "knex",
        versions: "0.95.15",
        link: "./javascript-libraries/",
      },
      {
        name: "karma",
        versions: "4.1.0 | 5.0.9",
        link: "./karma/",
      },
      {
        name: "Knockout",
        versions: "2.3.0 | 3.2.0 | 3.4.2",
        link: "./knockout/",
      },
      {
        name: "koa",
        versions: "1.7.1",
        link: "./koa/",
      },
      {
        name: "Lodash",
        versions: "1.3.1 | 2.4.2 | 3.2.0 | 3.10.1 | 4.17.15 | 4.17.19 | 4.17.21 | 4.18.1 | 4.5.0",
        link: "./lodash/",
      },
      {
        name: "lodash.merge",
        versions: "3.3.2",
        link: "./javascript-libraries/",
      },
      {
        name: "LoopBack",
        versions: "1.10.0 | 2.42.0",
        link: "./loopback/",
      },
      {
        name: "loader-utils",
        versions: "0.2.17 | 1.2.3 | 2.0.0",
        link: "./javascript-libraries/",
      },
      {
        name: "markdown-it",
        versions: "4.0.3 | 4.3.0 | 8.4.2 | 13.0.2",
        link: "./javascript-libraries/",
      },
      {
        name: "marked",
        versions: "0.2.10 | 0.7.0 | 4.0.7 | 4.0.9",
        link: "./javascript-libraries/",
      },
      {
        name: "mem",
        versions: "1.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "micromatch",
        versions: "3.1.10",
        link: "./javascript-libraries/",
      },
      {
        name: "mime",
        versions: "1.2.11 | 1.3.0 | 1.3.4",
        link: "./javascript-libraries/",
      },
      {
        name: "minimatch",
        versions: "0.0.4 | 0.0.5 | 0.2.14 | 0.3.0 | 1.0.0 | 2.0.10 | 3.0.4 | 3.1.2 | 3.1.5 | 5.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "minimist",
        versions: "0.0.8 | 0.0.10 | 1.2.0 | 1.2.8",
        link: "./javascript-libraries/",
      },
      {
        name: "moment",
        versions: "2.10.6 | 2.24.0",
        link: "./javascript-libraries/",
      },
      {
        name: "moment-timezone",
        versions: "0.4.1",
        link: "./javascript-libraries/",
      },
      {
        name: "MongoDB Driver",
        versions: "2.2.36",
        link: "./mongodb-driver/",
      },
      {
        name: "Mongoose",
        versions: "5.13.23 | 6.12.2 | 7.8.8",
        link: "./mongoose/",
      },
      {
        name: "morgan",
        versions: "1.5.3",
        link: "./javascript-libraries/",
      },
      {
        name: "mout",
        versions: "0.9.1 | 0.11.0",
        link: "./javascript-libraries/",
      },
      {
        name: "multer",
        versions: "1.4.5-lts | 1.4.5-lts.2",
        link: "./javascript-libraries/",
      },
      {
        name: "mysql",
        versions: "2.18.1",
        link: "./javascript-libraries/",
      },
      {
        name: "MySQL2",
        versions: "2.3.3",
        link: "./mysql2/",
      },
      {
        name: "negotiator",
        versions: "0.5.3",
        link: "./javascript-libraries/",
      },
      {
        name: "nguniversal-express-engine",
        versions: "10.1.0",
        link: "./javascript-libraries/",
      },
      {
        name: "next",
        versions: "12.3.7 | 13.5.11 | 14.2.35 | 16.0.6",
        link: "./next/",
      },
      {
        name: "node-fetch",
        versions: "1.6.3 | 1.7.3 | 2.6.1",
        link: "./node-fetch/",
      },
      {
        name: "Nuxt",
        versions: "0.10.7 | 2.18.1",
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
        name: "Nuxt",
        versions: "0.10.7 | 2.18.1",
        link: "./nuxt/",
      },
      {
        name: "object-path",
        versions: "0.11.4",
        link: "./javascript-libraries/",
      },
      {
        name: "parsejson",
        versions: "0.0.3",
        link: "./javascript-libraries/",
      },
      {
        name: "passport",
        versions: "0.5.3",
        link: "./passport/",
      },
      {
        name: "path-to-regexp",
        versions: "0.1.3",
        link: "./javascript-libraries/",
      },
      {
        name: "pdfjs-dist",
        versions: "2.16.105 | 3.11.174",
        link: "./javascript-libraries/",
      },
      {
        name: "picocolors",
        versions: "0.2.1",
        link: "./javascript-libraries/",
      },
      {
        name: "picomatch",
        versions: "2.3.1 | 4.0.2",
        link: "./javascript-libraries/",
      },
      {
        name: "PostCSS",
        versions: "5.2.18 | 6.0.23 | 7.0.39 | 8.3.6",
        link: "./postcss/",
      },
      {
        name: "prismjs",
        versions: "1.27.0 | 1.29.0",
        link: "./javascript-libraries/",
      },
      {
        name: "protobufjs",
        versions: "6.11.6",
        link: "./javascript-libraries/",
      },
      {
        name: "pug",
        versions: "2.0.4",
        link: "./javascript-libraries/",
      },
      {
        name: "qs",
        versions: "0.5.1 | 0.6.6 | 1.0.2 | 1.2.2 | 2.2.5 | 2.3.3 | 2.4.2 | 4.0.0 | 5.1.0 | 5.2.0 | 6.5.3",
        link: "./javascript-libraries/",
      },
      {
        name: "Quill",
        versions: "1.3.7",
        link: "./javascript-libraries/",
      },
      {
        name: "React",
        versions: "15.6.2 | 16.4.1 | 19.2.0",
        link: "./react/",
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
        versions: "2.1.22 | 2.3.6",
        link: "./requirejs/",
      },
      {
        name: "Request",
        versions: "2.88.0 | 2.88.2",
        link: "./javascript-libraries/",
      },
      {
        name: "Rollup",
        versions: "0.41.6 | 0.57.1 | 2.1.0 | 2.26.5 | 2.38.4 | 2.79.1 | 2.79.2",
        link: "./javascript-libraries/",
      },
      {
        name: "sanitize-html",
        versions: "1.27.5",
        link: "./javascript-libraries/",
      },
      {
        name: "semver",
        versions: "2.3.2 | 4.3.6 | 5.0.3 | 6.3.0 | 7.1.3 | 7.3.2 | 7.3.8",
        link: "./javascript-libraries/",
      },
      {
        name: "sentry-browser",
        versions: "5.7.1",
        link: "./javascript-libraries/",
      },
      {
        name: "serialize-javascript",
        versions: "1.9.1 | 3.1.0 | 4.0.0 | 5.0.1 | 6.0.2",
        link: "./javascript-libraries/",
      },
      {
        name: "shell-quote",
        versions: "1.4.3 | 1.7.2",
        link: "./javascript-libraries/",
      },
      {
        name: "shelljs",
        versions: "0.1.4 | 0.3.0",
        link: "./javascript-libraries/",
      },
      {
        name: "socket.io",
        versions: "2.1.1",
        link: "./javascript-libraries/",
      },
      {
        name: "socket.io-parser",
        versions: "3.2.0",
        link: "./javascript-libraries/",
      },
      {
        name: "ssr-window",
        versions: "4.0.2",
        link: "./javascript-libraries/",
      },
      {
        name: "stringstream",
        versions: "0.0.4 | 0.0.5",
        link: "./javascript-libraries/",
      },
      {
        name: "Svelte",
        versions: "0.3.0 | 1.64.1 | 2.16.1 | 3.59.2 | 4.2.20",
        link: "./svelte/",
      },
      {
        name: "swiper",
        versions: "11.2.10",
        link: "./javascript-libraries/",
      },
      {
        name: "tailwindcss",
        versions: "2.1.1",
        link: "./tailwindcss/",
      },
      {
        name: "tar",
        versions: "1.0.3 | 2.1.1 | 2.2.1 | 2.2.2 | 4.4.19 | 6.0.2 | 6.2.1",
        link: "./javascript-libraries/",
      },
      {
        name: "terser",
        versions: "3.17.0 | 4.6.3 | 4.6.10 | 4.8.1 | 5.3.0 | 5.5.1",
        link: "./javascript-libraries/",
      },
      {
        name: "tinymce",
        versions: "6.8.6",
        link: "./javascript-libraries/",
      },
      {
        name: "tmp",
        versions: "0.0.30 | 0.0.33 | 0.1.0 | 0.2.1",
        link: "./javascript-libraries/",
      },
      {
        name: "tough-cookie",
        versions: "0.12.1 | 1.2.0 | 2.2.0 | 2.4.3 | 2.5.0 | 3.0.1",
        link: "./javascript-libraries/",
      },
      {
        name: "tunnel-agent",
        versions: "0.3.0 | 0.4.0 | 0.4.3",
        link: "./javascript-libraries/",
      },
      {
        name: "UAParser.js",
        versions: "0.7.21",
        link: "./javascript-libraries/",
      },
      {
        name: "uglify-js",
        versions: "1.1.1 | 1.3.5 | 2.3.6",
        link: "./javascript-libraries/",
      },
      {
        name: "underscore",
        versions: "1.4.4 | 1.6.0 | 1.7.0",
        link: "./javascript-libraries/",
      },
      {
        name: "underscore.string",
        versions: "2.2.1 | 2.3.3",
        link: "./javascript-libraries/",
      },
      {
        name: "undici",
        versions: "5.28.5 | 5.29.0",
        link: "./undici/",
      },
      {
        name: "uuid",
        versions: "3.4.0 | 8.3.2 | 9.0.1 | 11.0.5",
        link: "./javascript-libraries/",
      },
      {
        name: "validator",
        versions: "8.2.0 | 10.11.0",
        link: "./javascript-libraries/",
      },
      {
        name: "Vite",
        versions: "2.9.18 | 3.2.11 | 4.5.14 | 4.5.5 | 5.4.14 | 5.4.21",
        link: "./vite/",
      },
      {
        name: "Vuetify",
        versions: "2.5.5",
        link: "./vuetify/",
      },
      {
        name: "vue",
        versions: "2.6.11 | 2.6.14 | 2.7.16",
        link: "./vue/",
      },
      {
        name: "vue-server-renderer",
        versions: "2.6.11 | 2.6.14 | 2.7.16",
        link: "./vue/",
      },
      {
        name: "vue-template-compiler",
        versions: "2.6.11 | 2.6.14 | 2.7.16",
        link: "./vue-template-compiler/",
      },
      {
        name: "webpack",
        versions: "5.55.0 | 5.76.1",
        link: "./webpack/",
      },
      {
        name: "webpack-dev-middleware",
        versions: "1.12.2 | 3.7.2 | 5.0.0 | 5.3.0",
        link: "./javascript-libraries/",
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
        name: "websocket-extensions",
        versions: "0.1.1",
        link: "./javascript-libraries/",
      },
      {
        name: "ws",
        versions: "1.1.1 | 3.3.3 | 4.1.0 | 7.4.6",
        link: "./javascript-libraries/",
      },
      {
        name: "xlsx",
        versions: "0.18.5",
        link: "./javascript-libraries/",
      },
      {
        name: "xml2js",
        versions: "0.2.6 | 0.2.8 | 0.4.23",
        link: "./javascript-libraries/",
      },
      {
        name: "xmlhttprequest-ssl",
        versions: "1.5.3 | 1.5.5",
        link: "./javascript-libraries/",
      },
      {
        name: "yargs-parser",
        versions: "4.2.1 | 7.0.0 | 10.1.0 | 11.1.1",
        link: "./javascript-libraries/",
      },
      {
        name: "YUI",
        versions: "2.9.0 | 3.18.1",
        link: "./yui/",
      },
    ],
  },
    {
    ecosystem: "Python",
    ecosystemIcon: "/images/python.webp",
    projects: [
      {
        name: "aiohttp",
        versions: "3.8.1 | 3.8.4 | 3.8.5 | 3.8.6",
        link: "./python-libraries/",
      },
      {
        name: "celery",
        versions: "4.4.7 | 5.1.2",
        link: "./celery/",
      },
      {
        name: "certifi",
        versions: "2021.10.8 | 2022.12.7 | 2023.7.22",
        link: "./python-libraries/",
      },
      {
        name: "cryptography",
        versions: "3.4.8 | 41.0.7 | 42.0.0 | 42.0.8 | 43.0.1 | 43.0.3 | 44.0.3 | 45.0.7",
        link: "./python-libraries/",
      },
      {
        name: "deepdiff",
        versions: "6.2.3",
        link: "./python-libraries/",
      },
      {
        name: "Django",
        versions: "3.2.25 | 4.0 | 4.2 | 5.0 | 5.0.1 | 5.0.2 | 5.0.3 | 5.0.4 | 5.0.5| 5.1 | 5.1.4 | 5.1.9",
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
        name: "fastmcp",
        versions: "2.14.5 | 2.14.7",
        link: "./python-libraries/",
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
        name: "h11",
        versions: "0.9.0",
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
        name: "jaraco-context",
        versions: "5.3.0",
        link: "./python-libraries/",
      },
      {
        name: "Jinja2",
        versions: "2.11.3 | 3.0.3",
        link: "./python-libraries/",
      },
      {
        name: "keras",
        versions: "2.15.0",
        link: "./python-libraries/",
      },
      {
        name: "langchain-core",
        versions: "0.3.83",
        link: "./python-libraries/",
      },
      {
        name: "LightGBM",
        versions: "3.3.5",
        link: "./python-libraries/",
      },
      {
        name: "MLflow",
        versions: "2.9.1 | 2.22.4",
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
        name: "pip",
        versions: "9.0",
        link: "./python-libraries/",
      },
      {
        name: "Pillow",
        versions: "8.4.0 | 9.4.0 | 9.5.0 | 10.4.0 | 11.2.1 | 11.3.0",
        link: "./python-libraries/",
      },
      {
        name: "protobuf",
        versions: "3.17.0 | 3.20.3 | 4.24.3 | 4.25.8",
        link: "./python-libraries/",
      },
      {
        name: "pyarrow",
        versions: "12.0.1",
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
        name: "pymysql",
        versions: "0.10.1",
        link: "./python-libraries/",
      },
      {
        name: "pyOpenSSL",
        versions: "23.3.0 | 24.3.0 | 25.3.0",
        link: "./python-libraries/",
      },
      {
        name: "pypdf",
        versions: "5.9.0",
        link: "./python-libraries/",
      },
      {
        name: "pytest",
        versions: "7.4.4 | 8.4.2",
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
        name: "scikit-learn",
        versions: "1.0.2",
        link: "./python-libraries/",
      },
      {
        name: "setuptools",
        versions: "59.8.0 | 65.5.1 | 68.0.0 | 70.3.0 | 75.0.0 | 75.8.0",
        link: "./python-libraries/",
      },
      {
        name: "starlette",
        versions: "0.13.6 | 0.27.0",
        link: "./starlette/",
      },
      {
        name: "torch",
        versions: "1.13.1",
        link: "./python-libraries/",
      },
      {
        name: "tornado",
        versions: "5.1.1 | 6.1.0",
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
        versions: "1.25.11 | 1.26.4 | 1.26.20 | 2.0.7",
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
        versions: "1.0.1 | 2.2.3 | 2.3.8",
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
        versions: "3.61.0 | 4.4.0",
        link: "./browsershot/",
      },
      {
        name: "CakePHP",
        versions: "2.10.24",
        link: "./cakephp/",
      },
      {
        name: "Carbon",
        versions: "1.26.6 | 1.39.1",
        link: "./carbon/",
      },
      {
        name: "CraftCMS",
        versions: "3.9.15",
        link: "./craftcms/",
      },
      {
        name: "CraftCMS Feed Me Plugin",
        versions: "3.1.17",
        link: "./craftcms-feed-me/",
      },
      {
        name: "Doctrine ORM",
        versions: "2.8.3",
        link: "./doctrine-orm/",
      },
      {
        name: "DomPDF",
        versions: "0.8.x | 1.2.x | 3.1.0",
        link: "./dompdf/",
      },
      {
        name: "Drupal",
        versions: "9.5.x",
        link: "./drupal/",
      },
      {
        name: "php-svg-lib",
        versions: "0.3.4",
        link: "./php-svg-lib/",
      },
      {
        name: "Firebase PHP-JWT",
        versions: "6.11.1",
        link: "./firebase-php-jwt/",
      },
      {
        name: "Google Protobuf",
        versions: "3.24.4",
        link: "./google-protobuf/",
        name: "Guzzle",
        versions: "6.3.3",
        link: "./guzzle/",
      },
      {
        name: "Httpful",
        versions: "0.3.2",
        link: "./httpful/",
      },
      {
        name: "Laravel",
        versions: "5.4.36 | 5.5.50 | 5.6.40 | 5.7.29 | 5.8.38 | 7.30.7 | 8 | 9.52.21 | 10 | 11 | 12.58.0",
        link: "./laravel/",
      },
      {
        name: "League Commonmark",
        versions: "1.6.7 | 2.7.1",
        link: "./league-commonmark/",
      },
      {
        name: "League Flysystem",
        versions: "1.0.70 | 1.1.10",
        link: "./league-flysystem/",
      },
      {
        name: "Livewire",
        versions: "3.x",
        link: "./livewire/",
      },
      {
        name: "phpseclib",
        versions: "0.3.10",
        link: "./phpseclib/",
      },
      {
        name: "PHPMailer",
        versions: "5.2.28",
        link: "./phpmailer/",
      },
      {
        name: "PHPUnit",
        versions: "6.5.14 | 7.5.20 | 8.4.3 | 9.5.28 | 10.4.2 | 11.4.4 | 12.4.5",
        link: "./phpunit/",
      },
      {
        name: "PhpSpreadsheet",
        versions: "4.5.0",
        link: "./phpspreadsheet/",
      },
      {
        name: "Saloon",
        versions: "3.15.0",
        link: "./saloon/",
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
        versions: "3.4.x | 4.4.x | 5.x | 6.x",
        link: "./symfony/",
      },
      {
        name: "Zend Framework 1",
        versions: "1.12.10",
        link: "./zendframework-zf1/",
      },
      {
        name: "Zend HTTP",
        versions: "2.5.6",
        link: "./zendframework-zend-http/",
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
        name: "AutoMapper",
        versions: "2.2.2 | 3.3.2 | 4.2.2 | 5.2.1 | 6.2.3 | 7.0.2 | 8.1.2 | 9.0.1 | 10.1.2 | 11.0.2 | 12.0.2 | 13.0.2 | 14.0.1",
        link: "./dotnet/",
      },
      {
        name: "log4net",
        versions: "1.2.15 | 1.2.16",
        link: "./dotnet/",
      },
      {
        name: "Microsoft.Azure.Storage.DataMovement",
        versions: "1.2.0 | 1.2.1",
        link: "./dotnet/",
      },
      {
        name: "Microsoft.Data.SqlClient",
        versions: "1.1.4 | 1.1.5",
        link: "./dotnet/",
      },
      {
        name: "Microsoft.Owin",
        versions: "3.1.0 | 3.1.1",
        link: "./dotnet/",
      },
      {
        name: "MimeKit",
        versions: "3.6.1 | 3.6.2",
        link: "./dotnet/",
      },
      {
        name: "Newtonsoft.Json",
        versions: "4.5.11 | 4.5.12 | 6.0.8 | 6.0.9 | 8.0.3 | 8.0.4 | 9.0.1 | 9.0.2 | 10.0.3 | 10.0.4 | 11.0.2 | 11.0.3 | 12.0.3 | 12.0.4",
        link: "./dotnet/",
      },
      {
        name: "NHibernate",
        versions: "4.1.2.4001",
        link: "./dotnet/",
      },
      {
        name: "Refit",
        versions: "6.3.2 | 6.3.3",
        link: "./dotnet/",
      },
      {
        name: "RestSharp",
        versions: "108.0.3 | 108.0.4 | 110.2.0 | 110.2.1 | 111.4.1 | 111.4.2",
        link: "./dotnet/",
      },
      {
        name: "SharpZipLib",
        versions: "0.86.0 | 0.86.1",
        link: "./dotnet/",
      },
      {
        name: "SixLabors.ImageSharp",
        versions: "1.0.5",
        link: "./dotnet/",
      },
      {
        name: "System.Formats.Asn1",
        versions: "5.0.1 | 7.0.1",
        link: "./dotnet/",
      },
      {
        name: "System.Text.Json",
        versions: "7.0.5",
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



