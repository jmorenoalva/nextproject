"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _this = undefined;\nvar Users = function(props) {\n    var _this1 = _this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.data.map(function(user) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: [\n                                user.first_name,\n                                \" \",\n                                user.last_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\components\\\\Users.js\",\n                            lineNumber: 8,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Email: \",\n                                user.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\components\\\\Users.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\components\\\\Users.js\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\components\\\\Users.js\",\n                    lineNumber: 7,\n                    columnNumber: 11\n                }, _this1)\n            }, user.id, false, {\n                fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\components\\\\Users.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\components\\\\Users.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, _this));\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsR0FBSyxDQUFDQSxLQUFLLEdBQUMsUUFBUSxDQUFQQyxLQUFLLEVBQUcsQ0FBQzs7SUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLE1BQU0sNkVBQ0hHLENBQUU7UUFBQ0MsU0FBUyxFQUFDLENBQVk7a0JBQ3ZCSixLQUFLLENBQUNLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzBCQUN6QixNQUFNLCtEQUFMQyxDQUFFO2dCQUFDTCxTQUFTLEVBQUMsQ0FBd0M7c0dBQ25ETSxDQUFHOztvR0FDREMsQ0FBRTs7Z0NBQ0FILElBQUksQ0FBQ0ksVUFBVTtnQ0FBQyxDQUFDO2dDQUFDSixJQUFJLENBQUNLLFNBQVM7Ozs7Ozs7b0dBRWxDQyxDQUFDOztnQ0FBQyxDQUFPO2dDQUFDTixJQUFJLENBQUNPLEtBQUs7Ozs7Ozs7b0dBQ3BCQyxDQUFHOzRCQUFDQyxHQUFHLEVBQUVULElBQUksQ0FBQ1UsTUFBTTs0QkFBRUMsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs7OztlQU4yQlgsSUFBSSxDQUFDWSxFQUFFOzs7Ozs7Ozs7OztBQVkzRSxDQUFDO0tBakJLckIsS0FBSztBQW1CWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanM/ODE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2Vycz0ocHJvcHMpPT57XHJcbiAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgIHtwcm9wcy51c2Vycy5kYXRhLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAge3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sIm5hbWVzIjpbIlVzZXJzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidWwiLCJjbGFzc05hbWUiLCJ1c2VycyIsImRhdGEiLCJtYXAiLCJ1c2VyIiwibGkiLCJkaXYiLCJoNSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Users.js\n");

/***/ })

});