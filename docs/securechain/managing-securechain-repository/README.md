---
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---

# Managing the SecureChain repository

This page describes how to upgrade an already-installed SecureChain package to a newer release.

TuxCare keeps releasing patched builds for the package versions you already use — the base version stays the same (`0.4.2` remains `0.4.2`), only the `-tuxcare.N` suffix moves forward. There are two ways to pick up such a release: with the [SecureChain CLI](/securechain/cli/) (recommended) or by hand.

## How to Upgrade to a Newer Version

<TableTabs label="Choose the Ecosystem: " >

<template #JavaScript>

### Option 1: SecureChain CLI (recommended)

The CLI compares the installed tree with the TuxCare catalogue, so you do not need to look versions up yourself. Run the commands in the root directory of a project that is already connected to SecureChain (see [SecureChain CLI — Usage](/securechain/cli/#usage)).

<ELSSteps>

1. See what is behind

   ```text
   securechain check
   ```

   A `catalogue-drift` finding names every package that has a newer patched build than the one installed, and the CVEs that build closes. `securechain update --check-only` reports the same and writes nothing — it exits `1` when something is behind, which makes it a gate for CI.

2. Roll the project forward

   ```text
   securechain update
   ```

   `update` rewrites the pins in `package.json` (or `overrides` for transitive packages) to the newer patched builds, refreshes the lockfile, reinstalls and verifies that the installed tree changed. Add `--dry-run` to preview the change first.

3. Commit the changes

   Commit `package.json` and the lockfile together. Run `securechain check` again: it should now exit `0`.

</ELSSteps>

### Option 2: Manual update

<ELSSteps>

1. Find the latest version available to your subscription. The registry answers with your token from `.npmrc`:

   ```text
   npm view <package> versions
   ```

   The newest `-tuxcare.N` entry for your base version is the release to move to.

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
