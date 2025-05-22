# Apache Tomcat

TuxCare's Endless Lifecycle Support (ELS) for Apache Tomcat provides security patches, and selected bug fixes, that are integral to the stable operation of applications running on these versions of Apache Tomcat core components such as Coyote, Catalina, Jasper etc.. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).
Our ELS for Apache Tomcat service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Apache Tomcat applications.

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

* **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
* **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
* **Low-severity CVEs:** Patches provided within 90 days
* TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Apache Tomcat scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Apache Tomcat offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

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

TuxCare provides technical support according to the [support policy](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

## Connection to ELS for Apache Tomcat Repository

## Overview

This guide outlines the steps needed to integrate the TuxCare ELS for Apache Tomcat repository into your Java application. The repository provides trusted Java libraries that can be easily integrated into your Maven as well as Gradle project.

## Steps

## Step 1: Get user credentials

You need username and password in order to use TuxCare ELS Apache Tomcat repository. Anonymous access is disabled. To receive username and password please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Create or Modify Your Build Tool Settings

**Maven**

* If you are using Maven as your build automation tool, you will need to make changes in your `${MAVEN_HOME}/settings.xml` file. If the file does not already exist in your Maven home directory (`${MAVEN_HOME}`), you should create one. Open the `settings.xml` file with a text editor and include the following configuration:

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

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials-1).

* You may choose an arbitrary allowed value instead of `repository-id` and use the same value in the following snippet from your `pom.xml` file:

```text
<repositories>
    <repository>
        <id>repository-id</id>
        <url>https://nexus.repo.tuxcare.com/repository/els_tomcat/</url>
    </repository>
</repositories>
```

* An example of maven project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven). Do not forget to set the environment variables.

**Gradle**

* If you are using Gradle as your build automation tool, make sure to include the following configuration in your project setup:

```text
repositories {
  maven {
    url = uri("https://nexus.repo.tuxcare.com/repository/els_tomcat/")
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

Here `your-username` and `your-password` are your credentials mentioned in the [Step 1](#step-1-get-user-credentials-1).

* An example of gradle project you can find [here](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle). Do not forget to set the environment variables.

## Verification

To confirm that the repository has been correctly established, include any library from the repository into your project and then run a build. The build tool you're using should be able to identify and resolve dependencies from the TuxCare ELS for Apache Tomcat repository.

## Conclusion

You've successfully integrated the TuxCare ELS for Apache Tomcat repository into your project. You can now benefit from the secure and vetted Apache Tomcat libraries it provides.

## Resolved CVEs in ELS for Apache Tomcat

| CVE Name         | Severity | Group                           | Name                                        | Version       | Fixed Version         |
| ---------------- | -------- | ------------------------------- | ------------------------------------------- | ------------- | --------------------- |
|     |      |             |                                     |           |           |
|                  |          |     |     |       |         |
