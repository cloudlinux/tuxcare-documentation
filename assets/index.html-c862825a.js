import{_ as d,S as o,n as p,p as u,a6 as n,q as r,J as t,C as a,A as c,v as g}from"./framework-a770bce2.js";const h=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`,m=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,v=`<repositories>
    <repository>
        <id>tuxcare-registry</id>
        <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
    </repository>
</repositories>

<pluginRepositories>
  <pluginRepository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </pluginRepository>
</pluginRepositories>`,b=`repositories {
    maven {
      url = uri(providers.gradleProperty("tuxcare_registry_url").get())
      credentials {
        username = providers.gradleProperty("tuxcare_registry_user").get()
        password = providers.gradleProperty("tuxcare_registry_password").get()
      }
      authentication {
        basic(BasicAuthentication)
      }
    }
    mavenCentral()
}

pluginManagement {
    repositories {
    //...
    maven {
      url = uri(providers.gradleProperty("tuxcare_registry_url").get())
      credentials {
        username = providers.gradleProperty("tuxcare_registry_user").get()
        password = providers.gradleProperty("tuxcare_registry_password").get()
      }
      authentication {
        basic(BasicAuthentication)
      }
    }
    mavenCentral()
    //...
    }
}`,f=`<parent>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
  <version>2.7.18-tuxcare.8</version>
</parent>

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>`,x=`plugins {
  id 'java'
  id 'org.springframework.boot' version '2.7.18-tuxcare.8'
  id 'io.spring.dependency-management' version '1.0.15.RELEASE'
}

dependencies {
  implementation "org.springframework.boot:spring-boot-starter-web"
  implementation "org.springframework.boot:spring-boot-starter-security"
  implementation "org.springframework.boot:spring-boot-starter-validation"
}`,y={__name:"index.html",setup(S){return(w,e)=>{const i=o("CodeTabs"),s=o("ResolvedCveTable"),l=o("ClientOnly");return p(),u("div",null,[e[6]||(e[6]=n('<h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring<sup style="font-size:0.5em;">®</sup></h1><p>Spring® is a trademark of Broadcom Inc. and/or its subsidiaries.</p><br><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Spring® provides security updates, system enhancement patches, and selected bug fixes that are integral to the stable operation of applications running on these versions of Spring® ecosystem components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).</p><ul><li>Spring® Framework</li><li>Spring® Boot</li><li>Spring® Data</li><li>Spring® Security</li><li>etc.</li></ul><p>Our ELS for Spring® service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring® applications.</p><h2 id="connection-to-els-for-spring-repository" tabindex="-1"><a class="header-anchor" href="#connection-to-els-for-spring-repository" aria-hidden="true">#</a> Connection to ELS for Spring® Repository</h2><p>This guide outlines the steps needed to integrate the TuxCare ELS for Spring® repository into your Java application. The repository provides trusted Java libraries that can be easily used with both <strong>Maven</strong> and <strong>Gradle</strong> projects.</p><h3 id="step-1:-get-user-credentials" tabindex="-1"><a class="header-anchor" href="#step-1:-get-user-credentials" aria-hidden="true">#</a> Step 1: Get user credentials</h3><p>You need a username and password in order to use the TuxCare ELS Spring® repository. Anonymous access is disabled. To receive a username and password please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><h3 id="step-2:-configure-registry" tabindex="-1"><a class="header-anchor" href="#step-2:-configure-registry" aria-hidden="true">#</a> Step 2: Configure Registry</h3>',11)),r("ol",null,[e[3]||(e[3]=n(`<li><p>Navigate to the directory depending on your operating system.</p><ul><li>Windows</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Linux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1)),r("li",null,[e[0]||(e[0]=r("p",null,"Add the TuxCare repository and plugin repository to your build configuration.",-1)),e[1]||(e[1]=r("div",{class:"tip custom-block"},[r("p",{class:"custom-block-title"}),r("p",null,[t("For Maven, you may choose any valid "),r("code",null,"<id>"),t(" value instead of "),r("code",null,"tuxcare-registry"),t(", but the same value must be used in both "),r("code",null,"settings.xml"),t(" and "),r("code",null,"pom.xml"),t(".")])],-1)),a(i,{tabs:[{title:"Maven (settings.xml)",content:h},{title:"Gradle (gradle.properties)",content:m}]},null,8,["tabs"]),e[2]||(e[2]=r("p",null,[t("Here "),r("code",null,"USERNAME"),t(" and "),r("code",null,"PASSWORD"),t(" are your credentials mentioned in "),r("a",{href:"#step-1-get-user-credentials"},"Step 1"),t(".")],-1))])]),e[7]||(e[7]=r("h3",{id:"step-3:-update-build-configuration",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#step-3:-update-build-configuration","aria-hidden":"true"},"#"),t(" Step 3: Update Build Configuration")],-1)),e[8]||(e[8]=r("p",null,"Add the TuxCare Spring® repository and plugins to your build configuration:",-1)),a(i,{tabs:[{title:"Maven (pom.xml)",content:v},{title:"Gradle (build.gradle)",content:b}]},null,8,["tabs"]),e[9]||(e[9]=n('<ul><li>To fully switch from the official Spring® repository, replace it with the TuxCare repository.</li><li>To keep both, add TuxCare after the official one.</li></ul><p>Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.</p><ul><li><a href="https://github.com/cloudlinux/securechain-java/blob/main/examples/maven" target="_blank" rel="noopener noreferrer">Maven</a></li><li><a href="https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle" target="_blank" rel="noopener noreferrer">Gradle</a></li></ul><h3 id="step-4:-update-dependencies" tabindex="-1"><a class="header-anchor" href="#step-4:-update-dependencies" aria-hidden="true">#</a> Step 4: Update Dependencies</h3><p>Replace the Spring® build dependencies in your build file with the TuxCare-maintained versions. Set the TuxCare release as the parent version. Your build tool will fetch the TuxCare versions of both your dependencies and their transitive dependencies.</p><p>You can find a specific artifact version in your TuxCare account on <a href="https://nexus.repo.tuxcare.com/#browse/browse:els_java" target="_blank" rel="noopener noreferrer">Nexus</a>. Click <strong>Sign In</strong> in the top right corner to authenticate with your TuxCare credentials. After logging in, you may need to refresh or reopen the link to browse artifacts due to Nexus routing behavior.</p>',6)),a(i,{tabs:[{title:"Maven (pom.xml)",content:f},{title:"Gradle (build.gradle)",content:x}]},null,8,["tabs"]),e[10]||(e[10]=r("h3",{id:"step-5:-verify-and-build",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#step-5:-verify-and-build","aria-hidden":"true"},"#"),t(" Step 5: Verify and Build")],-1)),r("ol",null,[r("li",null,[e[4]||(e[4]=r("p",null,"To confirm the TuxCare Spring® repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.",-1)),a(i,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]})]),r("li",null,[e[5]||(e[5]=r("p",null,"After reviewing the dependencies, include any library from the repository into your project and then run a build:",-1)),a(i,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]})])]),e[11]||(e[11]=n('<p>The build tool you&#39;re using should be able to identify and resolve dependencies from the TuxCare ELS for Spring® repository.</p><h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h3><p>You&#39;ve successfully integrated the TuxCare ELS for Spring® repository into your project. You can now benefit from the secure and vetted Spring® libraries it provides.</p><h2 id="vulnerability-exploitability-exchange-(vex)" tabindex="-1"><a class="header-anchor" href="#vulnerability-exploitability-exchange-(vex)" aria-hidden="true">#</a> Vulnerability Exploitability eXchange (VEX)</h2><p>VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.</p><p>TuxCare provides VEX for Spring® ELS versions: <a href="https://security.tuxcare.com/vex/cyclonedx/els_lang_java/" target="_blank" rel="noopener noreferrer">security.tuxcare.com/vex/cyclonedx/els_lang_java/</a>.</p><h2 id="how-to-upgrade-to-a-newer-version-of-tuxcare-packages" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade-to-a-newer-version-of-tuxcare-packages" aria-hidden="true">#</a> How to Upgrade to a Newer Version of TuxCare Packages</h2><p>If you have already installed a package with a <code>tuxcare.1</code> suffix and want to upgrade to a newer release (for example, <code>tuxcare.3</code>), you need to update the version string in your Maven or Gradle build file.</p><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2><p>Source code for TuxCare-patched Spring® libraries is available in the repository. Source JARs follow the standard Maven naming convention with a <code>-sources</code> classifier.</p><p>For example: <a href="https://nexus.repo.tuxcare.com/repository/els_java/org/springframework/spring-core/5.3.39-tuxcare.9/spring-core-5.3.39-tuxcare.9-sources.jar" target="_blank" rel="noopener noreferrer">https://nexus.repo.tuxcare.com/repository/els_java/org/springframework/spring-core/5.3.39-tuxcare.9/spring-core-5.3.39-tuxcare.9-sources.jar</a>.</p><div class="tip custom-block"><p class="custom-block-title"></p><p>If a source JAR is not available for a specific package, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> to report the issue.</p></div><h2 id="resolved-cves-in-els-for-spring" tabindex="-1"><a class="header-anchor" href="#resolved-cves-in-els-for-spring" aria-hidden="true">#</a> Resolved CVEs in ELS for Spring®</h2>',13)),a(l,null,{default:c(()=>[a(s,{project:"spring-els"})]),_:1}),g(" data for spring instructions used in code blocks ")])}}},k=d(y,[["__file","index.html.vue"]]);export{k as default};
