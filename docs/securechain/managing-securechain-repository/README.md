---
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---

# Managing the SecureChain repository

This page describes how to upgrade an already-installed SecureChain package to a newer release.

## How to Upgrade to a Newer Version

<TableTabs label="Choose the Ecosystem: " >

<template #JavaScript>

<ELSSteps>

1. Check your TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:js-securechain) account for the latest version available for each SecureChain package.

2. To upgrade, install the new version of the package — `npm install` will replace the previously installed release:

    ```text
    npm install <package>@<new-version>
    ```

    :::tip
    If `npm install` does not pick up the new version, clear the npm cache and reinstall:

    ```text
    rm -rf node_modules package-lock.json && npm cache clean --force
    npm install
    ```
    :::

</ELSSteps>

</template>

</TableTabs>
