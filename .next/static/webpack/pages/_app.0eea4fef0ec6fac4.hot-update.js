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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/css/tailwind.css */ \"./css/tailwind.css\");\n/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_prism_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/css/prism.css */ \"./css/prism.css\");\n/* harmony import */ var _css_prism_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_prism_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/analytics */ \"./components/analytics/index.js\");\n/* harmony import */ var _components_LayoutWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/LayoutWrapper */ \"./components/LayoutWrapper.js\");\n/* harmony import */ var _components_ClientReload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ClientReload */ \"./components/ClientReload.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar isDevelopment = \"development\" === 'development';\nvar isSocket = process.env.SOCKET;\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        attribute: \"class\",\n        __source: {\n            fileName: \"/Users/nathanstone/Red Avocado/blog/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            isDevelopment && isSocket && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ClientReload__WEBPACK_IMPORTED_MODULE_7__.ClientReload, {\n                __source: {\n                    fileName: \"/Users/nathanstone/Red Avocado/blog/pages/_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 37\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_analytics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/nathanstone/Red Avocado/blog/pages/_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LayoutWrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/nathanstone/Red Avocado/blog/pages/_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n                }, pageProps, {\n                    __source: {\n                        fileName: \"/Users/nathanstone/Red Avocado/blog/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }))\n            })\n        ]\n    }));\n};\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDSDtBQUVtQjtBQUNmO0FBRWtCO0FBQ1E7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELEdBQUssQ0FBQ0ssYUFBYSxHQUFHQyxhQUFvQixLQUFLLENBQWE7QUFDNUQsR0FBSyxDQUFDRyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxNQUFNO0FBRXBCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLEtBQXdCLEVBQUUsQ0FBQztRQUF6QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUztJQUNoRCxNQUFNLHVFQUNIYixzREFBYTtRQUFDYyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7WUFFN0JULGFBQWEsSUFBSUksUUFBUSx5RUFBS0wsa0VBQVk7Ozs7Ozs7O2lGQUMxQ0YsNkRBQVM7Ozs7Ozs7O2lGQUNUQyxpRUFBYTs7Ozs7OzsrRkFDWFMsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztLQVh1QkYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL2Nzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgJ0AvY3NzL3ByaXNtLmNzcydcblxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgQW5hbHl0aWNzIGZyb20gJ0AvY29tcG9uZW50cy9hbmFseXRpY3MnXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0V3JhcHBlcidcbmltcG9ydCB7IENsaWVudFJlbG9hZCB9IGZyb20gJ0AvY29tcG9uZW50cy9DbGllbnRSZWxvYWQnXG5cbmNvbnN0IGlzRGV2ZWxvcG1lbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuY29uc3QgaXNTb2NrZXQgPSBwcm9jZXNzLmVudi5TT0NLRVRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCI+XG5cbiAgICAgIHtpc0RldmVsb3BtZW50ICYmIGlzU29ja2V0ICYmIDxDbGllbnRSZWxvYWQgLz59XG4gICAgICA8QW5hbHl0aWNzIC8+XG4gICAgICA8TGF5b3V0V3JhcHBlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXRXcmFwcGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJIZWFkIiwiQW5hbHl0aWNzIiwiTGF5b3V0V3JhcHBlciIsIkNsaWVudFJlbG9hZCIsImlzRGV2ZWxvcG1lbnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJpc1NvY2tldCIsIlNPQ0tFVCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});