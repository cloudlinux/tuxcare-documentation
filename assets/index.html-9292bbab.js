import{_ as c,S as i,n as p,p as h,a6 as o,q as r,J as a,C as t,A as s}from"./framework-a770bce2.js";const b=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
  <servers>
    <server>
      <id>tuxcare-registry</id>
      <username>USERNAME</username>
      <password>PASSWORD</password>
    </server>
  </servers>
</settings>`,v=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,m=`<repositories>
  <repository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,g=`repositories {
  maven {
    url = uri(providers.gradleProperty("tuxcare_registry_url").get())
    credentials {
      username = providers.gradleProperty("tuxcare_registry_user").get()
      password = providers.gradleProperty("tuxcare_registry_password").get()
    }
    authentication { basic(BasicAuthentication) }
  }
  mavenCentral()
}`,x=`<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
      <version>5.6.15.Final-tuxcare.1</version>
    </dependency>
</dependencies>`,f=`<parent>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-search-parent</artifactId>
  <version>5.11.10.Final-tuxcare.1</version>
</parent>

<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
    </dependency>
</dependencies>`,y=`dependencies {
  implementation("org.hibernate:hibernate-core:5.6.15.Final-tuxcare.1")
}`,C=`dependencies {
  implementation platform("org.hibernate:hibernate-search-parent:5.11.10.Final")
  implementation "org.hibernate:hibernate-core"
}`,S={__name:"index.html",setup(T){return(w,e)=>{const n=i("CodeTabs"),l=i("TableTabs"),d=i("ResolvedCveTable"),u=i("ClientOnly");return p(),h("div",null,[e[6]||(e[6]=o('<h1 id="hibernate" tabindex="-1"><a class="header-anchor" href="#hibernate" aria-hidden="true">#</a> Hibernate</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Hibernate provides security patches and selected bug fixes that are integral to the stable operation of applications running on Hibernate.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Hibernate ORM 5.4.32.Final, 5.6.15.Final</li><li>Hibernate Search 5.11.10.Final</li></ul><h2 id="connection-to-els-for-hibernate-repository" tabindex="-1"><a class="header-anchor" href="#connection-to-els-for-hibernate-repository" aria-hidden="true">#</a> Connection to ELS for Hibernate Repository</h2><p>This guide outlines the steps needed to integrate the TuxCare ELS for Hibernate repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven and Gradle projects.</p><h3 id="step-1:-get-user-credentials" tabindex="-1"><a class="header-anchor" href="#step-1:-get-user-credentials" aria-hidden="true">#</a> Step 1: Get user credentials</h3><p>You need a username and password in order to use the TuxCare ELS Hibernate repository. Anonymous access is disabled. To receive a username and password please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><h3 id="step-2:-configure-registry" tabindex="-1"><a class="header-anchor" href="#step-2:-configure-registry" aria-hidden="true">#</a> Step 2: Configure Registry</h3>',9)),r("ol",null,[e[3]||(e[3]=o(`<li><p>Navigate to the directory depending on your operating system.</p><ul><li>Windows</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Linux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1)),r("li",null,[e[0]||(e[0]=r("p",null,"Add the TuxCare repository and plugin repository to your build configuration.",-1)),e[1]||(e[1]=r("div",{class:"tip custom-block"},[r("p",{class:"custom-block-title"}),r("p",null,[a("For Maven, you may choose any valid "),r("code",null,"<id>"),a(" value instead of "),r("code",null,"tuxcare-registry"),a(", but the same value must be used in both "),r("code",null,"settings.xml"),a(" and "),r("code",null,"pom.xml"),a(".")])],-1)),t(n,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:b},{title:"Gradle (~/.gradle/gradle.properties)",content:v}]},null,8,["tabs"]),e[2]||(e[2]=r("p",null,[a("Here "),r("code",null,"USERNAME"),a(" and "),r("code",null,"PASSWORD"),a(" are your credentials mentioned in "),r("a",{href:"#step-1-get-user-credentials"},"Step 1"),a(".")],-1))])]),e[7]||(e[7]=r("h3",{id:"step-3:-update-build-configuration",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#step-3:-update-build-configuration","aria-hidden":"true"},"#"),a(" Step 3: Update Build Configuration")],-1)),e[8]||(e[8]=r("p",null,"Add the TuxCare Hibernate repository and plugins to your build configuration:",-1)),t(n,{tabs:[{title:"Maven (pom.xml)",content:m},{title:"Gradle (build.gradle)",content:g}]},null,8,["tabs"]),e[9]||(e[9]=o('<ul><li>To fully switch from the official Hibernate repository, replace it with the TuxCare repository.</li><li>To keep both, add TuxCare after the official one.</li></ul><p>Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.</p><ul><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/maven" target="_blank" rel="noopener noreferrer">Maven</a></li><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle" target="_blank" rel="noopener noreferrer">Gradle</a></li></ul><h3 id="step-4:-update-dependencies" tabindex="-1"><a class="header-anchor" href="#step-4:-update-dependencies" aria-hidden="true">#</a> Step 4: Update Dependencies</h3><p>Replace the Hibernate dependencies in your build file with the TuxCare-maintained versions to cover both direct and transitive dependencies.</p><p>You can find a specific artifact version in your TuxCare account on <a href="https://nexus.repo.tuxcare.com/#browse/browse:els_java" target="_blank" rel="noopener noreferrer">Nexus</a>. Click <strong>Sign In</strong> in the top right corner to authenticate with your TuxCare credentials. After logging in, you may need to refresh or reopen the link to browse artifacts due to Nexus routing behavior.</p>',6)),t(l,{label:"Choose an extension: "},{Hibernate_ORM:s(()=>[t(n,{tabs:[{title:"Maven (pom.xml)",content:x},{title:"Gradle (build.gradle)",content:y}]},null,8,["tabs"])]),Hibernate_Search:s(()=>[t(n,{tabs:[{title:"Maven (pom.xml)",content:f},{title:"Gradle (build.gradle)",content:C}]},null,8,["tabs"])]),_:1}),e[10]||(e[10]=r("h3",{id:"step-5:-verify-and-build",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#step-5:-verify-and-build","aria-hidden":"true"},"#"),a(" Step 5: Verify and Build")],-1)),r("ol",null,[r("li",null,[e[4]||(e[4]=r("p",null,"To confirm the TuxCare Hibernate repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.",-1)),t(n,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]})]),r("li",null,[e[5]||(e[5]=r("p",null,"After reviewing the dependencies, include any library from the repository into your project and then run a build:",-1)),t(n,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]})])]),e[11]||(e[11]=o('<p>The build tool you&#39;re using should be able to identify and resolve dependencies from the TuxCare ELS for Hibernate repository.</p><h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h3><p>You&#39;ve successfully integrated the TuxCare ELS for Hibernate repository into your project. You can now benefit from the secure and vetted Hibernate libraries it provides.</p><h2 id="how-to-upgrade-to-a-newer-version-of-tuxcare-packages" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade-to-a-newer-version-of-tuxcare-packages" aria-hidden="true">#</a> How to Upgrade to a Newer Version of TuxCare Packages</h2><p>If you have already installed a package with a <code>tuxcare.1</code> suffix and want to upgrade to a newer release (for example, <code>tuxcare.3</code>), you need to update version strings in your Maven or Gradle build file.</p><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2><p>Source code for TuxCare-patched Hibernate libraries is available in the repository. Source JARs follow the standard Maven naming convention with a <code>-sources</code> classifier.</p><p>For example: <a href="https://nexus.repo.tuxcare.com/repository/els_java/org/hibernate/hibernate-core/5.6.15.Final-tuxcare.1/hibernate-core-5.6.15.Final-tuxcare.1-sources.jar" target="_blank" rel="noopener noreferrer">https://nexus.repo.tuxcare.com/repository/els_java/org/hibernate/hibernate-core/5.6.15.Final-tuxcare.1/hibernate-core-5.6.15.Final-tuxcare.1-sources.jar</a>.</p><div class="tip custom-block"><p class="custom-block-title"></p><p>If a source JAR is not available for a specific package, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a> to report the issue.</p></div><h2 id="resolved-cves-in-els-for-hibernate" tabindex="-1"><a class="header-anchor" href="#resolved-cves-in-els-for-hibernate" aria-hidden="true">#</a> Resolved CVEs in ELS for Hibernate</h2>',10)),t(u,null,{default:s(()=>[t(d,{project:"hibernate"})]),_:1})])}}},H=c(S,[["__file","index.html.vue"]]);export{H as default};
