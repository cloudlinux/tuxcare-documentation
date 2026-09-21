# Jackson

TuxCare's Endless Lifecycle Support (ELS) for Jackson provides security patches and selected bug fixes that are integral to the stable operation of applications running on Jackson.

## Supported Versions

| Jackson artifact | Supported release lines |
|---|---|
| jackson-databind | 2.1, 2.2, 2.4 – 2.21 |
| jackson-core | 2.1, 2.2, 2.4 – 2.21 |
| jackson-annotations | 2.1, 2.2, 2.4 – 2.21 |
| jackson-bom | 2.6 – 2.21 |
| jackson-modules-java8 (incl. jackson-datatype-jsr310) | 2.9 – 2.19, 2.21 |
| jackson-modules-base | 2.4 – 2.19 |
| jackson-dataformats-binary (CBOR, Smile, Avro, Protobuf, Ion) | 2.4 – 2.6, 2.8 – 2.19, 2.21 |
| jackson-dataformats-text (YAML, CSV, Properties, TOML) | 2.6 – 2.18, 2.21 |
| jackson-dataformat-xml | 2.9, 2.10, 2.13, 2.15 – 2.17 |
| jackson-jaxrs-providers (incl. jackson-jaxrs-json-provider) | 2.4 – 2.6, 2.8 – 2.16, 2.18, 2.19 |
| jackson-jakarta-rs-providers | 2.13, 2.15, 2.16 |
| jackson-jr | 2.7 – 2.9, 2.11 – 2.19 |
| jackson-module-kotlin | 2.15, 2.16, 2.18 |
| jackson-module-scala | 2.4, 2.6, 2.10, 2.12 – 2.16 |
| jackson-module-jsonschema | 2.4, 2.8, 2.9, 2.14 – 2.16, 2.21 |
| jackson-datatype-joda | 2.4, 2.9, 2.15, 2.16, 2.18, 2.21 |
| jackson-datatypes-collections (Guava, HPPC, PCollections) | 2.4, 2.9, 2.15, 2.16 |
| jackson-datatype-hibernate | 2.15, 2.16 |
| jackson-datatypes-misc | 2.15, 2.16 |
| jackson-core-asl / jackson-mapper-asl (Jackson 1.x) | 1.5, 1.7 – 1.9 |

## Installation

<ELSPrerequisites>

* **Maven** or **Gradle** build tool installed
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

:::tip
Optionally, ELS can be consumed through your own repository manager instead of connecting to TuxCare directly. You can find the corresponding instructions [here](/els-for-libraries/managing-els-repository/#consuming-els-through-your-own-repository-manager).
:::

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

   Add the TuxCare Jackson repository and plugins to your build configuration.

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavenrepo },
     { title: 'Gradle (build.gradle)', content: gradlerepo }
   ]" />

   * To fully switch from the official Jackson repository, replace it with the TuxCare repository.
   * To keep both, add TuxCare after the official one.

   :::tip
   Example **[Maven](https://github.com/cloudlinux/securechain-java/tree/main/examples/maven)** and **[Gradle](https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle)** projects are available on GitHub. Ensure the required environment variables are set.
   :::

4. **Update dependencies**

   Replace Jackson dependencies with TuxCare-maintained versions. You can find artifact versions on [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) — sign in with your TuxCare credentials.

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

   The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Jackson repository.

</ELSSteps>


## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Jackson) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Jackson) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Jackson) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.codehaus.jackson/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [Source code](/els-for-libraries/managing-els-repository/#javaSources) — Access source JARs in Nexus
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (Nexus, credentials required)
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
        <groupId>org.codehaus.jackson</groupId>
        <artifactId>jackson-mapper-asl</artifactId>
        <version>1.9.13-tuxcare.1</version>
    </dependency>
</dependencies>`

const gradledeps =
`dependencies {
  implementation("org.codehaus.jackson:jackson-mapper-asl:1.9.13-tuxcare.1")
}`
</script>
