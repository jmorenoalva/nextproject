"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst User = (props)=>{\n    console.log(props);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const obj = router.query;\n    console.log(obj);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"profile\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Javier\\\\Desktop\\\\nextproject\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined));\n};\nUser.getInitialProps = async (ctx)=>{\n    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(`https://reqres.in/api/users/${ctx.query.id}`);\n    const resJSON = await res.json();\n    return {\n        user: resJSON.data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0Q7QUFFcEMsS0FBSyxDQUFDRSxJQUFJLElBQUVDLEtBQUssR0FBRyxDQUFDO0lBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixLQUFLLENBQUNHLE1BQU0sR0FBQ04sc0RBQVM7SUFDdEIsS0FBSyxDQUFDTyxHQUFHLEdBQUNELE1BQU0sQ0FBQ0UsS0FBSztJQUN0QkosT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUc7SUFFZixNQUFNLDZFQUFFRSxDQUFFO2tCQUFDLENBQU87Ozs7OztBQUNwQixDQUFDO0FBRURQLElBQUksQ0FBQ1EsZUFBZSxVQUFTQyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxLQUFLLENBQUNDLEdBQUcsR0FBRSxLQUFLLENBQUNYLHVEQUFLLEVBQUUsNEJBQTRCLEVBQUVVLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSyxFQUFFO0lBQ2xFLEtBQUssQ0FBQ0MsT0FBTyxHQUFFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJO0lBQzdCLE1BQU0sQ0FBQyxDQUFDQztRQUFBQSxJQUFJLEVBQUNGLE9BQU8sQ0FBQ0csSUFBSTtJQUFBLENBQUM7QUFDNUIsQ0FBQztBQUVELGlFQUFlZixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0cHJvamVjdC8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5cclxuY29uc3QgVXNlcj0ocHJvcHMpPT57XHJcbiAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9iaj1yb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2cob2JqKVxyXG5cclxuICByZXR1cm4gPGgxPnByb2ZpbGU8L2gxPlxyXG59XHJcblxyXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9YXN5bmMgKGN0eCk9PntcclxuICBjb25zdCByZXM9IGF3YWl0IGZldGNoKGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YCk7XHJcbiAgY29uc3QgcmVzSlNPTiA9YXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge3VzZXI6cmVzSlNPTi5kYXRhfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaCIsIlVzZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJvYmoiLCJxdWVyeSIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiaWQiLCJyZXNKU09OIiwianNvbiIsInVzZXIiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();