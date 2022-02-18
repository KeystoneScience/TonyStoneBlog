"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 7059:
/***/ ((module) => {


const siteMetadata = {
    title: 'Stone Cold Thoughts',
    author: 'Tony Stone',
    headerTitle: 'Stone Cold Thoughts.',
    description: '',
    language: 'en-us',
    siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
    siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
    siteLogo: '/static/images/logo.png',
    image: '/static/images/avatar.jpeg',
    socialBanner: '/static/images/twitter-card.png',
    email: 'tony@stonecoldthoughts.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com/Twitter',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com/keystonescience',
    linkedin: 'https://www.linkedin.com/in/nateastone/',
    locale: 'en-US',
    analytics: {
        // supports plausible, simpleAnalytics or googleAnalytics
        plausibleDataDomain: '',
        simpleAnalytics: false,
        googleAnalyticsId: ''
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit
        // Please add your .env file and modify it according to your selection
        provider: ''
    },
    comment: {
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: 'giscus',
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'pathname',
            reactions: '1',
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: '0',
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: 'light',
            // theme when dark mode
            darkTheme: 'transparent_dark',
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: ''
        },
        utterancesConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://utteranc.es/
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: '',
            label: '',
            // theme example: github-light, github-dark, preferred-color-scheme
            // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
            theme: '',
            // theme when dark mode
            darkTheme: ''
        },
        disqusConfig: {
            // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
        }
    }
};
module.exports = siteMetadata;


/***/ })

};
;