# Managing the SecureChain repository

This page describes how to move a project that is already connected to SecureChain to a newer patched release.

TuxCare keeps releasing patched builds for the package versions you already use — the base version stays the same (`0.4.2` remains `0.4.2`), only the `-tuxcare.N` suffix moves forward. The [SecureChain CLI](/securechain/cli/) compares the installed tree with the TuxCare catalogue and moves the project forward, so you do not need to look versions up yourself.

## How to Upgrade to a Newer Version

<TableTabs label="Choose the Ecosystem: " >

<template #JavaScript>

Run the commands in the root directory of a project that is connected to SecureChain (see [JavaScript](/securechain/javascript/)).

<ELSSteps>

1. See what is behind

   ```text
   securechain check
   ```

   A `catalogue-drift` finding names every package that has a newer patched build than the one installed, and the CVEs that build closes. `securechain update --check-only` reports the same and writes nothing — it exits `1` when something is behind, which makes it a gate for CI.

2. Move the project forward

   ```text
   securechain update
   ```

   `update` moves the project to the newer patched builds, reinstalls, and verifies the result. Add `--dry-run` to preview the change without writing anything.

3. Commit the changes

   Commit `package.json` and the lockfile. Run `securechain check` again: it should now exit `0`.

</ELSSteps>

</template>

</TableTabs>
