import {provide} from "vue";
import {defineClientConfig} from "@vuepress/client";
import mitt from 'mitt';

import Layout from "./theme/layouts/Layout.vue";
import HomeLayout from "./theme/layouts/HomeLayout.vue";
import NotFound from "./theme/layouts/NotFound.vue";

import bottomLinks from "./config-client/bottomLinks";
import navbarLinks from "./config-client/navbarLinks";
import documents from "./config-client/documents";
import sidebar from "./config-client/sidebar";
import social from "./config-client/social";

import Chat from "./components/Chat.vue";
import CodeTabs from "./components/CodeTabs.vue";
import CodeWithCopy from "./components/CodeWithCopy.vue";

import CVETracker from './components/JavaSpringSolvedCveTable.vue'

export default defineClientConfig({
    rootComponents: [
        Chat,
    ],
    async enhance({ app }) {
        app.config.globalProperties.$eventBus = mitt();
        app.component("CodeTabs", CodeTabs);
        app.component("CodeWithCopy", CodeWithCopy);
        app.component("CVETracker", CVETracker);
    },
    layouts: {
        Layout,
        HomeLayout,
        NotFound
    },
    setup() {
        provide('themeConfig', {
            //general
            cloudlinuxSite: "https://tuxcare.com",
            defaultURL: "/",
            githubBranch: "master",
            allowGithubEdit: true,
            githubMainDir: "docs",
            githubRepository: "cloudlinux/tuxcare-documentation",
            MOBILE_BREAKPOINT: 767,

            //docs cards
            documents,

            // icons
            arrowDownIcon: "arrows/arrow-down.svg",
            githubEditIcon: 'global/pen.svg',
            footerCustomLogo: 'global/we-are-cloudlinux.svg',
            headerDefaultSearchIcon: 'global/search.svg',
            siteLogo: "global/logo.svg",
            searchSelectIcon: 'arrows/select-down.svg',
            headerSearchIcon: 'global/header-search.svg',

            // Header
            headerSearch: "TuxCare Product Documentation",
            headerSearchPlaceholder: "Search across the TuxCare product documentation",

            //locales
            locales: {
                bottomLinks,
                editLinkText: "Edit this page",
                sidebar,
                siteTitle: "Documentation",
                stayInTouch: "Stay in touch",
                navbarLinks: navbarLinks,
            },

            // Products
            productsList: ['CloudLinux', 'Imunify', 'TuxCare'],
            productsTitle: 'Products',
            productsURLs: ['https://docs.cloudlinux.com', 'https://docs.imunify360.com', 'https://docs.tuxcare.com'],

            //social links for footer
            social,

            // Algolia
            algoliaOptions: {
                apiKey: "17e673c12b93fbf7c4a00159b0ae2de0",
                indexName: "tuxcare",
                appId: "R7FCMJM4P7"
            },

            MAX_VISIBLE_RESULT: 12,
            MAX_VISIBLE_ROWS: 12,
            MAX_HITS_PER_PAGE: 12,
        })
    }
})
