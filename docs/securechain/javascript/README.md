# JavaScript

SecureChain delivers verified, signed, continuously patched JavaScript packages from a TuxCare-managed npm registry. Packages install with standard `npm` tooling and continue to receive CVE patches after upstream end of life.

## Installation

<ELSPrerequisites>

* TuxCare SecureChain registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* An npm project with `package.json`. If you're starting from scratch, run `npm init -y` in your project directory to create one.

</ELSPrerequisites>

<ELSSteps>

1. Connect to the SecureChain registry

   In the root directory of your project, create or edit `.npmrc` to point npm at the SecureChain registry and provide your token:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your SecureChain registry token (see [Prerequisites](#prerequisites) above).
   :::

2. Remove the existing lockfile

   If the project was previously installed against the public npm registry, delete the lockfile and `node_modules` before the first install:

   ```text
   rm -rf node_modules package-lock.json
   ```

3. Install your dependencies

   Run this command from the project root directory, where the package.json file containing your dependencies is located:

   ```text
   npm install
   ```

   You can keep the package names and versions in `package.json` as they are.

   `npm` is now pointed at SecureChain from the previous steps, so the packages are pulled automatically from the TuxCare registry.

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

## Troubleshooting

If `npm install` resolves to the public registry instead of SecureChain, use the commands below to verify that npm is reading your `.npmrc` and that the token is accepted.

* **Confirm the active registry**

   ```text
   npm config get registry
   ```

   The output must be `https://artifacts.tuxcare.com/npm/`. If it returns `https://registry.npmjs.org/`, npm is not reading your project `.npmrc` - check that you are running npm from the project root and that no user-level `~/.npmrc` is overriding it.

* **Confirm authentication and connectivity**

   ```text
   npm ping
   npm whoami
   ```

   `npm ping` must print `PONG` — it confirms the registry is reachable with your token. `npm whoami` succeeding (it prints a service identity, not your account name) confirms the token is accepted. Failures here usually mean a missing, malformed, or revoked token in `.npmrc`.

* **`403 Forbidden` on every request**

   The token is being sent in the wrong form. Use `_authToken` with the raw token as shown above; the `_auth` key requires the base64 encoding of `<TOKEN>:` instead.

* **`EINTEGRITY` checksum mismatch during install**

   The project still has a lockfile generated against the public registry, and the SecureChain build of that package legitimately differs from the public tarball. Delete `package-lock.json` and `node_modules`, then run `npm install` again (see step 2 above).

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/wrench.webp) [Managing the SecureChain repository](/securechain/managing-securechain-repository/) — Upgrade to a newer version

</WhatsNext>
