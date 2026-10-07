import routes from './routes.json';

export default [
  // Cookiebot and Google Tag Manager are in templates/build.html, not here:
  // VuePress re-creates these tags on every page change, which re-runs scripts.
  [
    "script",
    {
      type: "application/ld+json",
      id: "tc-org-schema",
    },
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TuxCare",
      url: "https://tuxcare.com",
      logo: "https://docs.tuxcare.com/global/TuxCare_color_logo_tagline_RGB.webp",
      sameAs: [
        "https://www.linkedin.com/company/tuxcare",
        "https://www.youtube.com/@TuxCare",
      ],
    }),
  ],
  [
    "script",
    {
      type: "application/ld+json",
      id: "tc-website-schema",
    },
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "TuxCare Documentation",
      url: "https://docs.tuxcare.com",
      publisher: {
        "@type": "Organization",
        name: "TuxCare",
        url: "https://tuxcare.com",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://docs.tuxcare.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  ],
  [
    "script",
    {},
    `
      (function() {
        var routes = ${JSON.stringify(routes)};
    
        for (var route_url in routes) {
          if (window.location.href.indexOf(route_url) !== -1) {
            window.location.href = routes[route_url];
          }
        }
      })();
      `,
  ],
  [
    "script",
    {},
    `
                    (function() {
                      // Trigger the scroll event without actually scrolling
                      function triggerScrollEvent() {
                        const targetElement = window;
                        const scrollEvent = new Event('scroll', {
                          bubbles: true,
                          cancelable: true,
                        });
                        targetElement.dispatchEvent(scrollEvent);
                      }
              
                      // Call the triggerScrollEvent and scrollBodyDown functions after the page is fully loaded
                      window.addEventListener('load', () => {
                        triggerScrollEvent();
                      });
                    })();
                  `,
  ],
];
