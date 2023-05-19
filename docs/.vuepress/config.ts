import {defineUserConfig, viteBundler} from "vuepress";
import theme from "./theme"
import plugins from "./config-user/plugins";
export default defineUserConfig({
    theme,
    plugins,
    bundler: viteBundler({
        viteOptions: {
            ssr: {
                noExternal: ['vue-select']
            }
        },
    })
});