# Spring Framework and Spring Boot

TuxCare's Endless Lifecycle Support (ELS) for Spring provides security updates, system enhancement patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Spring ecosystem components such as Spring Framework, Spring Boot, Spring Data, Spring Security, etc. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS for Spring service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring applications.

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI-DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, have similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

* **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
* **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
* **Low-severity CVEs:** Patches provided within 90 days
* TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare [Support Portal](https://tuxcare.com/support-portal/). TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Spring scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Spring offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

## Technical Support

TuxCare provides technical support according to the [support policy](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare [Support Portal](https://tuxcare.com/support-portal/) and to the TuxCare’s online knowledge base.

## Connection to ELS for Spring Repository

## Overview

This guide outlines the steps needed to integrate the TuxCare ELS for Spring repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

## Steps

## Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Spring repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)

## Step 2: Create or Modify Your Build Tool Settings

**Maven**

* If you are using Maven as your build automation tool, you will need to make changes in your `${MAVEN_HOME}/settings.xml` file. If the file does not already exist in your `${MAVEN_HOME}` directory, you should create one. Open the `settings.xml` file with a text editor and include the following configuration:

```text
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0">
    <servers>
        <server>
          <id>repository-id</id>
          <username>${env.USERNAME}</username>
          <password>${env.PASSWORD}</password>
        </server>
    </servers>
</settings>
```

* Set your credentials via the following environment variables:

```text
export USERNAME=your-username
export PASSWORD=your-password
```

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials).

* You may choose an arbitrary allowed value instead of `repository-id` and use the same value in the following snippet from your `pom.xml` file:

```text
<repositories>
    <repository>
        <id>repository-id</id>
        <url>https://nexus-repo.corp.cloudlinux.com/repository/els_spring/</url>
    </repository>
</repositories>
```

* An example maven project can be found [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven). Do not forget to set the environment variables.

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

* Set your credentials via the following environment variables:

```text
export ORG_GRADLE_PROJECT_USERNAME=your-username
export ORG_GRADLE_PROJECT_PASSWORD=your-password
```

  Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials).

* An example gradle project can be found [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle). Do not forget to set the environment variables.

## Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Spring repository.

## Conclusion

You've successfully integrated the TuxCare ELS for Spring repository into your project. You can now benefit from the secure and vetted Spring libraries it provides.

## Resolved CVEs in ELS for Spring

<details>
  <summary>Click to expand resolved CVEs in ELS for Spring</summary>

| CVE Name         | Severity | Group                           | Name                                        | Version       | Fixed Version         |
| ---------------- | -------- | ------------------------------- | ------------------------------------------- | ------------- | --------------------- |
| CVE-2015-6420    | HIGH     | org.apache.velocity             | velocity                                    | 1.7           | 1.7.tuxcare           |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2017-1000487 | CRITICAL | org.codehaus.plexus             | plexus-utils                                | 1.5.8         | 1.5.8.tuxcare         |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare.2      |
| CVE-2018-10237   | MEDIUM   | com.google.guava                | guava                                       | 20.0          | 20.0.tuxcare          |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2019-12400   | MEDIUM   | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2020-13936   | HIGH     | org.apache.velocity             | velocity                                    | 1.7           | 1.7.tuxcare           |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2020-13956   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2020-36518   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2020-5397    | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2020-5398    | HIGH     | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2020-5421    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2020-8908    | LOW      | com.google.guava                | guava                                       | 20.0          | 20.0.tuxcare          |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2021-22060   | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2021-22096   | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2021-22118   | HIGH     | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2021-40690   | HIGH     | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2021-46877   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-0084    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2022-1471    | CRITICAL | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
|                  |          | org.yaml                        | snakeyaml                                   | 1.33          | 1.33.tuxcare          |
| CVE-2022-22950   | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-22968   | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-22970   | MEDIUM   | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-22971   | MEDIUM   | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
| CVE-2022-24823   | MEDIUM   | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
| CVE-2022-25857   | HIGH     | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38749   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38750   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38751   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-38752   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-40152   | HIGH     | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-41854   | MEDIUM   | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2022-42003   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-42004   | HIGH     | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2022-4244    | HIGH     | org.codehaus.plexus             | plexus-utils                                | 1.5.8         | 1.5.8.tuxcare         |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare.2      |
| CVE-2022-4245    | MEDIUM   | org.codehaus.plexus             | plexus-utils                                | 1.5.8         | 1.5.8.tuxcare         |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare.2      |
| CVE-2023-1370    | HIGH     | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
| CVE-2023-1973    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-20860   | HIGH     | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-20861   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-20863   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-25194   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
| CVE-2023-2976    | HIGH     | com.google.guava                | guava                                       | 20.0          | 20.0.tuxcare          |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-33201   | MEDIUM   | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-33202   | MEDIUM   | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-34054   | HIGH     | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-34453   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-34454   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-34455   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-34462   | MEDIUM   | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-35116   | MEDIUM   | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
| CVE-2023-38286   | HIGH     | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-4043    | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2023-43642   | HIGH     | org.apache.kafka                | kafka-clients                               | 3.2.3         | 3.2.3.tuxcare         |
|                  |          | org.xerial.snappy               | snappy-java                                 | 1.1.8.4       | 1.1.8.4.tuxcare       |
| CVE-2023-44483   | MEDIUM   | org.apache.santuario            | xmlsec                                      | 2.0.10        | 2.0.10.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2023-44487   | HIGH     | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-46120   | HIGH     | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-4639    | CRITICAL | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare.3      |
| CVE-2023-49921   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2023-52428   | HIGH     | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2023-5379    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-5685    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare.3      |
| CVE-2023-6378    | HIGH     | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-logging                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-6481    | HIGH     | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-logging                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2023-7272    | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2024-1459    | MEDIUM   | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-1635    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-22243   | HIGH     | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-22257   | HIGH     | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-22262   | HIGH     | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-23444   | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-23450   | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
| CVE-2024-25710   | MEDIUM   | org.springframework.boot        | spring-boot-antlib                          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-buildpack-platform              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-cli                             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-gradle-plugin                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-loader-tools                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-26308   | MEDIUM   | org.springframework.boot        | spring-boot-antlib                          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-buildpack-platform              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-cli                             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-gradle-plugin                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-loader-tools                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-29025   | MEDIUM   | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-reactor-netty           | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-29857   | HIGH     | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-30171   | MEDIUM   | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-31573   | CRITICAL | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.xmlunit                     | xmlunit-core                                | 2.9.1         | 2.9.1.tuxcare         |
| CVE-2024-34447   | HIGH     | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-36124   | MEDIUM   | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-3653    | MEDIUM   | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-38807   | HIGH     | org.springframework.boot        | spring-boot-jarmode-layertools              | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-loader                          | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2024-38808   | MEDIUM   | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot                                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator-autoconfigure          | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-autoconfigure                   | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-devtools                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-properties-migrator             | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-core                     | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.plugin      | spring-plugin-core                          | 2.0.0.RELEASE | 2.0.0.RELEASE.tuxcare |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-xml                                  | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-38809   | HIGH     | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare         |
| CVE-2024-38816   | HIGH     | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare        |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.integration | spring-integration-ws                       | 5.5.20        | 5.5.20.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare         |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare.1       |
| CVE-2024-38819   | HIGH     | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare.3      |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare.3      |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2024-38820   | MEDIUM   | org.springframework             | spring-aop                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-aspects                              | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-beans                                | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-context                              | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-context-indexer                      | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-context-support                      | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-core                                 | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-expression                           | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-framework-bom                        | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-instrument                           | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-jcl                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-jdbc                                 | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-jms                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-messaging                            | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-orm                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-oxm                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-r2dbc                                | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-test                                 | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-tx                                   | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-web                                  | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework             | spring-websocket                            | 5.3.39        | 5.3.39.tuxcare.2      |
|                  |          | org.springframework.batch       | spring-batch-core                           | 4.3.10        | 4.3.10.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot                                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-actuator-autoconfigure          | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-antlib                          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-autoconfigure                   | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-buildpack-platform              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-cli                             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-devtools                        | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-gradle-plugin                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-jarmode-layertools              | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-loader-tools                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-maven-plugin                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-properties-migrator             | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter                         | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-activemq                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-actuator                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-amqp                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-aop                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-artemis                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-batch                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-cache                   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-cassandra-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase          | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-couchbase-reactive | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jdbc               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-jpa                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-mongodb-reactive   | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-r2dbc              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-redis-reactive     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-freemarker              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-integration             | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jdbc                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jooq                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-json                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-jta-atomikos            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mail                    | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-mustache                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-quartz                  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-rsocket                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-test                    | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-thymeleaf               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-validation              | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-cassandra                       | 3.4.18        | 3.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-couchbase                       | 4.4.18        | 4.4.18.tuxcare.1      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-core                       | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.data        | spring-data-rest-webmvc                     | 3.7.18        | 3.7.18.tuxcare        |
|                  |          | org.springframework.hateoas     | spring-hateoas                              | 1.5.6         | 1.5.6.tuxcare         |
|                  |          | org.springframework.ldap        | spring-ldap-core                            | 2.4.4         | 2.4.4.tuxcare         |
|                  |          | org.springframework.security    | spring-security-acl                         | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-aspects                     | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-config                      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-core                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-data                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-ldap                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-messaging                   | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-core                 | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-oauth2-resource-server      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-openid                      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-remoting                    | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-taglibs                     | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-test                        | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.security    | spring-security-web                         | 5.8.16        | 5.8.16.tuxcare        |
|                  |          | org.springframework.ws          | spring-ws                                   | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-core                              | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-security                          | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-support                           | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-ws-test                              | 3.1.8         | 3.1.8.tuxcare.1       |
|                  |          | org.springframework.ws          | spring-xml                                  | 3.1.8         | 3.1.8.tuxcare.1       |
| CVE-2024-38821   | HIGH     | org.springframework.boot        | spring-boot-starter-oauth2-client           | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-oauth2-resource-server  | 2.7.18        | 2.7.18.tuxcare        |
|                  |          | org.springframework.boot        | spring-boot-starter-security                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-38828   | MEDIUM   | org.springframework             | spring-web                                  | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework             | spring-webflux                              | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework             | spring-webmvc                               | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework             | spring-websocket                            | 5.3.39        | 5.3.39.tuxcare.4      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-core                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-resource-server      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-openid                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-remoting                    | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-taglibs                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-test                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-web                         | 5.8.16        | 5.8.16.tuxcare.1      |
| CVE-2024-38829   | LOW      | org.springframework.boot        | spring-boot-starter-data-ldap               | 2.7.18        | 2.7.18.tuxcare.4      |
|                  |          | org.springframework.data        | spring-data-ldap                            | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-40094   | HIGH     | org.springframework.boot        | spring-boot-starter-graphql                 | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2024-43709   | HIGH     | org.springframework.boot        | spring-boot-starter-data-elasticsearch      | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.data        | spring-data-elasticsearch                   | 4.4.18        | 4.4.18.tuxcare.1      |
| CVE-2024-47535   | MEDIUM   | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare        |
| CVE-2024-5971    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-6162    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-6762    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jetty                   | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2024-7885    | HIGH     | org.springframework.boot        | spring-boot-starter-undertow                | 2.7.18        | 2.7.18.tuxcare        |
| CVE-2024-8184    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jetty                   | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2024-9823    | MEDIUM   | org.springframework.boot        | spring-boot-starter-jetty                   | 2.7.18        | 2.7.18.tuxcare.1      |
| CVE-2025-22228   | CRITICAL | org.springframework.security    | spring-security-acl                         | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-aspects                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-cas                         | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-config                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-core                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-crypto                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-data                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-ldap                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-messaging                   | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-client               | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-core                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-jose                 | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-oauth2-resource-server      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-openid                      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-remoting                    | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-rsocket                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-saml2-service-provider      | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-taglibs                     | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-test                        | 5.8.16        | 5.8.16.tuxcare.1      |
|                  |          | org.springframework.security    | spring-security-web                         | 5.8.16        | 5.8.16.tuxcare.1      |
| CVE-2025-24813   | CRITICAL | org.springframework.boot        | spring-boot-starter-data-rest               | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-groovy-templates        | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-hateoas                 | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-jersey                  | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-tomcat                  | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web                     | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-web-services            | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-websocket               | 2.7.18        | 2.7.18.tuxcare.5      |
| CVE-2025-24970   | HIGH     | org.springframework.boot        | spring-boot-starter-data-neo4j              | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-reactor-netty           | 2.7.18        | 2.7.18.tuxcare.5      |
|                  |          | org.springframework.boot        | spring-boot-starter-webflux                 | 2.7.18        | 2.7.18.tuxcare.5      |

</details>