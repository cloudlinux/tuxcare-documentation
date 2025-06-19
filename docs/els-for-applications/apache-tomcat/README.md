# Apache Tomcat

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat core components such as Coyote, Catalina, Jasper etc.. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat applications.

## Supported Apache Tomcat Versions

Apache Tomcat versions 7, 8.5, 9, 10, and 11 are supported.

## Connection to ELS for Apache Tomcat Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Apache Tomcat repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

### Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Apache Tomcat repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Create or Modify Your Build Tool Settings

The next steps are provided for both build automation tools: **Maven** and **Gradle**. Please select the appropriate tab for your tool.

1. Create or update your registry configuration.

   If the `${MAVEN_HOME}/settings.xml` file does not already exist in your `${MAVEN_HOME}` directory, you should create one. Open the `settings.xml` file with a text editor and include the following configuration.

    <script setup>
    const mavenSettingsXml = `<?xml version="1.0" encoding="UTF-8"?>
    <settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
        <servers>
            <server>
              <id>repository-id</id>
              <username>\${env.USERNAME}</username>
              <password>\${env.PASSWORD}</password>
            </server>
        </servers>
    </settings>`;
    const gradleSnippet = `repositories {
      maven {
        url = uri("https://nexus.repo.tuxcare.com/repository/els_tomcat/")
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
          <url>https://nexus.repo.tuxcare.com/repository/els_tomcat/</url>
      </repository>
    </repositories>
    ```

    </CodeWithCopy>

4. Example of the project. **Do not forget to set the environment variables.**
  
  * [Maven](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven)
  * [Gradle](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle) 
  

### Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Tomcat repository.

### Conclusion

You've successfully integrated the TuxCare ELS for Apache Tomcat repository into your project. You can now benefit from the secure and vetted Apache Tomcat libraries it provides.
