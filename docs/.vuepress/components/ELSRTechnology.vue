<template>
  <div class="heading text-center">
    <h4>Supported Runtimes for ELS</h4>
  </div>

  <div class="sp-sorting runtimes-sorting">
    <div class="sp-sort-head">
      <ul>
        <li class="echo">Runtimes</li>
        <li class="echo">Versions</li>
      </ul>
    </div>

    <div class="runtimes-sorting-d">
      <div v-for="(runtime, index) in runtimes" :key="index" class="item">
        <div class="item-l">
          <a v-if="runtime.link" :href="runtime.link">
            <img :src="runtime.icon" :alt="runtime.name" />
            {{ runtime.name }}
          </a>
          <template v-else>
            <img :src="runtime.icon" :alt="runtime.name" />
            {{ runtime.name }}
          </template>
        </div>
        <div class="item-r">
          <span>{{ runtime.versions }}</span>
          <sup v-if="runtime.footnoteSymbol" class="c-red">{{ runtime.footnoteSymbol }}</sup>
          <span v-if="runtime.footnote" class="footnote">
            <sup>{{ runtime.footnoteSymbol }}</sup> {{ runtime.footnote }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="txc-logos-list">
    <div class="heading text-center">
      <h4>We Keep Your Runtimes Secure on Enterprise Linux, <br>Windows, and Debian-Based Operating Systems</h4>
    </div>

    <div class="list">
      <ul>
        <li v-for="(os, index) in operatingSystems" :key="index">
          <a v-if="os.link" :href="os.link">
            <span class="thumb"><img :src="os.icon" :alt="os.name" /></span>
            <span class="name" v-html="os.name"></span>
          </a>
          <template v-else>
            <span class="thumb"><img :src="os.icon" :alt="os.name" /></span>
            <span class="name" v-html="os.name"></span>
          </template>
        </li>
      </ul>
    </div>
  </div>

  <p>If something's missing or you have questions, <a href="https://tuxcare.com/support-portal/">contact support</a>.<br>Support for other Linux distros is available upon request</p>
</template>

<script setup>
const runtimes = [
  {
    name: "OpenJDK",
    versions: "7 | 8 | 11 | 17",
    link: "./openjdk/",
    icon: "/images/java.webp",
  },
  {
    name: "PHP",
    versions: "5.2 | 5.3 | 5.4 | 5.5 | 5.6 | 7.0 | 7.1 | 7.2 | 7.3 | 7.4 | 8.0 | 8.1 | 8.2 ",
    link: "./php/",
    icon: "/images/php.webp",
  },
  {
    name: "Python",
    versions: "2.7 | 3.6 ",
    link: "./python/",
    icon: "/images/python.webp",
  },
  {
    name: ".NET",
    versions: "6",
    link: "./dotnet/",
    icon: "/images/csharp.webp",
  },
  {
    name: "Node.js",
    versions: "12 | 14 | 16 | 18 | 20",
    link: "./nodejs/",
    icon: "/images/javascript.webp",
  },
];

const operatingSystems = [
  {
    name: "Red Hat<br>Enterprise Linux",
    icon: "/images/redhat.webp",
  },
  {
    name: "CentOS",
    icon: "/images/centos.webp",
  },
  {
    name: "AlmaLinux",
    icon: "/images/almalinux.webp",
  },
  {
    name: "Rocky Linux",
    icon: "/images/rocky.webp",
  },
  {
    name: "Oracle Linux",
    icon: "/images/Oracle-Linux.webp",
  },
  {
    name: "Debian",
    icon: "/images/debian.webp",
  },
  {
    name: "Ubuntu",
    icon: "/images/Ubuntu.webp",
  },
  {
    name: "Windows",
    icon: "/images/windows.webp",
  },
];
</script>

<style scoped>
.heading.text-center {
  text-align: center;
  margin-bottom: 1.5rem;
}

.sp-sorting.runtimes-sorting {
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

.sp-sort-head li.echo {
  flex: 1;
  text-align: left;
  padding-left: 0.5rem;
}

.sp-sort-head li.echo:first-child {
  flex: 0 0 40%;
}

.sp-sort-head li.echo:last-child {
  flex: 1;
}

.runtimes-sorting-d {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.runtimes-sorting-d .item {
  display: flex;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.runtimes-sorting-d .item:last-child {
  border-bottom: none;
}

.runtimes-sorting-d .item-l {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.runtimes-sorting-d .item-l img {
  height: 24px;
  width: 24px;
  margin-right: 0.75rem;
  object-fit: contain;
}

.runtimes-sorting-d .item-l a {
  display: flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
}

.runtimes-sorting-d .item-l a:hover {
  text-decoration: underline;
}

.runtimes-sorting-d .item-r {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.runtimes-sorting-d .item-r span {
  line-height: 1.4;
}

.c-red {
  color: #dc3545;
  margin-left: 0.25rem;
}

.footnote {
  display: block;
  width: 100%;
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.25rem;
  font-style: italic;
}

.txc-logos-list {
  margin-top: 3rem;
}

.txc-logos-list .list ul {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 200px));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}

.txc-logos-list .list li {
  display: flex;
  justify-content: center;
  align-items: center;
}

.txc-logos-list .list li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}

.txc-logos-list .list li a:hover {
  transform: translateY(-5px);
}

.txc-logos-list .thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 0.75rem;
}

.txc-logos-list .thumb img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.txc-logos-list .name {
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.3;
  color: #333;
}

@media (max-width: 768px) {
  .txc-logos-list .list ul {
    grid-template-columns: repeat(2, minmax(120px, 150px));
    gap: 1rem;
    justify-content: center;
  }
  
  .txc-logos-list .thumb {
    width: 60px;
    height: 60px;
  }
  
  .heading.heading-with-sub h2 {
    font-size: 1.5rem;
  }
}
</style>



