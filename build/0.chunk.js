(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/component/DataList.jsx":
/*!************************************!*\
  !*** ./src/component/DataList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var clickevent = function clickevent(val) {
  console.log(val);
};

var renderList = function renderList(list) {
  return list.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.label,
      onClick: function onClick() {
        return clickevent(item.label);
      }
    }, item.label);
  });
};

var DataList = function DataList(props) {
  if (props.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderList(props.data));
};

/* harmony default export */ __webpack_exports__["default"] = (DataList);

/***/ })

}]);
//# sourceMappingURL=0.chunk.js.map