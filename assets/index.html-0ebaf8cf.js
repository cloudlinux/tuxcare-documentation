import{_ as g}from"./shield-2656a8d0.js";import{_ as v}from"./shield-alert-226df5e9.js";import{_ as x}from"./unlock-alt-12fd40c9.js";import{_ as b}from"./bolt-90ed8319.js";import{_ as f,U as t,n as h,p as y,a8 as C,E as l,C as a,q as e,L as r}from"./framework-520e1760.js";const L=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
  <servers>
    <server>
      <id>tuxcare-registry</id>
      <username>USERNAME</username>
      <password>PASSWORD</password>
    </server>
  </servers>
</settings>`,S=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,T=`<repositories>
  <repository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,_=`repositories {
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
        <groupId>commons-lang</groupId>
        <artifactId>commons-lang</artifactId>
        <version>2.6-tuxcare.1</version>
    </dependency>
</dependencies>`,A=`dependencies {
  implementation("commons-lang:commons-lang:2.6-tuxcare.1")
}`,E=`<dependencies>
  <dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.4-tuxcare.1</version>
  </dependency>
</dependencies>`,k=`dependencies {
  implementation 'org.apache.commons:commons-lang3:3.4-tuxcare.1'
}`,N={__name:"index.html",setup(M){return(G,n)=>{const i=t("ELSPrerequisites"),s=t("CodeTabs"),u=t("TableTabs"),d=t("ELSSteps"),p=t("ResolvedCveTable"),m=t("ClientOnly"),o=t("RouterLink"),c=t("WhatsNext");return h(),y("div",null,[n[25]||(n[25]=C('<h1 id="apache-commons-lang" tabindex="-1"><a class="header-anchor" href="#apache-commons-lang" aria-hidden="true">#</a> Apache Commons Lang</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache Commons Lang provides security patches and selected bug fixes that are integral to the stable operation of applications using Commons Lang.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache Commons Lang 2.4, 2.6</li><li>Apache Commons Lang3 3.4, 3.8.1, 3.10, 3.12.0, 3.17.0</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),l(i,null,{default:a(()=>n[0]||(n[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),r(" or "),e("strong",null,"Gradle"),r(" build tool installed")]),e("li",null,[r("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[r("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),l(d,null,{default:a(()=>[e("ol",null,[n[14]||(n[14]=e("li",null,[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",null,"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",null,[n[1]||(n[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),n[2]||(n[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("For Maven, you may choose any valid "),e("code",null,"<id>"),r(" value instead of "),e("code",null,"tuxcare-registry"),r(", but the same value must be used in both "),e("code",null,"settings.xml"),r(" and "),e("code",null,"pom.xml"),r(".")])],-1)),l(s,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:L},{title:"Gradle (~/.gradle/gradle.properties)",content:S}]},null,8,["tabs"]),n[3]||(n[3]=e("p",null,[r("Here "),e("code",null,"USERNAME"),r(" and "),e("code",null,"PASSWORD"),r(" are your Tuxcare credentials.")],-1))]),e("li",null,[n[4]||(n[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),n[5]||(n[5]=e("p",null,"Add the TuxCare Apache Commons Lang repository and plugins to your build configuration.",-1)),l(s,{tabs:[{title:"Maven (pom.xml)",content:T},{title:"Gradle (build.gradle)",content:_}]},null,8,["tabs"]),n[6]||(n[6]=e("ul",null,[e("li",null,"To fully switch from the official Apache Commons Lang repository, replace it with the TuxCare repository."),e("li",null,"To keep both, add TuxCare after the official one.")],-1)),n[7]||(n[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),r(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),r(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",null,[n[8]||(n[8]=e("p",null,[e("strong",null,"Update dependencies")],-1)),n[9]||(n[9]=e("p",null,[r("Replace Apache Commons Lang dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" — sign in with your TuxCare credentials.")],-1)),l(u,{label:"Choose version: "},{Commons_Lang:a(()=>[l(s,{tabs:[{title:"Maven (pom.xml)",content:w},{title:"Gradle (build.gradle)",content:A}]},null,8,["tabs"])]),Commons_Lang3:a(()=>[l(s,{tabs:[{title:"Maven (pom.xml)",content:E},{title:"Gradle (build.gradle)",content:k}]},null,8,["tabs"])]),_:1})]),e("li",null,[n[10]||(n[10]=e("p",null,[e("strong",null,"Verify and build")],-1)),n[11]||(n[11]=e("p",null,"Verify the setup:",-1)),l(s,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),n[12]||(n[12]=e("p",null,"Build the project:",-1)),l(s,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),n[13]||(n[13]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Apache Commons Lang repository.",-1))])])]),_:1}),n[26]||(n[26]=e("h2",{id:"resolved-cves-in-els-for-apache-commons-lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolved-cves-in-els-for-apache-commons-lang","aria-hidden":"true"},"#"),r(" Resolved CVEs in ELS for Apache Commons Lang")],-1)),l(m,null,{default:a(()=>[l(p,{project:"commons-lang"})]),_:1}),n[27]||(n[27]=e("h2",{id:"what's-next?",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what's-next?","aria-hidden":"true"},"#"),r(" What's Next?")],-1)),l(c,{"hide-title":""},{default:a(()=>[e("ul",null,[n[23]||(n[23]=e("li",null,[e("img",{src:g,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Apache+Commons+Lang",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),r(" — Patched versions and changelogs")],-1)),n[24]||(n[24]=e("li",null,[e("img",{src:v,alt:""}),r(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/commons-lang/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),r(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[n[16]||(n[16]=e("img",{src:x,alt:""},null,-1)),n[17]||(n[17]=r()),l(o,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:a(()=>n[15]||(n[15]=[r("Source code",-1)])),_:1,__:[15]}),n[18]||(n[18]=r(" — Access source JARs in Nexus",-1))]),e("li",null,[n[20]||(n[20]=e("img",{src:b,alt:""},null,-1)),n[21]||(n[21]=r()),l(o,{to:"/els-for-libraries/managing-els-repository/#java"},{default:a(()=>n[19]||(n[19]=[r("Package updates",-1)])),_:1,__:[19]}),n[22]||(n[22]=r(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}}},V=f(N,[["__file","index.html.vue"]]);export{V as default};
