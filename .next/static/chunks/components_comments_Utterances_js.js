"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_comments_Utterances_js"],{

/***/ "./components/comments/Utterances.js":
/*!*******************************************!*\
  !*** ./components/comments/Utterances.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Utterances = function(param) {\n    var issueTerm = param.issueTerm;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), enableLoadComments = ref[0], setEnabledLoadComments = ref[1];\n    var ref1 = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(), theme = ref1.theme, resolvedTheme = ref1.resolvedTheme;\n    var commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.darkTheme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.theme);\n    var COMMENTS_ID = 'comments-container';\n    var LoadComments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setEnabledLoadComments(false);\n        var script = document.createElement('script');\n        script.src = 'https://utteranc.es/client.js';\n        script.setAttribute('repo', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.repo));\n        script.setAttribute('issue-term', issueTerm);\n        script.setAttribute('label', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.label));\n        script.setAttribute('theme', commentsTheme);\n        script.setAttribute('crossorigin', 'anonymous');\n        script.async = true;\n        var comments1 = document.getElementById(COMMENTS_ID);\n        if (comments1) comments1.appendChild(script);\n        return function() {\n            var comments = document.getElementById(COMMENTS_ID);\n            if (comments) comments.innerHTML = '';\n        };\n    }, [\n        commentsTheme,\n        issueTerm\n    ]);\n    // Reload on theme change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var iframe = document.querySelector('iframe.utterances-frame');\n        if (!iframe) return;\n        LoadComments();\n    }, [\n        LoadComments\n    ]);\n    // Added `relative` to fix a weird bug with `utterances-frame` position\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n        __source: {\n            fileName: \"/Users/nathanstone/Red Avocado/StoneColdThoughts/TonyStoneBlog/components/comments/Utterances.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            enableLoadComments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: LoadComments,\n                __source: {\n                    fileName: \"/Users/nathanstone/Red Avocado/StoneColdThoughts/TonyStoneBlog/components/comments/Utterances.js\",\n                    lineNumber: 46,\n                    columnNumber: 30\n                },\n                __self: _this,\n                children: \"Load Comments\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative utterances-frame\",\n                id: COMMENTS_ID,\n                __source: {\n                    fileName: \"/Users/nathanstone/Red Avocado/StoneColdThoughts/TonyStoneBlog/components/comments/Utterances.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Utterances, \"QoSFMeNXcKbsbttQCOWXG1zryKM=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = Utterances;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utterances);\nvar _c;\n$RefreshReg$(_c, \"Utterances\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL1V0dGVyYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErRDtBQUN6QjtBQUVROzs7QUFFOUMsR0FBSyxDQUFDTSxVQUFVLEdBQUcsUUFBUSxRQUFXLENBQUM7UUFBakJDLFNBQVMsU0FBVEEsU0FBUzs7SUFDN0IsR0FBSyxDQUFnRE4sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBM0RPLGtCQUFrQixHQUE0QlAsR0FBYyxLQUF4Q1Esc0JBQXNCLEdBQUlSLEdBQWM7SUFDbkUsR0FBSyxDQUE0QkcsSUFBVSxHQUFWQSxxREFBUSxJQUFqQ00sS0FBSyxHQUFvQk4sSUFBVSxDQUFuQ00sS0FBSyxFQUFFQyxhQUFhLEdBQUtQLElBQVUsQ0FBNUJPLGFBQWE7SUFDNUIsR0FBSyxDQUFDQyxhQUFhLEdBQ2pCRixLQUFLLEtBQUssQ0FBTSxTQUFJQyxhQUFhLEtBQUssQ0FBTSxRQUN4Q04sOEZBQStDLEdBQy9DQSwwRkFBMkM7SUFFakQsR0FBSyxDQUFDVyxXQUFXLEdBQUcsQ0FBb0I7SUFFeEMsR0FBSyxDQUFDQyxZQUFZLEdBQUdkLGtEQUFXLENBQUMsUUFDbkMsR0FEeUMsQ0FBQztRQUN0Q00sc0JBQXNCLENBQUMsS0FBSztRQUM1QixHQUFLLENBQUNTLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBUTtRQUM5Q0YsTUFBTSxDQUFDRyxHQUFHLEdBQUcsQ0FBK0I7UUFDNUNILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLENBQU0sT0FBRWpCLHlGQUEwQztRQUN0RWEsTUFBTSxDQUFDSSxZQUFZLENBQUMsQ0FBWSxhQUFFZixTQUFTO1FBQzNDVyxNQUFNLENBQUNJLFlBQVksQ0FBQyxDQUFPLFFBQUVqQiwwRkFBMkM7UUFDeEVhLE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLENBQU8sUUFBRVYsYUFBYTtRQUMxQ00sTUFBTSxDQUFDSSxZQUFZLENBQUMsQ0FBYSxjQUFFLENBQVc7UUFDOUNKLE1BQU0sQ0FBQ08sS0FBSyxHQUFHLElBQUk7UUFFbkIsR0FBSyxDQUFDQyxTQUFRLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBYyxDQUFDWCxXQUFXO1FBQ3BELEVBQUUsRUFBRVUsU0FBUSxFQUFFQSxTQUFRLENBQUNFLFdBQVcsQ0FBQ1YsTUFBTTtRQUV6QyxNQUFNLENBQUMsUUFDWCxHQURpQixDQUFDO1lBQ1osR0FBSyxDQUFDUSxRQUFRLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBYyxDQUFDWCxXQUFXO1lBQ3BELEVBQUUsRUFBRVUsUUFBUSxFQUFFQSxRQUFRLENBQUNHLFNBQVMsR0FBRyxDQUFFO1FBQ3ZDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ2pCO1FBQUFBLGFBQWE7UUFBRUwsU0FBUztJQUFBLENBQUM7SUFFN0IsRUFBeUI7SUFDekJMLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDNEIsTUFBTSxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxDQUF5QjtRQUMvRCxFQUFFLEdBQUdELE1BQU0sRUFBRSxNQUFNO1FBQ25CYixZQUFZO0lBQ2QsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLFlBQVk7SUFBQSxDQUFDO0lBRWpCLEVBQXVFO0lBQ3ZFLE1BQU0sdUVBQ0hlLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXdEOzs7Ozs7OztZQUNwRXpCLGtCQUFrQix5RUFBSzBCLENBQU07Z0JBQUNDLE9BQU8sRUFBRWxCLFlBQVk7Ozs7Ozs7MEJBQUUsQ0FBYTs7aUZBQ2xFZSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMkI7Z0JBQUNHLEVBQUUsRUFBRXBCLFdBQVc7Ozs7Ozs7Ozs7QUFHaEUsQ0FBQztHQTVDS1YsVUFBVTs7UUFFbUJGLGlEQUFROzs7S0FGckNFLFVBQVU7QUE4Q2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbWVudHMvVXR0ZXJhbmNlcy5qcz9hMDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcblxuaW1wb3J0IHNpdGVNZXRhZGF0YSBmcm9tICdAL2RhdGEvc2l0ZU1ldGFkYXRhJ1xuXG5jb25zdCBVdHRlcmFuY2VzID0gKHsgaXNzdWVUZXJtIH0pID0+IHtcbiAgY29uc3QgW2VuYWJsZUxvYWRDb21tZW50cywgc2V0RW5hYmxlZExvYWRDb21tZW50c10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCB7IHRoZW1lLCByZXNvbHZlZFRoZW1lIH0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IGNvbW1lbnRzVGhlbWUgPVxuICAgIHRoZW1lID09PSAnZGFyaycgfHwgcmVzb2x2ZWRUaGVtZSA9PT0gJ2RhcmsnXG4gICAgICA/IHNpdGVNZXRhZGF0YS5jb21tZW50LnV0dGVyYW5jZXNDb25maWcuZGFya1RoZW1lXG4gICAgICA6IHNpdGVNZXRhZGF0YS5jb21tZW50LnV0dGVyYW5jZXNDb25maWcudGhlbWVcblxuICBjb25zdCBDT01NRU5UU19JRCA9ICdjb21tZW50cy1jb250YWluZXInXG5cbiAgY29uc3QgTG9hZENvbW1lbnRzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVuYWJsZWRMb2FkQ29tbWVudHMoZmFsc2UpXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vdXR0ZXJhbmMuZXMvY2xpZW50LmpzJ1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3JlcG8nLCBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLnJlcG8pXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnaXNzdWUtdGVybScsIGlzc3VlVGVybSlcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdsYWJlbCcsIHNpdGVNZXRhZGF0YS5jb21tZW50LnV0dGVyYW5jZXNDb25maWcubGFiZWwpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndGhlbWUnLCBjb21tZW50c1RoZW1lKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJ2Fub255bW91cycpXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT01NRU5UU19JRClcbiAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmFwcGVuZENoaWxkKHNjcmlwdClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTU1FTlRTX0lEKVxuICAgICAgaWYgKGNvbW1lbnRzKSBjb21tZW50cy5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgfSwgW2NvbW1lbnRzVGhlbWUsIGlzc3VlVGVybV0pXG5cbiAgLy8gUmVsb2FkIG9uIHRoZW1lIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZS51dHRlcmFuY2VzLWZyYW1lJylcbiAgICBpZiAoIWlmcmFtZSkgcmV0dXJuXG4gICAgTG9hZENvbW1lbnRzKClcbiAgfSwgW0xvYWRDb21tZW50c10pXG5cbiAgLy8gQWRkZWQgYHJlbGF0aXZlYCB0byBmaXggYSB3ZWlyZCBidWcgd2l0aCBgdXR0ZXJhbmNlcy1mcmFtZWAgcG9zaXRpb25cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcGItNiB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAge2VuYWJsZUxvYWRDb21tZW50cyAmJiA8YnV0dG9uIG9uQ2xpY2s9e0xvYWRDb21tZW50c30+TG9hZCBDb21tZW50czwvYnV0dG9uPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdXR0ZXJhbmNlcy1mcmFtZVwiIGlkPXtDT01NRU5UU19JRH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdHRlcmFuY2VzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlVGhlbWUiLCJzaXRlTWV0YWRhdGEiLCJVdHRlcmFuY2VzIiwiaXNzdWVUZXJtIiwiZW5hYmxlTG9hZENvbW1lbnRzIiwic2V0RW5hYmxlZExvYWRDb21tZW50cyIsInRoZW1lIiwicmVzb2x2ZWRUaGVtZSIsImNvbW1lbnRzVGhlbWUiLCJjb21tZW50IiwidXR0ZXJhbmNlc0NvbmZpZyIsImRhcmtUaGVtZSIsIkNPTU1FTlRTX0lEIiwiTG9hZENvbW1lbnRzIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2V0QXR0cmlidXRlIiwicmVwbyIsImxhYmVsIiwiYXN5bmMiLCJjb21tZW50cyIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJpZnJhbWUiLCJxdWVyeVNlbGVjdG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/comments/Utterances.js\n");

/***/ })

}]);