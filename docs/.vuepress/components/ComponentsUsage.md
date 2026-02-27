## Components: CodeWithCopy

**Description**: 
- Adds copy button to a code.
- Suitable for both single/multiple lines in a *code-block*

**Known issues**: 
- Doesn't look nice on long code-lines, copy button overlays code. It's better to break such lines to several.

**Usage example**:

<CodeWithCopy>

```text
CODE
```

</CodeWithCopy>

## Components: CodeTabs

**Description**:

- Designed to combine code, for example, one-purpose commands for different Linux systems.
- Has a built-in copy button and scroll.

**Usage example**:

- Single line

  <CodeTabs :tabs="[
    { title: 'Option-1', content: `CODE` },
    { title: 'Option-2', content: `CODE` }
  ]" />

- Multiple lines

  <CodeTabs :tabs="[
  { title: 'Option-1', content:
  `CODE
  CODE
  CODE` },
  { title: 'Option-2', content:
  `CODE
  CODE
  CODE` }
  ]" />

## Components: TableTabs

**Description**:

- Designed to combine content (version-tables, text informtation, etc).
- Lines help distinguish interactive content beginning and finish.
- Has a drop-down selector to choose what content to show.
- Each option in selector has a anchor to be able to get an individual link and send it to another person who will see the respective content when clicking the link.
- A `label` can be added before selector as an option intro-phrase like *Choose version*.
- Dropdown item names are written in respective templates as `#XX_YY_ZZ`, when rendering `_` will be replaced with space ` `.

**Known issues**: 

- Headings *inside* a selector option loose their linkability so instead better to proived to another person a link to the entire option.

**Usage example**:

<TableTabs label="Choose an extension: " >

  <template #Extension_1>
  
  Any your content.

  </template>

  <template #Extension_2>
  
  Any your content.

  </template>

</TableTabs>

## Components: ELSOSSelector

**Description**:

- Displays an interactive grid of operating system cards for ELS for OS.
- Each card shows an OS icon, name, and a hover arrow.
- Clicking a card navigates to the respective OS documentation page.
- Used on the ELS for OS landing page (`/els-for-os/`).

**Props**: None. The OS list is hardcoded in the component.

**Usage example**:

```markdown
<ELSOSSelector />
```

## Components: ELSPrerequisites

**Description**:

- Styled container for listing prerequisites.
- Uses a slot for content — write plain markdown inside the tags.
- Renders a blue-gradient card with checkmark icons on list items.
- Optional named slot `title` to override the heading (defaults to "Prerequisites").

**Props**: None (slot-based).

**Usage example**:

```markdown
<ELSPrerequisites>

* A valid TuxCare ELS [license key](https://tuxcare.com/extended-lifecycle-support/)
* Root or `sudo` access to the server
* TCP port 443 open to `cln.cloudlinux.com`

</ELSPrerequisites>
```

With a custom title:

```markdown
<ELSPrerequisites>
<template #title>Before you begin</template>

* Requirement one
* Requirement two

</ELSPrerequisites>
```

## Components: ELSSteps

**Description**:

- Semantic wrapper for numbered installation/setup steps.
- Write a standard markdown ordered list (`1.`, `2.`, `3.`) inside the tags.
- Step styling (numbered circles, connector lines) is applied globally via `theme.styl`, so all `<ol>` elements in `.content` pages get the same treatment.
- The component adds spacing and code-block margin adjustments.

**Props**: None (slot-based).

**Usage example**:

```markdown
<ELSSteps>

1. Download the install script

   <CodeWithCopy>

   ```
   wget https://repo.els.tuxcare.com/centos6-els/install-centos6-els-repo.sh
   ```

   </CodeWithCopy>

2. Run with your license key

   <CodeWithCopy>

   ```
   sh install-centos6-els-repo.sh --license-key XXXXXXXX
   ```

   </CodeWithCopy>

3. Verify installation

   <CodeWithCopy>

   ```
   yum info els-define
   ```

   </CodeWithCopy>

</ELSSteps>
```

## Components: WhatsNext

**Description**:

- Reusable card grid for "What's next?" links at the bottom of a page.
- Write a plain markdown unordered list (`*`) inside the tags. Each item follows the pattern: `* EMOJI [Link text](url) — Description`
- The component parses each list item at mount time and restructures it into a clickable card with icon, title, description, and hover arrow.
- Supports custom image icons: `* ![](/images/icon.webp) [Link text](url) — Description`
- The entire card is clickable, not just the link text.
- Optional named slot `title` to override the heading (defaults to "What's next?").

**Props**:

- `versions` (Array, optional): Enables version tabs. When set, list items can be prefixed with `[tag]` to associate them with a specific tab. Items without a tag are shown for all tabs.

**Usage example** (basic):

```markdown
<WhatsNext>

* 🔒 [OVAL security stream](https://security.tuxcare.com/oval/...) — OpenSCAP-compatible vulnerability data
* 📋 [CSAF advisories](https://security.tuxcare.com/csaf/...) — Machine-readable security advisories
* 📚 [All supported OS](/els-for-os/) — See all operating systems covered by ELS

</WhatsNext>
```

**Usage example** (with version tabs):

```markdown
<WhatsNext :versions="['CentOS 8.4', 'CentOS 8.5']">

* [8.4] 🔒 [OVAL security stream](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml) — OpenSCAP-compatible vulnerability data
* [8.5] 🔒 [OVAL security stream](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml) — OpenSCAP-compatible vulnerability data
* ⚡ [CVE tracker](https://cve.tuxcare.com/els/cve) — Track vulnerabilities (shown in all tabs)

</WhatsNext>
```

**Usage example** (with custom title and image icons):

```markdown
<WhatsNext>
<template #title>Related resources</template>

* ![](/images/icon.webp) [Link text](/path/) — Description here

</WhatsNext>
```

**Markdown format per list item**:

```
* [VERSION_TAG] ICON [Link text](url) — Description
```

Where:
- `[VERSION_TAG]` — optional, e.g. `[8.4]`, used only with `:versions` prop
- `ICON` — emoji (e.g. `🔒`) or markdown image (`![](/images/icon.webp)`)
- `[Link text](url)` — the card title and destination (required)
- `— Description` — text after the em-dash becomes the card subtitle (optional)

## Components: ResolvedCveTable

**Description**:

- Displays a dynamic table of resolved CVEs (Common Vulnerabilities and Exposures) for TuxCare ELS projects.
- Fetches real-time data from the TuxCare CVE API and presents it in an interactive, sortable, and searchable table.
- Shows statistics dashboard with total resolved CVEs and breakdown by severity (Critical+High, Medium, Low, None).
- Includes DataTables functionality for desktop users (search, sort, pagination).
- Mobile-optimized: DataTables disabled on screens < 768px for better mobile experience.
- Must be wrapped in `<ClientOnly>` tags for proper SSR compatibility.

**Features**:

- **Stats Cards**: Visual summary of CVE counts by severity
- **Sortable Table**: Click column headers to sort (default: severity desc, then score desc)
- **Search**: Filter CVEs by any field (CVE name, package, version, etc.)
- **Pagination**: Choose 10, 25, 50, 100, or All entries per page
- **Severity Color Coding**: Critical (red), High (orange), Medium (amber), Low (green), None (gray)
- **Error Handling**: Displays error message with retry button if data fetch fails
- **Loading State**: Shows spinner while fetching data

**Props**:

- `project` (String, **required**): Project identifier key for the API endpoint
- `hide_none` (Boolean, optional, default: `false`): Whether to filter out CVEs with "None" severity

**Available Projects**:

| Project | Key | Description |
|---------|-----|-------------|
| Spring Framework ELS | `spring-els` | Extended Lifecycle Support |
| Apache Tomcat | `apache-tomcat` | Web server |
| Apache Hadoop | `apache-hadoop` | Distributed computing |
| Apache Struts | `apache-struts` | Web framework |
| Apache Spark | `apache-spark` | Analytics engine |
| Apache Kafka | `apache-kafka` | Event streaming |
| PostgreSQL Driver | `postgresql-driver` | JDBC driver |
| Protocol Buffers | `protobuf` | Serialization library |
| Apache Commons Lang | `commons-lang` | Utility library |
| Jackson | `jackson` | JSON processing |

**Usage example**:

- Basic usage (show all CVEs including "None" severity):

  ```markdown
  <ClientOnly>
    <ResolvedCveTable project="spring-els" />
  </ClientOnly>
  ```

- Hide "None" severity CVEs:

  ```markdown
  <ClientOnly>
    <ResolvedCveTable project="apache-tomcat" :hide_none="true" />
  </ClientOnly>
  ```

- For Apache Kafka:

  ```markdown
  <ClientOnly>
    <ResolvedCveTable project="apache-kafka" />
  </ClientOnly>
  ```

**Important Notes**:

- **Always wrap in `<ClientOnly>` tags** to prevent server-side rendering issues.
- The component requires an active internet connection to fetch CVE data from the API.
- Table columns: CVE Name, Severity, Group, Package, Vulnerable Version, Fixed Version.
- Score column is hidden but used for secondary sorting.
- On mobile devices, the table displays without DataTables features for better UX.