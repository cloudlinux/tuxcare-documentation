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