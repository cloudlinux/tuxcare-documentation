import{_ as u}from"./eye-bd28630a.js";import{_ as c}from"./shield-2656a8d0.js";import{_ as m}from"./clipboard-notes-eeeedcf5.js";import{_ as g}from"./shield-alert-226df5e9.js";import{_ as h}from"./unlock-alt-12fd40c9.js";import{_ as x}from"./wrench-730959f9.js";import{_ as f,U as n,n as v,p as b,a8 as y,E as o,C as s,q as e,L as t,v as _}from"./framework-520e1760.js";const S={id:"configure-credentials"},w={id:"add-the-tuxcare-repository"},k={id:"update-dependencies"},E={id:"verify-the-setup"},A={id:"build-the-project"},T=`<?xml version="1.0" encoding="UTF-8"?>
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
}`,L=`<dependencyManagement>
    <dependencies>
            <dependency>
                <groupId>org.apache.hadoop</groupId>
                <artifactId>hadoop-project</artifactId>
                <version>2.7.3.tuxcare.1</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-common</artifactId>
    </dependency>
</dependencies>`,H=`dependencies {
    implementation("org.apache.hadoop:hadoop-common:2.7.1.tuxcare.1")
}`,j={__name:"index.html",setup(G){return(U,r)=>{const l=n("ELSPrerequisites"),a=n("CodeTabs"),i=n("ELSSteps"),d=n("RouterLink"),p=n("WhatsNext");return v(),b("div",null,[r[26]||(r[26]=y('<h1 id="apache-hadoop" tabindex="-1"><a class="header-anchor" href="#apache-hadoop" aria-hidden="true">#</a> Apache Hadoop</h1><p>TuxCare&#39;s Endless Lifecycle Support (ELS) for Apache Hadoop provides security patches and selected bug fixes that are integral to the stable operation of applications running on these versions of Apache Hadoop core components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL). Our ELS for Apache Hadoop service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Hadoop applications.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Apache Hadoop 2.7.1, 2.7.3</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),o(l,null,{default:s(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[t("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[t("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" and click "),e("strong",null,"Sign in"),t(" in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),o(i,null,{default:s(()=>[e("ol",null,[r[16]||(r[16]=e("li",{id:"navigate-to-the-build-tool-directory"},[e("p",null,[e("strong",null,"Navigate to the build tool directory")]),e("ul",null,[e("li",{id:"windows"},"Windows")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: C:\\Users\\{username}\\.m2
Gradle: C:\\Users\\{username}\\.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"macos"},"macOS")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /Users/{username}/.m2
Gradle: /Users/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",{id:"linux"},"Linux")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Maven: /home/{username}/.m2
Gradle: /home/{username}/.gradle
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),e("li",S,[r[1]||(r[1]=e("p",null,[e("strong",null,"Configure credentials")],-1)),r[2]||(r[2]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("For Maven, you may choose any valid "),e("code",null,"<id>"),t(" value instead of "),e("code",null,"tuxcare-registry"),t(", but the same value must be used in both "),e("code",null,"settings.xml"),t(" and "),e("code",null,"pom.xml"),t(".")])],-1)),o(a,{tabs:[{title:"Maven (~/.m2/settings.xml)",content:T},{title:"Gradle (~/.gradle/gradle.properties)",content:C}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[t("Replace "),e("code",null,"USERNAME"),t(" and "),e("code",null,"PASSWORD"),t(" with your TuxCare credentials (see "),e("a",{href:"#installation"},"Prerequisites"),t(" above).")],-1))]),e("li",w,[r[4]||(r[4]=e("p",null,[e("strong",null,"Add the TuxCare repository")],-1)),r[5]||(r[5]=e("p",null,"Add the TuxCare Apache Hadoop repository and plugins to your build configuration.",-1)),o(a,{tabs:[{title:"Maven (pom.xml)",content:M},{title:"Gradle (build.gradle)",content:N}]},null,8,["tabs"]),r[6]||(r[6]=e("ul",null,[e("li",{id:"to-fully-switch-from-the-official-apache-hadoop-repository-replace-it-with-the-tuxcare-repository"},"To fully switch from the official Apache Hadoop repository, replace it with the TuxCare repository."),e("li",{id:"to-keep-both-add-tuxcare-after-the-official-one"},"To keep both, add TuxCare after the official one.")],-1)),r[7]||(r[7]=e("p",null,"Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.",-1)),r[8]||(r[8]=e("ul",null,[e("li",{id:"maven"},[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/maven",target:"_blank",rel:"noopener noreferrer"},"Maven")]),e("li",{id:"gradle"},[e("a",{href:"https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle",target:"_blank",rel:"noopener noreferrer"},"Gradle")])],-1))]),e("li",k,[r[9]||(r[9]=e("p",null,[e("strong",null,"Update dependencies")],-1)),r[10]||(r[10]=e("p",null,[t("Replace Apache Hadoop dependencies with TuxCare-maintained versions. You can find artifact versions on "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" — sign in with your TuxCare credentials.")],-1)),o(a,{tabs:[{title:"Maven (pom.xml)",content:L},{title:"Gradle (build.gradle)",content:H}]},null,8,["tabs"])]),e("li",E,[r[11]||(r[11]=e("p",null,[e("strong",null,"Verify the setup")],-1)),r[12]||(r[12]=e("p",null,"Use your build tool to list the project's dependencies and confirm TuxCare packages are resolved correctly.",-1)),o(a,{tabs:[{title:"Maven",content:"mvn dependency:tree -Dverbose"},{title:"Gradle",content:"./gradlew dependencies --configuration runtimeClasspath"}]})]),e("li",A,[r[13]||(r[13]=e("p",null,[e("strong",null,"Build the project")],-1)),r[14]||(r[14]=e("p",null,"Include any library from the repository and run a build.",-1)),o(a,{tabs:[{title:"Maven",content:"mvn clean install"},{title:"Gradle",content:"./gradlew build"}]}),r[15]||(r[15]=e("p",null,"The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Hadoop repository.",-1))])])]),_:1}),r[27]||(r[27]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),t(" What's Next?")],-1)),o(p,{"hide-title":""},{default:s(()=>[e("ul",null,[r[21]||(r[21]=e("li",null,[e("img",{src:u,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Apache+Hadoop",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),t(" — Track vulnerability fixes and updates")],-1)),r[22]||(r[22]=e("li",null,[e("img",{src:c,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Apache+Hadoop",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),t(" — Patched versions and changelogs")],-1)),r[23]||(r[23]=e("li",null,[e("img",{src:m,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Apache+Hadoop",target:"_blank",rel:"noopener noreferrer"},"Supported components"),t(" — Full list of product parts covered by ELS")],-1)),r[24]||(r[24]=e("li",null,[e("img",{src:g,alt:""}),t(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.hadoop/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),t(" — Vulnerability Exploitability eXchange feed")],-1)),r[25]||(r[25]=e("li",null,[e("img",{src:h,alt:""}),t(),e("a",{href:"https://nexus.repo.tuxcare.com/repository/els_java/org/apache/hadoop/hadoop-common/2.7.3.tuxcare.1/hadoop-common-2.7.3.tuxcare.1-sources.jar",target:"_blank",rel:"noopener noreferrer"},"Source code"),t(" — Nexus repository (credentials required)")],-1)),e("li",null,[r[18]||(r[18]=e("img",{src:x,alt:""},null,-1)),r[19]||(r[19]=t()),o(d,{to:"/els-for-applications/managing-els-repository/"},{default:s(()=>r[17]||(r[17]=[t("Managing the ELS repository",-1)])),_:1,__:[17]}),r[20]||(r[20]=t(" — Update to newer versions",-1))])])]),_:1}),_(" data for Apache Hadoop instructions used in code blocks ")])}}},B=f(j,[["__file","index.html.vue"]]);export{B as default};
