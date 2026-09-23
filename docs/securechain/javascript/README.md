# JavaScript

SecureChain delivers verified, signed, continuously patched JavaScript packages from a TuxCare-managed npm registry. This page shows how to connect a project to it — with the SecureChain CLI or manually.

## Installation

There are two ways to connect a project to SecureChain. Both lead to the same result: your package manager installs the TuxCare builds from the TuxCare registry.

* **[Option 1: SecureChain CLI](#option-1-securechain-cli-recommended)** — recommended. One tool configures the registry, finds the packages that have a patched build, including transitive ones, pins them and verifies the result.
* **[Option 2: Manual Setup](#option-2-manual-setup)** — you edit the package manager's configuration yourself and install nothing extra.

### Option 1: SecureChain CLI (recommended)

`securechain` is a single binary that does the work of the manual setup. It detects your package manager (`npm`, `pnpm`, `yarn` or `bun`), points it at the TuxCare registry, compares the whole resolved dependency tree with the TuxCare catalogue, pins the patched builds — through `overrides` or `resolutions` for transitive packages — and verifies that the installed tree really changed. In CI, `securechain check` fails the build when a patched build exists and the project is not on it.

<ELSPrerequisites>

* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* A JavaScript project with `package.json`. If you are starting from scratch, run your package manager's init command (`npm init -y`, `pnpm init`, `yarn init`, `bun init`) in your project directory to create one.
* The SecureChain CLI itself — step 1 installs it. Docker, npm, pip, apt, dnf and the other methods are on the [SecureChain CLI](/securechain/cli/#installation) page.

</ELSPrerequisites>

<ELSSteps>

1. Install the CLI

   ```text
   curl -fsSL https://securechain.tuxcare.com/get/securechain | sh
   ```

   Docker, npm, pip, apt, dnf and other methods are listed in [SecureChain CLI — Installation](/securechain/cli/#installation).

2. Set your token

   Every `securechain` command reads the token from the `TUXCARE_TOKEN` environment variable. On your machine, export it in the shell where you run the commands. In CI, add it as a masked secret variable of the pipeline — the CLI picks it up from the environment the same way:

   ```text
   export TUXCARE_TOKEN=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

3. Log in and connect the project

   Run these in the root directory of your project:

   ```text
   securechain auth login
   securechain init
   ```

   `auth login` validates the token and stores what your subscription covers. `init` writes the registry configuration (`.npmrc`, or `.yarnrc.yml` for Yarn 2+) and the project file `.securechain.yaml`.

4. See what is covered, then apply the patched builds

   ```text
   securechain check
   securechain harden
   ```

   `check` makes no changes: it lists every package that has a patched build and the CVEs that build closes. `harden` pins those builds, refreshes the lockfile, reinstalls and verifies the result. Add `--dry-run` to preview the change first.

5. Commit the changes

   Commit the files `init` created together with `package.json` and the lockfile.

</ELSSteps>

Every command, the options, CI usage and air-gapped machines are described on the [SecureChain CLI](/securechain/cli/) page.

### Option 2: Manual Setup

Use this path if you prefer not to install the CLI.

<ELSPrerequisites>

* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* A JavaScript project with `package.json`. If you are starting from scratch, run your package manager's init command (`npm init -y`, `pnpm init`, `yarn init`, `bun init`) in your project directory to create one.
* Your subscription type — SecureChain, ELS, or both. The steps differ between them; see below.

</ELSPrerequisites>

A subscription covers one of three things, and the steps differ:

* **SecureChain** — patched builds of packages that upstream still maintains. The registry serves them in place of the public ones, so `package.json` needs no changes.
* **ELS** — patched builds of packages past their end of life. Each covered dependency is pinned in `package.json` by hand.
* **SecureChain + ELS** — both. SecureChain builds are served automatically; only the ELS-covered packages are pinned.

Select your subscription to see the matching setup steps:

<TableTabs label="Choose your subscription: " :labels="{ SecureChain_ELS: 'SecureChain + ELS' }">

<template #SecureChain>

<TableTabs label="Choose your package manager: " :bottom-line="false" :labels="{ Yarn_Classic: 'Yarn 1 (Classic)', Yarn_Berry: 'Yarn 2 – 4.14 (Berry)', Yarn_415: 'Yarn 4.15+' }">

<template #npm>

<ELSSteps>

1. Connect to the SecureChain registry

   In the root directory of your project, create or edit `.npmrc` to point npm at the TuxCare registry and provide your token:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules package-lock.json
   npm install
   ```

   You can keep the package names and versions in `package.json` as they are.

   The previous step configured the package manager to use the TuxCare registry, so packages are pulled from it automatically: SecureChain builds where they exist, and the public upstream packages for the rest. Both come from the same endpoint, so no other registry configuration is needed.

   Commit the regenerated `package-lock.json`, which records the TuxCare URLs and checksums.

3. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   npm list
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #pnpm>

<ELSSteps>

1. Connect to the SecureChain registry

   pnpm reads the same project `.npmrc` npm does. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

   You can keep the package names and versions in `package.json` as they are.

   The previous step configured the package manager to use the TuxCare registry, so packages are pulled from it automatically: SecureChain builds where they exist, and the public upstream packages for the rest. Both come from the same endpoint, so no other registry configuration is needed.

   Commit the regenerated `pnpm-lock.yaml`, which records the TuxCare URLs and checksums.

3. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   pnpm list
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   pnpm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_Classic>

<ELSSteps>

1. Connect to the SecureChain registry

   Yarn 1 reads the same project `.npmrc` npm does, with one extra line. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   always-auth=true
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

   `always-auth=true` is required — without it Yarn 1 does not send the token at all and every TuxCare build is withheld.

2. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   You can keep the package names and versions in `package.json` as they are.

   The previous step configured the package manager to use the TuxCare registry, so packages are pulled from it automatically: SecureChain builds where they exist, and the public upstream packages for the rest. Both come from the same endpoint, so no other registry configuration is needed.

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

3. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn info <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_Berry>

<ELSSteps>

1. Connect to the SecureChain registry

   Yarn 2+ (Berry) uses its own configuration file. In the root directory of your project, create or edit `.yarnrc.yml`:

   ```text
   npmRegistryServer: "https://artifacts.tuxcare.com/npm/"
   npmAuthToken: "<TOKEN>"
   npmAlwaysAuth: true
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   You can keep the package names and versions in `package.json` as they are.

   The previous step configured the package manager to use the TuxCare registry, so packages are pulled from it automatically: SecureChain builds where they exist, and the public upstream packages for the rest. Both come from the same endpoint, so no other registry configuration is needed.

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

3. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn npm info <package> --fields versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_415>

<ELSSteps>

1. Connect to the SecureChain registry

   Yarn 2+ (Berry) uses its own configuration file. In the root directory of your project, create or edit `.yarnrc.yml`:

   ```text
   npmRegistryServer: "https://artifacts.tuxcare.com/npm/"
   npmAuthToken: "<TOKEN>"
   npmAlwaysAuth: true
   npmMinimalAgeGate: 0
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

   The extra `npmMinimalAgeGate: 0` line: Yarn 4.15 and later quarantine recently published releases by default, and a fresh TuxCare security fix is recently published by definition.

2. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   You can keep the package names and versions in `package.json` as they are.

   The previous step configured the package manager to use the TuxCare registry, so packages are pulled from it automatically: SecureChain builds where they exist, and the public upstream packages for the rest. Both come from the same endpoint, so no other registry configuration is needed.

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

3. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn npm info <package> --fields versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Bun>

<ELSSteps>

1. Connect to the SecureChain registry

   Bun (1.1+) reads the same project `.npmrc` npm does. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules bun.lock bun.lockb
   bun install
   ```

   You can keep the package names and versions in `package.json` as they are.

   The previous step configured the package manager to use the TuxCare registry, so packages are pulled from it automatically: SecureChain builds where they exist, and the public upstream packages for the rest. Both come from the same endpoint, so no other registry configuration is needed.

   Commit the regenerated lockfile, which records the TuxCare URLs and checksums.

3. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   bun pm ls
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   Bun has no registry-query command of its own; use `npm view` when npm is installed, or browse the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

</TableTabs>

</template>

<template #ELS>

<TableTabs label="Choose your package manager: " :bottom-line="false" :labels="{ Yarn_Classic: 'Yarn 1 (Classic)', Yarn_Berry: 'Yarn 2 – 4.14 (Berry)', Yarn_415: 'Yarn 4.15+' }">

<template #npm>

<ELSSteps>

1. Connect to the TuxCare registry

   In the root directory of your project, create or edit `.npmrc` to point npm at the TuxCare registry and provide your token:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your dependencies at TuxCare-patched versions

   Update `package.json`: set the dependency itself, and add a matching entry in `overrides` so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "cookie": ">=0.4.2-tuxcare.1"
   },
   ```

   ```text
   "overrides": {
     "cookie@0.4.2": ">=0.4.2-tuxcare.1"
   }
   ```

   Dependencies not covered by your ELS subscription stay as they are — they are served from the public upstream through the same endpoint.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules package-lock.json
   npm install
   ```

   Commit the regenerated `package-lock.json`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   npm list
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #pnpm>

<ELSSteps>

1. Connect to the TuxCare registry

   pnpm reads the same project `.npmrc` npm does. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your dependencies at TuxCare-patched versions

   Update `package.json`: set the dependency itself, and add a matching entry in the `pnpm.overrides` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "cookie": ">=0.4.2-tuxcare.1"
   },
   ```

   ```text
   "pnpm": {
     "overrides": {
       "cookie@0.4.2": ">=0.4.2-tuxcare.1"
     }
   }
   ```

   Dependencies not covered by your ELS subscription stay as they are — they are served from the public upstream through the same endpoint.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

   Commit the regenerated `pnpm-lock.yaml`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   pnpm list
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   pnpm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_Classic>

<ELSSteps>

1. Connect to the TuxCare registry

   Yarn 1 reads the same project `.npmrc` npm does, with one extra line. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   always-auth=true
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

   `always-auth=true` is required — without it Yarn 1 does not send the token at all and every TuxCare build is withheld.

2. Point your dependencies at TuxCare-patched versions

   Update `package.json`: set the dependency itself, and add a matching entry in the `resolutions` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "cookie": ">=0.4.2-tuxcare.1"
   },
   ```

   ```text
   "resolutions": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Dependencies not covered by your ELS subscription stay as they are — they are served from the public upstream through the same endpoint.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn info <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_Berry>

<ELSSteps>

1. Connect to the TuxCare registry

   Yarn 2+ (Berry) uses its own configuration file. In the root directory of your project, create or edit `.yarnrc.yml`:

   ```text
   npmRegistryServer: "https://artifacts.tuxcare.com/npm/"
   npmAuthToken: "<TOKEN>"
   npmAlwaysAuth: true
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your dependencies at TuxCare-patched versions

   Update `package.json`: set the dependency itself, and add a matching entry in the `resolutions` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "cookie": ">=0.4.2-tuxcare.1"
   },
   ```

   ```text
   "resolutions": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Dependencies not covered by your ELS subscription stay as they are — they are served from the public upstream through the same endpoint.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn npm info <package> --fields versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_415>

<ELSSteps>

1. Connect to the TuxCare registry

   Yarn 2+ (Berry) uses its own configuration file. In the root directory of your project, create or edit `.yarnrc.yml`:

   ```text
   npmRegistryServer: "https://artifacts.tuxcare.com/npm/"
   npmAuthToken: "<TOKEN>"
   npmAlwaysAuth: true
   npmMinimalAgeGate: 0
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

   The extra `npmMinimalAgeGate: 0` line: Yarn 4.15 and later quarantine recently published releases by default, and a fresh TuxCare security fix is recently published by definition.

2. Point your dependencies at TuxCare-patched versions

   Update `package.json`: set the dependency itself, and add a matching entry in the `resolutions` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "cookie": ">=0.4.2-tuxcare.1"
   },
   ```

   ```text
   "resolutions": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Dependencies not covered by your ELS subscription stay as they are — they are served from the public upstream through the same endpoint.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn npm info <package> --fields versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Bun>

<ELSSteps>

1. Connect to the TuxCare registry

   Bun (1.1+) reads the same project `.npmrc` npm does. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your dependencies at TuxCare-patched versions

   Update `package.json`: set the dependency itself, and add a matching entry in `overrides` (Bun takes bare package names as keys) so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "cookie": ">=0.4.2-tuxcare.1"
   },
   ```

   ```text
   "overrides": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Dependencies not covered by your ELS subscription stay as they are — they are served from the public upstream through the same endpoint.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules bun.lock bun.lockb
   bun install
   ```

   Commit the regenerated lockfile, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   bun pm ls
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   Bun has no registry-query command of its own; use `npm view` when npm is installed, or browse the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

</TableTabs>

</template>

<template #SecureChain_ELS>

<TableTabs label="Choose your package manager: " :bottom-line="false" :labels="{ Yarn_Classic: 'Yarn 1 (Classic)', Yarn_Berry: 'Yarn 2 – 4.14 (Berry)', Yarn_415: 'Yarn 4.15+' }">

<template #npm>

<ELSSteps>

1. Connect to the TuxCare registry

   In the root directory of your project, create or edit `.npmrc` to point npm at the TuxCare registry and provide your token:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your ELS-covered dependencies at TuxCare-patched versions

   Dependencies still maintained upstream need no changes — SecureChain builds of them are served automatically. For the ELS packages, update `package.json`: set the dependency itself, and add a matching entry in `overrides` so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "axios": "^1.7.9",
     "cookie": ">=0.4.2-tuxcare.1",
     "express": "^4.21.2",
     "lodash": "^4.17.21"
   },
   ```

   ```text
   "overrides": {
     "cookie@0.4.2": ">=0.4.2-tuxcare.1"
   }
   ```

   Here only `cookie` is an ELS-covered package and points at the patched version; `axios`, `express` and `lodash` keep their regular version ranges and are served as SecureChain builds.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules package-lock.json
   npm install
   ```

   Commit the regenerated `package-lock.json`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   npm list
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #pnpm>

<ELSSteps>

1. Connect to the TuxCare registry

   pnpm reads the same project `.npmrc` npm does. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your ELS-covered dependencies at TuxCare-patched versions

   Dependencies still maintained upstream need no changes — SecureChain builds of them are served automatically. For the ELS packages, update `package.json`: set the dependency itself, and add a matching entry in the `pnpm.overrides` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "axios": "^1.7.9",
     "cookie": ">=0.4.2-tuxcare.1",
     "express": "^4.21.2",
     "lodash": "^4.17.21"
   },
   ```

   ```text
   "pnpm": {
     "overrides": {
       "cookie@0.4.2": ">=0.4.2-tuxcare.1"
     }
   }
   ```

   Here only `cookie` is an ELS-covered package and points at the patched version; `axios`, `express` and `lodash` keep their regular version ranges and are served as SecureChain builds.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

   Commit the regenerated `pnpm-lock.yaml`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   pnpm list
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   pnpm view <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_Classic>

<ELSSteps>

1. Connect to the TuxCare registry

   Yarn 1 reads the same project `.npmrc` npm does, with one extra line. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   always-auth=true
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

   `always-auth=true` is required — without it Yarn 1 does not send the token at all and every TuxCare build is withheld.

2. Point your ELS-covered dependencies at TuxCare-patched versions

   Dependencies still maintained upstream need no changes — SecureChain builds of them are served automatically. For the ELS packages, update `package.json`: set the dependency itself, and add a matching entry in the `resolutions` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "axios": "^1.7.9",
     "cookie": ">=0.4.2-tuxcare.1",
     "express": "^4.21.2",
     "lodash": "^4.17.21"
   },
   ```

   ```text
   "resolutions": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Here only `cookie` is an ELS-covered package and points at the patched version; `axios`, `express` and `lodash` keep their regular version ranges and are served as SecureChain builds.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn info <package> versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_Berry>

<ELSSteps>

1. Connect to the TuxCare registry

   Yarn 2+ (Berry) uses its own configuration file. In the root directory of your project, create or edit `.yarnrc.yml`:

   ```text
   npmRegistryServer: "https://artifacts.tuxcare.com/npm/"
   npmAuthToken: "<TOKEN>"
   npmAlwaysAuth: true
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your ELS-covered dependencies at TuxCare-patched versions

   Dependencies still maintained upstream need no changes — SecureChain builds of them are served automatically. For the ELS packages, update `package.json`: set the dependency itself, and add a matching entry in the `resolutions` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "axios": "^1.7.9",
     "cookie": ">=0.4.2-tuxcare.1",
     "express": "^4.21.2",
     "lodash": "^4.17.21"
   },
   ```

   ```text
   "resolutions": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Here only `cookie` is an ELS-covered package and points at the patched version; `axios`, `express` and `lodash` keep their regular version ranges and are served as SecureChain builds.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn npm info <package> --fields versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Yarn_415>

<ELSSteps>

1. Connect to the TuxCare registry

   Yarn 2+ (Berry) uses its own configuration file. In the root directory of your project, create or edit `.yarnrc.yml`:

   ```text
   npmRegistryServer: "https://artifacts.tuxcare.com/npm/"
   npmAuthToken: "<TOKEN>"
   npmAlwaysAuth: true
   npmMinimalAgeGate: 0
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

   The extra `npmMinimalAgeGate: 0` line: Yarn 4.15 and later quarantine recently published releases by default, and a fresh TuxCare security fix is recently published by definition.

2. Point your ELS-covered dependencies at TuxCare-patched versions

   Dependencies still maintained upstream need no changes — SecureChain builds of them are served automatically. For the ELS packages, update `package.json`: set the dependency itself, and add a matching entry in the `resolutions` field so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "axios": "^1.7.9",
     "cookie": ">=0.4.2-tuxcare.1",
     "express": "^4.21.2",
     "lodash": "^4.17.21"
   },
   ```

   ```text
   "resolutions": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Here only `cookie` is an ELS-covered package and points at the patched version; `axios`, `express` and `lodash` keep their regular version ranges and are served as SecureChain builds.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules yarn.lock
   yarn install
   ```

   Commit the regenerated `yarn.lock`, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   yarn why <package>
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   yarn npm info <package> --fields versions
   ```

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

<template #Bun>

<ELSSteps>

1. Connect to the TuxCare registry

   Bun (1.1+) reads the same project `.npmrc` npm does. In the root directory of your project, create or edit `.npmrc`:

   ```text
   registry=https://artifacts.tuxcare.com/npm/
   //artifacts.tuxcare.com/npm/:_authToken=<TOKEN>
   ```

   :::warning
   Replace `<TOKEN>` with your TuxCare registry token.
   :::

2. Point your ELS-covered dependencies at TuxCare-patched versions

   Dependencies still maintained upstream need no changes — SecureChain builds of them are served automatically. For the ELS packages, update `package.json`: set the dependency itself, and add a matching entry in `overrides` (Bun takes bare package names as keys) so transitive occurrences of the same package are covered too:

   ```text
   "dependencies": {
     "axios": "^1.7.9",
     "cookie": ">=0.4.2-tuxcare.1",
     "express": "^4.21.2",
     "lodash": "^4.17.21"
   },
   ```

   ```text
   "overrides": {
     "cookie": ">=0.4.2-tuxcare.1"
   }
   ```

   Here only `cookie` is an ELS-covered package and points at the patched version; `axios`, `express` and `lodash` keep their regular version ranges and are served as SecureChain builds.

3. Refresh the project dependencies

   If the project was previously installed against the public registry, remove the lockfile and `node_modules`, then install:

   ```text
   rm -rf node_modules bun.lock bun.lockb
   bun install
   ```

   Commit the regenerated lockfile, which records the TuxCare URLs and checksums.

4. Verify the setup

   Confirm the TuxCare packages are resolved correctly:

   ```text
   bun pm ls
   ```

   To see which versions of a package are available to your subscription, query the registry directly:

   ```text
   npm view <package> versions
   ```

   Bun has no registry-query command of its own; use `npm view` when npm is installed, or browse the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

   To browse published CVE fixes across the catalogue, see the [TuxCare CVE Tracker](https://tuxcare.com/cve-tracker/fixes).

</ELSSteps>

</template>

</TableTabs>

</template>

</TableTabs>

## Troubleshooting

If `npm install` resolves to the public registry instead of TuxCare, use the commands below to verify that npm is reading your `.npmrc` and that the token is accepted.

pnpm, Bun and Yarn 1 (Classic) read the same `.npmrc`, so every check below applies to them as written (`pnpm config get registry` works too). For Yarn 2+ (Berry) the equivalent of the first check is `yarn config get npmRegistryServer`, and the token lives in `.yarnrc.yml` — see the Yarn tabs above.

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

   The project still has a lockfile generated against the public registry, and the TuxCare build of that package legitimately differs from the public tarball. Delete `package-lock.json` and `node_modules`, then run `npm install` again (see the lockfile step above).

* **`ETARGET` / `No matching version found` for a `-tuxcare` version**

   The requested version exists but is not included in your subscription. Check the available versions with `npm view <package> versions` — the output reflects exactly what your token can install.

## What's Next?

<WhatsNext hide-title>

* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/) — Vulnerability Exploitability eXchange feed
* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates

</WhatsNext>
