import{_ as n,S as s,n as d,p as l,a6 as i,C as o,q as a,J as t,v as c}from"./framework-a770bce2.js";const u=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-tomcat-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`,p=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_tomcat/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,h=`<repositories>
  <repository>
      <id>tuxcare-tomcat-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_tomcat/</url>
  </repository>
</repositories>`,m=`repositories {
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
}`,v=`<dependencies>
    <dependency>
        <groupId>org.apache.tomcat</groupId>
        <artifactId>tomcat-catalina</artifactId>
        <version>9.0.75-tuxcare.1</version>
    </dependency>
    <dependency>
        <groupId>org.apache.tomcat</groupId>
        <artifactId>tomcat-coyote</artifactId>
        <version>9.0.75-tuxcare.1</version>
    </dependency>
</dependencies>`,g=`dependencies {
    implementation "org.apache.tomcat:tomcat-catalina:9.0.75-tuxcare.1"
    implementation "org.apache.tomcat:tomcat-coyote:9.0.75-tuxcare.1"
}`,x={__name:"index.html",setup(y){return(f,e)=>{const r=s("CodeTabs");return d(),l("div",null,[e[2]||(e[2]=i(`<h1 id="apache-tomcat" tabindex="-1"><a class="header-anchor" href="#apache-tomcat" aria-hidden="true">#</a> Apache Tomcat</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache Tomcat provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat core components such as Coyote, Catalina, Jasper etc.. These components have either reached their end of standard support from vendors or have reached End of Life (EOL). Our ELS for Apache Tomcat service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat applications.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache Tomcat 9.0.75, 9.0.83, 8.5.100</li></ul><h2 id="connection-to-els-for-apache-tomcat-repository" tabindex="-1"><a class="header-anchor" href="#connection-to-els-for-apache-tomcat-repository" aria-hidden="true">#</a> Connection to ELS for Apache Tomcat Repository</h2><p>This guide outlines the steps needed to integrate the TuxCare ELS for Apache Tomcat repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your <strong>Maven</strong> and <strong>Gradle</strong> projects.</p><h3 id="step-1-get-user-credentials" tabindex="-1"><a class="header-anchor" href="#step-1-get-user-credentials" aria-hidden="true">#</a> Step 1: Get user credentials</h3><p>You need username and password in order to use TuxCare ELS Apache Tomcat repository. Anonymous access is disabled. To receive username and password please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><h3 id="step-2-configure-registry" tabindex="-1"><a class="header-anchor" href="#step-2-configure-registry" aria-hidden="true">#</a> Step 2: Configure Registry</h3><ol><li><p>Navigate to the directory depending on your operating system.</p><ul><li>Windows</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Linux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Add the TuxCare repository and plugin repository to your build configuration.</p><div class="tip custom-block"><p class="custom-block-title"></p><p>For Maven, you may choose any valid <code>&lt;id&gt;</code> value instead of <code>tuxcare-tomcat-registry</code>, but the same value must be used in both <code>settings.xml</code> and <code>pom.xml</code>.</p></div></li></ol>`,10)),o(r,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:u},{title:"Gradle (~/.gradle/gradle.properties)",content:p}]},null,8,["tabs"]),e[3]||(e[3]=a("p",null,[t("Here "),a("code",null,"USERNAME"),t(" and "),a("code",null,"PASSWORD"),t(" are your credentials mentioned in the "),a("a",{href:"#step-1-get-user-credentials"},"Step 1"),t(".")],-1)),e[4]||(e[4]=a("h3",{id:"step-3-update-build-configuration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-3-update-build-configuration","aria-hidden":"true"},"#"),t(" Step 3: Update Build Configuration")],-1)),e[5]||(e[5]=a("p",null,"Add the TuxCare Apache Tomcat repository and plugins to your build configuration:",-1)),o(r,{tabs:[{title:"Maven (pom.xml)",content:h},{title:"Gradle (build.gradle)",content:m}]},null,8,["tabs"]),e[6]||(e[6]=i('<ul><li>To fully switch from the official Apache Tomcat repository, replace it with the TuxCare repository.</li><li>To keep both, add TuxCare after the official one.</li></ul><p>Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.</p><ul><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/maven" target="_blank" rel="noopener noreferrer">Maven</a></li><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle" target="_blank" rel="noopener noreferrer">Gradle</a></li></ul><h3 id="step-4-update-dependencies" tabindex="-1"><a class="header-anchor" href="#step-4-update-dependencies" aria-hidden="true">#</a> Step 4: Update Dependencies</h3><p>Replace the Apache Tomcat dependencies in your build file with the TuxCare-maintained versions to cover both direct and transitive dependencies.</p>',5)),o(r,{tabs:[{title:"Maven (pom.xml)",content:v},{title:"Gradle (build.gradle)",content:g}]},null,8,["tabs"]),e[7]||(e[7]=a("p",null,[t("You can find a specific artifact version in your TuxCare account on "),a("a",{href:"https://nexus.repo.tuxcare.com/repository/els_tomcat/",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" (anonymous access is restricted).")],-1)),e[8]||(e[8]=a("h3",{id:"step-5-verify-and-build",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-5-verify-and-build","aria-hidden":"true"},"#"),t(" Step 5: Verify and Build")],-1)),a("ol",null,[a("li",null,[e[0]||(e[0]=a("p",null,"To confirm the TuxCare Apache Tomcat repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.",-1)),o(r,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]})]),a("li",null,[e[1]||(e[1]=a("p",null,"After reviewing the dependencies, include any library from the repository into your project and then run a build:",-1)),o(r,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]})])]),e[9]||(e[9]=i('<p>The build tool you&#39;re using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Tomcat repository.</p><h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h3><p>You&#39;ve successfully integrated the TuxCare ELS for Apache Tomcat repository into your project. You can now benefit from the secure and vetted Apache Tomcat libraries it provides.</p><h2 id="vulnerability-exploitability-exchange-vex" tabindex="-1"><a class="header-anchor" href="#vulnerability-exploitability-exchange-vex" aria-hidden="true">#</a> Vulnerability Exploitability eXchange (VEX)</h2><p>VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.</p><p>TuxCare provides VEX for Lodash ELS versions: <a href="https://security.tuxcare.com/vex/cyclonedx/els_lang_java/" target="_blank" rel="noopener noreferrer">security.tuxcare.com/vex/cyclonedx/els_lang_java/</a>.</p><h2 id="how-to-upgrade-to-a-newer-version-of-tuxcare-packages" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade-to-a-newer-version-of-tuxcare-packages" aria-hidden="true">#</a> How to Upgrade to a Newer Version of TuxCare Packages</h2><p>If you have already installed a package with a <code>tuxcare.1</code> suffix and want to upgrade to a newer release (for example, <code>tuxcare.3</code>), you need to update version strings in your Maven or Gradle build file.</p>',8)),c(" data for Apache Tomcat instructions used in code blocks ")])}}},T=n(x,[["__file","index.html.vue"]]);export{T as default};
