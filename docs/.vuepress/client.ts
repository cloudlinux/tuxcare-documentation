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
import TableTabs from "./components/TableTabs.vue";
import ELSTechnology from "./components/ELSTechnology.vue";
import ELSRTechnology from "./components/ELSRTechnology.vue";
import SecureChainTechnology from "./components/SecureChainTechnology.vue";
import ELSOSSelector from "./components/ELSOSSelector.vue";
import ELSPrerequisites from "./components/ELSPrerequisites.vue";
import ELSSteps from "./components/ELSSteps.vue";
import WhatsNext from "./components/WhatsNext.vue";
import ELSApplication from "./components/ELSApplication.vue";
import GlobalCopyCode from "./components/GlobalCopyCode.vue";

import ResolvedCveTable from './components/ResolvedCveTable.vue'
import ELSBadge from './components/ELSBadge.vue'
import ContactSales from './components/ContactSales.vue'

export default defineClientConfig({
    rootComponents: [
        Chat,
        GlobalCopyCode,
    ],
    async enhance({ app, router }) {
        const applyA11yRuntimeFixes = () => {
            // VuePress header anchors are decorative links; remove them from keyboard tab order.
            document.querySelectorAll('a.header-anchor[aria-hidden="true"]').forEach((el) => {
                el.setAttribute('tabindex', '-1');
            });

            // Make horizontally scrollable code blocks keyboard focusable.
            document.querySelectorAll('div[class*="language-"] > pre').forEach((pre) => {
                const preElement = pre;
                if (!preElement.hasAttribute('tabindex')) {
                    preElement.setAttribute('tabindex', '0');
                }
            });
        };

        app.config.globalProperties.$eventBus = mitt();
        app.component("CodeTabs", CodeTabs);
        app.component("ResolvedCveTable", ResolvedCveTable);
        app.component("TableTabs", TableTabs);
        app.component("ELSTechnology", ELSTechnology);
        app.component("ELSRTechnology", ELSRTechnology);
        app.component("SecureChainTechnology", SecureChainTechnology);
        app.component("ELSOSSelector", ELSOSSelector);
        app.component("ELSPrerequisites", ELSPrerequisites);
        app.component("ELSSteps", ELSSteps);
        app.component("WhatsNext", WhatsNext);
        app.component("ELSApplication", ELSApplication);
        app.component("ELSBadge", ELSBadge);
        app.component("ContactSales", ContactSales);

        if (!__VUEPRESS_SSR__) {
            setTimeout(applyA11yRuntimeFixes, 0);
            router.afterEach(() => {
                setTimeout(applyA11yRuntimeFixes, 0);
            });
        }
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
            footerCustomLogo: 'global/TuxCare_color_logo_primary_RGB.webp',
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
