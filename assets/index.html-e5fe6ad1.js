import{_ as m}from"./eye-bd28630a.js";import{_ as c}from"./shield-2656a8d0.js";import{_ as b}from"./clipboard-notes-eeeedcf5.js";import{_ as g}from"./shield-alert-226df5e9.js";import{_ as x}from"./unlock-alt-12fd40c9.js";import{_ as v}from"./bolt-90ed8319.js";import{_ as f,U as s,n as h,p as y,a8 as S,E as n,C as l,q as e,L as t}from"./framework-520e1760.js";const T=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
  <servers>
    <server>
      <id>tuxcare-registry</id>
      <username>USERNAME</username>
      <password>PASSWORD</password>
    </server>
  </servers>
</settings>`,_=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,k=`<repositories>
  <repository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,w=`repositories {
  maven {
    url = uri(providers.gradleProperty("tuxcare_registry_url").get())
    credentials {
      username = providers.gradleProperty("tuxcare_registry_user").get()
      password = providers.gradleProperty("tuxcare_registry_password").get()
    }
    authentication { basic(BasicAuthentication) }
  }
  mavenCentral()
}`,C=`<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
      <version>5.6.15.Final-tuxcare.1</version>
    </dependency>
</dependencies>`,E=`<parent>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-search-parent</artifactId>
  <version>5.11.10.Final-tuxcare.1</version>
</parent>

<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
    </dependency>
</dependencies>`,M=`dependencies {
  implementation("org.hibernate:hibernate-core:5.6.15.Final-tuxcare.1")
}`,H=`dependencies {
  implementation platform("org.hibernate:hibernate-search-parent:5.11.10.Final")
  implementation "org.hibernate:hibernate-core"
}`,N={__name:"index.html",setup(I){return(G,r)=>{const o=s("ELSPrerequisites"),a=s("CodeTabs"),u=s("TableTabs"),d=s("ELSSteps"),i=s("RouterLink"),p=s("WhatsNext");return h(),y("div",null,[r[27]||(r[27]=S('<h1 id="hibernate" tabindex="-1"><a class="header-anchor" href="#hibernate" aria-hidden="true">#</a> Hibernate</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Hibernate provides security patches and selected bug fixes that are integral to the stable operation of applications running on Hibernate.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Hibernate ORM 5.4.32.Final, 5.6.15.Final</li><li>Hibernate Search 5.11.10.Final</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),n(o,null,{default:l(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),t(" or "),e("strong",null,"Gradle"),t(" build tool installed")]),e("li",null,[t("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[t("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),n(d,null,{default:l(()=>[e("ol",null,[r[14]||(r[14]=e("li",null,[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",null,"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",null,[r[1]||(r[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),r[2]||(r[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("For Maven, you may choose any valid "),e("code",null,"<id>"),t(" value instead of "),e("code",null,"tuxcare-registry"),t(", but the same value must be used in both "),e("code",null,"settings.xml"),t(" and "),e("code",null,"pom.xml"),t(".")])],-1)),n(a,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:T},{title:"Gradle (~/.gradle/gradle.properties)",content:_}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[t("Here "),e("code",null,"USERNAME"),t(" and "),e("code",null,"PASSWORD"),t(" are your Tuxcare credentials.")],-1))]),e("li",null,[r[4]||(r[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),r[5]||(r[5]=e("p",null,"Add the TuxCare Hibernate repository and plugins to your build configuration.",-1)),n(a,{tabs:[{title:"Maven (pom.xml)",content:k},{title:"Gradle (build.gradle)",content:w}]},null,8,["tabs"]),r[6]||(r[6]=e("ul",null,[e("li",null,"To fully switch from the official Hibernate repository, replace it with the TuxCare repository."),e("li",null,"To keep both, add TuxCare after the official one.")],-1)),r[7]||(r[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),t(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),t(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",null,[r[8]||(r[8]=e("p",null,[e("strong",null,"Update dependencies")],-1)),r[9]||(r[9]=e("p",null,[t("Replace Hibernate dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" — sign in with your TuxCare credentials.")],-1)),n(u,{label:"Choose an extension: "},{Hibernate_ORM:l(()=>[n(a,{tabs:[{title:"Maven (pom.xml)",content:C},{title:"Gradle (build.gradle)",content:M}]},null,8,["tabs"])]),Hibernate_Search:l(()=>[n(a,{tabs:[{title:"Maven (pom.xml)",content:E},{title:"Gradle (build.gradle)",content:H}]},null,8,["tabs"])]),_:1})]),e("li",null,[r[10]||(r[10]=e("p",null,[e("strong",null,"Verify and build")],-1)),r[11]||(r[11]=e("p",null,"Verify the setup:",-1)),n(a,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),r[12]||(r[12]=e("p",null,"Build the project:",-1)),n(a,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),r[13]||(r[13]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Hibernate repository.",-1))])])]),_:1}),r[28]||(r[28]=e("h2",{id:"what's-next?",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what's-next?","aria-hidden":"true"},"#"),t(" What's Next?")],-1)),n(p,{"hide-title":""},{default:l(()=>[e("ul",null,[r[23]||(r[23]=e("li",null,[e("img",{src:m,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Hibernate",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),t(" — Track vulnerability fixes and updates")],-1)),r[24]||(r[24]=e("li",null,[e("img",{src:c,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Hibernate",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),t(" — Patched versions and changelogs")],-1)),r[25]||(r[25]=e("li",null,[e("img",{src:b,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Hibernate",target:"_blank",rel:"noopener noreferrer"},"Supported components"),t(" — Full list of product parts covered by ELS")],-1)),r[26]||(r[26]=e("li",null,[e("img",{src:g,alt:""}),t(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.hibernate/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),t(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[r[16]||(r[16]=e("img",{src:x,alt:""},null,-1)),r[17]||(r[17]=t()),n(i,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:l(()=>r[15]||(r[15]=[t("Source code",-1)])),_:1,__:[15]}),r[18]||(r[18]=t(" — Access source JARs in Nexus",-1))]),e("li",null,[r[20]||(r[20]=e("img",{src:v,alt:""},null,-1)),r[21]||(r[21]=t()),n(i,{to:"/els-for-libraries/managing-els-repository/#java"},{default:l(()=>r[19]||(r[19]=[t("Package updates",-1)])),_:1,__:[19]}),r[22]||(r[22]=t(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}}},V=f(N,[["__file","index.html.vue"]]);export{V as default};
