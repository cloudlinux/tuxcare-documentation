# Lodash

SecureChain from TuxCare delivers verified, signed, rebuilt versions of Lodash from a TuxCare-managed registry — installed exactly like the upstream package, with no scope or import changes.

## Supported Versions

* **Lodash** 4.17.20

Other versions upon request.

## Installation

<ELSPrerequisites>

* TuxCare SecureChain registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:securechain-js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. Configure the SecureChain registry

   In the root directory of your project, create or edit `.npmrc` to set the SecureChain registry as the default and add your token:

   ```text
   registry=https://nexus.repo.tuxcare.com/repository/securechain-js/
   //nexus.repo.tuxcare.com/repository/securechain-js/:_auth=${TOKEN}
   ```

   :::warning
   Replace `${TOKEN}` with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

   :::tip
   `npm.tuxcare.com` is a planned alias for the same SecureChain endpoint. Until it is published, use the `nexus.repo.tuxcare.com` URL above.
   :::

2. Pin Lodash to a SecureChain release

   SecureChain publishes under the original `lodash` name with a transparent `tuxcare.N` version suffix, so no `npm:@scope/...` redirection is needed. Update the `lodash` entry in your `package.json`:

   <TableTabs label="Choose Lodash version: " >

    <template #Lodash_4.17.20>

    ```text
    "dependencies": {
      "lodash": "^4.17.20-tuxcare.1"
    }
    ```

    </template>

   </TableTabs>

   **Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent SecureChain release.**

3. Reinstall dependencies

   Remove the lockfile and cached modules so npm fetches Lodash from the SecureChain registry:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   npm install
   ```

   :::tip

   To confirm the SecureChain Lodash package is installed, list the project's dependencies:

   ```text
   npm list
   ```

   :::

</ELSSteps>

## Software Bill of Materials (SBOM)

For each published SecureChain package and version, TuxCare generates SBOM files. Those artifacts are published to TuxCare Nexus.

You can browse SBOM files for Lodash here:

[https://nexus.repo.tuxcare.com/#browse/browse:securechain-js-sbom:lodash](https://nexus.repo.tuxcare.com/#browse/browse:securechain-js-sbom:lodash)

:::warning
Final SBOM repository naming under SecureChain is being confirmed. If this URL does not load, contact [sales@tuxcare.com](mailto:sales@tuxcare.com) for the current path.
:::

Use the credentials you received for SecureChain to access Nexus.

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/securechain/js/lodash/) — Vulnerability Exploitability eXchange feed
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/wrench.webp) [Managing the SecureChain repository](/securechain/managing-securechain-repository/) — Upgrade to a newer version

</WhatsNext>
