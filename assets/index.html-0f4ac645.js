import{_ as p,S as n,n as c,p as h,a6 as i,q as t,J as r,C as a,A as o,v as g}from"./framework-a770bce2.js";const v=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`,m=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_spring/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,x=`<repositories>
  <repository>
      <id>tuxcare-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_spring/</url>
  </repository>
</repositories>`,f=`repositories {
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
}`,y=`<dependencies>
    <dependency>
        <groupId>org.apache.struts</groupId>
        <artifactId>struts-core</artifactId>
        <version>1.3.5-tuxcare.1</version>
    </dependency>
</dependencies>`,b=`dependencies {
    implementation("org.apache.struts:struts-core:1.3.5-tuxcare.1")
}`,S=`<dependencyManagement>
    <dependency>
            <groupId>org.apache.struts</groupId>
            <artifactId>struts2-bom</artifactId>
            <version>2.5.33-tuxcare.1</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.apache.struts</groupId>
        <artifactId>struts2-core</artifactId>
    </dependency>
</dependencies>`,A=`dependencies {
    implementation("org.apache.struts:struts2-core:2.5.33-tuxcare.1")
}`,C={__name:"index.html",setup(T){return(w,e)=>{const s=n("CodeTabs"),d=n("TableTabs"),l=n("ResolvedCveTable"),u=n("ClientOnly");return c(),h("div",null,[e[5]||(e[5]=i('<h1 id="apache-struts" tabindex="-1"><a class="header-anchor" href="#apache-struts" aria-hidden="true">#</a> Apache Struts<sup style="font-size:0.5em;">™</sup></h1><p>Apache®, Apache Struts™, are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.</p><br><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache Struts™ provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Struts™ core components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL). Our ELS for Apache Struts™ service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Struts™ applications.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache Struts™ 1.3.5, 2.5.33</li></ul><h2 id="connection-to-els-for-apache-struts-repository" tabindex="-1"><a class="header-anchor" href="#connection-to-els-for-apache-struts-repository" aria-hidden="true">#</a> Connection to ELS for Apache Struts™ Repository</h2><p>This guide outlines the steps needed to integrate the TuxCare ELS for Apache Struts™ repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your <strong>Maven</strong> and <strong>Gradle</strong> projects.</p><h3 id="step-1:-get-user-credentials" tabindex="-1"><a class="header-anchor" href="#step-1:-get-user-credentials" aria-hidden="true">#</a> Step 1: Get user credentials</h3><p>You need username and password in order to use TuxCare ELS Apache Struts™ repository. Anonymous access is disabled. To receive username and password please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><h3 id="step-2:-configure-registry" tabindex="-1"><a class="header-anchor" href="#step-2:-configure-registry" aria-hidden="true">#</a> Step 2: Configure Registry</h3>',11)),t("ol",null,[e[2]||(e[2]=i(`<li><p>Navigate to the directory depending on your operating system.</p><ul><li>Windows</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Linux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1)),t("li",null,[e[0]||(e[0]=t("p",null,"Add the TuxCare repository and plugin repository to your build configuration.",-1)),e[1]||(e[1]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"}),t("p",null,[r("For Maven, you may choose any valid "),t("code",null,"<id>"),r(" value instead of "),t("code",null,"tuxcare-registry"),r(", but the same value must be used in both "),t("code",null,"settings.xml"),r(" and "),t("code",null,"pom.xml"),r(".")])],-1)),a(s,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:v},{title:"Gradle (~/.gradle/gradle.properties)",content:m}]},null,8,["tabs"])])]),e[6]||(e[6]=t("p",null,[r("Here "),t("code",null,"USERNAME"),r(" and "),t("code",null,"PASSWORD"),r(" are your credentials mentioned in the "),t("a",{href:"#step-1-get-user-credentials"},"Step 1"),r(".")],-1)),e[7]||(e[7]=t("h3",{id:"step-3:-update-build-configuration",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#step-3:-update-build-configuration","aria-hidden":"true"},"#"),r(" Step 3: Update Build Configuration")],-1)),e[8]||(e[8]=t("p",null,"Add the TuxCare Apache Struts™ repository and plugins to your build configuration:",-1)),a(s,{tabs:[{title:"Maven (pom.xml)",content:x},{title:"Gradle (build.gradle)",content:f}]},null,8,["tabs"]),e[9]||(e[9]=i('<ul><li>To fully switch from the official Apache Struts™ repository, replace it with the TuxCare repository.</li><li>To keep both, add TuxCare after the official one.</li></ul><p>Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.</p><ul><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/maven" target="_blank" rel="noopener noreferrer">Maven</a></li><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle" target="_blank" rel="noopener noreferrer">Gradle</a></li></ul><h3 id="step-4:-update-dependencies" tabindex="-1"><a class="header-anchor" href="#step-4:-update-dependencies" aria-hidden="true">#</a> Step 4: Update Dependencies</h3><p>Replace the Apache Struts™ dependencies in your build file with the TuxCare-maintained versions to cover both direct and transitive dependencies.</p><p>You can find a specific artifact version in your TuxCare account on <a href="https://nexus.repo.tuxcare.com/repository/els_spring/" target="_blank" rel="noopener noreferrer">Nexus</a> (anonymous access is restricted).</p>',6)),a(d,{label:"Choose an extension: "},{"1.3.5":o(()=>[a(s,{tabs:[{title:"Maven (pom.xml)",content:y},{title:"Gradle (build.gradle)",content:b}]},null,8,["tabs"])]),"2.5.33":o(()=>[a(s,{tabs:[{title:"Maven (pom.xml)",content:S},{title:"Gradle (build.gradle)",content:A}]},null,8,["tabs"])]),_:1}),e[10]||(e[10]=t("h3",{id:"step-5:-verify-and-build",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#step-5:-verify-and-build","aria-hidden":"true"},"#"),r(" Step 5: Verify and Build")],-1)),t("ol",null,[t("li",null,[e[3]||(e[3]=t("p",null,"To confirm the TuxCare Apache Struts™ repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.",-1)),a(s,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]})]),t("li",null,[e[4]||(e[4]=t("p",null,"After reviewing the dependencies, include any library from the repository into your project and then run a build:",-1)),a(s,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]})])]),e[11]||(e[11]=i('<p>The build tool you&#39;re using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Struts™ repository.</p><h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h3><p>You&#39;ve successfully integrated the TuxCare ELS for Apache Struts™ repository into your project. You can now benefit from the secure and vetted Apache Struts™ libraries it provides.</p><h2 id="vulnerability-exploitability-exchange-(vex)" tabindex="-1"><a class="header-anchor" href="#vulnerability-exploitability-exchange-(vex)" aria-hidden="true">#</a> Vulnerability Exploitability eXchange (VEX)</h2><p>VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.</p><p>TuxCare provides VEX for Apache Struts™ ELS versions: <a href="https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.struts/" target="_blank" rel="noopener noreferrer">security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.struts/</a>.</p><h2 id="how-to-upgrade-to-a-newer-version-of-tuxcare-packages" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade-to-a-newer-version-of-tuxcare-packages" aria-hidden="true">#</a> How to Upgrade to a Newer Version of TuxCare Packages</h2><p>If you have already installed a package with a <code>tuxcare.1</code> suffix and want to upgrade to a newer release (for example, <code>tuxcare.3</code>), you need to update version strings in your Maven or Gradle build file.</p><h2 id="resolved-cves-in-els-for-apache-struts" tabindex="-1"><a class="header-anchor" href="#resolved-cves-in-els-for-apache-struts" aria-hidden="true">#</a> Resolved CVEs in ELS for Apache Struts™</h2>',9)),a(u,null,{default:o(()=>[a(l,{project:"apache-struts"})]),_:1}),g(" data for Apache Struts instructions used in code blocks ")])}}},_=p(C,[["__file","index.html.vue"]]);export{_ as default};
