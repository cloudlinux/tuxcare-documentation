# Spring<sup style="font-size: 0.5em;">®</sup>

Spring® is a trademark of Broadcom Inc. and/or its subsidiaries.

<br>

TuxCare's Endless Lifecycle Support (ELS) for Spring® provides security updates and selected bug fixes that are integral to the stable operation of applications running on these versions of Spring® ecosystem components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

TuxCare's ELS for Spring® service provides solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring® applications.

:::tip
ELS for Spring® also patches transitive dependencies at no extra cost, including Hibernate, Netty, Jackson Databind, SnakeYAML, Apache Kafka, Apache Velocity, and more. See the [full list of supported Java libraries](/els-for-libraries/java-libraries/).
:::

## Supported Modules and Versions

<TableTabs label="Choose group: " :labels="{
  Framework: 'Spring® Framework',
  AMQP: 'Spring® AMQP',
  Batch: 'Spring® Batch',
  Boot: 'Spring® Boot',
  Cloud: 'Spring® Cloud',
  Data: 'Spring® Data',
  Security: 'Spring® Security',
  Security_OAuth: 'Spring® Security OAuth',
  Web_Services: 'Spring® Web Services',
  Integration: 'Spring® Integration',
  HATEOAS: 'Spring® HATEOAS',
  LDAP: 'Spring® LDAP',
  GraphQL: 'Spring® GraphQL',
  Retry: 'Spring® Retry',
  Plugin: 'Spring® Plugin',
  Web_Flow: 'Spring® Web Flow',
  Pulsar: 'Spring® for Apache Pulsar',
  Authorization_Server: 'Spring® Authorization Server',
  Kafka: 'Spring® for Apache Kafka',
  AI: 'Spring® AI',
  REST_Docs: 'Spring® REST Docs',
  Session: 'Spring® Session',
  Shell: 'Spring® Shell',
  Social_Twitter: 'Spring® Social Twitter',
  Tuple: 'Spring® Tuple'
}">

<template #Framework>

| Module | Version |
|---|---|
| spring-core | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-jcl | 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-context | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-beans | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-expression | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-jms | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-messaging | 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-aop | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-context-support | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-tx | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-orm | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-aspects | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-r2dbc | 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-jdbc | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-web | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-webmvc | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-oxm | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-webflux | 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-websocket | 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-framework-bom | 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-context-indexer | 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-instrument | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-test | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE, 5.0.0.RELEASE, 5.0.5.RELEASE, 5.0.13.RELEASE, 5.0.19.RELEASE, 5.1.3.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.1.7.RELEASE, 5.1.8.RELEASE, 5.1.9.RELEASE, 5.1.13.RELEASE, 5.1.18.RELEASE, 5.1.19.RELEASE, 5.1.20.RELEASE, 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39, 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-core-test | 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.0.23, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
| spring-webmvc-portlet | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE |
| spring-instrument-tomcat | 3.0.5.RELEASE, 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.2.9.RELEASE, 4.3.4.RELEASE, 4.3.5.RELEASE, 4.3.9.RELEASE, 4.3.16.RELEASE, 4.3.20.RELEASE, 4.3.21.RELEASE, 4.3.25.RELEASE, 4.3.26.RELEASE, 4.3.27.RELEASE, 4.3.30.RELEASE |
| spring | 5.2.0.RELEASE, 5.2.7.RELEASE, 5.2.8.RELEASE, 5.2.9.RELEASE, 5.2.10.RELEASE, 5.2.11.RELEASE, 5.2.13.RELEASE, 5.2.15.RELEASE, 5.2.17.RELEASE, 5.2.25.RELEASE, 5.3.3, 5.3.5, 5.3.6, 5.3.7, 5.3.9, 5.3.13, 5.3.15, 5.3.18, 5.3.19, 5.3.20, 5.3.21, 5.3.23, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.32, 5.3.33, 5.3.37, 5.3.39 |
| framework-api | 6.1.4, 6.1.7, 6.2.13 |
| framework-docs | 6.0.0, 6.0.11, 6.0.12, 6.0.13, 6.0.14, 6.0.15, 6.0.16, 6.1.4, 6.1.7, 6.1.13, 6.1.14, 6.1.15, 6.1.16, 6.1.18, 6.1.19, 6.1.20, 6.1.21, 6.2.1, 6.2.3, 6.2.5, 6.2.7, 6.2.12, 6.2.13, 6.2.14, 6.2.15, 6.2.19 |
</template>

<template #AMQP>

| Module | Version |
|---|---|
| spring-amqp | 1.7.14.RELEASE, 2.1.4.RELEASE, 2.1.5.RELEASE, 2.1.8.RELEASE, 2.1.17.RELEASE, 2.2.12.RELEASE, 2.3.6, 2.3.7, 2.3.10, 2.3.16, 2.4.4, 2.4.12, 2.4.16, 2.4.17, 3.0.10, 3.1.5, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
| spring-rabbit | 1.7.14.RELEASE, 2.1.4.RELEASE, 2.1.5.RELEASE, 2.1.8.RELEASE, 2.1.17.RELEASE, 2.2.12.RELEASE, 2.3.6, 2.3.7, 2.3.10, 2.3.16, 2.4.4, 2.4.12, 2.4.16, 2.4.17, 3.0.10, 3.1.5, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
| spring-rabbit-junit | 1.7.14.RELEASE, 2.1.4.RELEASE, 2.1.5.RELEASE, 2.1.8.RELEASE, 2.1.17.RELEASE, 2.2.12.RELEASE, 2.3.6, 2.3.7, 2.3.10, 2.3.16, 2.4.4, 2.4.12, 2.4.16, 2.4.17, 3.0.10, 3.1.5, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
| spring-rabbit-test | 1.7.14.RELEASE, 2.1.4.RELEASE, 2.1.5.RELEASE, 2.1.8.RELEASE, 2.1.17.RELEASE, 2.2.12.RELEASE, 2.3.6, 2.3.7, 2.3.10, 2.3.16, 2.4.4, 2.4.12, 2.4.16, 2.4.17, 3.0.10, 3.1.5, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
| spring-rabbit-stream | 2.4.4, 2.4.12, 2.4.16, 2.4.17, 3.0.10, 3.1.5, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
| spring-amqp-dist | 2.3.6, 2.3.16, 2.4.4, 2.4.12, 2.4.16, 2.4.17, 3.0.10, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
| spring-amqp-bom | 3.0.10, 3.1.5, 3.1.8, 3.1.11, 3.1.12, 3.2.8, 3.2.11, 3.2.12 |
</template>

<template #Batch>

| Module | Version |
|---|---|
| spring-batch-core | 3.0.10.RELEASE, 4.0.1.RELEASE, 4.1.1.RELEASE, 4.1.2.RELEASE, 4.2.4.RELEASE, 4.3.2, 4.3.3, 4.3.8, 4.3.9, 4.3.10, 5.0.4, 5.1.2, 5.1.3, 5.2.4, 5.2.6 |
| spring-batch-infrastructure | 3.0.10.RELEASE, 4.0.1.RELEASE, 4.1.1.RELEASE, 4.1.2.RELEASE, 4.2.4.RELEASE, 4.3.2, 4.3.3, 4.3.8, 4.3.9, 4.3.10, 5.0.4, 5.1.2, 5.1.3, 5.2.4, 5.2.6 |
| spring-batch-integration | 3.0.10.RELEASE, 4.0.1.RELEASE, 4.1.1.RELEASE, 4.1.2.RELEASE, 4.2.4.RELEASE, 4.3.2, 4.3.3, 4.3.8, 4.3.9, 4.3.10, 5.0.4, 5.1.2, 5.1.3, 5.2.4, 5.2.6 |
| spring-batch-test | 3.0.10.RELEASE, 4.0.1.RELEASE, 4.1.1.RELEASE, 4.1.2.RELEASE, 4.2.4.RELEASE, 4.3.2, 4.3.3, 4.3.8, 4.3.9, 4.3.10, 5.0.4, 5.1.2, 5.1.3, 5.2.4, 5.2.6 |
| spring-batch-core-tests | 4.3.3, 4.3.9 |
| spring-batch-infrastructure-tests | 4.1.2.RELEASE, 4.3.3, 4.3.8 |
| spring-batch-samples | 4.3.9 |
| spring-batch-docs | 4.0.1.RELEASE, 4.1.1.RELEASE, 4.1.2.RELEASE, 4.2.4.RELEASE, 4.3.2, 4.3.3, 4.3.8, 4.3.9 |
| spring-batch | 3.0.10.RELEASE, 4.0.1.RELEASE, 4.1.2.RELEASE, 4.2.4.RELEASE, 4.3.2, 4.3.3, 4.3.8, 4.3.9, 4.3.10, 5.0.4, 5.1.2, 5.1.3, 5.2.4, 5.2.6 |
| spring-batch-bom | 5.0.4, 5.1.2, 5.1.3, 5.2.4, 5.2.6 |
</template>

<template #Boot>

| Module | Version |
|---|---|
| spring-boot | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-actuator | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-actuator-autoconfigure | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-autoconfigure | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-amqp | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-json | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-logging | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-reactor-netty | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-rsocket | 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-tomcat | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-validation | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-web | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-webflux | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-autoconfigure-processor | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-configuration-processor | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-test | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-test-autoconfigure | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-mongodb-reactive | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-graphql | 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-cli | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-dependencies | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-devtools | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-parent | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13 |
| spring-boot-properties-migrator | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-activemq | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-actuator | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-aop | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-artemis | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-batch | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-cache | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-cassandra | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-cassandra-reactive | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-couchbase | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-couchbase-reactive | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-elasticsearch | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-jdbc | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-jpa | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-ldap | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-mongodb | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-neo4j | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-r2dbc | 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-redis | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-rest | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-freemarker | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-groovy-templates | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-hateoas | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-integration | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-jdbc | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-jersey | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-jetty | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-jooq | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-jta-atomikos | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18 |
| spring-boot-starter-log4j2 | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-mail | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-mustache | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-oauth2-client | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-oauth2-resource-server | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-parent | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-quartz | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-security | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-thymeleaf | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-undertow | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-web-services | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-websocket | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-antlib | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-buildpack-platform | 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-configuration-metadata | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-gradle-plugin | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-jarmode-layertools | 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12 |
| spring-boot-loader | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-loader-tools | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-maven-plugin | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-redis-reactive | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-test | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-data-solr | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6 |
| org.springframework.boot.gradle.plugin | 2.3.6.RELEASE, 2.4.5, 2.4.6, 2.5.15, 2.6.15, 2.7.7, 2.7.8, 2.7.9, 2.7.16, 2.7.18, 3.0.13, 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-jta-bitronix | 2.1.8.RELEASE, 2.3.6.RELEASE, 2.4.5, 2.4.6 |
| spring-boot-docker-compose | 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-docs | 2.1.8.RELEASE |
| spring-boot-jarmode-tools | 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-loader-classic | 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-oauth2-authorization-server | 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-pulsar | 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-starter-pulsar-reactive | 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| spring-boot-testcontainers | 3.1.8, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
| org.springframework.boot.aot.gradle.plugin | 3.0.13, 3.2.12, 3.3.13, 3.4.13, 3.5.16 |
</template>

<template #Cloud>

| Module | Version |
|---|---|
| spring-cloud-build | 3.1.6, 3.1.9, 4.2.4, 4.3.4 |
| spring-cloud-build-dependencies | 3.1.6, 3.1.9, 4.2.4, 4.3.4 |
| spring-cloud-build-tools | 3.1.6, 3.1.9, 4.2.4, 4.3.4 |
| spring-cloud-build-docs | 3.1.6, 3.1.9, 4.2.4, 4.3.4 |
| spring-cloud-dependencies-parent | 3.1.9, 4.2.4, 4.3.4 |
| spring-cloud-gateway | 3.1.9 |
| spring-cloud-gateway-dependencies | 3.1.9 |
| spring-cloud-gateway-server | 3.1.9 |
| spring-cloud-gateway-webflux | 3.1.9 |
| spring-cloud-gateway-mvc | 3.1.9 |
| spring-cloud-gateway-docs | 3.1.9 |
| spring-cloud-starter-gateway | 3.1.9 |
| spring-cloud-spring-service-connector | 1.2.9.RELEASE, 2.0.6.RELEASE, 2.0.7.RELEASE |
| spring-cloud-commons | 4.2.4, 4.3.3 |
| spring-cloud-context | 4.2.4, 4.3.3 |
| spring-cloud-commons-dependencies | 4.2.4, 4.3.3 |
| spring-cloud-commons-parent | 4.2.4, 4.3.3 |
| spring-cloud-test-support | 4.2.4, 4.3.3 |
| spring-cloud-loadbalancer | 4.2.4, 4.3.3 |
| spring-cloud-starter | 4.2.4, 4.3.3 |
| spring-cloud-starter-loadbalancer | 4.2.4, 4.3.3 |
| spring-cloud-commons-docs | 4.2.4, 4.3.3 |
| spring-cloud-starter-bootstrap | 4.2.4, 4.3.3 |
| spring-cloud-context-integration-tests | 4.2.4, 4.3.3 |
| spring-cloud-context-webflux-integration-tests | 4.2.4, 4.3.3 |
| spring-cloud-config-client | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-config-dependencies | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-config | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-config-server | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-config-monitor | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-starter-config | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-config-docs | 3.1.6, 4.2.4, 4.3.4 |
| spring-cloud-function-context | 4.2.4, 4.3.4 |
| spring-cloud-function-core | 4.2.4, 4.3.4 |
| spring-cloud-function-rsocket | 4.2.4, 4.3.4 |
| spring-cloud-function-adapter-aws | 4.2.4, 4.3.4 |
| spring-cloud-function-web | 4.2.4, 4.3.4 |
| spring-cloud-function-adapter-azure | 4.2.4, 4.3.4 |
| spring-cloud-function-adapter-gcp | 4.2.4, 4.3.4 |
| spring-cloud-function-adapter-parent | 4.2.4, 4.3.4 |
| spring-cloud-function-dependencies | 4.2.4, 4.3.4 |
| spring-cloud-function-deployer | 4.2.4, 4.3.4 |
| spring-cloud-function-docs | 4.2.4, 4.3.4 |
| spring-cloud-function-grpc | 4.2.4, 4.3.4 |
| spring-cloud-function-grpc-cloudevent-ext | 4.2.4, 4.3.4 |
| spring-cloud-function-kotlin | 4.2.4, 4.3.4 |
| spring-cloud-function-parent | 4.2.4, 4.3.4 |
| spring-cloud-starter-function-web | 4.2.4, 4.3.4 |
| spring-cloud-starter-function-webflux | 4.2.4, 4.3.4 |
| spring-cloud-function-integration | 4.2.4, 4.3.4 |
| spring-cloud-function-serverless-web | 4.2.4, 4.3.4 |
| spring-cloud-function-adapter-azure-web | 4.2.4, 4.3.4 |
| spring-cloud-stream | 4.2.3, 4.3.3 |
| spring-cloud-stream-parent | 4.2.3, 4.3.3 |
| spring-cloud-stream-test-support | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-rabbit-core | 4.2.3, 4.3.3 |
| spring-cloud-starter-stream-rabbit | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-rabbit | 4.2.3, 4.3.3 |
| spring-cloud-stream-core | 4.2.3, 4.3.3 |
| spring-cloud-stream-binders | 4.2.3, 4.3.3 |
| spring-cloud-stream-starter-build | 4.2.3, 4.3.3 |
| spring-cloud-stream-docs | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-kafka-parent | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-rabbit-parent | 4.2.3, 4.3.3 |
| spring-cloud-stream-dependencies | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-kafka | 4.2.3, 4.3.3 |
| spring-cloud-starter-stream-kafka | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-kafka-core | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-kafka-streams | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-rabbit-test-support | 4.2.3, 4.3.3 |
| spring-cloud-stream-test-binder | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-pulsar | 4.2.3, 4.3.3 |
| spring-cloud-stream-schema-registry-core | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-kafka-reactive | 4.2.3, 4.3.3 |
| spring-cloud-stream-schema-registry-client | 4.2.3, 4.3.3 |
| spring-cloud-stream-schema-registry-server | 4.2.3, 4.3.3 |
| spring-cloud-stream-binder-pulsar-parent | 4.2.3, 4.3.3 |
| spring-cloud-stream-schema-registry | 4.2.3, 4.3.3 |
| spring-cloud-dependencies | 2024.0.3, 2025.0.3 |
| spring-cloud-starter-build | 2024.0.3, 2025.0.3 |
| spring-cloud-starter-parent | 2024.0.3, 2025.0.3 |
| spring-cloud-starter-docs | 2024.0.3, 2025.0.3 |
</template>

<template #Data>

| Module | Version |
|---|---|
| spring-data-bom | 2020.0.8, 2020.0.9, 2021.0.11, 2021.0.12, 2021.1.10, 2021.2.14, 2021.2.16, 2021.2.18, 2022.0.11, 2022.0.12, 2023.0.8, 2023.1.3, 2023.1.11, 2023.1.12, 2024.0.12, 2024.0.13, 2024.1.3, 2024.1.11, 2024.1.12, 2024.1.13, 2025.0.12, 2025.0.13 |
| spring-data-build | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.11, 2.5.12, 2.6.10, 2.7.14, 2.7.16, 2.7.18, 3.0.11, 3.0.12, 3.1.8, 3.2.3, 3.2.11, 3.2.12, 3.3.12, 3.3.13, 3.4.3, 3.4.11, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-build-resources | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.11, 2.5.12, 2.6.10, 2.7.14, 2.7.16, 2.7.18, 3.0.11, 3.0.12, 3.1.8, 3.2.3, 3.2.11, 3.2.12, 3.3.12, 3.3.13, 3.4.3, 3.4.11, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-parent | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.11, 2.5.12, 2.6.10, 2.7.14, 2.7.16, 2.7.18, 3.0.11, 3.0.12, 3.1.8, 3.2.3, 3.2.11, 3.2.12, 3.3.12, 3.3.13, 3.4.3, 3.4.11, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-commons | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.11, 2.5.12, 2.6.10, 2.7.14, 2.7.16, 2.7.18, 3.0.11, 3.0.12, 3.1.8, 3.2.3, 3.2.11, 3.2.12, 3.3.12, 3.3.13, 3.4.3, 3.4.11, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-jpa | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.12, 2.6.10, 2.7.16, 2.7.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-jpa-parent | 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-jpa-distribution | 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-envers | 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.12, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-keyvalue | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.11, 2.5.12, 2.6.10, 2.7.16, 2.7.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.12, 3.5.13 |
| spring-data-ldap | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.12, 2.6.10, 2.7.16, 2.7.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
| spring-data-redis | 2.1.10.RELEASE, 2.3.5.RELEASE, 2.4.8, 2.4.9, 2.5.11, 2.5.12, 2.6.10, 2.7.16, 2.7.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
| spring-data-cassandra-parent | 2.1.10.RELEASE, 3.0.5.RELEASE, 3.1.8, 3.1.9, 3.2.12, 3.3.10, 3.4.16, 3.4.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-cassandra | 2.1.10.RELEASE, 3.0.5.RELEASE, 3.1.8, 3.1.9, 3.2.12, 3.3.10, 3.4.16, 3.4.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-cassandra-distribution | 2.1.10.RELEASE, 3.0.5.RELEASE, 3.1.8, 3.1.9, 3.2.12, 3.3.10, 3.4.16, 3.4.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-mongodb | 2.1.10.RELEASE, 3.0.5.RELEASE, 3.1.8, 3.1.9, 3.2.11, 3.2.12, 3.3.10, 3.4.16, 3.4.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.12, 4.5.13 |
| spring-data-mongodb-cross-store | 2.1.10.RELEASE |
| spring-data-mongodb-distribution | 2.1.10.RELEASE, 3.0.5.RELEASE, 3.1.8, 3.1.9, 3.2.11, 3.2.12, 3.3.10, 3.4.16, 3.4.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.12, 4.5.13 |
| spring-data-mongodb-parent | 2.1.10.RELEASE, 3.0.5.RELEASE, 3.1.8, 3.1.9, 3.2.11, 3.2.12, 3.3.10, 3.4.16, 3.4.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.12, 4.5.13 |
| spring-data-rest-webmvc | 3.1.10.RELEASE, 3.3.5.RELEASE, 3.4.8, 3.4.9, 3.5.12, 3.6.10, 3.7.16, 3.7.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-rest-core | 3.1.10.RELEASE, 3.3.5.RELEASE, 3.4.8, 3.4.9, 3.5.12, 3.6.10, 3.7.16, 3.7.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-rest-distribution | 3.1.10.RELEASE, 3.3.5.RELEASE, 3.4.8, 3.4.9, 3.5.12, 3.6.10, 3.7.16, 3.7.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-rest-hal-browser | 3.1.10.RELEASE, 3.3.5.RELEASE |
| spring-data-rest-hal-explorer | 3.3.5.RELEASE, 3.4.8, 3.4.9, 3.5.12, 3.6.10, 3.7.16, 3.7.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-rest-parent | 3.1.10.RELEASE, 3.3.5.RELEASE, 3.4.8, 3.4.9, 3.5.12, 3.6.10, 3.7.16, 3.7.18, 4.0.12, 4.1.8, 4.2.12, 4.3.12, 4.3.13, 4.4.13, 4.5.13 |
| spring-data-couchbase | 3.1.10.RELEASE, 4.0.5.RELEASE, 4.1.8, 4.1.9, 4.2.12, 4.3.10, 4.4.16, 4.4.18, 5.0.12, 5.1.8, 5.2.12, 5.3.12, 5.3.13, 5.4.13, 5.5.13 |
| spring-data-elasticsearch | 2.1.23.RELEASE, 3.1.10.RELEASE, 4.0.5.RELEASE, 4.1.8, 4.1.9, 4.2.12, 4.3.10, 4.4.16, 4.4.18, 5.0.12, 5.1.8, 5.2.12, 5.3.12, 5.3.13, 5.4.13, 5.5.13 |
| spring-data-geode | 2.1.10.RELEASE, 2.5.11, 2.5.12 |
| spring-data-neo4j | 5.1.10.RELEASE, 5.3.5.RELEASE, 6.0.8, 6.0.9, 6.1.12, 6.2.10, 6.3.16, 6.3.18, 7.0.12, 7.1.8, 7.2.12, 7.3.12, 7.3.13, 7.4.13, 7.5.12, 7.5.13 |
| spring-data-solr | 4.0.10.RELEASE, 4.3.8, 4.3.9 |
| spring-data-r2dbc | 1.1.5.RELEASE, 1.2.8, 1.2.9, 1.3.12, 1.4.10, 1.5.16, 1.5.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
| spring-data-relational | 2.0.5.RELEASE, 2.1.8, 2.1.9, 2.2.11, 2.2.12, 2.3.10, 2.4.16, 2.4.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
| spring-data-relational-parent | 2.0.5.RELEASE, 2.1.8, 2.1.9, 2.2.11, 2.2.12, 2.3.10, 2.4.16, 2.4.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
| spring-data-jdbc | 1.0.10.RELEASE, 2.0.5.RELEASE, 2.1.8, 2.1.9, 2.2.11, 2.2.12, 2.3.10, 2.4.16, 2.4.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
| spring-data-jdbc-distribution | 2.0.5.RELEASE, 2.1.8, 2.1.9, 2.2.11, 2.2.12, 2.3.10, 2.4.16, 2.4.18, 3.0.12, 3.1.8, 3.2.12, 3.3.12, 3.3.13, 3.4.13, 3.5.13 |
</template>

<template #Security>

| Module | Version |
|---|---|
| spring-security | 5.1.5.RELEASE, 5.5.8, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-bom | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-core | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-config | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-web | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-crypto | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-data | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-ldap | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-messaging | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-oauth2-client | 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-oauth2-core | 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-oauth2-jose | 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-oauth2-resource-server | 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-rsocket | 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-saml2-service-provider | 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-test | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-acl | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-aspects | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-cas | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-remoting | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16 |
| spring-security-taglibs | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.0.7, 6.0.8, 6.1.5, 6.1.6, 6.2.2, 6.2.7, 6.2.8, 6.3.9, 6.3.10, 6.4.3, 6.4.13, 6.5.11 |
| spring-security-openid | 3.2.8.RELEASE, 4.2.12.RELEASE, 4.2.20.RELEASE, 5.1.4.RELEASE, 5.1.5.RELEASE, 5.1.6.RELEASE, 5.5.8, 5.6.3, 5.6.5, 5.6.7, 5.6.9, 5.6.10, 5.7.7, 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16 |
| spring-security-rsa | 1.0.5.RELEASE, 1.0.7.RELEASE, 1.0.9.RELEASE, 1.0.10.RELEASE, 1.0.11.RELEASE, 1.0.12.RELEASE, 1.0.13.RELEASE |
| acegi-security | 1.0.7 |
| acegi-security-parent | 1.0.7 |
| acegi-security-tiger | 1.0.7 |
| acegi-security-adapters | 1.0.7 |
| acegi-security-cas | 1.0.7 |
| acegi-security-catalina | 1.0.7 |
| acegi-security-jetty | 1.0.7 |
| acegi-security-resin | 1.0.7 |
| acegi-security-jboss | 1.0.7 |
| acegi-security-samples | 1.0.7 |
| acegi-security-samples-contacts | 1.0.7 |
| acegi-security-samples-tutorial | 1.0.7 |
</template>

<template #Security_OAuth>

| Module | Version |
|---|---|
| spring-security-jwt | 1.1.1.RELEASE |
</template>

<template #Web_Services>

| Module | Version |
|---|---|
| spring-ws-core | 2.4.5.RELEASE, 3.0.7.RELEASE, 3.0.10.RELEASE, 3.1.4, 3.1.5, 3.1.6, 3.1.7, 3.1.8, 4.0.8, 4.0.10, 4.0.11, 4.0.14, 4.0.15, 4.0.16, 4.0.17, 4.1.4 |
| spring-xml | 2.4.5.RELEASE, 3.0.7.RELEASE, 3.0.10.RELEASE, 3.1.4, 3.1.5, 3.1.6, 3.1.7, 3.1.8, 4.0.8, 4.0.10, 4.0.11, 4.0.14, 4.0.15, 4.0.16, 4.0.17, 4.1.4 |
| spring-ws-security | 2.4.5.RELEASE, 3.0.7.RELEASE, 3.0.10.RELEASE, 3.1.4, 3.1.5, 3.1.6, 3.1.7, 3.1.8, 4.0.8, 4.0.10, 4.0.11, 4.0.14, 4.0.15, 4.0.16, 4.0.17, 4.1.4 |
| spring-ws-test | 2.4.5.RELEASE, 3.0.7.RELEASE, 3.0.10.RELEASE, 3.1.4, 3.1.5, 3.1.6, 3.1.7, 3.1.8, 4.0.8, 4.0.10, 4.0.11, 4.0.14, 4.0.15, 4.0.16, 4.0.17, 4.1.4 |
| spring-ws-support | 2.4.5.RELEASE, 3.0.7.RELEASE, 3.0.10.RELEASE, 3.1.4, 3.1.5, 3.1.6, 3.1.7, 3.1.8, 4.0.8, 4.0.10, 4.0.11, 4.0.14, 4.0.15, 4.0.16, 4.0.17, 4.1.4 |
| spring-ws | 2.4.5.RELEASE, 3.0.7.RELEASE, 3.0.10.RELEASE, 3.1.4, 3.1.5, 3.1.6, 3.1.7, 3.1.8, 4.0.8, 4.0.10, 4.0.11, 4.0.14, 4.0.15, 4.0.17 |
</template>

<template #Integration>

| Module | Version |
|---|---|
| spring-integration | 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-amqp | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-bom | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-core | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-event | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-feed | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-file | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-ftp | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-gemfire | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20 |
| spring-integration-groovy | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-http | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-ip | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-jdbc | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-jms | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-jmx | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-jpa | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-kafka | 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-mail | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-mongodb | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-mqtt | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-r2dbc | 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-redis | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-rmi | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20 |
| spring-integration-rsocket | 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-scripting | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-security | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11 |
| spring-integration-sftp | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-stomp | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-stream | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-syslog | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-test | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-test-support | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-webflux | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-websocket | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-ws | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-xml | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-xmpp | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-zeromq | 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
| spring-integration-zookeeper | 5.1.7.RELEASE, 5.1.13.RELEASE, 5.3.2.RELEASE, 5.4.6, 5.5.12, 5.5.16, 5.5.19, 5.5.20, 6.0.9, 6.1.5, 6.2.5, 6.2.11, 6.3.10, 6.3.11, 6.4.9, 6.4.10, 6.5.9, 6.5.10 |
</template>

<template #HATEOAS>

| Module | Version |
|---|---|
| spring-hateoas | 0.23.0.RELEASE, 0.25.2.RELEASE, 1.1.1.RELEASE, 1.1.2.RELEASE, 1.1.5.RELEASE, 1.2.5, 1.2.6, 1.2.8, 1.2.11, 1.3.7, 1.4.3, 1.4.4, 1.4.5, 1.5.1, 1.5.2, 1.5.3, 1.5.5, 1.5.6, 2.0.7, 2.1.3, 2.2.5, 2.3.4, 2.4.1, 2.5.3 |
</template>

<template #LDAP>

| Module | Version |
|---|---|
| spring-ldap-core | 2.3.1.RELEASE, 2.3.2.RELEASE, 2.3.3.RELEASE, 2.3.4.RELEASE, 2.3.6.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16, 3.3.8 |
| spring-ldap-odm | 2.3.1.RELEASE, 2.3.2.RELEASE, 2.3.4.RELEASE, 2.3.6.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16, 3.3.8 |
| spring-ldap-test | 2.3.1.RELEASE, 2.3.2.RELEASE, 2.3.4.RELEASE, 2.3.6.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16, 3.3.8 |
| spring-ldap-sandbox | 2.3.1.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16, 3.3.8 |
| spring-ldap-ldif-core | 2.3.1.RELEASE, 2.3.2.RELEASE, 2.3.4.RELEASE, 2.3.6.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16, 3.3.8 |
| spring-ldap-ldif-batch | 2.3.1.RELEASE, 2.3.2.RELEASE, 2.3.4.RELEASE, 2.3.6.RELEASE |
| spring-ldap-core-tiger | 2.3.1.RELEASE, 2.3.2.RELEASE, 2.3.4.RELEASE, 2.3.6.RELEASE, 2.4.1, 2.4.2, 2.4.4 |
| spring-ldap-odm-sample | 2.3.1.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16 |
| spring-ldap-plain-sample | 2.3.1.RELEASE, 2.4.1, 2.4.2, 2.4.4, 3.0.6, 3.2.8, 3.2.12, 3.2.16 |
</template>

<template #GraphQL>

| Module | Version |
|---|---|
| spring-graphql | 1.0.6, 1.1.7, 1.2.4, 1.2.9, 1.3.5, 1.3.7, 1.4.6 |
| spring-graphql-docs | 1.0.6, 1.3.5, 1.3.7, 1.4.6 |
| spring-graphql-test | 1.0.6, 1.1.7, 1.2.4, 1.2.9, 1.3.7, 1.4.6 |
</template>

<template #Retry>

| Module | Version |
|---|---|
| spring-retry | 1.0.2.RELEASE, 1.1.5.RELEASE, 1.2.1.RELEASE, 1.2.2.RELEASE, 1.2.4.RELEASE, 1.2.5.RELEASE, 1.3.1, 1.3.3, 1.3.4, 2.0.4, 2.0.6, 2.0.10, 2.0.11, 2.0.12 |
</template>

<template #Plugin>

| Module | Version |
|---|---|
| spring-plugin | 2.0.0.RELEASE, 3.0.0 |
| spring-plugin-core | 2.0.0.RELEASE, 3.0.0 |
</template>

<template #Web_Flow>

| Module | Version |
|---|---|
| spring-binding | 2.3.1.RELEASE, 2.3.3.RELEASE, 3.0.2 |
| spring-js | 2.3.1.RELEASE, 2.3.3.RELEASE |
| spring-js-resources | 2.3.1.RELEASE, 2.3.3.RELEASE, 3.0.2 |
| spring-webflow | 2.3.1.RELEASE, 2.3.3.RELEASE, 3.0.2 |
| spring-faces | 2.3.1.RELEASE, 2.3.3.RELEASE, 3.0.2 |
</template>

<template #Pulsar>

| Module | Version |
|---|---|
| spring-pulsar | 1.0.12, 1.1.12, 1.1.13, 1.2.12, 1.2.13, 1.2.18 |
| spring-pulsar-reactive | 1.0.12, 1.1.12, 1.1.13, 1.2.12, 1.2.13, 1.2.18 |
| spring-pulsar-cache-provider | 1.0.12, 1.1.12, 1.1.13, 1.2.12, 1.2.13, 1.2.18 |
| spring-pulsar-cache-provider-caffeine | 1.0.12, 1.1.12, 1.1.13, 1.2.12, 1.2.13, 1.2.18 |
| spring-pulsar-test | 1.1.12, 1.1.13, 1.2.12, 1.2.13, 1.2.18 |
| spring-pulsar-docs | 1.0.12, 1.1.13 |
| spring-pulsar-bom | 1.0.12, 1.1.12, 1.1.13, 1.2.12, 1.2.13, 1.2.18 |
</template>

<template #Authorization_Server>

| Module | Version |
|---|---|
| spring-security-oauth2-authorization-server | 1.1.4, 1.2.7, 1.3.6, 1.3.7, 1.4.8, 1.5.8 |
</template>

<template #Kafka>

| Module | Version |
|---|---|
| spring-kafka | 2.7.14, 2.8.11, 2.9.13, 3.0.13, 3.1.5, 3.1.10, 3.2.10, 3.3.11, 3.3.16 |
| spring-kafka-test | 2.7.14, 2.8.11, 2.9.13, 3.0.13, 3.1.5, 3.1.10, 3.2.10, 3.3.11, 3.3.16 |
| spring-kafka-dist | 2.8.11, 2.9.13, 3.0.13, 3.1.10, 3.2.10, 3.3.11, 3.3.16 |
| spring-kafka-bom | 3.0.13, 3.1.5, 3.1.10, 3.2.10, 3.3.11, 3.3.16 |
</template>

<template #AI>

| Module | Version |
|---|---|
| all `spring-ai-*` modules | 1.0.9, 1.1.8 |
</template>

<template #REST_Docs>

| Module | Version |
|---|---|
| spring-restdocs-restassured | 2.0.1.RELEASE, 2.0.2.RELEASE, 2.0.3.RELEASE, 2.0.5.RELEASE |
| spring-restdocs-core | 2.0.1.RELEASE, 2.0.2.RELEASE, 2.0.3.RELEASE, 2.0.5.RELEASE |
| spring-restdocs-asciidoctor | 2.0.1.RELEASE, 2.0.2.RELEASE, 2.0.3.RELEASE, 2.0.5.RELEASE |
| spring-restdocs-mockmvc | 2.0.1.RELEASE, 2.0.2.RELEASE, 2.0.3.RELEASE, 2.0.5.RELEASE |
| spring-restdocs-webtestclient | 2.0.1.RELEASE, 2.0.2.RELEASE, 2.0.3.RELEASE, 2.0.5.RELEASE |
| docs | 2.0.3.RELEASE |
</template>

<template #Session>

| Module | Version |
|---|---|
| spring-session-bom | 3.1.4 |
| spring-session-core | 3.1.4 |
| spring-session-data-mongodb | 3.1.4 |
| spring-session-data-redis | 3.1.4 |
| spring-session-hazelcast | 3.1.4 |
| spring-session-jdbc | 3.1.4 |
</template>

<template #Shell>

| Module | Version |
|---|---|
| spring-shell | 1.2.0.RELEASE |
</template>

<template #Social_Twitter>

| Module | Version |
|---|---|
| spring-social-twitter | 1.1.2.RELEASE |
</template>

<template #Tuple>

| Module | Version |
|---|---|
| spring-tuple | 1.0.0.RELEASE |
| spring-integration-tuple | 1.0.0.RELEASE |
| spring-tuple-parent | 1.0.0.RELEASE |
| spring-batch-tuple | 1.0.0.RELEASE |
</template>

</TableTabs>

## Installation

<ELSPrerequisites>

* **Maven** or **Gradle** build tool installed
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

:::tip
Optionally, you can consume ELS for Spring® through your own repository manager instead of connecting to TuxCare directly. See [Consuming ELS through your own repository manager](/els-for-libraries/managing-els-repository/#consuming-els-through-your-own-repository-manager).
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
   For Maven, you may choose any valid `<id>` value instead of `tuxcare-registry`, but use the same value in both `settings.xml` and `pom.xml`.
   :::

   <CodeTabs :tabs="[
     { title: 'Maven (settings.xml)', content: mavencreds },
     { title: 'Gradle (gradle.properties)', content: gradlecreds }
   ]" />

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

3. **Add the TuxCare repository**

   Add the TuxCare Spring® repository and plugins to your build configuration.

   <CodeTabs :tabs="[
     { title: 'Maven (pom.xml)', content: mavenrepo },
     { title: 'Gradle (build.gradle)', content: gradlerepo }
   ]" />

   * To fully switch from the official Spring® repository, replace it with the TuxCare repository.
   * To keep both, add TuxCare after the official one.

   :::tip
   Example **[Maven](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven)** and **[Gradle](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle)** projects are available on GitHub. Before running the examples, set the required environment variables.
   :::

4. **Update dependencies**

   Replace Spring® build dependencies with TuxCare-maintained versions (set the TuxCare release as the parent or BOM as needed). You can find artifact versions on [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) — sign in with your TuxCare credentials.

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

   The build tool identifies and resolves dependencies from the TuxCare ELS for Spring® repository.

</ELSSteps>


## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Spring) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Spring) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/technologies/?q=Spring&ecosystem=java) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [Source code](/els-for-libraries/managing-els-repository/#javaSources) — Access source JARs in Nexus
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (security.tuxcare.com)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#java) — Update an installed package to a newer TuxCare release
</WhatsNext>

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
`tuxcare_registry_url=https://nexus.repo.tuxcare.com/repository/els_java/
tuxcare_registry_user=USERNAME
tuxcare_registry_password=PASSWORD`

const mavenrepo =
`<repositories>
    <repository>
        <id>tuxcare-registry</id>
        <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
    </repository>
</repositories>

<pluginRepositories>
  <pluginRepository>
    <id>tuxcare-registry</id>
    <url>https://nexus.repo.tuxcare.com/repository/els_java/</url>
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
