import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme";
import plugins from "./config-user/plugins";
import headFunctions from "./headFunctions";

export default defineUserConfig({
  theme,
  markdown: {
    anchor: {
      slugify: str =>
        str
          .replace(/®/g, '')
          .toLowerCase()
          .replace(/\s+/g, '-')
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
});
