import{_ as g}from"./eye-bd28630a.js";import{_ as v}from"./clipboard-notes-eeeedcf5.js";import{_ as x}from"./shield-alert-226df5e9.js";import{_ as b}from"./unlock-alt-12fd40c9.js";import{_ as f}from"./bolt-90ed8319.js";import{_ as h,U as l,n as y,p as S,a8 as A,E as n,C as a,q as e,L as t}from"./framework-520e1760.js";const T=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
  <servers>
    <server>
      <id>tuxcare-registry</id>
      <username>USERNAME</username>
      <password>PASSWORD</password>
    </server>
  </servers>
</settings>`,C=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,_=`<repositories>
  <repository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,k=`repositories {
  maven {
    url = uri(providers.gradleProperty("tuxcare_registry_url").get())
    credentials {
      username = providers.gradleProperty("tuxcare_registry_user").get()
      password = providers.gradleProperty("tuxcare_registry_password").get()
    }
    authentication { basic(BasicAuthentication) }
  }
  mavenCentral()
}`,w=`<dependencies>
    <dependency>
        <groupId>org.apache.lucene</groupId>
        <artifactId>lucene-core</artifactId>
        <version>5.5.5-tuxcare.1</version>
    </dependency>
</dependencies>`,E=`dependencies {
  implementation("org.apache.lucene:lucene-core:5.5.5-tuxcare.1")
}`,L=`<dependencies>
    <dependency>
        <groupId>org.apache.solr</groupId>
        <artifactId>solr-core</artifactId>
        <version>5.5.5-tuxcare.1</version>
    </dependency>
</dependencies>`,N=`dependencies {
  implementation("org.apache.solr:solr-core:5.5.5-tuxcare.1")
}`,M={__name:"index.html",setup(G){return(R,r)=>{const i=l("ELSPrerequisites"),s=l("CodeTabs"),u=l("TableTabs"),d=l("ELSSteps"),p=l("ResolvedCveTable"),c=l("ClientOnly"),o=l("RouterLink"),m=l("WhatsNext");return y(),S("div",null,[r[26]||(r[26]=A('<h1 id="apache-lucene-&amp;-solr" tabindex="-1"><a class="header-anchor" href="#apache-lucene-&amp;-solr" aria-hidden="true">#</a> Apache Lucene<sup style="font-size:0.5em;">®</sup> &amp; Solr</h1><p>Apache®, Apache Lucene®, are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.</p><br><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache Lucene® and Apache Solr provides security patches and selected bug fixes that are integral to the stable operation of applications running on these libraries.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache Lucene® 5.5.5</li><li>Apache Solr 5.5.5</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',7)),n(i,null,{default:a(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),t(" or "),e("strong",null,"Gradle"),t(" build tool installed")]),e("li",null,[t("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[t("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),n(d,null,{default:a(()=>[e("ol",null,[r[14]||(r[14]=e("li",null,[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",null,"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",null,[r[1]||(r[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),r[2]||(r[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("For Maven, you may choose any valid "),e("code",null,"<id>"),t(" value instead of "),e("code",null,"tuxcare-registry"),t(", but the same value must be used in both "),e("code",null,"settings.xml"),t(" and "),e("code",null,"pom.xml"),t(".")])],-1)),n(s,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:T},{title:"Gradle (~/.gradle/gradle.properties)",content:C}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[t("Here "),e("code",null,"USERNAME"),t(" and "),e("code",null,"PASSWORD"),t(" are your Tuxcare credentials.")],-1))]),e("li",null,[r[4]||(r[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),r[5]||(r[5]=e("p",null,"Add the TuxCare repository and plugins to your build configuration.",-1)),n(s,{tabs:[{title:"Maven (pom.xml)",content:_},{title:"Gradle (build.gradle)",content:k}]},null,8,["tabs"]),r[6]||(r[6]=e("ul",null,[e("li",null,"To fully switch from the official Apache Lucene® / Apache Solr repository, replace it with the TuxCare repository."),e("li",null,"To keep both, add TuxCare after the official one.")],-1)),r[7]||(r[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),t(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),t(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",null,[r[8]||(r[8]=e("p",null,[e("strong",null,"Update dependencies")],-1)),r[9]||(r[9]=e("p",null,[t("Replace Apache Lucene® or Apache Solr dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" — sign in with your TuxCare credentials.")],-1)),n(u,{label:"Choose version: "},{Apache_Lucene:a(()=>[n(s,{tabs:[{title:"Maven (pom.xml)",content:w},{title:"Gradle (build.gradle)",content:E}]},null,8,["tabs"])]),Apache_Solr:a(()=>[n(s,{tabs:[{title:"Maven (pom.xml)",content:L},{title:"Gradle (build.gradle)",content:N}]},null,8,["tabs"])]),_:1})]),e("li",null,[r[10]||(r[10]=e("p",null,[e("strong",null,"Verify and build")],-1)),r[11]||(r[11]=e("p",null,"Verify the setup:",-1)),n(s,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),r[12]||(r[12]=e("p",null,"Build the project:",-1)),n(s,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),r[13]||(r[13]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Apache Lucene® / Apache Solr repository.",-1))])])]),_:1}),r[27]||(r[27]=e("h2",{id:"resolved-cves",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolved-cves","aria-hidden":"true"},"#"),t(" Resolved CVEs")],-1)),n(c,null,{default:a(()=>[n(p,{project:"apache-lucene"})]),_:1}),r[28]||(r[28]=e("h2",{id:"what's-next?",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what's-next?","aria-hidden":"true"},"#"),t(" What's Next?")],-1)),n(m,{"hide-title":""},{default:a(()=>[e("ul",null,[r[23]||(r[23]=e("li",null,[e("img",{src:g,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Apache+Lucene&product=Apache+Solr",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),t(" — Track vulnerability fixes and updates")],-1)),r[24]||(r[24]=e("li",null,[e("img",{src:v,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Apache+Lucene&product=Apache+Solr",target:"_blank",rel:"noopener noreferrer"},"Supported components"),t(" — Full list of product parts covered by ELS")],-1)),r[25]||(r[25]=e("li",null,[e("img",{src:x,alt:""}),t(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.lucene/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),t(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[r[16]||(r[16]=e("img",{src:b,alt:""},null,-1)),r[17]||(r[17]=t()),n(o,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:a(()=>r[15]||(r[15]=[t("Source code",-1)])),_:1,__:[15]}),r[18]||(r[18]=t(" — Access source JARs in Nexus",-1))]),e("li",null,[r[20]||(r[20]=e("img",{src:f,alt:""},null,-1)),r[21]||(r[21]=t()),n(o,{to:"/els-for-libraries/managing-els-repository/#java"},{default:a(()=>r[19]||(r[19]=[t("Package updates",-1)])),_:1,__:[19]}),r[22]||(r[22]=t(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}}},O=h(M,[["__file","index.html.vue"]]);export{O as default};
