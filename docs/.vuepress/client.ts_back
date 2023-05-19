import {provide} from "vue";
import {defineClientConfig} from "@vuepress/client";
import InstantSearch from 'vue-instantsearch/vue3/es/index.js';

import Layout from "./theme/layouts/Layout.vue";
import HomeLayout from "./theme/layouts/HomeLayout.vue";

import bottomLinks from "./config-client/bottomLinks";
import documents from "./config-client/documents";
import sidebar from "./config-client/sidebar";
import social from "./config-client/social";

export default defineClientConfig({
    layouts: {
        Layout,
        HomeLayout
    },
    enhance({app}) {
        app.component('InstantSearch', InstantSearch)
    },
    setup() {
        provide('themeConfig', {
            //general
            cloudlinuxSite: "https://cloudlinux.com",
            defaultURL: "/",
            githubBranch: "master",
            allowGithubEdit: true,
            githubMainDir: "docs",
            sidebarDepth: 2,
            githubRepository: "cloudlinux/cloudlinux-documentation",
            submitRequestURL: "https://www.cloudlinux.com/support-portal/",
            tryFreeLink: "https://cloudlinux.com/trial",

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
            headerSearch: "CloudLinux Product Documentation",
            headerSearchPlaceholder: "Search across all CloudLinux product documentation",

            //locales
            locales: {
                bottomLinks,
                editLinkText: "Edit this page",
                sidebar,
                siteTitle: "Documentation",
                stayInTouch: "Stay in touch",
                submitRequest: "Submit support request",
                tryFree: "Try Free",
            },

            // Products
            productsList: ['CloudLinux', 'Imunify', 'TuxCare'],
            productsTitle: 'Products',

            //social links for footer
            social,

            // Algolia
            algoliaOptions: {
                apiKey: "e6b9d79daf71aa98e2e2a51d4556f9d4",
                indexName: "cloudlinuxos",
                appId: "0TCNL6CGX8"
            },

            MAX_ALGOLIA_VISIBLE_RESULT: 10,
            MAX_ALGOLIA_VISIBLE_ROWS: 5,
        })
    }
})