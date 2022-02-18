"use strict";
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 6013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);




const Giscus = ({ mapping  })=>{
    const { 0: enableLoadComments , 1: setEnabledLoadComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { theme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const commentsTheme = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.themeURL) === '' ? theme === 'dark' || resolvedTheme === 'dark' ? (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.darkTheme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.theme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.themeURL);
    const COMMENTS_ID = 'comments-container';
    const LoadComments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setEnabledLoadComments(false);
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.repo));
        script.setAttribute('data-repo-id', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.repositoryId));
        script.setAttribute('data-category', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.category));
        script.setAttribute('data-category-id', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.categoryId));
        script.setAttribute('data-mapping', mapping);
        script.setAttribute('data-reactions-enabled', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.reactions));
        script.setAttribute('data-emit-metadata', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.metadata));
        script.setAttribute('data-theme', commentsTheme);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        const comments1 = document.getElementById(COMMENTS_ID);
        if (comments1) comments1.appendChild(script);
        return ()=>{
            const comments = document.getElementById(COMMENTS_ID);
            if (comments) comments.innerHTML = '';
        };
    }, [
        commentsTheme,
        mapping
    ]);
    // Reload on theme change
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const iframe = document.querySelector('iframe.giscus-frame');
        if (!iframe) return;
        LoadComments();
    }, [
        LoadComments
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",
        children: [
            enableLoadComments && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: LoadComments,
                children: "Load Comments"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "giscus",
                id: COMMENTS_ID
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Giscus);


/***/ })

};
;