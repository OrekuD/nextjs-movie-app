webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Categories.js":
/*!**************************************!*\
  !*** ./src/components/Categories.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ "./src/components/Category.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\David\\Desktop\\David\\react-apps\\nextjs\\movie\\src\\components\\Categories.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Categories = function Categories() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      selectedIndex = _useState[0],
      setSelectedIndex = _useState[1];

  var categories = [{
    id: Math.random().toString(),
    name: "Action"
  }, {
    id: Math.random().toString(),
    name: "Fantasy"
  }, {
    id: Math.random().toString(),
    name: "Romance"
  }];
  var components = [{
    component: __jsx(_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "Action",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 18
      }
    })
  }, {
    component: __jsx(_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "Fantasy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 18
      }
    })
  }, {
    component: __jsx(_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "Romance",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 18
      }
    })
  }];
  return __jsx("div", {
    className: "categories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, " Browse by categories "), __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, categories.map(function (_ref, index) {
    var name = _ref.name,
        id = _ref.id;
    return __jsx("p", {
      key: id,
      onClick: function onClick() {
        return setSelectedIndex(index);
      },
      className: index === selectedIndex ? "selected" : "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, name);
  })), components[selectedIndex].component);
};

_s(Categories, "G8fEPHHi9+P2oI7WxiQDc3s4+J4=");

_c = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c;

$RefreshReg$(_c, "Categories");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yaWVzLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3JpZXMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwiY2F0ZWdvcmllcyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwibmFtZSIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsQ0FBRCxDQUQzQjtBQUFBLE1BQ2hCQyxhQURnQjtBQUFBLE1BQ0RDLGdCQURDOztBQUV2QixNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsTUFBRSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxFQUFOO0FBQWdDQyxRQUFJLEVBQUU7QUFBdEMsR0FEaUIsRUFFakI7QUFBRUosTUFBRSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxFQUFOO0FBQWdDQyxRQUFJLEVBQUU7QUFBdEMsR0FGaUIsRUFHakI7QUFBRUosTUFBRSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxFQUFOO0FBQWdDQyxRQUFJLEVBQUU7QUFBdEMsR0FIaUIsQ0FBbkI7QUFNQSxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsYUFBUyxFQUFFLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWIsR0FEaUIsRUFFakI7QUFBRUEsYUFBUyxFQUFFLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWIsR0FGaUIsRUFHakI7QUFBRUEsYUFBUyxFQUFFLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWIsR0FIaUIsQ0FBbkI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUdFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxVQUFVLENBQUNRLEdBQVgsQ0FBZSxnQkFBZUMsS0FBZjtBQUFBLFFBQUdKLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNKLEVBQVQsUUFBU0EsRUFBVDtBQUFBLFdBQ2Q7QUFDRSxTQUFHLEVBQUVBLEVBRFA7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNRixnQkFBZ0IsQ0FBQ1UsS0FBRCxDQUF0QjtBQUFBLE9BRlg7QUFHRSxlQUFTLEVBQUVBLEtBQUssS0FBS1gsYUFBVixHQUEwQixVQUExQixHQUF1QyxFQUhwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0dPLElBTEgsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQUhGLEVBY0dDLFVBQVUsQ0FBQ1IsYUFBRCxDQUFWLENBQTBCUyxTQWQ3QixDQURGO0FBa0JELENBaENEOztHQUFNWCxVOztLQUFBQSxVO0FBa0NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzBjMGM1OTA5ZDUyZGYwYmYwMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICB7IGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksIG5hbWU6IFwiQWN0aW9uXCIgfSxcclxuICAgIHsgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSwgbmFtZTogXCJGYW50YXN5XCIgfSxcclxuICAgIHsgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSwgbmFtZTogXCJSb21hbmNlXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBjb21wb25lbnRzID0gW1xyXG4gICAgeyBjb21wb25lbnQ6IDxDYXRlZ29yeSBuYW1lPVwiQWN0aW9uXCIgLz4gfSxcclxuICAgIHsgY29tcG9uZW50OiA8Q2F0ZWdvcnkgbmFtZT1cIkZhbnRhc3lcIiAvPiB9LFxyXG4gICAgeyBjb21wb25lbnQ6IDxDYXRlZ29yeSBuYW1lPVwiUm9tYW5jZVwiIC8+IH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPiBCcm93c2UgYnkgY2F0ZWdvcmllcyA8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHsgbmFtZSwgaWQgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBzZWxlY3RlZEluZGV4ID8gXCJzZWxlY3RlZFwiIDogXCJcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y29tcG9uZW50c1tzZWxlY3RlZEluZGV4XS5jb21wb25lbnR9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==