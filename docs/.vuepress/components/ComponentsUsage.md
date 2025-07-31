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