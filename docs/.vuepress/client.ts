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
import SecureChainEcosystemSelector from "./components/SecureChainEcosystemSelector.vue";
import ELSOSSelector from "./components/ELSOSSelector.vue";
import ELSVendorEol from "./components/ELSVendorEol.vue";
import ELSPrerequisites from "./components/ELSPrerequisites.vue";
import ELSSteps from "./components/ELSSteps.vue";
import WhatsNext from "./components/WhatsNext.vue";
import ELSApplication from "./components/ELSApplication.vue";
import GlobalCopyCode from "./components/GlobalCopyCode.vue";

import ELSBadge from './components/ELSBadge.vue'
import ContactSales from './components/ContactSales.vue'

export default defineClientConfig({
    rootComponents: [
        Chat,
        GlobalCopyCode,
    ],
    async enhance({ app, router }) {
        // Runtime backstop for markup the build can't fix on its own. Header
        // anchors already get tabindex="-1" at build time (config.ts
        // markdown.anchor); this also covers anchors added by components.
        // Each step is isolated so one failure can't skip the others.
        const safely = (fn: () => void) => {
            try { fn(); } catch (e) { /* keep the remaining fixes running */ }
        };
        const applyA11yRuntimeFixes = () => {
            // Decorative aria-hidden anchors must not be keyboard stops.
            safely(() => {
                document.querySelectorAll('a.header-anchor[aria-hidden="true"]:not([tabindex="-1"])').forEach((el) => {
                    el.setAttribute('tabindex', '-1');
                });
            });

            // RouterLink marks same-page #hash links in content as
            // aria-current="page", which misreports them as the current page.
            safely(() => {
                document.querySelectorAll<HTMLAnchorElement>('.content a[aria-current]').forEach((a) => {
                    const href = a.getAttribute('href') || '';
                    if (href.startsWith('#') || (a.hash && a.pathname === window.location.pathname)) {
                        a.removeAttribute('aria-current');
                    }
                });
            });

            // Horizontally scrollable code blocks must be keyboard focusable
            // (WCAG 2.1.1). CodeTabs sets this in its own template.
            safely(() => {
                document.querySelectorAll('div[class*="language-"] > pre:not([tabindex])').forEach((pre) => {
                    pre.setAttribute('tabindex', '0');
                });
            });

            // Markdown tables are display:block + overflow-x:auto; when one
            // actually overflows, make it focusable so it can be scrolled with
            // the keyboard. Name it after the nearest preceding heading.
            safely(() => {
                document.querySelectorAll<HTMLTableElement>('.content table').forEach((table) => {
                    if (table.closest('.code-tabs')) return;
                    const overflows = table.scrollWidth > table.clientWidth + 1;
                    if (overflows && !table.hasAttribute('tabindex')) {
                        table.setAttribute('tabindex', '0');
                        table.dataset.a11yScroll = '1';
                        if (!table.hasAttribute('aria-label') && !table.querySelector('caption')) {
                            const heading = findPrecedingHeading(table);
                            if (heading) table.setAttribute('aria-label', `${heading} table`);
                        }
                    } else if (!overflows && table.dataset.a11yScroll) {
                        table.removeAttribute('tabindex');
                        delete table.dataset.a11yScroll;
                    }
                });
            });
        };

        const findPrecedingHeading = (el: Element): string => {
            let node: Element | null = el;
            while (node && node !== document.body) {
                let sib = node.previousElementSibling;
                while (sib) {
                    if (/^H[1-6]$/.test(sib.tagName)) {
                        return (sib.textContent || '').replace(/^#\s*/, '').trim();
                    }
                    sib = sib.previousElementSibling;
                }
                node = node.parentElement;
            }
            return '';
        };

        const scheduleA11yFixes = () => {
            setTimeout(applyA11yRuntimeFixes, 0);
            // Second pass for content that renders late (client-only
            // components, async route chunks).
            setTimeout(applyA11yRuntimeFixes, 500);
        };

        app.config.globalProperties.$eventBus = mitt();
        app.component("CodeTabs", CodeTabs);
        app.component("TableTabs", TableTabs);
        app.component("ELSTechnology", ELSTechnology);
        app.component("ELSRTechnology", ELSRTechnology);
        app.component("SecureChainEcosystemSelector", SecureChainEcosystemSelector);
        app.component("ELSOSSelector", ELSOSSelector);
        app.component("ELSVendorEol", ELSVendorEol);
        app.component("ELSPrerequisites", ELSPrerequisites);
        app.component("ELSSteps", ELSSteps);
        app.component("WhatsNext", WhatsNext);
        app.component("ELSApplication", ELSApplication);
        app.component("ELSBadge", ELSBadge);
        app.component("ContactSales", ContactSales);

        if (!__VUEPRESS_SSR__) {
            scheduleA11yFixes();
            router.isReady().then(scheduleA11yFixes).catch(() => {});
            router.afterEach(scheduleA11yFixes);
            // Re-run (throttled, so a stream of mutations can't starve it) on
            // resize and when content is swapped in place, e.g. a TableTabs
            // tab change renders a new table.
            let a11yTimer: ReturnType<typeof setTimeout> | undefined;
            const debouncedA11yFixes = () => {
                if (a11yTimer) return;
                a11yTimer = setTimeout(() => {
                    a11yTimer = undefined;
                    applyA11yRuntimeFixes();
                }, 150);
            };
            window.addEventListener('resize', debouncedA11yFixes, { passive: true });
            if (typeof MutationObserver !== 'undefined') {
                new MutationObserver(debouncedA11yFixes).observe(document.body, { childList: true, subtree: true });
            }
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
            footerCustomLogo: 'global/TuxCare_color_logo_tagline_RGB.webp',
            headerDefaultSearchIcon: 'global/search.svg',
            siteLogo: "global/TuxCare_white-blue_logo_tagline_RGB.webp",
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
            // Fetch more than MAX_VISIBLE_RESULT so "Show more" has results to reveal.
            MAX_HITS_PER_PAGE: 24,
        })
    }
})
