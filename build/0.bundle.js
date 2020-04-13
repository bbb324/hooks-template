(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/component/DataList.jsx":
/*!************************************!*\
  !*** ./src/component/DataList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar renderList = function renderList(list) {\n  return list.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: item.label\n    }, item.label);\n  });\n};\n\nvar DataList = function DataList(props) {\n  if (props.length === 0) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, renderList(props.data));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataList);\n\n//# sourceURL=webpack:///./src/component/DataList.jsx?");

/***/ })

}]);