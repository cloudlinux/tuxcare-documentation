import{_ as s,S as o,n as l,p as d,a6 as n,C as i,q as r,J as a,v as u}from"./framework-a770bce2.js";const c=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`,p=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_spring/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,g=`<repositories>
  <repository>
      <id>tuxcare-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_spring/</url>
  </repository>
</repositories>`,h=`repositories {
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
        <groupId>org.apache.cxf</groupId>
        <artifactId>cxf-core</artifactId>
        <version>3.5.9.tuxcare.1</version>
    </dependency>
</dependencies>`,m=`dependencies {
    implementation "org.apache.cxf:cxf-core:3.5.9.tuxcare.1"
}`,x=`<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.apache.cxf</groupId>
            <artifactId>cxf-bom</artifactId>
            <version>3.5.9.tuxcare.1</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.apache.cxf</groupId>
        <artifactId>cxf-core</artifactId>
    </dependency>
</dependencies>`,b=`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'org.apache.cxf:cxf-bom:3.5.9.tuxcare.1'
    }
}

dependencies {
    implementation "org.apache.cxf:cxf-core"
}`,f={__name:"index.html",setup(y){return(S,e)=>{const t=o("CodeTabs");return l(),d("div",null,[e[4]||(e[4]=n(`<h1 id="java-libraries" tabindex="-1"><a class="header-anchor" href="#java-libraries" aria-hidden="true">#</a> Java Libraries</h1><p>Endless Lifecycle Support (ELS) for Runtimes &amp; Libraries from TuxCare provides security fixes for a variety of Java Libraries. This allows you to continue running your Java applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-java-libraries" tabindex="-1"><a class="header-anchor" href="#supported-java-libraries" aria-hidden="true">#</a> Supported Java Libraries</h2><ul><li><strong>Apache Commons BeanUtils</strong> 1.9.4</li><li><strong>Apache Commons HttpClient</strong> 3.1</li><li><strong>Apache Commons IO</strong> 2.7</li><li><strong>Apache CXF</strong> 3.5.9</li><li><strong>Apache Santuario XML Security For Java</strong> 2.0.10, 2.3.1</li><li><strong>Apache Thrift</strong> 0.9.3</li><li><strong>DNSJava</strong> 2.1.7</li><li><strong>Dom4j</strong> 1.6.1</li><li><strong>el-spec</strong> 3.0.0</li><li><strong>Google Guava</strong> 20.0, 30.1-jre, 31.1-jre</li><li><strong>Logback</strong> 1.2.13</li><li><strong>Netty</strong> 4.1.115.Final, 4.1.63.Final</li><li><strong>Nimbus JOSE + JWT</strong> 9.22, 9.24.4</li><li><strong>Okio</strong> 2.8.0</li><li><strong>Plexus Utils</strong> 1.5.8</li><li><strong>Querydsl</strong> 5.1.0</li><li><strong>Reload4j</strong> 1.2.17</li><li><strong>SnakeYAML</strong> 1.23, 1.26, 1.29, 1.30, 1.33</li><li><strong>Snappy Java</strong> 1.1.8.4</li><li><strong>Thymeleaf</strong> 3.0.15.RELEASE</li><li><strong>Woodstox</strong> 5.0.3</li><li><strong>XMLUnit</strong> 2.9.1, 2.9.0</li></ul><p>Other libraries upon request.</p><h2 id="connection-to-els-for-java-libraries-repository" tabindex="-1"><a class="header-anchor" href="#connection-to-els-for-java-libraries-repository" aria-hidden="true">#</a> Connection to ELS for Java Libraries Repository</h2><p>This guide outlines the steps needed to integrate the TuxCare ELS for Java Libraries repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your <strong>Maven</strong> and <strong>Gradle</strong> projects.</p><h3 id="step-1-get-user-credentials" tabindex="-1"><a class="header-anchor" href="#step-1-get-user-credentials" aria-hidden="true">#</a> Step 1: Get user credentials</h3><p>You need username and password in order to use TuxCare ELS Java Libraries repository. Anonymous access is disabled. To receive username and password please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><h3 id="step-2-configure-registry" tabindex="-1"><a class="header-anchor" href="#step-2-configure-registry" aria-hidden="true">#</a> Step 2: Configure Registry</h3><ol><li><p>Navigate to the directory depending on your operating system.</p><ul><li>Windows</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Linux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Add the TuxCare repository and plugin repository to your build configuration.</p><div class="tip custom-block"><p class="custom-block-title"></p><p>For Maven, you may choose any valid <code>&lt;id&gt;</code> value instead of <code>tuxcare-registry</code>, but the same value must be used in both <code>settings.xml</code> and <code>pom.xml</code>.</p></div></li></ol>`,11)),i(t,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:c},{title:"Gradle (~/.gradle/gradle.properties)",content:p}]},null,8,["tabs"]),e[5]||(e[5]=r("p",null,[a("Here "),r("code",null,"USERNAME"),a(" and "),r("code",null,"PASSWORD"),a(" are your credentials mentioned in the "),r("a",{href:"#step-1-get-user-credentials"},"Step 1"),a(".")],-1)),e[6]||(e[6]=r("h3",{id:"step-3-update-build-configuration",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#step-3-update-build-configuration","aria-hidden":"true"},"#"),a(" Step 3: Update Build Configuration")],-1)),e[7]||(e[7]=r("p",null,"Add the TuxCare Java Libraries repository and plugins to your build configuration:",-1)),i(t,{tabs:[{title:"Maven (pom.xml)",content:g},{title:"Gradle (build.gradle)",content:h}]},null,8,["tabs"]),e[8]||(e[8]=n('<ul><li>To fully switch from the official Java Libraries repository, replace it with the TuxCare repository.</li><li>To keep both, add TuxCare after the official one.</li></ul><p>Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.</p><ul><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/maven" target="_blank" rel="noopener noreferrer">Maven</a></li><li><a href="https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle" target="_blank" rel="noopener noreferrer">Gradle</a></li></ul><h3 id="step-4-update-dependencies" tabindex="-1"><a class="header-anchor" href="#step-4-update-dependencies" aria-hidden="true">#</a> Step 4: Update Dependencies</h3><p><strong>Replace your dependencies (both direct and transitive, as needed) with the TuxCare-maintained ones, then rebuild your project.</strong></p><p>Check <a href="https://nexus.repo.tuxcare.com/repository/els_spring/" target="_blank" rel="noopener noreferrer">your TuxCare Nexus</a> (anonymous access is restricted) for the specific artifacts you need. If a BOM (Bill of Materials) is available, it’s recommended to use it to manage versions:</p>',6)),r("ul",null,[r("li",null,[e[0]||(e[0]=r("p",null,[a("Example of "),r("strong",null,"BOM (Bill of Materials)"),a(" usage:")],-1)),i(t,{tabs:[{title:"Maven (pom.xml)",content:x},{title:"Gradle (build.gradle)",content:b}]},null,8,["tabs"])]),r("li",null,[e[1]||(e[1]=r("p",null,[a("If no BOM is provided, "),r("strong",null,"update dependency versions directly"),a(" using the latest "),r("code",null,".tuxcare"),a(" patches for your dependency versions.")],-1)),i(t,{tabs:[{title:"Maven (pom.xml)",content:v},{title:"Gradle (build.gradle)",content:m}]},null,8,["tabs"])])]),e[9]||(e[9]=r("h3",{id:"step-5-verify-and-build",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#step-5-verify-and-build","aria-hidden":"true"},"#"),a(" Step 5: Verify and Build")],-1)),r("ol",null,[r("li",null,[e[2]||(e[2]=r("p",null,"To confirm the TuxCare Java Libraries repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.",-1)),i(t,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]})]),r("li",null,[e[3]||(e[3]=r("p",null,"After reviewing the dependencies, include any library from the repository into your project and then run a build:",-1)),i(t,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]})])]),e[10]||(e[10]=n('<p>The build tool you&#39;re using should be able to identify and resolve dependencies from the TuxCare ELS for Java Libraries repository.</p><h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h3><p>You&#39;ve successfully integrated the TuxCare ELS for Java Libraries repository into your project. You can now benefit from the secure and vetted Java libraries it provides.</p><h2 id="vulnerability-exploitability-exchange-vex" tabindex="-1"><a class="header-anchor" href="#vulnerability-exploitability-exchange-vex" aria-hidden="true">#</a> Vulnerability Exploitability eXchange (VEX)</h2><p>VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.</p><p>TuxCare provides VEX for Java Libraries ELS versions: <a href="https://security.tuxcare.com/vex/cyclonedx/els_lang_java/" target="_blank" rel="noopener noreferrer">security.tuxcare.com/vex/cyclonedx/els_lang_java/</a>.</p><h2 id="how-to-upgrade-to-a-newer-version-of-tuxcare-packages" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade-to-a-newer-version-of-tuxcare-packages" aria-hidden="true">#</a> How to Upgrade to a Newer Version of TuxCare Packages</h2><p>If you have already installed a package with a <code>tuxcare.1</code> suffix and want to upgrade to a newer release (for example, <code>tuxcare.3</code>), you need to update version strings in your Maven or Gradle build file.</p>',8)),u(" data for Java Libraries instructions used in code blocks ")])}}},T=s(f,[["__file","index.html.vue"]]);export{T as default};
