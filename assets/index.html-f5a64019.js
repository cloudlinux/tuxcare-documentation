import{_ as g}from"./eye-bd28630a.js";import{_ as x}from"./clipboard-notes-eeeedcf5.js";import{_ as f}from"./shield-alert-226df5e9.js";import{_ as v}from"./unlock-alt-12fd40c9.js";import{_ as b}from"./bolt-90ed8319.js";import{_ as h,U as a,n as y,p as C,a8 as S,E as t,C as l,q as e,L as n}from"./framework-520e1760.js";const T=`<?xml version="1.0" encoding="UTF-8"?>
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
tuxcare_registry_password=PASSWORD`,E=`<repositories>
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
}`,w=`<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.apache.cxf</groupId>
            <artifactId>cxf-bom</artifactId>
            <version>3.5.9-tuxcare.2</version>
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
</dependencies>`,A=`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'org.apache.cxf:cxf-bom:3.5.9-tuxcare.2'
    }
}

dependencies {
    implementation "org.apache.cxf:cxf-core"
}`,M=`<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.apache.cxf</groupId>
            <artifactId>cxf-bom</artifactId>
            <version>3.5.11-tuxcare.1</version>
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
</dependencies>`,I=`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'org.apache.cxf:cxf-bom:3.5.11-tuxcare.1'
    }
}

dependencies {
    implementation "org.apache.cxf:cxf-core"
}`,N={__name:"index.html",setup(j){return(F,r)=>{const i=a("ELSPrerequisites"),s=a("CodeTabs"),d=a("TableTabs"),u=a("ELSSteps"),p=a("ResolvedCveTable"),c=a("ClientOnly"),o=a("RouterLink"),m=a("WhatsNext");return y(),C("div",null,[r[26]||(r[26]=S('<h1 id="apache-cxf" tabindex="-1"><a class="header-anchor" href="#apache-cxf" aria-hidden="true">#</a> Apache CXF</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache CXF provides security patches and selected bug fixes that are integral to the stable operation of applications running on Apache CXF.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache CXF 3.5.9, 3.5.11</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),t(i,null,{default:l(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[e("strong",null,"Maven"),n(" or "),e("strong",null,"Gradle"),n(" build tool installed")]),e("li",null,[n("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[n("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),n(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),t(u,null,{default:l(()=>[e("ol",null,[r[14]||(r[14]=e("li",null,[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",null,"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",null,[r[1]||(r[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),r[2]||(r[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[n("For Maven, you may choose any valid "),e("code",null,"<id>"),n(" value instead of "),e("code",null,"tuxcare-registry"),n(", but the same value must be used in both "),e("code",null,"settings.xml"),n(" and "),e("code",null,"pom.xml"),n(".")])],-1)),t(s,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:T},{title:"Gradle (~/.gradle/gradle.properties)",content:_}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[n("Here "),e("code",null,"USERNAME"),n(" and "),e("code",null,"PASSWORD"),n(" are your Tuxcare credentials.")],-1))]),e("li",null,[r[4]||(r[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),r[5]||(r[5]=e("p",null,"Add the TuxCare Apache CXF repository and plugins to your build configuration.",-1)),t(s,{tabs:[{title:"Maven (pom.xml)",content:E},{title:"Gradle (build.gradle)",content:k}]},null,8,["tabs"]),r[6]||(r[6]=e("ul",null,[e("li",null,"To fully switch from the official Apache CXF repository, replace it with the TuxCare repository."),e("li",null,"To keep both, add TuxCare after the official one.")],-1)),r[7]||(r[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[n("Example "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),n(" and "),e("strong",null,[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")]),n(" projects are available on GitHub. Ensure the required environment variables are set.")])],-1))]),e("li",null,[r[8]||(r[8]=e("p",null,[e("strong",null,"Update dependencies")],-1)),r[9]||(r[9]=e("p",null,[n("Replace Apache CXF dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),n(" — sign in with your TuxCare credentials.")],-1)),t(d,{label:"Choose a version: "},{"3.5.9":l(()=>[t(s,{tabs:[{title:"Maven (pom.xml)",content:w},{title:"Gradle (build.gradle)",content:A}]},null,8,["tabs"])]),"3.5.11":l(()=>[t(s,{tabs:[{title:"Maven (pom.xml)",content:M},{title:"Gradle (build.gradle)",content:I}]},null,8,["tabs"])]),_:1})]),e("li",null,[r[10]||(r[10]=e("p",null,[e("strong",null,"Verify and build")],-1)),r[11]||(r[11]=e("p",null,"Verify the setup:",-1)),t(s,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]}),r[12]||(r[12]=e("p",null,"Build the project:",-1)),t(s,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),r[13]||(r[13]=e("p",null,"The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Apache CXF repository.",-1))])])]),_:1}),r[27]||(r[27]=e("h2",{id:"resolved-cves-in-els-for-apache-cxf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolved-cves-in-els-for-apache-cxf","aria-hidden":"true"},"#"),n(" Resolved CVEs in ELS for Apache CXF")],-1)),t(c,null,{default:l(()=>[t(p,{project:"apache-cxf"})]),_:1}),r[28]||(r[28]=e("h2",{id:"what's-next?",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what's-next?","aria-hidden":"true"},"#"),n(" What's Next?")],-1)),t(m,{"hide-title":""},{default:l(()=>[e("ul",null,[r[23]||(r[23]=e("li",null,[e("img",{src:g,alt:""}),n(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Apache+CXF",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),n(" — Track vulnerability fixes and updates")],-1)),r[24]||(r[24]=e("li",null,[e("img",{src:x,alt:""}),n(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Apache+CXF",target:"_blank",rel:"noopener noreferrer"},"Supported components"),n(" — Full list of product parts covered by ELS")],-1)),r[25]||(r[25]=e("li",null,[e("img",{src:f,alt:""}),n(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.cxf/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),n(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[r[16]||(r[16]=e("img",{src:v,alt:""},null,-1)),r[17]||(r[17]=n()),t(o,{to:"/els-for-libraries/managing-els-repository/#javaSources"},{default:l(()=>r[15]||(r[15]=[n("Source code",-1)])),_:1,__:[15]}),r[18]||(r[18]=n(" — Access source JARs in Nexus",-1))]),e("li",null,[r[20]||(r[20]=e("img",{src:b,alt:""},null,-1)),r[21]||(r[21]=n()),t(o,{to:"/els-for-libraries/managing-els-repository/#java"},{default:l(()=>r[19]||(r[19]=[n("Package updates",-1)])),_:1,__:[19]}),r[22]||(r[22]=n(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}}},P=h(N,[["__file","index.html.vue"]]);export{P as default};
