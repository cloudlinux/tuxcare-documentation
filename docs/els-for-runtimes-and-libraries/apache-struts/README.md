# Apache Struts

TuxCare's Endless Lifecycle Support (ELS) for Apache Struts provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Struts core components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Struts service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Struts applications.

## Supported Versions

* Apache Struts 1.3.5, 2.5.33

## Connection to ELS for Apache Struts Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Apache Struts repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your **Maven** and **Gradle** projects.

### Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Apache Struts repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Configure Registry

1. Navigate to the directory depending on your operating system.
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

2. Add the TuxCare repository and plugin repository to your build configuration.

   :::tip
   For Maven, you may choose any valid `<id>` value instead of `tuxcare-registry`, but the same value must be used in both `settings.xml` and `pom.xml`.
   :::

   <CodeTabs :tabs="[
     { title: 'Maven (~/.m2/settings.xml)', content: mavencreds },
     { title: 'Gradle (~/.gradle/gradle.properties)', content: gradlecreds }
   ]" />

Here `USERNAME` and `PASSWORD` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials).

### Step 3: Update Build Configuration

Add the TuxCare Apache Struts repository and plugins to your build configuration:

<CodeTabs :tabs="[
  { title: 'Maven (pom.xml)', content: mavenrepo },
  { title: 'Gradle (build.gradle)', content: gradlerepo }
]" />

* To fully switch from the official Apache Struts repository, replace it with the TuxCare repository.
* To keep both, add TuxCare after the official one.

Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.
* [Maven](https://github.com/cloudlinux/securechain-java/tree/main/examples/maven)
* [Gradle](https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle)

### Step 4: Update Dependencies

Replace the Apache Struts dependencies in your build file with the TuxCare-maintained versions to cover both direct and transitive dependencies.

You can find a specific artifact version in your TuxCare account on [Nexus](https://nexus.repo.tuxcare.com/repository/els_spring/) (anonymous access is restricted).

<TableTabs label="Choose an extension: " >

  <template #1.3.5>
  
  <CodeTabs :tabs="[
    { title: 'Maven (pom.xml)', content: mavendeps },
    { title: 'Gradle (build.gradle)', content: gradledeps }
  ]" />

  </template>

  <template #2.5.33>
  
  <CodeTabs :tabs="[
    { title: 'Maven (pom.xml)', content: mavendeps2 },
    { title: 'Gradle (build.gradle)', content: gradledeps2 }
  ]" />

  </template>

</TableTabs>

### Step 5: Verify and Build

1. To confirm the TuxCare Apache Struts repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.

   <CodeTabs :tabs="[
     { title: 'Maven', content: `mvn dependency:tree -Dverbose` },
     { title: 'Gradle', content: `./gradlew dependencies --configuration runtimeClasspath` }
   ]" />

2. After reviewing the dependencies, include any library from the repository into your project and then run a build:

   <CodeTabs :tabs="[
    { title: 'Maven', content: `mvn clean install` },
    { title: 'Gradle', content: `./gradlew build` }
   ]" />

The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Struts repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Apache Struts repository into your project. You can now benefit from the secure and vetted Apache Struts libraries it provides.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Apache Struts ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.struts/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/org.apache.struts/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), you need to update version strings in your Maven or Gradle build file.

<!-- data for Apache Struts instructions used in code blocks -->

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
`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_spring/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`

const mavenrepo =
`<repositories>
  <repository>
      <id>tuxcare-registry</id>
      <url>https://nexus.repo.tuxcare.com/repository/els_spring/</url>
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
        <groupId>org.apache.struts</groupId>
        <artifactId>struts-core</artifactId>
        <version>1.3.5-tuxcare.1</version>
    </dependency>
</dependencies>`

const gradledeps =
`dependencies {
    implementation("org.apache.struts:struts-core:1.3.5-tuxcare.1")
}`

const mavendeps2 =
`<dependencyManagement>
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
</dependencies>`

const gradledeps2 =
`dependencies {
    implementation("org.apache.struts:struts2-core:2.5.33-tuxcare.1")
}`

</script>


