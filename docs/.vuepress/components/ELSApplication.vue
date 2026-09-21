<template>
  <div class="heading text-center">
    <h2>Supported Applications for ELS</h2>
    <p>If something's missing or you have questions, contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p>
  </div>

  <div class="sp-sorting apps-sorting">
    <div class="sp-sort-head">
      <ul>
        <li class="head-app">Application</li>
        <li class="head-ver">Versions</li>
      </ul>
    </div>

    <div class="apps-sorting-d">
      <a
        v-for="(app, index) in applications"
        :key="index"
        :href="app.link || undefined"
        :class="['item', { clickable: app.link }]"
      >
        <span class="item-l">
          <img :src="app.icon" alt="" aria-hidden="true" />
          {{ app.name }}
        </span>
        <span class="item-r">{{ app.versions }}</span>
        <span v-if="app.link" class="item-arrow">&rarr;</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const applications = [
  {
    name: "Apache Hadoop",
    versions: "2.7.1 | 2.7.3",
    link: "./apache-hadoop/",
    icon: "/images/hadoop.webp",
  },
  {
    name: "Apache Hive",
    versions: "2.3.9",
    link: "./apache-hive/",
    icon: "/images/hive.webp",
  },
  {
    name: "Apache Tomcat®",
    versions: "7.0.70 | 7.0.109 | 8.5.100 | 9.0.46 | 9.0.50 | 9.0.75 | 9.0.83 | 9.0.87 | 9.0.90 | 9.0.100 | 10.1.18 | 10.1.42",
    link: "./apache-tomcat/",
    icon: "/images/tomcat.webp",
  },
  {
    name: "Gradle",
    versions: "6.9.4 | 7.6.6",
    link: "./gradle/",
    icon: "/images/gradle.webp",
  },
  {
    name: "Grafana",
    versions: "10.4.1 | 11.2.0 | 11.3.0 | 11.4.0 | 11.5.0",
    link: "./grafana/",
    icon: "/images/grafana_logo.webp",
  },
  {
    name: "Loki",
    versions: "3.1.0 | 3.2.0 | 3.3.0",
    link: "./loki/",
    icon: "/images/loki.webp",
  },
  {
    name: "MariaDB",
    versions: "10.6",
    link: "./mariadb/",
    icon: "/images/mariadb.webp",
  },
  {
    name: "Maven",
    versions: "3.0.5 | 3.2.5 | 3.8.1",
    link: "./maven/",
    icon: "/images/maven.webp",
  },
  {
    name: "MinIO",
    versions: "RELEASE.2025-10-15T17-29-55Z",
    link: "./minio/",
    icon: "/images/minio.webp",
  },
  {
    name: "MySQL",
    versions: "8.0",
    link: "./mysql/",
    icon: "/images/mysql.webp",
  },
  {
    name: "Percona Server",
    versions: "8.0",
    link: "./percona-server/",
    icon: "/images/percona_server.webp",
  },
  {
    name: "PostgreSQL",
    versions: "9.6 | 11 | 14",
    link: "./postgresql/",
    icon: "/images/TuxCare_color_icon.webp",
  },
  {
    name: "WildFly®",
    versions: "27.0.1.Final",
    link: "./wildfly/",
    icon: "/images/wildfly-logo.webp",
  },
];
</script>

<style scoped>
.heading.text-center {
  text-align: center;
  margin-bottom: 1.5rem;
}

.sp-sorting.apps-sorting {
  border-radius: 23px;
  border: 3px solid #D9EDFF;
  box-shadow: 0px 4px 58px 0px rgba(53, 156, 243, 0.15);
  padding: 1.5rem;
  background-color: #fff;
}

.sp-sort-head ul {
  display: flex;
  list-style: none;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 2px solid #F48243;
}

.sp-sort-head .head-app {
  flex: 0 0 40%;
  text-align: left;
  padding-left: 0.5rem;
}

.sp-sort-head .head-ver {
  flex: 1;
  text-align: left;
  padding-left: 0.5rem;
}

.apps-sorting-d {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.apps-sorting-d .item {
  display: flex;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #eee;
  align-items: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.apps-sorting-d .item.clickable {
  cursor: pointer;
}

.apps-sorting-d .item.clickable:hover {
  background-color: #FEF6F2;
  box-shadow: 0 2px 8px rgba(244, 130, 67, 0.1);
}

.apps-sorting-d .item.clickable:hover .item-l,
.apps-sorting-d .item.clickable:hover .item-r {
  color: #F48243;
}

.apps-sorting-d .item.clickable:hover .item-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #F48243;
}

.apps-sorting-d .item:last-child {
  border-bottom: none;
}

.apps-sorting-d .item-l {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #1b1f27;
  transition: color 0.2s ease;
}

.apps-sorting-d .item-l img {
  height: 24px;
  width: 24px;
  margin-right: 0.75rem;
  object-fit: contain;
}

.apps-sorting-d .item-r {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.apps-sorting-d .item-arrow {
  font-size: 1.1rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: #5c6370;
  flex-shrink: 0;
  margin-left: 0.5rem;
}
</style>
