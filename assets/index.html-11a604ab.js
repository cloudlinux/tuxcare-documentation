import{_ as c}from"./eye-bd28630a.js";import{_ as m}from"./shield-2656a8d0.js";import{_ as b}from"./clipboard-notes-eeeedcf5.js";import{_ as g}from"./shield-alert-226df5e9.js";import{_ as x}from"./unlock-alt-12fd40c9.js";import{_ as f}from"./bolt-90ed8319.js";import{_ as v,U as i,n as h,p as y,a8 as _,E as n,C as a,q as e,L as t}from"./framework-520e1760.js";const S={id:"configure-credentials"},w={id:"add-the-tuxcare-repository"},T={id:"update-dependencies"},k={id:"verify-and-build"},C=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
  <servers>
    <server>
      <id>tuxcare-registry</id>
      <username>USERNAME</username>
      <password>PASSWORD</password>
    </server>
  </servers>
</settings>`,E=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,F=`<repositories>
  <repository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,M=`repositories {
  maven {
    url = uri(providers.gradleProperty("tuxcare_registry_url").get())
    credentials {
      username = providers.gradleProperty("tuxcare_registry_user").get()
      password = providers.gradleProperty("tuxcare_registry_password").get()
    }
    authentication { basic(BasicAuthentication) }
  }
  mavenCentral()
}`,N=`<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
      <version>5.6.15.Final-tuxcare.1</version>
    </dependency>
</dependencies>`,H=`<parent>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-search-parent</artifactId>
  <version>5.11.10.Final-tuxcare.1</version>
</parent>

<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
    </dependency>
</dependencies>`,I=`dependencies {
  implementation("org.hibernate:hibernate-core:5.6.15.Final-tuxcare.1")
}`,G=`dependencies {
  implementation platform("org.hibernate:hibernate-search-parent:5.11.10.Final")
  implementation "org.hibernate:hibernate-core"
}`,R={__name:"index.html",setup(A){return(L,r)=>{const o=i("ELSPrerequisites"),l=i("CodeTabs"),d=i("TableTabs"),u=i("ELSSteps"),s=i("RouterLink"),p=i("WhatsNext");return h(),y("div",null,[r[27]||(r[27]=_('<h1 id="hibernate" tabindex="-1"><a class="header-anchor" href="#hibernate" aria-hidden="true">#</a> Hibernate</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Hibernate provides security patches and selected bug fixes that are integral to the stable operation of applications running on Hibernate.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Hibernate ORM 4.3.11.Final, 5.4.3.Final, 5.4.30.Final, 5.4.31.Final, 5.4.32.Final, 5.4.33.Final, 5.5.6.Final, 5.5.9.Final, 5.6.15.Final, 6.2.5.Final</li><li>Hibernate Search 5.11.10.Final</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),n(o,null,{default:a(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),t(" or "),e("strong",null,"Gradle"),t(" build tool installed")]),e("li",null,[t("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[t("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),n(u,null,{default:a(()=>[e("ol",null,[r[14]||(r[14]=e("li",{id:"navigate-to-the-build-tool-directory"},[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",{id:"windows"},"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"macos"},"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"linux"},"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",S,[r[1]||(r[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),r[2]||(r[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("For Maven, you may choose any valid "),e("code",null,"<id>"),t(" value instead of "),e("code",null,"tuxcare-registry"),t(", but the same value must be used in both "),e("code",null,"settings.xml"),t(" and "),e("code",null,"pom.xml"),t(".")])],-1)),n(l,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:C},{title:"Gradle (~/.gradle/gradle.properties)",content:E}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[t("Replace "),e("code",null,"USERNAME"),t(" and "),e("code",null,"PASSWORD"),t(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),t(" above).")],-1))]),e("li",w,[r[4]||(r[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),r[5]||(r[5]=e("p",null,"Add the TuxCare Hibernate repository and plugins to your build configuration.",-1)),n(l,{tabs:[{title:"Maven (pom.xml)",content:F},{title:"Gradle (build.gradle)",content:M}]},null,8,["tabs"]),r[6]||(r[6]=e("ul",null,[e("li",{id:"to-fully-switch-from-the-official-hibernate-repository-replace-it-with-the-tuxcare-repository"},"To fully switch from the official Hibernate repository, replace it with the TuxCare repository."),e("li",{id:"to-keep-both-add-tuxcare-after-the-official-one"},"To keep both, add TuxCare after the official one.")],-1)),r[7]||(r[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),t(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),t(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",T,[r[8]||(r[8]=e("p",null,[e("strong",null,"Update dependencies")],-1)),r[9]||(r[9]=e("p",null,[t("Replace Hibernate dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" — sign in with your TuxCare credentials.")],-1)),n(d,{label:"Choose an extension: "},{Hibernate_ORM:a(()=>[n(l,{tabs:[{title:"Maven (pom.xml)",content:N},{title:"Gradle (build.gradle)",content:I}]},null,8,["tabs"])]),Hibernate_Search:a(()=>[n(l,{tabs:[{title:"Maven (pom.xml)",content:H},{title:"Gradle (build.gradle)",content:G}]},null,8,["tabs"])]),_:1})]),e("li",k,[r[10]||(r[10]=e("p",null,[e("strong",null,"Verify and build")],-1)),r[11]||(r[11]=e("p",null,"Verify the setup:",-1)),n(l,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),r[12]||(r[12]=e("p",null,"Build the project:",-1)),n(l,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),r[13]||(r[13]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Hibernate repository.",-1))])])]),_:1}),r[28]||(r[28]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),t(" What's Next?")],-1)),n(p,{"hide-title":""},{default:a(()=>[e("ul",null,[r[23]||(r[23]=e("li",null,[e("img",{src:c,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Hibernate",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),t(" — Track vulnerability fixes and updates")],-1)),r[24]||(r[24]=e("li",null,[e("img",{src:m,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Hibernate",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),t(" — Patched versions and changelogs")],-1)),r[25]||(r[25]=e("li",null,[e("img",{src:b,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Hibernate",target:"_blank",rel:"noopener noreferrer"},"Supported components"),t(" — Full list of product parts covered by ELS")],-1)),r[26]||(r[26]=e("li",null,[e("img",{src:g,alt:""}),t(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.hibernate/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),t(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[r[16]||(r[16]=e("img",{src:x,alt:""},null,-1)),r[17]||(r[17]=t()),n(s,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:a(()=>r[15]||(r[15]=[t("Source code",-1)])),_:1,__:[15]}),r[18]||(r[18]=t(" — Access source JARs in Nexus",-1))]),e("li",null,[r[20]||(r[20]=e("img",{src:f,alt:""},null,-1)),r[21]||(r[21]=t()),n(s,{to:"/els-for-libraries/managing-els-repository/#java"},{default:a(()=>r[19]||(r[19]=[t("Package updates",-1)])),_:1,__:[19]}),r[22]||(r[22]=t(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}}},B=v(R,[["__file","index.html.vue"]]);export{B as default};
