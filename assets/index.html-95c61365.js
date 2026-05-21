import{_ as m}from"./eye-bd28630a.js";import{_ as c}from"./shield-2656a8d0.js";import{_ as v}from"./clipboard-notes-eeeedcf5.js";import{_ as b}from"./shield-alert-226df5e9.js";import{_ as x}from"./unlock-alt-12fd40c9.js";import{_ as f}from"./bolt-90ed8319.js";import{_ as y,U as l,n as h,p as S,a8 as C,E as n,C as i,q as e,L as t,v as k}from"./framework-520e1760.js";const E=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`,M=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,T=`<repositories>
  <repository>
      <id>tuxcare-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,A=`repositories {
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
}`,L=`<dependencies>
    <dependency>
        <groupId>io.netty</groupId>
        <artifactId>netty-handler</artifactId>
        <version>4.1.115.Final-tuxcare.2</version>
    </dependency>
</dependencies>`,N=`dependencies {
    implementation "io.netty:netty-handler:4.1.115.Final-tuxcare.2"
}`,j=`<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.netty</groupId>
            <artifactId>netty-bom</artifactId>
            <version>4.1.115.Final-tuxcare.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>io.netty</groupId>
        <artifactId>netty-handler</artifactId>
    </dependency>
</dependencies>`,w=`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'io.netty:netty-bom:4.1.115.Final-tuxcare.2'
    }
}

dependencies {
    implementation "io.netty:netty-handler"
}`,G={__name:"index.html",setup(J){return(O,r)=>{const a=l("ELSPrerequisites"),s=l("CodeTabs"),d=l("ELSSteps"),u=l("ResolvedCveTable"),p=l("ClientOnly"),o=l("RouterLink"),g=l("WhatsNext");return h(),S("div",null,[r[30]||(r[30]=C('<h1 id="java-libraries" tabindex="-1"><a class="header-anchor" href="#java-libraries" aria-hidden="true">#</a> Java Libraries</h1><p>Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for a variety of Java Libraries. This allows you to continue running your Java applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-java-libraries" tabindex="-1"><a class="header-anchor" href="#supported-java-libraries" aria-hidden="true">#</a> Supported Java Libraries</h2><ul><li><strong>Apache Avro</strong> 1.10.2</li><li><strong>Apache Axis</strong> 1.4</li><li><strong>Apache Commons BeanUtils</strong> 1.9.4</li><li><strong>Apache Commons Compress</strong> 1.20</li><li><strong>Apache Commons HttpClient</strong> 3.1</li><li><strong>Apache Commons IO</strong> 2.5, 2.7</li><li><strong>Apache HttpComponents Client</strong> 4.5.2</li><li><strong>Apache Santuario XML Security For Java</strong> 2.0.10, 2.3.1</li><li><strong>Apache Thrift</strong> 0.9.1, 0.9.3</li><li><strong>Apache XMLBeans</strong> 2.6.0</li><li><strong>Bouncy Castle</strong> 1.64, 1.76</li><li><strong>DNSJava</strong> 2.1.7</li><li><strong>Dom4j</strong> 1.6.1</li><li><strong>Eclipse JGit</strong> 5.7.0, 5.13.3</li><li><strong>Eclipse Parsson</strong> 1.0.0</li><li><strong>EdDSA</strong> 0.3.0</li><li><strong>el-spec</strong> 3.0.0</li><li><strong>Google Gson</strong> 2.8.5, 2.9.1</li><li><strong>Google Guava</strong> 20.0, 25.1-android, 25.1-jre, 27.1-android, 27.1-jre, 30.1-jre, 31.1-jre</li><li><strong>Google Guice</strong> 4.2.1</li><li><strong>Google OAuth Client</strong> 1.25.0</li><li><strong>H2 Database</strong> 1.4.200</li><li><strong>Hazelcast</strong> 4.2.8</li><li><strong>HtmlUnit</strong> 2.70.0</li><li><strong>iText</strong> 2.1.7</li><li><strong>JBoss XNIO</strong> 3.8.0</li><li><strong>JDOM</strong> 1.0, 1.1.3</li><li><strong>JSON</strong> 20090211, 20140107</li><li><strong>JSON Assert</strong> 1.2.3</li><li><strong>JSON Smart v2</strong> 2.4.8</li><li><strong>Logback</strong> 1.1.7, 1.2.13, 1.4.14</li><li><strong>LZ4</strong> 1.8.1</li><li><strong>Mozilla Rhino</strong> 1.7.10, 1.7.15</li><li><strong>NekoHTML</strong> 1.9.22</li><li><strong>Netty</strong> 4.1.115.Final, 4.1.63.Final</li><li><strong>Nimbus JOSE + JWT</strong> 9.22, 9.24.4</li><li><strong>OkHttp3</strong> 3.14.9</li><li><strong>Okio</strong> 2.8.0, 2.10.0</li><li><strong>Plexus Utils</strong> 1.4.5, 1.5.8</li><li><strong>Querydsl</strong> 5.1.0</li><li><strong>Reactor BOM</strong> 2020.0.23, 2020.0.38, 2022.0.15</li><li><strong>Reactor Netty</strong> 1.0.23, 1.0.32, 1.0.39, 1.1.15</li><li><strong>RSocket</strong> 1.1.3</li><li><strong>SnakeYAML</strong> 1.23, 1.26, 1.29, 1.30, 1.33</li><li><strong>Snappy Java</strong> 1.1.8.4</li><li><strong>Sonatype Aether</strong> 1.13.1</li><li><strong>Thymeleaf</strong> 3.0.15.RELEASE</li><li><strong>Undertow</strong> 2.2.33.Final, 2.3.10.Final</li><li><strong>Woodstox</strong> 5.0.3</li><li><strong>Xerces</strong> 2.11.0</li><li><strong>XMLUnit</strong> 2.9.1, 2.9.0</li></ul><p>Other libraries upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',6)),n(a,null,{default:i(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),t(" or "),e("strong",null,"Gradle"),t(" build tool installed")]),e("li",null,[t("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[t("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),n(d,null,{default:i(()=>[e("ol",null,[r[17]||(r[17]=e("li",null,[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",null,"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",null,[r[1]||(r[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),r[2]||(r[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("For Maven, you may choose any valid "),e("code",null,"<id>"),t(" value instead of "),e("code",null,"tuxcare-registry"),t(", but the same value must be used in both "),e("code",null,"settings.xml"),t(" and "),e("code",null,"pom.xml"),t(".")])],-1)),n(s,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:E},{title:"Gradle (~/.gradle/gradle.properties)",content:M}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[t("Here "),e("code",null,"USERNAME"),t(" and "),e("code",null,"PASSWORD"),t(" are your Tuxcare credentials.")],-1))]),e("li",null,[r[4]||(r[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),r[5]||(r[5]=e("p",null,"Add the TuxCare Java Libraries repository and plugins to your build configuration.",-1)),n(s,{tabs:[{title:"Maven (pom.xml)",content:T},{title:"Gradle (build.gradle)",content:A}]},null,8,["tabs"]),r[6]||(r[6]=e("ul",null,[e("li",null,"To fully switch from the official Java Libraries repository, replace it with the TuxCare repository."),e("li",null,"To keep both, add TuxCare after the official one.")],-1)),r[7]||(r[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),t(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),t(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",null,[r[10]||(r[10]=e("p",null,[e("strong",null,"Update dependencies")],-1)),r[11]||(r[11]=e("p",null,[t("Replace your dependencies (both direct and transitive, as needed) with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" — sign in with your TuxCare credentials.")],-1)),r[12]||(r[12]=e("p",null,"If a BOM (Bill of Materials) is available, it's recommended to use it to manage versions.",-1)),e("ul",null,[e("li",null,[r[8]||(r[8]=e("p",null,[t("Example of "),e("strong",null,"BOM (Bill of Materials)"),t(" usage:")],-1)),n(s,{tabs:[{title:"Maven (pom.xml)",content:j},{title:"Gradle (build.gradle)",content:w}]},null,8,["tabs"])]),e("li",null,[r[9]||(r[9]=e("p",null,[t("If no BOM is provided, "),e("strong",null,"update dependency versions directly"),t(" using the latest "),e("code",null,".tuxcare"),t(" patches for your dependency versions.")],-1)),n(s,{tabs:[{title:"Maven (pom.xml)",content:L},{title:"Gradle (build.gradle)",content:N}]},null,8,["tabs"])])])]),e("li",null,[r[13]||(r[13]=e("p",null,[e("strong",null,"Verify and build")],-1)),r[14]||(r[14]=e("p",null,"Verify the setup:",-1)),n(s,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),r[15]||(r[15]=e("p",null,"Build the project:",-1)),n(s,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),r[16]||(r[16]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Java Libraries repository.",-1))])])]),_:1}),r[31]||(r[31]=e("h2",{id:"resolved-cves-in-els-for-java-libraries",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolved-cves-in-els-for-java-libraries","aria-hidden":"true"},"#"),t(" Resolved CVEs in ELS for Java Libraries")],-1)),n(p,null,{default:i(()=>[n(u,{project:"java-libraries"})]),_:1}),r[32]||(r[32]=e("h2",{id:"what's-next?",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what's-next?","aria-hidden":"true"},"#"),t(" What's Next?")],-1)),n(g,{"hide-title":""},{default:i(()=>[e("ul",null,[r[26]||(r[26]=e("li",null,[e("img",{src:m,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),t(" — Track vulnerability fixes and updates")],-1)),r[27]||(r[27]=e("li",null,[e("img",{src:c,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),t(" — Patched versions and changelogs")],-1)),r[28]||(r[28]=e("li",null,[e("img",{src:v,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/products",target:"_blank",rel:"noopener noreferrer"},"Supported components"),t(" — Full list of product parts covered by ELS")],-1)),r[29]||(r[29]=e("li",null,[e("img",{src:b,alt:""}),t(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),t(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[r[19]||(r[19]=e("img",{src:x,alt:""},null,-1)),r[20]||(r[20]=t()),n(o,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:i(()=>r[18]||(r[18]=[t("Source code",-1)])),_:1,__:[18]}),r[21]||(r[21]=t(" — Access source JARs in Nexus",-1))]),e("li",null,[r[23]||(r[23]=e("img",{src:f,alt:""},null,-1)),r[24]||(r[24]=t()),n(o,{to:"/els-for-libraries/managing-els-repository/#java"},{default:i(()=>r[22]||(r[22]=[t("Package updates",-1)])),_:1,__:[22]}),r[25]||(r[25]=t(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1}),k(" data for Java Libraries instructions used in code blocks ")])}}},V=y(G,[["__file","index.html.vue"]]);export{V as default};
