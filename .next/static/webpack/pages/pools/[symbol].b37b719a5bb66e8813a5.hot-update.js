webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/fetchers/getGraphLootBoxData.js":
/*!*********************************************!*\
  !*** ./lib/fetchers/getGraphLootBoxData.js ***!
  \*********************************************/
/*! exports provided: getGraphLootBoxData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGraphLootBoxData\", function() { return getGraphLootBoxData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/constants */ \"./lib/constants.jsx\");\n/* harmony import */ var lib_queries_prizeQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/queries/prizeQuery */ \"./lib/queries/prizeQuery.jsx\");\n\n\n\n\n\nvar getGraphLootBoxData = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(chainId, lootBoxAddress, tokenIdprizeId, blockNumber) {\n    var variables, query, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            variables = {\n              lootBoxAddress: lootBoxAddress,\n              tokenId: tokenId\n            };\n            query = Object(lib_queries_prizeQuery__WEBPACK_IMPORTED_MODULE_4__[\"prizeQuery\"])(blockNumber);\n            _context.prev = 2;\n            _context.next = 5;\n            return Object(graphql_request__WEBPACK_IMPORTED_MODULE_2__[\"request\"])(lib_constants__WEBPACK_IMPORTED_MODULE_3__[\"POOLTOGETHER_GRAPH_URIS\"][chainId], query, variables);\n\n          case 5:\n            data = _context.sent;\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](2);\n            console.error(JSON.stringify(_context.t0, undefined, 2));\n\n          case 11:\n            return _context.abrupt(\"return\", data);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 8]]);\n  }));\n\n  return function getGraphLootBoxData(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZldGNoZXJzL2dldEdyYXBoTG9vdEJveERhdGEuanM/Yzk5MiJdLCJuYW1lcyI6WyJnZXRHcmFwaExvb3RCb3hEYXRhIiwiY2hhaW5JZCIsImxvb3RCb3hBZGRyZXNzIiwidG9rZW5JZHByaXplSWQiLCJibG9ja051bWJlciIsInZhcmlhYmxlcyIsInRva2VuSWQiLCJxdWVyeSIsInByaXplUXVlcnkiLCJyZXF1ZXN0IiwiUE9PTFRPR0VUSEVSX0dSQVBIX1VSSVMiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxtQkFBbUI7QUFBQSw4TEFBRyxpQkFBT0MsT0FBUCxFQUFnQkMsY0FBaEIsRUFBZ0NDLGNBQWhDLEVBQWdEQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0JDLHFCQUQyQixHQUNmO0FBQ2hCSCw0QkFBYyxFQUFkQSxjQURnQjtBQUVoQkkscUJBQU8sRUFBUEE7QUFGZ0IsYUFEZTtBQU0zQkMsaUJBTjJCLEdBTW5CQyx5RUFBVSxDQUFDSixXQUFELENBTlM7QUFBQTtBQUFBO0FBQUEsbUJBVWxCSywrREFBTyxDQUNsQkMscUVBQXVCLENBQUNULE9BQUQsQ0FETCxFQUVsQk0sS0FGa0IsRUFHbEJGLFNBSGtCLENBVlc7O0FBQUE7QUFVL0JNLGdCQVYrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0IvQkMsbUJBQU8sQ0FBQ0MsS0FBUixDQUFjQyxJQUFJLENBQUNDLFNBQUwsY0FBc0JDLFNBQXRCLEVBQWlDLENBQWpDLENBQWQ7O0FBaEIrQjtBQUFBLDZDQW1CMUJMLElBbkIwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQlgsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEdBQXpCIiwiZmlsZSI6Ii4vbGliL2ZldGNoZXJzL2dldEdyYXBoTG9vdEJveERhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5pbXBvcnQgeyBQT09MVE9HRVRIRVJfR1JBUEhfVVJJUyB9IGZyb20gJ2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBwcml6ZVF1ZXJ5IH0gZnJvbSAnbGliL3F1ZXJpZXMvcHJpemVRdWVyeSdcblxuZXhwb3J0IGNvbnN0IGdldEdyYXBoTG9vdEJveERhdGEgPSBhc3luYyAoY2hhaW5JZCwgbG9vdEJveEFkZHJlc3MsIHRva2VuSWRwcml6ZUlkLCBibG9ja051bWJlcikgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgbG9vdEJveEFkZHJlc3MsXG4gICAgdG9rZW5JZCxcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gcHJpemVRdWVyeShibG9ja051bWJlcilcblxuICBsZXQgZGF0YVxuICB0cnkge1xuICAgIGRhdGEgPSBhd2FpdCByZXF1ZXN0KFxuICAgICAgUE9PTFRPR0VUSEVSX0dSQVBIX1VSSVNbY2hhaW5JZF0sXG4gICAgICBxdWVyeSxcbiAgICAgIHZhcmlhYmxlc1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9yLCB1bmRlZmluZWQsIDIpKVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/fetchers/getGraphLootBoxData.js\n");

/***/ })

})