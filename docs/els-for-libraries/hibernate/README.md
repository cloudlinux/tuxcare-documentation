# Hibernate

TuxCare's Endless Lifecycle Support (ELS) for Hibernate provides security patches and selected bug fixes that are integral to the stable operation of applications running on Hibernate.

## Supported Versions

* Hibernate ORM 4.3.11.Final, 5.1.2.Final, 5.4.3.Final, 5.4.30.Final, 5.4.31.Final, 5.4.32.Final, 5.4.33.Final, 5.5.6.Final, 5.5.9.Final, 5.6.15.Final, 6.2.5.Final
* Hibernate Search 5.11.10.Final

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

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

3. **Add the TuxCare repository**

   Add the TuxCare Hibernate repository and plugins to your build configuration.

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavenrepo },
     { title: 'Gradle (build.gradle)', content: gradlerepo }
   ]" />

   * To fully switch from the official Hibernate repository, replace it with the TuxCare repository.
   * To keep both, add TuxCare after the official one.

   :::tip
   Example **[Maven](https://github.com/cloudlinux/securechain-java/tree/main/examples/maven)** and **[Gradle](https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle)** projects are available on GitHub. Ensure the required environment variables are set.
   :::

4. **Update dependencies**

   Replace Hibernate dependencies with TuxCare-maintained versions. You can find artifact versions on [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) — sign in with your TuxCare credentials.

   <TableTabs label="Choose an extension: " >

   <template #Hibernate_ORM>

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavendeps },
     { title: 'Gradle (build.gradle)', content: gradledeps }
   ]" />

   </template>

   <template #Hibernate_Search>

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavendeps2 },
     { title: 'Gradle (build.gradle)', content: gradledeps2 }
   ]" />

   </template>

   </TableTabs>

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

   The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Hibernate repository.

</ELSSteps>


## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Hibernate) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Hibernate) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Hibernate) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.hibernate/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [Source code](/els-for-libraries/managing-els-repository/#javaSources) — Access source JARs in Nexus
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#java) — Update an installed package to a newer TuxCare release

</WhatsNext>

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
    authentication { basic(BasicAuthentication) }
  }
  mavenCentral()
}`

const mavendeps =
`<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
      <version>5.6.15.Final-tuxcare.1</version>
    </dependency>
</dependencies>`

const mavendeps2 =
`<parent>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-search-parent</artifactId>
  <version>5.11.10.Final-tuxcare.1</version>
</parent>

<dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
    </dependency>
</dependencies>`

const gradledeps =
`dependencies {
  implementation("org.hibernate:hibernate-core:5.6.15.Final-tuxcare.1")
}`

const gradledeps2 =
`dependencies {
  implementation platform("org.hibernate:hibernate-search-parent:5.11.10.Final")
  implementation "org.hibernate:hibernate-core"
}`
</script>
