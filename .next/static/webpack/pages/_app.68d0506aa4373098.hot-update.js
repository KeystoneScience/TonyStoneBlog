"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./data/siteMetadata.js":
/*!******************************!*\
  !*** ./data/siteMetadata.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\nvar siteMetadata = {\n    title: 'Stone Cold Thoughts',\n    author: 'Tony Stone',\n    headerTitle: 'Blog',\n    description: 'A blog to detail my daily works and thoughts.',\n    language: 'en-us',\n    siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',\n    siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',\n    siteLogo: '/static/images/logo.png',\n    image: '/static/images/avatar.png',\n    socialBanner: '/static/images/twitter-card.png',\n    email: 'address@yoursite.com',\n    github: 'https://github.com',\n    twitter: 'https://twitter.com/Twitter',\n    facebook: 'https://facebook.com',\n    youtube: 'https://youtube.com/keystonescience',\n    linkedin: 'https://www.linkedin.com/u/nateastone',\n    locale: 'en-US',\n    analytics: {\n        // supports plausible, simpleAnalytics or googleAnalytics\n        plausibleDataDomain: '',\n        simpleAnalytics: false,\n        googleAnalyticsId: ''\n    },\n    newsletter: {\n        // supports mailchimp, buttondown, convertkit\n        // Please add your .env file and modify it according to your selection\n        provider: 'buttondown'\n    },\n    comment: {\n        // Select a provider and use the environment variables associated to it\n        // https://vercel.com/docs/environment-variables\n        provider: 'giscus',\n        giscusConfig: {\n            // Visit the link below, and follow the steps in the 'configuration' section\n            // https://giscus.app/\n            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,\n            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,\n            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,\n            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,\n            mapping: 'pathname',\n            reactions: '1',\n            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable\n            metadata: '0',\n            // theme example: light, dark, dark_dimmed, dark_high_contrast\n            // transparent_dark, preferred_color_scheme, custom\n            theme: 'light',\n            // theme when dark mode\n            darkTheme: 'transparent_dark',\n            // If the theme option above is set to 'custom`\n            // please provide a link below to your custom theme css file.\n            // example: https://giscus.app/themes/custom_example.css\n            themeURL: ''\n        },\n        utterancesConfig: {\n            // Visit the link below, and follow the steps in the 'configuration' section\n            // https://utteranc.es/\n            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,\n            issueTerm: '',\n            label: '',\n            // theme example: github-light, github-dark, preferred-color-scheme\n            // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light\n            theme: '',\n            // theme when dark mode\n            darkTheme: ''\n        },\n        disqusConfig: {\n            // https://help.disqus.com/en/articles/1717111-what-s-a-shortname\n            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME\n        }\n    }\n};\nmodule.exports = siteMetadata;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL3NpdGVNZXRhZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxHQUFLLENBQUNBLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxLQUFLLEVBQUUsQ0FBcUI7SUFDNUJDLE1BQU0sRUFBRSxDQUFZO0lBQ3BCQyxXQUFXLEVBQUUsQ0FBTTtJQUNuQkMsV0FBVyxFQUFFLENBQStDO0lBQzVEQyxRQUFRLEVBQUUsQ0FBTztJQUNqQkMsT0FBTyxFQUFFLENBQWlEO0lBQzFEQyxRQUFRLEVBQUUsQ0FBd0Q7SUFDbEVDLFFBQVEsRUFBRSxDQUF5QjtJQUNuQ0MsS0FBSyxFQUFFLENBQTJCO0lBQ2xDQyxZQUFZLEVBQUUsQ0FBaUM7SUFDL0NDLEtBQUssRUFBRSxDQUFzQjtJQUM3QkMsTUFBTSxFQUFFLENBQW9CO0lBQzVCQyxPQUFPLEVBQUUsQ0FBNkI7SUFDdENDLFFBQVEsRUFBRSxDQUFzQjtJQUNoQ0MsT0FBTyxFQUFFLENBQXFDO0lBQzlDQyxRQUFRLEVBQUUsQ0FBdUM7SUFDakRDLE1BQU0sRUFBRSxDQUFPO0lBQ2ZDLFNBQVMsRUFBRSxDQUFDO1FBQ1YsRUFBeUQ7UUFDekRDLG1CQUFtQixFQUFFLENBQUU7UUFDdkJDLGVBQWUsRUFBRSxLQUFLO1FBQ3RCQyxpQkFBaUIsRUFBRSxDQUFFO0lBQ3ZCLENBQUM7SUFDREMsVUFBVSxFQUFFLENBQUM7UUFDWCxFQUE2QztRQUM3QyxFQUFzRTtRQUN0RUMsUUFBUSxFQUFFLENBQVk7SUFDeEIsQ0FBQztJQUNEQyxPQUFPLEVBQUUsQ0FBQztRQUNSLEVBQXVFO1FBQ3ZFLEVBQWdEO1FBQ2hERCxRQUFRLEVBQUUsQ0FBUTtRQUNsQkUsWUFBWSxFQUFFLENBQUM7WUFDYixFQUE0RTtZQUM1RSxFQUFzQjtZQUN0QkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsdUJBQXVCO1lBQ3pDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxnQ0FBZ0M7WUFDMURDLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLDJCQUEyQjtZQUNqREMsVUFBVSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sOEJBQThCO1lBQ3REQyxPQUFPLEVBQUUsQ0FBVTtZQUNuQkMsU0FBUyxFQUFFLENBQUc7WUFDZCxFQUF1RjtZQUN2RkMsUUFBUSxFQUFFLENBQUc7WUFDYixFQUE4RDtZQUM5RCxFQUFtRDtZQUNuREMsS0FBSyxFQUFFLENBQU87WUFDZCxFQUF1QjtZQUN2QkMsU0FBUyxFQUFFLENBQWtCO1lBQzdCLEVBQStDO1lBQy9DLEVBQTZEO1lBQzdELEVBQXdEO1lBQ3hEQyxRQUFRLEVBQUUsQ0FBRTtRQUNkLENBQUM7UUFDREMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNqQixFQUE0RTtZQUM1RSxFQUF1QjtZQUN2QmhCLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNlLDJCQUEyQjtZQUM3Q0MsU0FBUyxFQUFFLENBQUU7WUFDYkMsS0FBSyxFQUFFLENBQUU7WUFDVCxFQUFtRTtZQUNuRSxFQUFtRTtZQUNuRU4sS0FBSyxFQUFFLENBQUU7WUFDVCxFQUF1QjtZQUN2QkMsU0FBUyxFQUFFLENBQUU7UUFDZixDQUFDO1FBQ0RNLFlBQVksRUFBRSxDQUFDO1lBQ2IsRUFBaUU7WUFDakVDLFNBQVMsRUFBRXBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0IsNEJBQTRCO1FBQ3JELENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR2xELFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9zaXRlTWV0YWRhdGEuanM/NzM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaXRlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiAnU3RvbmUgQ29sZCBUaG91Z2h0cycsXG4gIGF1dGhvcjogJ1RvbnkgU3RvbmUnLFxuICBoZWFkZXJUaXRsZTogJ0Jsb2cnLFxuICBkZXNjcmlwdGlvbjogJ0EgYmxvZyB0byBkZXRhaWwgbXkgZGFpbHkgd29ya3MgYW5kIHRob3VnaHRzLicsXG4gIGxhbmd1YWdlOiAnZW4tdXMnLFxuICBzaXRlVXJsOiAnaHR0cHM6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLnZlcmNlbC5hcHAnLFxuICBzaXRlUmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1scngvdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZycsXG4gIHNpdGVMb2dvOiAnL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnLFxuICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2F2YXRhci5wbmcnLFxuICBzb2NpYWxCYW5uZXI6ICcvc3RhdGljL2ltYWdlcy90d2l0dGVyLWNhcmQucG5nJyxcbiAgZW1haWw6ICdhZGRyZXNzQHlvdXJzaXRlLmNvbScsXG4gIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tL1R3aXR0ZXInLFxuICBmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcbiAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20va2V5c3RvbmVzY2llbmNlJyxcbiAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vdS9uYXRlYXN0b25lJyxcbiAgbG9jYWxlOiAnZW4tVVMnLFxuICBhbmFseXRpY3M6IHtcbiAgICAvLyBzdXBwb3J0cyBwbGF1c2libGUsIHNpbXBsZUFuYWx5dGljcyBvciBnb29nbGVBbmFseXRpY3NcbiAgICBwbGF1c2libGVEYXRhRG9tYWluOiAnJywgLy8gZS5nLiB0YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLnZlcmNlbC5hcHBcbiAgICBzaW1wbGVBbmFseXRpY3M6IGZhbHNlLCAvLyB0cnVlIG9yIGZhbHNlXG4gICAgZ29vZ2xlQW5hbHl0aWNzSWQ6ICcnLCAvLyBlLmcuIFVBLTAwMDAwMC0yIG9yIEctWFhYWFhYWFxuICB9LFxuICBuZXdzbGV0dGVyOiB7XG4gICAgLy8gc3VwcG9ydHMgbWFpbGNoaW1wLCBidXR0b25kb3duLCBjb252ZXJ0a2l0XG4gICAgLy8gUGxlYXNlIGFkZCB5b3VyIC5lbnYgZmlsZSBhbmQgbW9kaWZ5IGl0IGFjY29yZGluZyB0byB5b3VyIHNlbGVjdGlvblxuICAgIHByb3ZpZGVyOiAnYnV0dG9uZG93bicsXG4gIH0sXG4gIGNvbW1lbnQ6IHtcbiAgICAvLyBTZWxlY3QgYSBwcm92aWRlciBhbmQgdXNlIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXNzb2NpYXRlZCB0byBpdFxuICAgIC8vIGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2Vudmlyb25tZW50LXZhcmlhYmxlc1xuICAgIHByb3ZpZGVyOiAnZ2lzY3VzJywgLy8gc3VwcG9ydGVkIHByb3ZpZGVyczogZ2lzY3VzLCB1dHRlcmFuY2VzLCBkaXNxdXNcbiAgICBnaXNjdXNDb25maWc6IHtcbiAgICAgIC8vIFZpc2l0IHRoZSBsaW5rIGJlbG93LCBhbmQgZm9sbG93IHRoZSBzdGVwcyBpbiB0aGUgJ2NvbmZpZ3VyYXRpb24nIHNlY3Rpb25cbiAgICAgIC8vIGh0dHBzOi8vZ2lzY3VzLmFwcC9cbiAgICAgIHJlcG86IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dJU0NVU19SRVBPLFxuICAgICAgcmVwb3NpdG9yeUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfUkVQT1NJVE9SWV9JRCxcbiAgICAgIGNhdGVnb3J5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfQ0FURUdPUlksXG4gICAgICBjYXRlZ29yeUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfQ0FURUdPUllfSUQsXG4gICAgICBtYXBwaW5nOiAncGF0aG5hbWUnLCAvLyBzdXBwb3J0ZWQgb3B0aW9uczogcGF0aG5hbWUsIHVybCwgdGl0bGVcbiAgICAgIHJlYWN0aW9uczogJzEnLCAvLyBFbW9qaSByZWFjdGlvbnM6IDEgPSBlbmFibGUgLyAwID0gZGlzYWJsZVxuICAgICAgLy8gU2VuZCBkaXNjdXNzaW9uIG1ldGFkYXRhIHBlcmlvZGljYWxseSB0byB0aGUgcGFyZW50IHdpbmRvdzogMSA9IGVuYWJsZSAvIDAgPSBkaXNhYmxlXG4gICAgICBtZXRhZGF0YTogJzAnLFxuICAgICAgLy8gdGhlbWUgZXhhbXBsZTogbGlnaHQsIGRhcmssIGRhcmtfZGltbWVkLCBkYXJrX2hpZ2hfY29udHJhc3RcbiAgICAgIC8vIHRyYW5zcGFyZW50X2RhcmssIHByZWZlcnJlZF9jb2xvcl9zY2hlbWUsIGN1c3RvbVxuICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgICAvLyB0aGVtZSB3aGVuIGRhcmsgbW9kZVxuICAgICAgZGFya1RoZW1lOiAndHJhbnNwYXJlbnRfZGFyaycsXG4gICAgICAvLyBJZiB0aGUgdGhlbWUgb3B0aW9uIGFib3ZlIGlzIHNldCB0byAnY3VzdG9tYFxuICAgICAgLy8gcGxlYXNlIHByb3ZpZGUgYSBsaW5rIGJlbG93IHRvIHlvdXIgY3VzdG9tIHRoZW1lIGNzcyBmaWxlLlxuICAgICAgLy8gZXhhbXBsZTogaHR0cHM6Ly9naXNjdXMuYXBwL3RoZW1lcy9jdXN0b21fZXhhbXBsZS5jc3NcbiAgICAgIHRoZW1lVVJMOiAnJyxcbiAgICB9LFxuICAgIHV0dGVyYW5jZXNDb25maWc6IHtcbiAgICAgIC8vIFZpc2l0IHRoZSBsaW5rIGJlbG93LCBhbmQgZm9sbG93IHRoZSBzdGVwcyBpbiB0aGUgJ2NvbmZpZ3VyYXRpb24nIHNlY3Rpb25cbiAgICAgIC8vIGh0dHBzOi8vdXR0ZXJhbmMuZXMvXG4gICAgICByZXBvOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VVFRFUkFOQ0VTX1JFUE8sXG4gICAgICBpc3N1ZVRlcm06ICcnLCAvLyBzdXBwb3J0ZWQgb3B0aW9uczogcGF0aG5hbWUsIHVybCwgdGl0bGVcbiAgICAgIGxhYmVsOiAnJywgLy8gbGFiZWwgKG9wdGlvbmFsKTogQ29tbWVudCDwn5KsXG4gICAgICAvLyB0aGVtZSBleGFtcGxlOiBnaXRodWItbGlnaHQsIGdpdGh1Yi1kYXJrLCBwcmVmZXJyZWQtY29sb3Itc2NoZW1lXG4gICAgICAvLyBnaXRodWItZGFyay1vcmFuZ2UsIGljeS1kYXJrLCBkYXJrLWJsdWUsIHBob3Rvbi1kYXJrLCBib3h5LWxpZ2h0XG4gICAgICB0aGVtZTogJycsXG4gICAgICAvLyB0aGVtZSB3aGVuIGRhcmsgbW9kZVxuICAgICAgZGFya1RoZW1lOiAnJyxcbiAgICB9LFxuICAgIGRpc3F1c0NvbmZpZzoge1xuICAgICAgLy8gaHR0cHM6Ly9oZWxwLmRpc3F1cy5jb20vZW4vYXJ0aWNsZXMvMTcxNzExMS13aGF0LXMtYS1zaG9ydG5hbWVcbiAgICAgIHNob3J0bmFtZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRElTUVVTX1NIT1JUTkFNRSxcbiAgICB9LFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaXRlTWV0YWRhdGE7XG4iXSwibmFtZXMiOlsic2l0ZU1ldGFkYXRhIiwidGl0bGUiLCJhdXRob3IiLCJoZWFkZXJUaXRsZSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJzaXRlVXJsIiwic2l0ZVJlcG8iLCJzaXRlTG9nbyIsImltYWdlIiwic29jaWFsQmFubmVyIiwiZW1haWwiLCJnaXRodWIiLCJ0d2l0dGVyIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwibGlua2VkaW4iLCJsb2NhbGUiLCJhbmFseXRpY3MiLCJwbGF1c2libGVEYXRhRG9tYWluIiwic2ltcGxlQW5hbHl0aWNzIiwiZ29vZ2xlQW5hbHl0aWNzSWQiLCJuZXdzbGV0dGVyIiwicHJvdmlkZXIiLCJjb21tZW50IiwiZ2lzY3VzQ29uZmlnIiwicmVwbyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HSVNDVVNfUkVQTyIsInJlcG9zaXRvcnlJZCIsIk5FWFRfUFVCTElDX0dJU0NVU19SRVBPU0lUT1JZX0lEIiwiY2F0ZWdvcnkiLCJORVhUX1BVQkxJQ19HSVNDVVNfQ0FURUdPUlkiLCJjYXRlZ29yeUlkIiwiTkVYVF9QVUJMSUNfR0lTQ1VTX0NBVEVHT1JZX0lEIiwibWFwcGluZyIsInJlYWN0aW9ucyIsIm1ldGFkYXRhIiwidGhlbWUiLCJkYXJrVGhlbWUiLCJ0aGVtZVVSTCIsInV0dGVyYW5jZXNDb25maWciLCJORVhUX1BVQkxJQ19VVFRFUkFOQ0VTX1JFUE8iLCJpc3N1ZVRlcm0iLCJsYWJlbCIsImRpc3F1c0NvbmZpZyIsInNob3J0bmFtZSIsIk5FWFRfUFVCTElDX0RJU1FVU19TSE9SVE5BTUUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/siteMetadata.js\n");

/***/ })

});