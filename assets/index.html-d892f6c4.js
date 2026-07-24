import{_ as c}from"./eye-bd28630a.js";import{_ as m}from"./shield-2656a8d0.js";import{_ as g}from"./clipboard-notes-eeeedcf5.js";import{_ as f}from"./shield-alert-226df5e9.js";import{_ as x}from"./unlock-alt-12fd40c9.js";import{_ as h}from"./bolt-90ed8319.js";import{_ as v,U as o,n as b,p as y,a8 as S,E as s,C as n,q as e,L as r,v as _}from"./framework-520e1760.js";const k={id:"configure-credentials"},w={id:"add-the-tuxcare-repository"},A={id:"update-dependencies"},T={id:"verify-and-build"},E=`<?xml version="1.0" encoding="UTF-8"?>
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
      authentication {
        basic(BasicAuthentication)
      }
    }
    mavenCentral()
}`,L=`<dependencies>
    <dependency>
        <groupId>org.apache.struts</groupId>
        <artifactId>struts-core</artifactId>
        <version>1.3.5-tuxcare.1</version>
    </dependency>
</dependencies>`,I=`dependencies {
    implementation("org.apache.struts:struts-core:1.3.5-tuxcare.1")
}`,G=`<dependencyManagement>
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
</dependencies>`,U=`dependencies {
    implementation("org.apache.struts:struts2-core:2.5.33-tuxcare.1")
}`,j={__name:"index.html",setup(P){return(R,t)=>{const i=o("ELSPrerequisites"),a=o("CodeTabs"),d=o("TableTabs"),u=o("ELSSteps"),l=o("RouterLink"),p=o("WhatsNext");return b(),y("div",null,[t[27]||(t[27]=S('<h1 id="apache-struts" tabindex="-1"><a class="header-anchor" href="#apache-struts" aria-hidden="true">#</a> Apache Struts<sup style="font-size:0.5em;">™</sup></h1><p>Apache®, Apache Struts™, are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.</p><br><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache Struts™ provides security patches and selected bug fixes that are integral to the stable operation of applications running on these versions of Apache Struts™ core components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL). Our ELS for Apache Struts™ service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Struts™ applications.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache Struts™ 1.3.5, 2.5.33</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',7)),s(i,null,{default:n(()=>t[0]||(t[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),r(" or "),e("strong",null,"Gradle"),r(" build tool installed")]),e("li",null,[r("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[r("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),s(u,null,{default:n(()=>[e("ol",null,[t[14]||(t[14]=e("li",{id:"navigate-to-the-build-tool-directory"},[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",{id:"windows"},"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"macos"},"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"linux"},"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",k,[t[1]||(t[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),t[2]||(t[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("For Maven, you may choose any valid "),e("code",null,"<id>"),r(" value instead of "),e("code",null,"tuxcare-registry"),r(", but the same value must be used in both "),e("code",null,"settings.xml"),r(" and "),e("code",null,"pom.xml"),r(".")])],-1)),s(a,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:E},{title:"Gradle (~/.gradle/gradle.properties)",content:C}]},null,8,["tabs"]),t[3]||(t[3]=e("p",null,[r("Replace "),e("code",null,"USERNAME"),r(" and "),e("code",null,"PASSWORD"),r(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),r(" above).")],-1))]),e("li",w,[t[4]||(t[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),t[5]||(t[5]=e("p",null,"Add the TuxCare Apache Struts™ repository and plugins to your build configuration.",-1)),s(a,{tabs:[{title:"Maven (pom.xml)",content:M},{title:"Gradle (build.gradle)",content:N}]},null,8,["tabs"]),t[6]||(t[6]=e("ul",null,[e("li",{id:"to-fully-switch-from-the-official-apache-struts-repository-replace-it-with-the-tuxcare-repository"},"To fully switch from the official Apache Struts™ repository, replace it with the TuxCare repository."),e("li",{id:"to-keep-both-add-tuxcare-after-the-official-one"},"To keep both, add TuxCare after the official one.")],-1)),t[7]||(t[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),r(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),r(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",A,[t[8]||(t[8]=e("p",null,[e("strong",null,"Update dependencies")],-1)),t[9]||(t[9]=e("p",null,[r("Replace Apache Struts™ dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" — sign in with your TuxCare credentials.")],-1)),s(d,{label:"Choose an extension: "},{"1.3.5":n(()=>[s(a,{tabs:[{title:"Maven (pom.xml)",content:L},{title:"Gradle (build.gradle)",content:I}]},null,8,["tabs"])]),"2.5.33":n(()=>[s(a,{tabs:[{title:"Maven (pom.xml)",content:G},{title:"Gradle (build.gradle)",content:U}]},null,8,["tabs"])]),_:1})]),e("li",T,[t[10]||(t[10]=e("p",null,[e("strong",null,"Verify and build")],-1)),t[11]||(t[11]=e("p",null,"Verify the setup:",-1)),s(a,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),t[12]||(t[12]=e("p",null,"Build the project:",-1)),s(a,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),t[13]||(t[13]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Apache Struts™ repository.",-1))])])]),_:1}),t[28]||(t[28]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),r(" What's Next?")],-1)),s(p,{"hide-title":""},{default:n(()=>[e("ul",null,[t[23]||(t[23]=e("li",null,[e("img",{src:c,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Apache+Struts",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),r(" — Track vulnerability fixes and updates")],-1)),t[24]||(t[24]=e("li",null,[e("img",{src:m,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Apache+Struts",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),r(" — Patched versions and changelogs")],-1)),t[25]||(t[25]=e("li",null,[e("img",{src:g,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Apache+Struts",target:"_blank",rel:"noopener noreferrer"},"Supported components"),r(" — Full list of product parts covered by ELS")],-1)),t[26]||(t[26]=e("li",null,[e("img",{src:f,alt:""}),r(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.struts/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),r(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[t[16]||(t[16]=e("img",{src:x,alt:""},null,-1)),t[17]||(t[17]=r()),s(l,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:n(()=>t[15]||(t[15]=[r("Source code",-1)])),_:1,__:[15]}),t[18]||(t[18]=r(" — Access source JARs in Nexus",-1))]),e("li",null,[t[20]||(t[20]=e("img",{src:h,alt:""},null,-1)),t[21]||(t[21]=r()),s(l,{to:"/els-for-libraries/managing-els-repository/#java"},{default:n(()=>t[19]||(t[19]=[r("Package updates",-1)])),_:1,__:[19]}),t[22]||(t[22]=r(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1}),_(" data for Apache Struts instructions used in code blocks ")])}}},z=v(j,[["__file","index.html.vue"]]);export{z as default};
