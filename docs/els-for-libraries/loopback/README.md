# LoopBack

Endless Lifecycle Support (ELS) for LoopBack from TuxCare provides security fixes for LoopBack versions that have reached their end of life. This allows you to continue running LoopBack applications without vulnerability concerns, even after official support has ended.

## Supported LoopBack Versions

* LoopBack 1.10.0, 2.42.0

## Connection to ELS for LoopBack Library

This guide outlines the steps needed to integrate the TuxCare ELS for the LoopBack library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS LoopBack library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for LoopBack

TuxCare provides ELS for LoopBack as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your LoopBack project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-loopback-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

3. Use an editor of your choice (e.g., VS Code) to add the following registry address line:

   <CodeWithCopy>

   ```text
   registry=https://registry.npmjs.org/
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els-js/
   //nexus.repo.tuxcare.com/repository/els-js/:_auth=${TOKEN}
   ```

   </CodeWithCopy>

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Update your `package.json` file to replace your LoopBack dependencies with the TuxCare packages. Manually update your `package.json` file by replacing your LoopBack dependencies with the TuxCare packages:

     <TableTabs label="Choose LoopBack version: " >

     <template #LoopBack_1.10.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "loopback": "npm:@els-js/loopback@>=1.10.0-tuxcare.1"
     },
     "overrides": {
        "aws-sdk": "npm:@els-js/aws-sdk@>=2.0.5-tuxcare.1",
        "base64-url": "npm:@els-js/base64-url@>=1.2.1-tuxcare.1",
        "basic-auth-connect": "npm:@els-js/basic-auth-connect@>=1.0.0-tuxcare.1",
        "body-parser": "npm:@els-js/body-parser@>=1.13.3-tuxcare.1",
        "cookie": "npm:@els-js/cookie@>=0.1.3-tuxcare.1",
        "debug": "npm:@els-js/debug@>=2.2.0-tuxcare.1",
        "ejs": "npm:@els-js/ejs@>=1.0.0-tuxcare.1",
        "follow-redirects": "npm:@els-js/follow-redirects@>=0.0.3-tuxcare.1",
        "form-data": "npm:@els-js/form-data@>=0.1.4-tuxcare.1",
        "fresh": "npm:@els-js/fresh@>=0.3.0-tuxcare.1",
        "hawk": "npm:@els-js/hawk@>=1.1.1-tuxcare.1",
        "hoek": "npm:@els-js/hoek@>=0.9.1-tuxcare.1",
        "mime": "npm:@els-js/mime@>=1.3.4-tuxcare.1",
        "minimist": "npm:@els-js/minimist@>=0.0.8-tuxcare.1",
        "ms": "npm:@els-js/ms@>=0.7.1-tuxcare.1",
        "negotiator": "npm:@els-js/negotiator@>=0.5.3-tuxcare.1",
        "on-headers": "npm:@els-js/on-headers@>=1.0.2-tuxcare.1",
        "qs": "npm:@els-js/qs@>=4.0.0-tuxcare.1",
        "tunnel-agent": "npm:@els-js/tunnel-agent@>=0.4.3-tuxcare.1",
        "underscore": "npm:@els-js/underscore@>=1.6.0-tuxcare.1",
        "underscore.string": "npm:@els-js/underscore.string@>=2.3.3-tuxcare.1",
        "xml2js": "npm:@els-js/xml2js@>=0.2.6-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #LoopBack_2.42.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "loopback": "npm:@els-js/loopback@>=2.42.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     </template>

     </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the LoopBack library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare LoopBack library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for LoopBack repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for LoopBack ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/loopback/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/loopback/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for LoopBack from TuxCare versions:

<TableTabs label="Choose LoopBack version: " >

<template #LoopBack_1.10.0>

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2021-44906 | Transitive | Critical | minimist           | < 1.2.6             |
| CVE-2022-29078 | Transitive | Critical | ejs                | 3.1.6               |
| CVE-2025-7783 | Transitive | Critical | form-data          | -                   |
| CVE-2017-1000228 | Transitive | Critical | ejs                | < 2.5.3             |
| CVE-2020-28472 | Transitive | Critical | aws-sdk            | < 2.814.0           |
| CVE-2014-10064 | Transitive | High     | qs                 | <= 1.0.0            |
| CVE-2017-1000048 | Transitive | High     | qs                 | -                   |
| CVE-2022-24999 | Transitive | High     | qs                 | -                   |
| CVE-2025-15284 | Transitive | High     | qs                 | < 6.14.1            |
| CVE-2021-23358 | Transitive | High     | underscore         | >= 1.3.2 < 1.12.1   |
| CVE-2017-16138 | Transitive | High     | mime               | < 1.4.1, >= 2.0.1 < 2.0.3 |
| GHSA-j4mr-9xw3-c9jx | Transitive | High     | base64-url         | < 2.0.0             |
| CVE-2018-3728 | Transitive | High     | hoek               | < 4.2.0, >= 5.0.0 < 5.0.3 |
| CVE-2020-36604 | Transitive | High     | hoek               | < 8.5.1, >= 9.0 < 9.0.3 |
| CVE-2016-2515 | Transitive | High     | hawk               | 3.1.2, 4.1.0        |
| CVE-2022-29167 | Transitive | High     | hawk               | < 9.0.1             |
| CVE-2017-1000189 | Transitive | High     | ejs                | < 2.5.5             |
| CVE-2016-10539 | Transitive | High     | negotiator         | <= 0.6.0            |
| CVE-2017-20165 | Transitive | High     | debug              | < 2.6.9, >= 3.0.0 < 3.1.0 |
| CVE-2024-45590 | Transitive | High     | body-parser        | < 1.20.3            |
| CVE-2024-47178 | Transitive | High     | basic-auth-connect | < 1.1.0             |
| CVE-2017-16119 | Transitive | High     | fresh              | < 0.5.2             |
| GHSA-xc7v-wxcw-j472 | Transitive | Medium   | tunnel-agent       | < 0.6.0             |
| CVE-2014-7191 | Transitive | Medium   | qs                 | <= 0.10.18          |
| CVE-2023-0842 | Transitive | Medium   | xml2js             | -                   |
| GHSA-v2p6-4mp7-3r9v | Transitive | Medium   | underscore.string  | < 3.3.5             |
| CVE-2017-20162 | Transitive | Medium   | ms                 | < 2.0.0             |
| CVE-2020-7598 | Transitive | Medium   | minimist           | < 1.2.2             |
| CVE-2022-0536 | Transitive | Medium   | follow-redirects   | < 1.14.8            |
| CVE-2022-0155 | Transitive | Medium   | follow-redirects   | < 1.14.7            |
| CVE-2023-26159 | Transitive | Medium   | follow-redirects   | < 1.14.7            |
| CVE-2024-28849 | Transitive | Medium   | follow-redirects   | < 1.15.6            |
| CVE-2017-1000188 | Transitive | Medium   | ejs                | < 2.5.5             |
| CVE-2024-33883 | Transitive | Medium   | ejs                | < 2.5.3             |
| CVE-2017-16137 | Transitive | Low      | debug              | < 2.6.9, >= 3.0.0, < 3.1.0, >= 3.2.0, < 3.2.7, >= 4.0.0, < 4.3.1 |
| CVE-2024-47764 | Transitive | Low      | cookie             | < 0.7.0             |
| CVE-2025-7339 | Transitive | Low      | on-headers         | < 1.1.0             |

</template>

<template #LoopBack_2.42.0>

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2022-29078 | Transitive | Critical | ejs                | 3.1.6               |
| CVE-2021-23400 | Transitive | High     | nodemailer         | < 6.6.1             |
| CVE-2020-7769  | Transitive | Critical | nodemailer         | < 6.4.16            |
| GHSA-9h6g-pr28-7cqp | Transitive | Moderate | nodemailer         | <= 6.9.8            |
| CVE-2025-13033 | Transitive | High     | nodemailer         | -                   |
| CVE-2025-14874 | Transitive | Medium   | nodemailer         | -                   |
| GHSA-rcmh-qjqh-p98v | Transitive | Low      | nodemailer         | <= 7.0.10           |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

