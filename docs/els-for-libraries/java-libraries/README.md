# Java Libraries

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for a variety of Java Libraries. This allows you to continue running your Java applications without vulnerability concerns, even after official support has ended.

## Supported Java Libraries

* **Apache Avro** 1.7.6, 1.7.7, 1.10.2, 1.11.3
* **Apache Axis** 1.4
* **Apache Commons BeanUtils** 1.6, 1.8.3, 1.9.4
* **Apache Commons Compress** 1.19, 1.20, 1.26.2
* **Apache Commons HttpClient** 3.1
* **Apache Commons IO** 2.5, 2.6, 2.7, 2.11.0
* **Apache HttpComponents Client** 4.5.2
* **Apache Santuario XML Security For Java** 2.0.10, 2.3.1
* **Apache Thrift** 0.9.1, 0.9.3
* **Apache XMLBeans** 2.6.0
* **Bouncy Castle** 1.64, 1.76
* **DNSJava** 2.1.7
* **Dom4j** 1.6.1
* **Eclipse JGit** 5.7.0, 5.13.3
* **Eclipse Parsson** 1.0.0
* **EdDSA** 0.3.0
* **el-spec** 3.0.0
* **Google Gson** 2.8.5, 2.9.1
* **Google Guava** 16.0.1, 18.0, 20.0, 25.1-android, 25.1-jre, 27.1-android, 27.1-jre, 30.1-jre, 31.1-jre
* **Google Guice** 4.2.1
* **Google OAuth Client** 1.25.0
* **H2 Database** 1.4.200
* **Hazelcast** 4.2.8
* **HtmlUnit** 2.70.0
* **iText** 2.1.7
* **JBoss XNIO** 3.8.0
* **JDOM** 1.0, 1.1.3
* **JSON** 20090211, 20140107
* **JSON Assert** 1.2.3
* **JSON Smart v2** 2.4.8
* **Logback** 1.1.7, 1.2.13, 1.4.14
* **LZ4** 1.8.1
* **Mozilla Rhino** 1.7.10, 1.7.15
* **NekoHTML** 1.9.22
* **Netty** 4.1.115.Final, 4.1.48.Final, 4.1.49.Final, 4.1.52.Final, 4.1.58.Final, 4.1.60.Final, 4.1.63.Final, 4.1.73.Final, 4.1.75.Final, 4.1.82.Final, 4.1.92.Final, 4.1.93.Final
* **Nimbus JOSE + JWT** 9.22, 9.24.4
* **OkHttp3** 3.14.9
* **Okio** 2.8.0, 2.10.0
* **Plexus Utils** 1.4.5, 1.5.8
* **Querydsl** 5.1.0
* **Reactor BOM** 2020.0.23, 2020.0.38, 2022.0.15
* **Reactor Netty** 1.0.23, 1.0.32, 1.0.39, 1.1.15
* **RSocket** 1.1.3
* **SnakeYAML** 1.23, 1.26, 1.29, 1.30, 1.33
* **Snappy Java** 1.1.8.4
* **Sonatype Aether** 1.13.1
* **Thymeleaf** 3.0.15.RELEASE
* **Undertow** 2.2.33.Final, 2.3.10.Final
* **Woodstox** 5.0.3
* **Xerces** 2.11.0, 2.12.0
* **XMLUnit** 2.9.1, 2.9.0

Other libraries upon request.

## Installation

<ELSPrerequisites>

* **Maven** or **Gradle** build tool installed
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Navigate to the build tool directory**

   * Windows
   ```text
   Maven: C:\Users\{username}\.m2
   Gradle: C:\Users\{username}\.gradle
   ```
   * macOS
   ```text
   Maven: /Users/{username}/.m2
   Gradle: /Users/{username}/.gradle
   ```
   * Linux
   ```text
   Maven: /home/{username}/.m2
   Gradle: /home/{username}/.gradle
   ```

2. **Configure credentials**

   :::tip
   For Maven, you may choose any valid `<id>` value instead of `tuxcare-registry`, but the same value must be used in both `settings.xml` and `pom.xml`.
   :::

   <CodeTabs :tabs="[
     { title: 'Maven (~/.m2/settings.xml)', content: mavencreds },
     { title: 'Gradle (~/.gradle/gradle.properties)', content: gradlecreds }
   ]" />

   Here `USERNAME` and `PASSWORD` are your Tuxcare credentials.

3. **Add the TuxCare repository**

   Add the TuxCare Java Libraries repository and plugins to your build configuration.

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavenrepo },
     { title: 'Gradle (build.gradle)', content: gradlerepo }
   ]" />

   * To fully switch from the official Java Libraries repository, replace it with the TuxCare repository.
   * To keep both, add TuxCare after the official one.

   :::tip
   Example **[Maven](https://github.com/cloudlinux/securechain-java/tree/main/examples/maven)** and **[Gradle](https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle)** projects are available on GitHub. Ensure the required environment variables are set.
   :::

4. **Update dependencies**

   Replace your dependencies (both direct and transitive, as needed) with TuxCare-maintained versions. You can find artifact versions on [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) — sign in with your TuxCare credentials.

   If a BOM (Bill of Materials) is available, it's recommended to use it to manage versions.

   * Example of **BOM (Bill of Materials)** usage:

     <CodeTabs :tabs="[
       { title: 'Maven (pom.xml)', content: mavendeps2 },
       { title: 'Gradle (build.gradle)', content: gradledeps2 }
     ]" />

   * If no BOM is provided, **update dependency versions directly** using the latest `.tuxcare` patches for your dependency versions.

     <CodeTabs :tabs="[
       { title: 'Maven (pom.xml)', content: mavendeps },
       { title: 'Gradle (build.gradle)', content: gradledeps }
     ]" />

5. **Verify and build**

   Verify the setup:

   <CodeTabs :tabs="[
     { title: 'Maven', content: `mvn dependency:tree -Dverbose` },
     { title: 'Gradle', content: `./gradlew dependencies --configuration runtimeClasspath` }
   ]" />

   Build the project:

   <CodeTabs :tabs="[
     { title: 'Maven', content: `mvn clean install` },
     { title: 'Gradle', content: `./gradlew build` }
   ]" />

   The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Java Libraries repository.

</ELSSteps>

## Resolved CVEs in ELS for Java Libraries

<ClientOnly>
  <ResolvedCveTable project="java-libraries" />
</ClientOnly>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [Source code](/els-for-libraries/managing-els-repository/#javaSources) — Access source JARs in Nexus
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#java) — Update an installed package to a newer TuxCare release

</WhatsNext>

<!-- data for Java Libraries instructions used in code blocks -->

<script setup>
const mavencreds =
`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>tuxcare-registry</id>
          <username>USERNAME</username>
          <password>PASSWORD</password>
        </server>
    </servers>
</settings>`

const gradlecreds =
`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`

const mavenrepo =
`<repositories>
  <repository>
      <id>tuxcare-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
  </repository>
</repositories>`

const gradlerepo =
`repositories {
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
}`

const mavendeps =
`<dependencies>
    <dependency>
        <groupId>io.netty</groupId>
        <artifactId>netty-handler</artifactId>
        <version>4.1.115.Final-tuxcare.2</version>
    </dependency>
</dependencies>`

const gradledeps =
`dependencies {
    implementation "io.netty:netty-handler:4.1.115.Final-tuxcare.2"
}`

const mavendeps2 =
`<dependencyManagement>
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
</dependencies>`

const gradledeps2 =
`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'io.netty:netty-bom:4.1.115.Final-tuxcare.2'
    }
}

dependencies {
    implementation "io.netty:netty-handler"
}`
</script>
