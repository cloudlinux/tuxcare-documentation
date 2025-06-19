# Spring

TuxCare's Endless Lifecycle Support (ELS) for Spring provides security updates, system enhancement patches, and selected bug fixes, that are integral to the stable operation of applications running on the following versions of Spring ecosystem components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS for Spring service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring applications.

## Supported versions

* **Spring Framework:** 5.3.x
* **Spring Boot:** 2.7.x
* **Spring Data:** 2.4.x, 2.7.x, 3.7.x
* **Spring Security:** 5.7.x, 5.8.x
* **Spring Batch:** 4.3.x
* **Spring Web Services:** 3.1.x
* **Spring Integration:** 5.5.x
* **Spring Hateoas:** 1.5.x
* **Spring LDAP:** 2.4.x
* **Spring GraphQL:** 1.0.x
* **Spring AMQP:** 2.4.x
* **Spring Retry:** 1.3.x
* **Spring Plugin:** 2.0.0.RELEASE
 
## Connection to ELS for Spring Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Spring repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

### Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Spring repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)

### Step 2: Create or Modify Your Build Tool Settings

The next steps are provided for both build automation tools: **Maven** and **Gradle**. Please select the appropriate tab for your tool.

1. Create or update your registry configuration. 
   
   If the `${MAVEN_HOME}/settings.xml` file does not already exist in your `${MAVEN_HOME}` directory, you should create one. Open the `settings.xml` file with a text editor and include the following configuration.

    <script setup>
    const mavenSettingsXml = `<?xml version="1.0" encoding="UTF-8"?>
    <settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
      <servers>
        <server>
          <id>tuxcare</id>
          <username>\${env.USERNAME}</username>
          <password>\${env.PASSWORD}</password>
        </server>
      </servers>
    </settings>`;
    const gradleSnippet = `repositories {
      maven {
        url = uri("https://nexus-repo.corp.cloudlinux.com/repository/els_spring/")
        credentials {
          username = findProperty('USERNAME')
          password = findProperty('PASSWORD')
        }
      }
    }`;
    </script>

    <CodeTabs :tabs="[
        { title: 'Maven (~/{MAVEN_HOME}/settings.xml)', content: mavenSettingsXml },
        { title: 'Gradle (~/.gradle/gradle.properties)', content: gradleSnippet }
    ]" />

2. Set your credentials via the following environment variables:
  
    <CodeTabs :tabs="[
    { title: 'Maven', content: 
    `export USERNAME=your-username
   export PASSWORD=your-password` },
    { title: 'Gradle', content: 
    `export ORG_GRADLE_PROJECT_USERNAME=your-username
   export ORG_GRADLE_PROJECT_PASSWORD=your-password` }
    ]" />  

  Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials).

3. **Maven-specific:** You may choose an arbitrary allowed value instead of `repository-id` and use the same value in the following snippet from your `pom.xml` file:

    <CodeWithCopy>

    ```text
    <repositories>
        <repository>
            <id>repository-id</id>
            <url>https://nexus-repo.corp.cloudlinux.com/repository/els_spring/</url>
        </repository>
    </repositories>
    ```

    </CodeWithCopy>

4. Example of the project. **Do not forget to set the environment variables.**
  
  * [Maven](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven)
  * [Gradle](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle) 

### Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Spring repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Spring repository into your project. You can now benefit from the secure and vetted Spring libraries it provides.

## Resolved CVEs in ELS for Spring

<CVETracker />
