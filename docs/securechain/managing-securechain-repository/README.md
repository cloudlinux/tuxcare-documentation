# Managing the SecureChain repository

This page provides instructions for upgrading to newer TuxCare-built package versions delivered through the SecureChain registry.

## How to Upgrade to a Newer Version

<TableTabs label="Choose the Ecosystem: " >

<template #JavaScript>

If you have already installed a SecureChain package and want to upgrade to a newer release, remove `node_modules`, clear the npm cache to avoid conflicts, and reinstall.

<ELSSteps>

1. Clean the existing install

   Remove the lockfile and cached modules so npm picks up the latest TuxCare-built version from the SecureChain registry:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

2. Reinstall

   Run `npm install` to fetch the newest available `tuxcare.N` release for the versions pinned in your `package.json`:

   ```text
   npm install
   ```

</ELSSteps>

**Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent SecureChain release.**

</template>

</TableTabs>
