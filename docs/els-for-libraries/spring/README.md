# Spring<sup style="font-size: 0.5em;">®</sup>

Spring® is a trademark of Broadcom Inc. and/or its subsidiaries.

<br>

TuxCare's Endless Lifecycle Support (ELS) for Spring® provides security updates, system enhancement patches, and selected bug fixes that are integral to the stable operation of applications running on these versions of Spring® ecosystem components. These components have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS for Spring® service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their legacy Spring® applications.

:::tip
ELS for Spring® also patches transitive dependencies at no extra cost, including Hibernate, Netty, Jackson Databind, SnakeYAML, Apache Kafka, Apache Velocity, and more. See the [full list of supported Java libraries](/els-for-libraries/java-libraries/).
:::

### Supported Modules and Versions

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
  Authorization_Server: 'Spring® Authorization Server'
}">

<template #Framework>

| Module | Version |
|---|---|
| spring-core | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.2.13.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.37, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-jcl | 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-context | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.2.13.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.37, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-beans | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.1.7.RELEASE, 4.1.9.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.2.13.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.37, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-expression | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-jms | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-messaging | 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-aop | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-context-support | 3.1.1.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-tx | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-orm | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-aspects | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-r2dbc | 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-jdbc | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-web | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.2.13.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.37, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-webmvc | 3.1.1.RELEASE, 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-oxm | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-webflux | 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-websocket | 4.0.0.RELEASE, 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-framework-bom | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.21 |
| spring-context-indexer | 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-instrument | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-test | 4.3.30.RELEASE, 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31, 5.3.39, 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-core-test | 6.0.16, 6.0.23, 6.1.20, 6.1.21 |
| spring-webmvc-portlet | 4.3.30.RELEASE |
| spring-instrument-tomcat | 4.3.30.RELEASE |
| spring | 5.2.0.RELEASE, 5.3.7, 5.3.24, 5.3.25, 5.3.27, 5.3.29, 5.3.30, 5.3.31 |
| framework-docs | 6.0.16, 6.1.21 |
</template>

<template #AMQP>

| Module | Version |
|---|---|
| spring-amqp | 2.4.17 |
| spring-rabbit | 2.4.17 |
| spring-rabbit-junit | 2.4.17 |
| spring-rabbit-test | 2.4.17 |
| spring-rabbit-stream | 2.4.17 |
| spring-amqp-dist | 2.4.17 |
</template>

<template #Batch>

| Module | Version |
|---|---|
| spring-batch-core | 4.3.10 |
| spring-batch-infrastructure | 4.3.10 |
| spring-batch-integration | 4.3.10 |
| spring-batch-test | 4.3.10 |
| spring-batch-core-tests | 4.3.10 |
| spring-batch-infrastructure-tests | 4.3.10 |
| spring-batch-samples | 4.3.10 |
| spring-batch-docs | 4.3.10 |
</template>

<template #Boot>

| Module | Version |
|---|---|
| spring-boot | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-actuator | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-actuator-autoconfigure | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-autoconfigure | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-amqp | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-json | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-logging | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-reactor-netty | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-rsocket | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-tomcat | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-validation | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-web | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-webflux | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-autoconfigure-processor | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-configuration-processor | 2.4.5, 2.4.6, 2.6.15, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-test | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-test-autoconfigure | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-mongodb-reactive | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-graphql | 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-cli | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-dependencies | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-devtools | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-parent | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-properties-migrator | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-activemq | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-actuator | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-aop | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-artemis | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-batch | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-cache | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-cassandra | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-cassandra-reactive | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-couchbase | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-couchbase-reactive | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-elasticsearch | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-jdbc | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-jpa | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-ldap | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-mongodb | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-neo4j | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-r2dbc | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-redis | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-rest | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-freemarker | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-groovy-templates | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-hateoas | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-integration | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-jdbc | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-jersey | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-jetty | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-jooq | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-jta-atomikos | 2.4.5, 2.4.6, 2.7.16, 2.7.18 |
| spring-boot-starter-log4j2 | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-mail | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-mustache | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-oauth2-client | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-oauth2-resource-server | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-parent | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-quartz | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-security | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-thymeleaf | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-undertow | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-web-services | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-websocket | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-antlib | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-buildpack-platform | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-configuration-metadata | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-gradle-plugin | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-jarmode-layertools | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-loader | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-loader-tools | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-maven-plugin | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-redis-reactive | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-test | 2.4.5, 2.4.6, 2.7.16, 2.7.18, 3.1.8 |
| spring-boot-starter-data-solr | 2.4.5, 2.4.6 |
| org.springframework.boot.gradle.plugin | 2.4.5, 2.4.6, 3.1.8 |
| spring-boot-starter-jta-bitronix | 2.4.5, 2.4.6 |
</template>

<template #Cloud>

| Module | Version |
|---|---|
| spring-cloud-build | 3.1.6, 3.1.9 |
| spring-cloud-build-dependencies | 3.1.6, 3.1.9 |
| spring-cloud-build-tools | 3.1.6, 3.1.9 |
| spring-cloud-build-docs | 3.1.6, 3.1.9 |
| spring-cloud-dependencies-parent | 3.1.6, 3.1.9 |
| spring-cloud-gateway | 3.1.6, 3.1.9 |
| spring-cloud-gateway-dependencies | 3.1.6, 3.1.9 |
| spring-cloud-gateway-server | 3.1.6, 3.1.9 |
| spring-cloud-gateway-webflux | 3.1.6, 3.1.9 |
| spring-cloud-gateway-mvc | 3.1.6, 3.1.9 |
| spring-cloud-gateway-docs | 3.1.6, 3.1.9 |
| spring-cloud-starter-gateway | 3.1.6, 3.1.9 |
</template>

<template #Data>

| Module | Version |
|---|---|
| spring-data-bom | 2021.2.18 |
| spring-data-build | 2.7.18 |
| spring-data-build-resources | 2.7.18 |
| spring-data-parent | 2.7.18 |
| spring-data-commons | 2.7.18 |
| spring-data-jpa | 2.7.18 |
| spring-data-keyvalue | 2.7.18 |
| spring-data-ldap | 2.7.18 |
| spring-data-redis | 2.7.18 |
| spring-data-cassandra-parent | 3.4.18 |
| spring-data-cassandra | 3.4.18 |
| spring-data-cassandra-distribution | 3.4.18 |
| spring-data-mongodb | 3.4.18 |
| spring-data-mongodb-distribution | 3.4.18 |
| spring-data-mongodb-parent | 3.4.18 |
| spring-data-rest-webmvc | 3.7.18 |
| spring-data-rest-core | 3.7.18 |
| spring-data-rest-distribution | 3.7.18 |
| spring-data-rest-hal-explorer | 3.7.18 |
| spring-data-rest-parent | 3.7.18 |
| spring-data-couchbase | 4.4.18 |
| spring-data-elasticsearch | 4.4.18 |
| spring-data-neo4j | 6.3.18 |
| spring-data-r2dbc | 1.5.18 |
| spring-data-relational | 2.4.18 |
| spring-data-relational-parent | 2.4.18 |
| spring-data-jdbc | 2.4.18 |
| spring-data-jdbc-distribution | 2.4.18 |
</template>

<template #Security>

| Module | Version |
|---|---|
| spring-security | 5.7.11, 5.7.12, 5.7.14, 5.8.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-bom | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-core | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-config | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-web | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-crypto | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-data | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-ldap | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-messaging | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-oauth2-client | 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-oauth2-core | 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-oauth2-jose | 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-oauth2-resource-server | 5.7.11, 5.7.12, 5.7.14, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-rsocket | 5.8.15, 5.8.16, 6.1.6 |
| spring-security-saml2-service-provider | 5.8.15, 5.8.16, 6.1.6 |
| spring-security-test | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-acl | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-aspects | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-cas | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-remoting | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16 |
| spring-security-taglibs | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16, 6.1.6 |
| spring-security-openid | 4.2.12.RELEASE, 4.2.20.RELEASE, 5.8.15, 5.8.16 |
</template>

<template #Security_OAuth>

| Module | Version |
|---|---|
| spring-security-jwt | 1.1.1.RELEASE |
</template>

<template #Web_Services>

| Module | Version |
|---|---|
| spring-ws-core | 3.1.8 |
| spring-xml | 3.1.8 |
| spring-ws-security | 3.1.8 |
| spring-ws-test | 3.1.8 |
| spring-ws-support | 3.1.8 |
| spring-ws | 3.1.8 |
</template>

<template #Integration>

| Module | Version |
|---|---|
| spring-integration | 5.5.20 |
| spring-integration-amqp | 5.5.20 |
| spring-integration-bom | 5.5.20 |
| spring-integration-core | 5.5.20 |
| spring-integration-event | 5.5.20 |
| spring-integration-feed | 5.5.20 |
| spring-integration-file | 5.5.20 |
| spring-integration-ftp | 5.5.20 |
| spring-integration-gemfire | 5.5.20 |
| spring-integration-groovy | 5.5.20 |
| spring-integration-http | 5.5.20 |
| spring-integration-ip | 5.5.20 |
| spring-integration-jdbc | 5.5.20 |
| spring-integration-jms | 5.5.20 |
| spring-integration-jmx | 5.5.20 |
| spring-integration-jpa | 5.5.20 |
| spring-integration-kafka | 5.5.20 |
| spring-integration-mail | 5.5.20 |
| spring-integration-mongodb | 5.5.20 |
| spring-integration-mqtt | 5.5.20 |
| spring-integration-r2dbc | 5.5.20 |
| spring-integration-redis | 5.5.20 |
| spring-integration-rmi | 5.5.20 |
| spring-integration-rsocket | 5.5.20 |
| spring-integration-scripting | 5.5.20 |
| spring-integration-security | 5.5.20 |
| spring-integration-sftp | 5.5.20 |
| spring-integration-stomp | 5.5.20 |
| spring-integration-stream | 5.5.20 |
| spring-integration-syslog | 5.5.20 |
| spring-integration-test | 5.5.20 |
| spring-integration-test-support | 5.5.20 |
| spring-integration-webflux | 5.5.20 |
| spring-integration-websocket | 5.5.20 |
| spring-integration-ws | 5.5.20 |
| spring-integration-xml | 5.5.20 |
| spring-integration-xmpp | 5.5.20 |
| spring-integration-zeromq | 5.5.20 |
| spring-integration-zookeeper | 5.5.20 |
</template>

<template #HATEOAS>

| Module | Version |
|---|---|
| spring-hateoas | 1.5.6 |
</template>

<template #LDAP>

| Module | Version |
|---|---|
| spring-ldap-core | 2.4.1, 2.4.4 |
| spring-ldap-odm | 2.4.4 |
| spring-ldap-test | 2.4.4 |
| spring-ldap-sandbox | 2.4.4 |
| spring-ldap-ldif-core | 2.4.4 |
| spring-ldap-core-tiger | 2.4.4 |
| spring-ldap-odm-sample | 2.4.4 |
| spring-ldap-plain-sample | 2.4.4 |
</template>

<template #GraphQL>

| Module | Version |
|---|---|
| spring-graphql | 1.0.6 |
| spring-graphql-docs | 1.0.6 |
| spring-graphql-test | 1.0.6 |
</template>

<template #Retry>

| Module | Version |
|---|---|
| spring-retry | 1.3.4 |
</template>

<template #Plugin>

| Module | Version |
|---|---|
| spring-plugin | 2.0.0.RELEASE |
| spring-plugin-core | 2.0.0.RELEASE |
</template>

<template #Web_Flow>

| Module | Version |
|---|---|
| spring-binding | 2.3.1.RELEASE, 2.3.3.RELEASE |
| spring-js | 2.3.1.RELEASE, 2.3.3.RELEASE |
| spring-js-resources | 2.3.1.RELEASE, 2.3.3.RELEASE |
| spring-webflow | 2.3.1.RELEASE, 2.3.3.RELEASE |
| spring-faces | 2.3.1.RELEASE, 2.3.3.RELEASE |
</template>

<template #Pulsar>

| Module | Version |
|---|---|
| spring-pulsar | 1.1.13 |
| spring-pulsar-reactive | 1.1.13 |
| spring-pulsar-cache-provider | 1.1.13 |
| spring-pulsar-cache-provider-caffeine | 1.1.13 |
| spring-pulsar-test | 1.1.13 |
| spring-pulsar-bom | 1.1.13 |
</template>

<template #Authorization_Server>

| Module | Version |
|---|---|
| spring-security-oauth2-authorization-server | 1.1.4 |
</template>

</TableTabs>

## Installation

<ELSPrerequisites>

* **Maven** or **Gradle** build tool installed
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) 
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_java) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

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
   Example **[Maven](https://github.com/cloudlinux/securechain-java/blob/main/examples/maven)** and **[Gradle](https://github.com/cloudlinux/securechain-java/blob/main/examples/gradle)** projects are available on GitHub. Ensure the required environment variables are set.
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

   The build tool should be able to identify and resolve dependencies from the TuxCare ELS for Spring® repository.

</ELSSteps>


## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Spring) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Spring) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Spring) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_java/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [Source code](/els-for-libraries/managing-els-repository/#javaSources) — Access source JARs in Nexus
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
