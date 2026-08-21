import{_ as m}from"./eye-bd28630a.js";import{_ as c}from"./shield-2656a8d0.js";import{_ as g}from"./clipboard-notes-eeeedcf5.js";import{_ as v}from"./shield-alert-226df5e9.js";import{_ as a}from"./unlock-alt-12fd40c9.js";import{_ as x}from"./bolt-90ed8319.js";import{_ as f,U as i,n as y,p as b,a8 as h,E as n,C as s,q as e,L as r}from"./framework-520e1760.js";const E={class:"tip custom-block"},w={id:"configure-credentials"},k={id:"add-the-tuxcare-repository"},S={id:"update-dependencies"},T={id:"verify-and-build"},C=`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
  <servers>
    <server>
      <id>tuxcare-registry</id>
      <username>USERNAME</username>
      <password>PASSWORD</password>
    </server>
  </servers>
</settings>`,j=`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`,M=`<repositories>
  <repository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`,N=`repositories {
  maven {
    url = uri(providers.gradleProperty("tuxcare_registry_url").get())
    credentials {
      username = providers.gradleProperty("tuxcare_registry_user").get()
      password = providers.gradleProperty("tuxcare_registry_password").get()
    }
    authentication { basic(BasicAuthentication) }
  }
  mavenCentral()
}`,_=`<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.eclipse.jetty</groupId>
            <artifactId>jetty-bom</artifactId>
            <version>9.4.58.v20250814-tuxcare.3</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.eclipse.jetty</groupId>
        <artifactId>jetty-server</artifactId>
    </dependency>
</dependencies>`,J=`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'org.eclipse.jetty:jetty-bom:9.4.58.v20250814-tuxcare.3'
    }
}

dependencies {
    implementation "org.eclipse.jetty:jetty-server"
}`,L={__name:"index.html",setup(A){return(G,t)=>{const u=i("ELSPrerequisites"),o=i("RouterLink"),l=i("CodeTabs"),d=i("ELSSteps"),p=i("WhatsNext");return y(),b("div",null,[t[37]||(t[37]=h('<h1 id="eclipse-jetty" tabindex="-1"><a class="header-anchor" href="#eclipse-jetty" aria-hidden="true">#</a> Eclipse Jetty</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Eclipse Jetty provides security patches and selected bug fixes that are integral to the stable operation of applications running on Eclipse Jetty.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Eclipse Jetty 7.6.0.v20120127, 8.2.0.v20160908, 9.2.16.v20160414, 9.4.24.v20191120, 9.4.41.v20210516, 9.4.48.v20220622, 9.4.50.v20221201, 9.4.53.v20231009, 9.4.57.v20241219, 9.4.58.v20250814, 9.4.59, 9.4.60, 9.4.61, 9.4.62, 10.0.26, 10.0.27, 10.0.28, 10.0.29, 10.0.30, 11.0.19, 11.0.26, 11.0.27, 11.0.28, 11.0.29, 11.0.30</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),n(u,null,{default:s(()=>t[0]||(t[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),r(" or "),e("strong",null,"Gradle"),r(" build tool installed")]),e("li",null,[r("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[r("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),e("div",E,[t[4]||(t[4]=e("p",{class:"custom-block-title"},null,-1)),e("p",null,[t[2]||(t[2]=r("Optionally, ELS can be consumed through your own repository manager instead of connecting to TuxCare directly. You can find the corresponding instructions ",-1)),n(o,{to:"/els-for-libraries/managing-els-repository/#consuming-els-through-your-own-repository-manager"},{default:s(()=>t[1]||(t[1]=[r("here",-1)])),_:1,__:[1]}),t[3]||(t[3]=r(".",-1))])]),n(d,null,{default:s(()=>[e("ol",null,[t[20]||(t[20]=e("li",{id:"navigate-to-the-build-tool-directory"},[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",{id:"windows"},"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"macos"},"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"linux"},"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",w,[t[5]||(t[5]=e("p",null,[e("strong",null,"Configure credentials")],-1)),t[6]||(t[6]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("For Maven, you may choose any valid "),e("code",null,"<id>"),r(" value instead of "),e("code",null,"tuxcare-registry"),r(", but the same value must be used in both "),e("code",null,"settings.xml"),r(" and "),e("code",null,"pom.xml"),r(".")])],-1)),n(l,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:C},{title:"Gradle (~/.gradle/gradle.properties)",content:j}]},null,8,["tabs"]),t[7]||(t[7]=e("p",null,[r("Replace "),e("code",null,"USERNAME"),r(" and "),e("code",null,"PASSWORD"),r(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),r(" above).")],-1))]),e("li",k,[t[8]||(t[8]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),t[9]||(t[9]=e("p",null,"Add the TuxCare Eclipse Jetty repository and plugins to your build configuration.",-1)),n(l,{tabs:[{title:"Maven (pom.xml)",content:M},{title:"Gradle (build.gradle)",content:N}]},null,8,["tabs"]),t[10]||(t[10]=e("ul",null,[e("li",{id:"to-fully-switch-from-the-official-eclipse-jetty-repository-replace-it-with-the-tuxcare-repository"},"To fully switch from the official Eclipse Jetty repository, replace it with the TuxCare repository."),e("li",{id:"to-keep-both-add-tuxcare-after-the-official-one"},"To keep both, add TuxCare after the official one.")],-1)),t[11]||(t[11]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),r(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),r(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",S,[t[12]||(t[12]=e("p",null,[e("strong",null,"Update dependencies")],-1)),t[13]||(t[13]=e("p",null,[r("Replace Eclipse Jetty dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" — sign in with your TuxCare credentials.")],-1)),t[14]||(t[14]=e("p",null,[r("Each TuxCare version is the upstream Jetty version with a TuxCare patch suffix — for example, "),e("code",null,"9.4.58.v20250814-tuxcare.3"),r(". It differs from the upstream number ("),e("code",null,"9.4.58"),r(") because it is a safe version provided by TuxCare, so use the version string as shown in Nexus.")],-1)),t[15]||(t[15]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,"The snippet below is only an example — check Nexus for the current version of your Jetty line.")],-1)),n(l,{tabs:[{title:"Maven (pom.xml)",content:_},{title:"Gradle (build.gradle)",content:J}]},null,8,["tabs"])]),e("li",T,[t[16]||(t[16]=e("p",null,[e("strong",null,"Verify and build")],-1)),t[17]||(t[17]=e("p",null,"Verify the setup:",-1)),n(l,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),t[18]||(t[18]=e("p",null,"Build the project:",-1)),n(l,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),t[19]||(t[19]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Eclipse Jetty repository.",-1))])])]),_:1}),t[38]||(t[38]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),r(" What's Next?")],-1)),n(p,{"hide-title":""},{default:s(()=>[e("ul",null,[t[33]||(t[33]=e("li",null,[e("img",{src:m,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Eclipse+Jetty",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),r(" — Track vulnerability fixes and updates")],-1)),t[34]||(t[34]=e("li",null,[e("img",{src:c,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Eclipse+Jetty",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),r(" — Patched versions and changelogs")],-1)),t[35]||(t[35]=e("li",null,[e("img",{src:g,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Eclipse+Jetty",target:"_blank",rel:"noopener noreferrer"},"Supported components"),r(" — Full list of product parts covered by ELS")],-1)),t[36]||(t[36]=e("li",null,[e("img",{src:v,alt:""}),r(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.eclipse.jetty/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),r(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[t[22]||(t[22]=e("img",{src:a,alt:""},null,-1)),t[23]||(t[23]=r()),n(o,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:s(()=>t[21]||(t[21]=[r("Source code",-1)])),_:1,__:[21]}),t[24]||(t[24]=r(" — Access source JARs in Nexus",-1))]),e("li",null,[t[26]||(t[26]=e("img",{src:a,alt:""},null,-1)),t[27]||(t[27]=r()),n(o,{to:"/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom"},{default:s(()=>t[25]||(t[25]=[r("SBOM",-1)])),_:1,__:[25]}),t[28]||(t[28]=r(" — Software Bill of Materials (Nexus, credentials required)",-1))]),e("li",null,[t[30]||(t[30]=e("img",{src:x,alt:""},null,-1)),t[31]||(t[31]=r()),n(o,{to:"/els-for-libraries/managing-els-repository/#java"},{default:s(()=>t[29]||(t[29]=[r("Package updates",-1)])),_:1,__:[29]}),t[32]||(t[32]=r(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}}},W=f(L,[["__file","index.html.vue"]]);export{W as default};
