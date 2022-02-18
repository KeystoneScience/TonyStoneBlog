"use strict";
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 9970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);



const Disqus = ({ frontMatter  })=>{
    const { 0: enableLoadComments , 1: setEnabledLoadComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const COMMENTS_ID = 'disqus_thread';
    function LoadComments() {
        setEnabledLoadComments(false);
        window.disqus_config = function() {
            this.page.url = window.location.href;
            this.page.identifier = frontMatter.slug;
        };
        if (window.DISQUS === undefined) {
            const script = document.createElement('script');
            script.src = 'https://' + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().comment.disqus.shortname) + '.disqus.com/embed.js';
            script.setAttribute('data-timestamp', +new Date());
            script.setAttribute('crossorigin', 'anonymous');
            script.async = true;
            document.body.appendChild(script);
        } else {
            window.DISQUS.reset({
                reload: true
            });
        }
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",
        children: [
            enableLoadComments && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: LoadComments,
                children: "Load Comments"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "disqus-frame",
                id: COMMENTS_ID
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disqus);


/***/ })

};
;