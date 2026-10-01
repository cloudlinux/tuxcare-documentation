import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme";
import plugins from "./config-user/plugins";
import headFunctions from "./headFunctions";
import { slugify } from "./utils/slugify";
import documents from "./config-client/documents";

// Site name appended to every page title: "<page title> | TuxCare Docs".
const SITE_TITLE = "TuxCare Docs";

// Product name by top-level section, e.g. "/els-for-os/" -> "ELS for Operating Systems".
const productTitles: Record<string, string> = Object.fromEntries(
  documents.map((doc) => [doc.link, doc.title]),
);

export default defineUserConfig({
  title: SITE_TITLE,
  theme,
  markdown: {
    anchor: {
      // Shared rule: strip punctuation/signs (, . ? ! ' etc.) from anchor urls.
      slugify,
    },
    headers: {
      level: [2, 3, 4, 5],
    },
  },
  plugins,
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['vue-select', 'vue-multiselect', 'jquery', 'datatables.net', 'datatables.net-dt'],
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            // List of deprecated HTML tags to treat as custom elements
            // Add any other custom elements to this list 
            const customElements = [
              'Badge', 'center', 'font', 'big', 'small', 'strike', 'tt', 
              'marquee', 'blink', 'applet', 'frameset', 'frame', 'dir',
            ];
            return customElements.includes(tag);
          },
        },
      },
    },
  }),
  head: headFunctions,
  extendsPage: (page) => {
    // The generated 404 page has no title of its own.
    if (page.path === "/404.html" && !page.title) {
      page.title = "Page not found";
      page.data.title = page.title;
    }
  },
  onInitialized: (app) => {
    // Pages in different products can share a title (".NET", "Managing the
    // ELS repository", ...). Add the product name to the <title> of those
    // pages only, so each title is unique. The visible H1 is unchanged.
    const pagesByTitle = new Map<string, typeof app.pages>();
    for (const page of app.pages) {
      if (!page.title) continue;
      const group = pagesByTitle.get(page.title) ?? [];
      group.push(page);
      pagesByTitle.set(page.title, group);
    }
    for (const group of pagesByTitle.values()) {
      if (group.length < 2) continue;
      for (const page of group) {
        const section = `/${page.path.split("/").filter(Boolean)[0] ?? ""}/`;
        const product = productTitles[section];
        if (!product || product === page.title) continue;
        const head = Array.isArray(page.frontmatter.head) ? page.frontmatter.head : [];
        // VuePress keeps the first <title> in the head list.
        page.frontmatter.head = [
          ["title", {}, `${page.title} – ${product} | ${SITE_TITLE}`],
          ...head,
        ];
      }
    }
  },
});
