<!-- markdownlint-disable MD029 MD024 MD036 MD033 -->

# SecureChain Portal

The portal is the web application of SecureChain. Your organization has a private workspace in it — for example `name.sc.tuxcare.cloud` — that keeps the dependencies of every repository and container image you send, matches them with the advisory data and the TuxCare catalogue, and shows you what to fix first.

:::tip Where the full documentation lives
This page is an overview. Signing in, roles, every page of the portal, triage, alerts, tokens, the REST API and the MCP server are described in the **[SecureChain user guide](https://sc.tuxcare.cloud/guide/portal)**, which is maintained together with the product and is the source of truth for the portal.
:::

## What the Portal Does

A scan in a CI job alone cannot answer these questions; the portal does:

* **What do we ship?** The portal keeps every scan. You see the dependencies of every repository, branch and image of the workspace in one place, and how they change from scan to scan.
* **What is vulnerable now?** The matching runs in the portal, not in your pipeline. When a new advisory comes out, the portal checks every stored scan again — you learn about a new finding without a new scan.
* **What first?** Grades, known-exploited findings, fix deadlines and the CRA clocks put the findings in order. The fix plan tells which package to move to which version, and which TuxCare build fixes a finding.
* **Who does what?** Triage states, departments, roles, alerts by email, Slack and webhook, and the audit log make the work of a team visible.
* **How do programs get in?** Access tokens for the CLI and CI, the REST API for scripts and dashboards, and the MCP server for AI assistants.

The CLI and the package managers take their settings from the portal: the access token of the workspace and the credential of the TuxCare registry.

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [SecureChain user guide: the portal](https://sc.tuxcare.cloud/guide/portal) — The complete reference for every page of the portal
* ![](/images/bolt.webp) [SecureChain CLI](/securechain/cli/) — Send scans, gate CI and move projects to TuxCare builds
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/) — Vulnerability Exploitability eXchange feed

</WhatsNext>
