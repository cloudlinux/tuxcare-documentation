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

Create or update your registry configuration. Open the appropriate configuration file for your build tool in a text editor, and add the following configuration:

  <CodeTabs :tabs="[
    { title: 'Maven (~/.m2/settings.xml)', content: mavencreds },
    { title: 'Gradle (~/.gradle/gradle.properties)', content: gradlecreds }
  ]" />

Here `USERNAME` and `PASSWORD` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials).

:::tip
You may choose any arbitrary allowed value instead of `repository-id`, but you must use the same value in both snippets in your `settings.xml` and  `pom.xml` files.
:::

### Step 3: Update Build Configuration

1. Add the TuxCare Spring repository and plugins to your build configuration:

   <CodeTabs :tabs="[
     { title: 'Maven (~/.m2/pom.xml)', content: mavenrepo },
     { title: 'Gradle (~/.gradle/gradle.properties)', content: gradlerepo }
   ]" />

   :::tip
   If you want to completely replace the official Spring repository, substitute it with TuxCare. If you prefer to keep both, add TuxCare after the official repository.
   :::

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

2. Update your Spring build dependencies. You can find a specific artifact version in your TuxCare account on [Nexus](https://nexus.repo.tuxcare.com/repository/els_spring/).

   <CodeTabs :tabs="[
     { title: 'Maven (~/.m2/pom.xml)', content: mavendeps },
     { title: 'Gradle (~/.gradle/gradle.properties)', content: gradledeps }
   ]" />

### Step 4: Verify and Build

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
          <username>\${env.USERNAME}</username>
          <password>\${env.PASSWORD}</password>
        </server>
    </servers>
</settings>`

const gradlecreds =
`tuxcare_resgistry_url=https://nexus.repo.tuxcare.com/repository/els_spring/
tuxcare_resgistry_user=USERNAME
tuxcare_resgistry_password=PASSWORD`

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
     url = uri(providers.gradleProperty("tuxcare_resgistry_url").get())
     credentials {
       username = providers.gradleProperty("tuxcare_resgistry_user").get()
       password = providers.gradleProperty("tuxcare_resgistry_password").get()
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
    url = uri(providers.gradleProperty("tuxcare_resgistry_url").get())
    credentials {
      username = providers.gradleProperty("tuxcare_resgistry_user").get()
      password = providers.gradleProperty("tuxcare_resgistry_password").get()
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
  <version>2.7.18-spring-boot-2.7.27</version>
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
</dependencies>
`

const gradledeps =
`plugins {
  id 'java'
  id 'org.springframework.boot' version '2.7.18-spring-boot-2.7.27'
  id 'io.spring.dependency-management' version '1.0.15.RELEASE'
}

dependencies {
  implementation "org.springframework.boot:spring-boot-starter-web"
  implementation "org.springframework.boot:spring-boot-starter-security"
  implementation "org.springframework.boot:spring-boot-starter-validation"
}
`
</script>
