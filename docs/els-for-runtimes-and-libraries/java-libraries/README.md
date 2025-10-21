# Java Libraries

Endless Lifecycle Support (ELS) for Runtimes & Libraries from TuxCare provides security fixes for a variety of Java Libraries. This allows you to continue running your Java applications without vulnerability concerns, even after official support has ended.

## Supported Java Libraries

* **Apache Commons BeanUtils** 1.9.4
* **Apache Commons HttpClient** 3.1
* **Apache Commons IO** 2.7
* **Apache Commons Lang** 2.4, 2.6, 3.4, 3.10, 3.12.0
* **Apache CXF** 3.5.9
* **Apache Hive** 2.3.9
* **Apache Santuario XML Security For Java** 2.0.10, 2.3.1
* **Apache Thrift** 0.9.3
* **Apache Tomcat** 8.5.100, 9.0.75
* **Apache Velocity Engine** 1.7
* **DNSJava** 2.1.7
* **Dom4j** 1.6.1
* **el-spec** 3.0.0
* **Google Guava** 20.0, 30.1-jre, 31.1-jre
* **Logback** 1.2.13
* **Netty** 4.1.115.Final, 4.1.63.Final
* **Nimbus JOSE + JWT** 9.22, 9.24.4
* **Okio** 2.8.0
* **Plexus Utils** 1.5.8
* **Querydsl** 5.1.0
* **Reload4j** 1.2.17
* **SnakeYAML** 1.23, 1.26, 1.29, 1.30, 1.33
* **Snappy Java** 1.1.8.4
* **Thymeleaf** 3.0.15.RELEASE
* **Woodstox** 5.0.3
* **XMLUnit** 2.9.1, 2.9.0

Other libraries upon request.

## Connection to ELS for Java Libraries Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Java Libraries repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your **Maven** and **Gradle** projects.

### Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Java Libraries repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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

Add the TuxCare Java Libraries repository and plugins to your build configuration:

<CodeTabs :tabs="[
  { title: 'Maven (pom.xml)', content: mavenrepo },
  { title: 'Gradle (build.gradle)', content: gradlerepo }
]" />

* To fully switch from the official Java Libraries repository, replace it with the TuxCare repository.
* To keep both, add TuxCare after the official one.

Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.
* [Maven](https://github.com/cloudlinux/securechain-java/tree/main/examples/maven)
* [Gradle](https://github.com/cloudlinux/securechain-java/tree/main/examples/gradle)

### Step 4: Update Dependencies

**Replace your dependencies (both direct and transitive, as needed) with the TuxCare-maintained ones, then rebuild your project.**

Check [your TuxCare Nexus](https://nexus.repo.tuxcare.com/repository/els_spring/) (anonymous access is restricted) for the specific artifacts you need. If a BOM (Bill of Materials) or a parent POM is available, it’s recommended to use it to manage versions:

* Example of **BOM (Bill of Materials)** usage:
  
  <CodeTabs :tabs="[
    { title: 'Maven (pom.xml)', content: mavendeps2 },
    { title: 'Gradle (build.gradle)', content: gradledeps2 }
  ]" />

* If no BOM or parent POM is provided, **update dependency versions directly** using the latest `.tuxcare` patches for your dependency versions.

  <CodeTabs :tabs="[
    { title: 'Maven (pom.xml)', content: mavendeps },
    { title: 'Gradle (build.gradle)', content: gradledeps }
  ]" />

### Step 5: Verify and Build

1. To confirm the TuxCare Java Libraries repository is set up correctly, use your build tool to list the project's dependencies. It shows both direct and transitive dependencies in the classpath.

   <CodeTabs :tabs="[
     { title: 'Maven', content: `mvn dependency:tree -Dverbose` },
     { title: 'Gradle', content: `./gradlew dependencies --configuration runtimeClasspath` }
   ]" />

2. After reviewing the dependencies, include any library from the repository into your project and then run a build:

   <CodeTabs :tabs="[
    { title: 'Maven', content: `mvn clean install` },
    { title: 'Gradle', content: `./gradlew build` }
   ]" />

The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Java Libraries repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Java Libraries repository into your project. You can now benefit from the secure and vetted Java libraries it provides.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Java Libraries ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_java/](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), you need to update version strings in your Maven or Gradle build file.

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
        <groupId>org.apache.cxf</groupId>
        <artifactId>cxf-core</artifactId>
        <version>3.5.9.tuxcare.1</version>
    </dependency>
</dependencies>`

const gradledeps =
`dependencies {
    implementation "org.apache.cxf:cxf-core:3.5.9.tuxcare.1"
}`

const mavendeps2 =
`<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.apache.cxf</groupId>
            <artifactId>cxf-bom</artifactId>
            <version>3.5.9.tuxcare.1</version>
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
</dependencies>`

const gradledeps2 =
`plugins {
    id 'java'
}

dependencyManagement {
    imports {
        mavenBom 'org.apache.cxf:cxf-bom:3.5.9.tuxcare.1'
    }
}

dependencies {
    implementation "org.apache.cxf:cxf-core"
}`
</script>
