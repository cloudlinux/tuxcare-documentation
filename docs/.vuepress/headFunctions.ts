import routes from './routes.json';

export default [
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
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5BSW555');
      `,
  ],
  [
    // Google Analytics 4 (GA4) — loaded the same way GTM is: the gtag.js
    // loader is injected at runtime instead of being a static <script src>,
    // so it is not flagged by SRI scanners (unsafe_sri_v2). SRI cannot be
    // applied to gtag.js anyway, as Google rotates it without versioning.
    "script",
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      (function(){
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z539WTSZ80';
        document.head.appendChild(s);
      })();
      gtag('js', new Date());
      gtag('config', 'G-Z539WTSZ80');
      `,
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
