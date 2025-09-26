# Spring

TuxCare's Endless Lifecycle Support (ELS) for Spring provides security updates, system enhancement patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Spring ecosystem components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

* Spring Framework
* Spring Boot
* Spring Data
* Spring Security
* etc

Our ELS for Spring service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring applications.

## Connection to ELS for Spring Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Spring repository into your Java application. The repository provides trusted Java libraries that can be easily used with both **Maven** and **Gradle** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS Spring repository. Anonymous access is disabled. To receive a username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)

### Step 2: Configure Registry

Add the TuxCare repository and plugin repository to your build configuration:

<CodeTabs :tabs="[
  { title: 'Maven (~/.m2/settings.xml)', content: mavencreds },
  { title: 'Gradle (~/.gradle/gradle.properties)', content: gradlecreds }
]" />

Here `USERNAME` and `PASSWORD` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials).

:::tip
For Maven, you may choose any valid `<id>` value instead of `tuxcare-registry`, but the same value must be used in both `settings.xml` and `pom.xml`.
:::

### Step 3: Update Build Configuration

Add the TuxCare Spring repository and plugins to your build configuration:

<CodeTabs :tabs="[
  { title: 'Maven (pom.xml)', content: mavenrepo },
  { title: 'Gradle (build.gradle)', content: gradlerepo }
]" />

* To completely replace the official Spring repository, substitute it with the TuxCare repository.
* To keep both, add TuxCare after the official one.

Example Maven and Gradle projects are available on GitHub. Remember to set the required environment variables.
* [Maven](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven)
* [Gradle](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle)

<!--
**Gradle**

* If you are using Gradle as your build automation tool, make sure to include the following configuration in your project setup:

```text
repositories {
  maven {
    url = uri("https://nexus-repo.corp.cloudlinux.com/repository/els_spring")
    credentials {
            username = findProperty('USERNAME')
            password = findProperty('PASSWORD')
    }
  }
}
```
-->

### Step 4: Update Dependencies

Update your Spring build dependencies. You can find a specific artifact version in your TuxCare account on [Nexus](https://nexus.repo.tuxcare.com/repository/els_spring/).

There are two main options for applying the TuxCare versions. In both approaches, your build tool will automatically pull in the correct TuxCare builds for both your direct dependencies and their transitive dependencies:

* **Option 1**: Set the TuxCare version as the parent in your `pom.xml`. It applies the version to all managed Spring dependencies in the project.

  <CodeTabs :tabs="[
    { title: 'Maven (pom.xml)', content: mavendeps },
    { title: 'Gradle (build.gradle)', content: gradledeps }
  ]" />

* **Option 2**: Import the TuxCare parent as a BOM (Bill of Materials) inside a `dependencyManagement` block. This allows you more control if you want to override or mix dependency sources.

  <CodeTabs :tabs="[
    { title: 'Maven (pom.xml)', content: mavendeps2 },
    { title: 'Gradle (build.gradle)', content: gradledeps2 }
  ]" />

### Step 5: Verify and Build

To confirm that the TuxCare Spring repository has been set up successfully, include any library from the repository into your project and then run a build:

<CodeTabs :tabs="[
  { title: 'Maven', content: `mvn clean install` },
  { title: 'Gradle', content: `./gradlew build` }
]" />

The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Spring repository.

## Conclusion

You've successfully integrated the TuxCare ELS for Spring repository into your project. You can now benefit from the secure and vetted Spring libraries it provides.

## Resolved CVEs in ELS for Spring

<CVETracker />


<!-- data for spring instructions used in code blocks -->

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
</repositories>

<pluginRepositories>
  <pluginRepository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_spring/</url>
  </pluginRepository>
</pluginRepositories>`

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
 }

 pluginManagement {
   repositories {
   //...
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
   //...
   }
 }`

const mavendeps =
`<parent>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-parent</artifactId>
   <version>2.7.18-tuxcare.8</version>
 </parent>

 <dependencies>
   <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-test</artifactId>
     <scope>test</scope>
   </dependency>
 </dependencies>`

const mavendeps2 =
`<dependencyManagement>
   <dependencies>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-parent</artifactId>
       <version>2.7.18-tuxcare.8</version>
       <type>pom</type>
       <scope>import</scope>
     </dependency>
   </dependencies>
 </dependencyManagement>

 <dependencies>
   <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-test</artifactId>
     <scope>test</scope>
   </dependency>
 </dependencies>`

const gradledeps =
`plugins {
   id 'java'
   id 'org.springframework.boot' version '2.7.18-tuxcare.8'
   id 'io.spring.dependency-management' version '1.0.15.RELEASE'
 }

 dependencies {
   implementation "org.springframework.boot:spring-boot-starter-web"
   implementation "org.springframework.boot:spring-boot-starter-security"
   implementation "org.springframework.boot:spring-boot-starter-validation"
 }`

 const gradledeps2 =
 `plugins {
    id 'java'
    id 'io.spring.dependency-management' version '1.0.15.RELEASE'
}

dependencyManagement {
    imports {
        mavenBom 'org.springframework.boot:spring-boot-dependencies:2.7.18.tuxcare.8'
    }
}

dependencies {
    implementation "org.springframework.boot:spring-boot-starter-web"
    implementation "org.springframework.boot:spring-boot-starter-security"
    implementation "org.springframework.boot:spring-boot-starter-validation"
}`
</script>
