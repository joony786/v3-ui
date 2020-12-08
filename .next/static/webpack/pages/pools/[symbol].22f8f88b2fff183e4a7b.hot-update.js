webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/services/getCurrentLootBox.js":
/*!*******************************************!*\
  !*** ./lib/services/getCurrentLootBox.js ***!
  \*******************************************/
/*! exports provided: getCurrentLootBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentLootBox\", function() { return getCurrentLootBox; });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/dist/ethers.min.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/constants */ \"./lib/constants.jsx\");\n\n\nvar getCurrentLootBox = function getCurrentLootBox(pool) {\n  var _pool$prizeStrategy, _pool$prizeStrategy$e, _erc721$tokenIds;\n\n  var lootBoxAddress = lib_constants__WEBPACK_IMPORTED_MODULE_1__[\"CONTRACT_ADDRESSES\"][chainId].LootBox;\n  var erc721 = pool === null || pool === void 0 ? void 0 : (_pool$prizeStrategy = pool.prizeStrategy) === null || _pool$prizeStrategy === void 0 ? void 0 : (_pool$prizeStrategy$e = _pool$prizeStrategy.externalErc721Awards) === null || _pool$prizeStrategy$e === void 0 ? void 0 : _pool$prizeStrategy$e.find(function (erc721) {\n    return erc721.address === lootBoxAddress;\n  });\n  var tokenId = ethers__WEBPACK_IMPORTED_MODULE_0__[\"ethers\"].utils.bigNumberify(erc721 === null || erc721 === void 0 ? void 0 : (_erc721$tokenIds = erc721.tokenIds) === null || _erc721$tokenIds === void 0 ? void 0 : _erc721$tokenIds[0]);\n  return {\n    lootBoxAddress: lootBoxAddress,\n    tokenId: tokenId\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3NlcnZpY2VzL2dldEN1cnJlbnRMb290Qm94LmpzPzMxNDIiXSwibmFtZXMiOlsiZ2V0Q3VycmVudExvb3RCb3giLCJwb29sIiwibG9vdEJveEFkZHJlc3MiLCJDT05UUkFDVF9BRERSRVNTRVMiLCJjaGFpbklkIiwiTG9vdEJveCIsImVyYzcyMSIsInByaXplU3RyYXRlZ3kiLCJleHRlcm5hbEVyYzcyMUF3YXJkcyIsImZpbmQiLCJhZGRyZXNzIiwidG9rZW5JZCIsImV0aGVycyIsInV0aWxzIiwiYmlnTnVtYmVyaWZ5IiwidG9rZW5JZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSU8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFBQTs7QUFDekMsTUFBTUMsY0FBYyxHQUFHQyxnRUFBa0IsQ0FBQ0MsT0FBRCxDQUFsQixDQUE0QkMsT0FBbkQ7QUFFQSxNQUFNQyxNQUFNLEdBQUdMLElBQUgsYUFBR0EsSUFBSCw4Q0FBR0EsSUFBSSxDQUFFTSxhQUFULGlGQUFHLG9CQUFxQkMsb0JBQXhCLDBEQUFHLHNCQUEyQ0MsSUFBM0MsQ0FBZ0QsVUFBQUgsTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ0ksT0FBUCxLQUFtQlIsY0FBdkI7QUFBQSxHQUF0RCxDQUFmO0FBQ0EsTUFBTVMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDQyxLQUFQLENBQWFDLFlBQWIsQ0FBMEJSLE1BQTFCLGFBQTBCQSxNQUExQiwyQ0FBMEJBLE1BQU0sQ0FBRVMsUUFBbEMscURBQTBCLGlCQUFtQixDQUFuQixDQUExQixDQUFoQjtBQUVBLFNBQU87QUFDTGIsa0JBQWMsRUFBZEEsY0FESztBQUVMUyxXQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlELENBVk0iLCJmaWxlIjoiLi9saWIvc2VydmljZXMvZ2V0Q3VycmVudExvb3RCb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5cbmltcG9ydCB7XG4gIENPTlRSQUNUX0FERFJFU1NFUyxcbn0gZnJvbSAnbGliL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRMb290Qm94ID0gKHBvb2wpID0+IHtcbiAgY29uc3QgbG9vdEJveEFkZHJlc3MgPSBDT05UUkFDVF9BRERSRVNTRVNbY2hhaW5JZF0uTG9vdEJveFxuXG4gIGNvbnN0IGVyYzcyMSA9IHBvb2w/LnByaXplU3RyYXRlZ3k/LmV4dGVybmFsRXJjNzIxQXdhcmRzPy5maW5kKGVyYzcyMSA9PiBlcmM3MjEuYWRkcmVzcyA9PT0gbG9vdEJveEFkZHJlc3MpXG4gIGNvbnN0IHRva2VuSWQgPSBldGhlcnMudXRpbHMuYmlnTnVtYmVyaWZ5KGVyYzcyMT8udG9rZW5JZHM/LlswXSlcblxuICByZXR1cm4geyBcbiAgICBsb290Qm94QWRkcmVzcyxcbiAgICB0b2tlbklkXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/services/getCurrentLootBox.js\n");

/***/ })

})