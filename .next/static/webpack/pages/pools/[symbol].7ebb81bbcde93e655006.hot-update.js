webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/components/LootBoxTable.jsx":
/*!*****************************************!*\
  !*** ./lib/components/LootBoxTable.jsx ***!
  \*****************************************/
/*! exports provided: LootBoxTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LootBoxTable\", function() { return LootBoxTable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lib_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/../i18n */ \"./i18n/client.js\");\n/* harmony import */ var lib_components_ContributeToLootBoxDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/components/ContributeToLootBoxDropdown */ \"./lib/components/ContributeToLootBoxDropdown.jsx\");\n/* harmony import */ var lib_components_contextProviders_PoolDataContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/components/contextProviders/PoolDataContextProvider */ \"./lib/components/contextProviders/PoolDataContextProvider.jsx\");\n/* harmony import */ var lib_components_EtherscanAddressLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/components/EtherscanAddressLink */ \"./lib/components/EtherscanAddressLink.jsx\");\n/* harmony import */ var lib_components_PoolNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/components/PoolNumber */ \"./lib/components/PoolNumber.jsx\");\n/* harmony import */ var lib_components_Erc20Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/components/Erc20Image */ \"./lib/components/Erc20Image.jsx\");\n/* harmony import */ var lib_utils_displayAmountInEther__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/utils/displayAmountInEther */ \"./lib/utils/displayAmountInEther.js\");\n/* harmony import */ var lib_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/utils/numberWithCommas */ \"./lib/utils/numberWithCommas.js\");\n/* harmony import */ var assets_images_icon_gift_2x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/images/icon-gift@2x.png */ \"./assets/images/icon-gift@2x.png\");\n/* harmony import */ var assets_images_icon_gift_2x_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_images_icon_gift_2x_png__WEBPACK_IMPORTED_MODULE_12__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LootBoxTable = function LootBoxTable(props) {\n  _s();\n\n  var _useTranslation = Object(lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(); // lootBoxes(where: { erc721: \"0x2cb260f1313454386262373773124f6bc912cf28\", tokenId: \"1\" }) {\n  //   id\n  // }\n\n  var _useGraphLootBoxQuery = useGraphLootBoxQuery(lootBoxAddress, tokenId),\n      lootBox = _useGraphLootBoxQuery.lootBox;\n\n  var basePath = props.basePath,\n      historical = props.historical,\n      pool = props.pool;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      moreVisible = _useState[0],\n      setMoreVisible = _useState[1];\n\n  var handleShowMore = function handleShowMore(e) {\n    e.preventDefault();\n    setMoreVisible(true);\n    router.push(\"\".concat(basePath, \"#loot-box-table\"));\n  };\n\n  if (!lootBox) {\n    return null;\n  }\n\n  var balanceProperty = historical ? 'balanceAwardedBN' : 'balance';\n  var externalAwards = Object.keys(externalErc20Awards).map(function (key) {\n    return externalErc20Awards[key];\n  }).filter(function (award) {\n    var _award$balancePropert;\n\n    return award === null || award === void 0 ? void 0 : (_award$balancePropert = award[balanceProperty]) === null || _award$balancePropert === void 0 ? void 0 : _award$balancePropert.gt(0);\n  });\n  var sortedAwards = Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"orderBy\"])(externalAwards, function (_ref) {\n    var value = _ref.value;\n    return value || '';\n  }, ['desc']);\n  var awards = moreVisible ? sortedAwards : sortedAwards === null || sortedAwards === void 0 ? void 0 : sortedAwards.slice(0, 5);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    id: \"loot-box-table\",\n    className: \"non-interactable-card mt-2 sm:mt-10 py-4 sm:py-6 px-4 xs:px-4 sm:px-10 bg-card rounded-lg card-min-height-desktop\"\n  }, __jsx(\"div\", {\n    className: \"text-caption uppercase mb-3\"\n  }, __jsx(\"img\", {\n    src: assets_images_icon_gift_2x_png__WEBPACK_IMPORTED_MODULE_12___default.a,\n    className: \"inline-block mr-2 card-icon\"\n  }), \" \", t('lootBox')), __jsx(\"div\", {\n    className: \"flex flex-col sm:flex-row justify-between sm:items-center\"\n  }, __jsx(\"div\", null, awards.length === 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, historical ? t('noOtherPrizesAwarded') : t('currentlyNoOtherPrizes')) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (pool === null || pool === void 0 ? void 0 : pool.externalAwardsUSD) && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h3\", {\n    className: \"mb-1\"\n  }, \"$\", Object(lib_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_11__[\"numberWithCommas\"])(pool === null || pool === void 0 ? void 0 : pool.externalAwardsUSD), \" \", t('value'))))), __jsx(\"div\", null, !historical && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(lib_components_ContributeToLootBoxDropdown__WEBPACK_IMPORTED_MODULE_5__[\"ContributeToLootBoxDropdown\"], {\n    pool: pool\n  })))), awards.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"xs:bg-primary theme-light--no-padding text-inverse flex flex-col justify-between rounded-lg p-0 xs:p-3 sm:px-8 mt-4\"\n  }, __jsx(\"table\", {\n    className: \"table-fixed w-full text-xxxs xs:text-xxs sm:text-sm align-top\"\n  }, __jsx(\"thead\", null, __jsx(\"tr\", {\n    style: {\n      background: 'none'\n    }\n  }, __jsx(\"th\", {\n    className: \"w-6/12\"\n  }, __jsx(\"h6\", {\n    className: \"text-green text-left\"\n  }, t('amountTokens', {\n    amount: sortedAwards.length\n  }))), __jsx(\"th\", {\n    className: \"w-4/12\"\n  }), __jsx(\"th\", {\n    className: \"w-2/12 sm:w-1/12\"\n  }))), __jsx(\"tbody\", null, awards.map(function (award) {\n    if (!award.name) {\n      return;\n    }\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      key: award.address\n    }, __jsx(\"tr\", null, __jsx(\"td\", {\n      className: \"flex items-center py-2 text-left font-bold\"\n    }, __jsx(lib_components_Erc20Image__WEBPACK_IMPORTED_MODULE_9__[\"Erc20Image\"], {\n      address: award.address\n    }), \" \", __jsx(lib_components_EtherscanAddressLink__WEBPACK_IMPORTED_MODULE_7__[\"EtherscanAddressLink\"], {\n      address: award.address,\n      className: \"text-inverse\"\n    }, award.name.length > 20 ? __jsx(\"span\", {\n      className: \"truncate\"\n    }, award.name.substr(0, 20)) : award.name)), __jsx(\"td\", {\n      className: \"px-2 sm:px-3 py-2 text-left text-accent-1 truncate\"\n    }, __jsx(lib_components_PoolNumber__WEBPACK_IMPORTED_MODULE_8__[\"PoolNumber\"], null, Object(lib_utils_displayAmountInEther__WEBPACK_IMPORTED_MODULE_10__[\"displayAmountInEther\"])(award[balanceProperty], {\n      precision: 6,\n      decimals: award.decimals\n    })), \" \", award.symbol.length > 20 ? __jsx(\"span\", {\n      className: \"truncate\"\n    }, award.symbol.substr(0, 20)) : award.symbol), __jsx(\"td\", {\n      className: \"py-2 font-bold\"\n    }, award.value ? \"$\".concat(Object(lib_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_11__[\"numberWithCommas\"])(award.value, {\n      precision: 2\n    })) : '')));\n  }))), externalAwards.length > 5 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"text-center\"\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].button, {\n    border: \"none\",\n    onClick: handleShowMore,\n    className: \"mt-6 mb-3 underline font-bold text-xxs xs:text-base sm:text-lg text-center\",\n    animate: moreVisible ? 'exit' : 'enter',\n    initial: \"enter\",\n    variants: {\n      enter: {\n        opacity: 1,\n        y: 0\n      },\n      exit: {\n        y: -10,\n        opacity: 0\n      }\n    }\n  }, t('showMore'))))))));\n};\n\n_s(LootBoxTable, \"DDHhxlrbC0fgDm6usI48K/nDikc=\", true, function () {\n  return [lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"useTranslation\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = LootBoxTable;\n\nvar _c;\n\n$RefreshReg$(_c, \"LootBoxTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudHMvTG9vdEJveFRhYmxlLmpzeD8wODllIl0sIm5hbWVzIjpbIkxvb3RCb3hUYWJsZSIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlR3JhcGhMb290Qm94UXVlcnkiLCJsb290Qm94QWRkcmVzcyIsInRva2VuSWQiLCJsb290Qm94IiwiYmFzZVBhdGgiLCJoaXN0b3JpY2FsIiwicG9vbCIsInVzZVN0YXRlIiwibW9yZVZpc2libGUiLCJzZXRNb3JlVmlzaWJsZSIsImhhbmRsZVNob3dNb3JlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImJhbGFuY2VQcm9wZXJ0eSIsImV4dGVybmFsQXdhcmRzIiwiT2JqZWN0Iiwia2V5cyIsImV4dGVybmFsRXJjMjBBd2FyZHMiLCJtYXAiLCJrZXkiLCJmaWx0ZXIiLCJhd2FyZCIsImd0Iiwic29ydGVkQXdhcmRzIiwib3JkZXJCeSIsInZhbHVlIiwiYXdhcmRzIiwic2xpY2UiLCJHaWZ0SWNvbiIsImxlbmd0aCIsImV4dGVybmFsQXdhcmRzVVNEIiwibnVtYmVyV2l0aENvbW1hcyIsImJhY2tncm91bmQiLCJhbW91bnQiLCJuYW1lIiwiYWRkcmVzcyIsInN1YnN0ciIsImRpc3BsYXlBbW91bnRJbkV0aGVyIiwicHJlY2lzaW9uIiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJlbnRlciIsIm9wYWNpdHkiLCJ5IiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ3ZCQywrREFBYyxFQURTO0FBQUEsTUFDN0JDLENBRDZCLG1CQUM3QkEsQ0FENkI7O0FBRXJDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FGcUMsQ0FJckM7QUFDQTtBQUNBOztBQU5xQyw4QkFRakJDLG9CQUFvQixDQUFDQyxjQUFELEVBQWlCQyxPQUFqQixDQVJIO0FBQUEsTUFRN0JDLE9BUjZCLHlCQVE3QkEsT0FSNkI7O0FBQUEsTUFVN0JDLFFBVjZCLEdBVUVULEtBVkYsQ0FVN0JTLFFBVjZCO0FBQUEsTUFVbkJDLFVBVm1CLEdBVUVWLEtBVkYsQ0FVbkJVLFVBVm1CO0FBQUEsTUFVUEMsSUFWTyxHQVVFWCxLQVZGLENBVVBXLElBVk87O0FBQUEsa0JBWUNDLHNEQUFRLENBQUMsS0FBRCxDQVpUO0FBQUEsTUFZOUJDLFdBWjhCO0FBQUEsTUFZakJDLGNBWmlCOztBQWNyQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFILGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBRUFYLFVBQU0sQ0FBQ2UsSUFBUCxXQUNLVCxRQURMO0FBR0QsR0FSRDs7QUFVQSxNQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1XLGVBQWUsR0FBR1QsVUFBVSxHQUFHLGtCQUFILEdBQXdCLFNBQTFEO0FBRUEsTUFBSVUsY0FBYyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsbUJBQVosRUFDbEJDLEdBRGtCLENBQ2QsVUFBQUMsR0FBRztBQUFBLFdBQUlGLG1CQUFtQixDQUFDRSxHQUFELENBQXZCO0FBQUEsR0FEVyxFQUVsQkMsTUFGa0IsQ0FFWCxVQUFBQyxLQUFLO0FBQUE7O0FBQUEsV0FBSUEsS0FBSixhQUFJQSxLQUFKLGdEQUFJQSxLQUFLLENBQUdSLGVBQUgsQ0FBVCwwREFBSSxzQkFBMEJTLEVBQTFCLENBQTZCLENBQTdCLENBQUo7QUFBQSxHQUZNLENBQXJCO0FBSUEsTUFBTUMsWUFBWSxHQUFHQyxzREFBTyxDQUFDVixjQUFELEVBQWlCO0FBQUEsUUFBR1csS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZUEsS0FBSyxJQUFJLEVBQXhCO0FBQUEsR0FBakIsRUFBNkMsQ0FBQyxNQUFELENBQTdDLENBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHbkIsV0FBVyxHQUFHZ0IsWUFBSCxHQUFrQkEsWUFBbEIsYUFBa0JBLFlBQWxCLHVCQUFrQkEsWUFBWSxDQUFFSSxLQUFkLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQTVDO0FBRUEsU0FBTyxtRUFDTDtBQUNFLE1BQUUsRUFBQyxnQkFETDtBQUVFLGFBQVMsRUFBQztBQUZaLEtBSUU7QUFDRSxhQUFTLEVBQUM7QUFEWixLQUdFO0FBQ0UsT0FBRyxFQUFFQyxzRUFEUDtBQUVFLGFBQVMsRUFBQztBQUZaLElBSEYsT0FNTWhDLENBQUMsQ0FBQyxTQUFELENBTlAsQ0FKRixFQWFFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxtQkFDRzhCLE1BQU0sQ0FBQ0csTUFBUCxLQUFrQixDQUFsQixHQUFzQixtRUFDcEJ6QixVQUFVLEdBQUdSLENBQUMsQ0FBQyxzQkFBRCxDQUFKLEdBQStCQSxDQUFDLENBQUMsd0JBQUQsQ0FEdEIsQ0FBdEIsR0FFSyxtRUFDSCxDQUFBUyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRXlCLGlCQUFOLEtBQTJCLG1FQUMxQjtBQUNFLGFBQVMsRUFBQztBQURaLFVBR0lDLG9GQUFnQixDQUFDMUIsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUV5QixpQkFBUCxDQUhwQixPQUdnRGxDLENBQUMsQ0FBQyxPQUFELENBSGpELENBRDBCLENBRHhCLENBSFIsQ0FERixFQWVFLG1CQUNHLENBQUNRLFVBQUQsSUFBZSxtRUFDZCxNQUFDLHNHQUFEO0FBQ0UsUUFBSSxFQUFFQztBQURSLElBRGMsQ0FEbEIsQ0FmRixDQWJGLEVBcUNHcUIsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQWhCLElBQXFCLG1FQUNwQjtBQUNFLGFBQVMsRUFBQztBQURaLEtBR0U7QUFDRSxhQUFTLEVBQUM7QUFEWixLQUdFLHFCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVHLGdCQUFVLEVBQUU7QUFBZDtBQURULEtBR0U7QUFDRSxhQUFTLEVBQUM7QUFEWixLQUdFO0FBQ0UsYUFBUyxFQUFDO0FBRFosS0FHR3BDLENBQUMsQ0FBQyxjQUFELEVBQWlCO0FBQ2pCcUMsVUFBTSxFQUFFVixZQUFZLENBQUNNO0FBREosR0FBakIsQ0FISixDQUhGLENBSEYsRUFjRTtBQUNFLGFBQVMsRUFBQztBQURaLElBZEYsRUFpQkU7QUFDRSxhQUFTLEVBQUM7QUFEWixJQWpCRixDQURGLENBSEYsRUEwQkUscUJBQ0dILE1BQU0sQ0FBQ1IsR0FBUCxDQUFXLFVBQUFHLEtBQUssRUFBSTtBQUNuQixRQUFJLENBQUNBLEtBQUssQ0FBQ2EsSUFBWCxFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsV0FBTyxNQUFDLDhDQUFEO0FBQ0wsU0FBRyxFQUFFYixLQUFLLENBQUNjO0FBRE4sT0FHTCxrQkFDRTtBQUNFLGVBQVMsRUFBQztBQURaLE9BR0UsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRWQsS0FBSyxDQUFDYztBQURqQixNQUhGLE9BS0ssTUFBQyx3RkFBRDtBQUNELGFBQU8sRUFBRWQsS0FBSyxDQUFDYyxPQURkO0FBRUQsZUFBUyxFQUFDO0FBRlQsT0FJQWQsS0FBSyxDQUFDYSxJQUFOLENBQVdMLE1BQVgsR0FBb0IsRUFBcEIsR0FBeUI7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FBNEJSLEtBQUssQ0FBQ2EsSUFBTixDQUFXRSxNQUFYLENBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBQTVCLENBQXpCLEdBQXdGZixLQUFLLENBQUNhLElBSjlGLENBTEwsQ0FERixFQWFFO0FBQ0UsZUFBUyxFQUFDO0FBRFosT0FHRSxNQUFDLG9FQUFELFFBQ0dHLDRGQUFvQixDQUNuQmhCLEtBQUssQ0FBQ1IsZUFBRCxDQURjLEVBQ0s7QUFDdEJ5QixlQUFTLEVBQUUsQ0FEVztBQUV0QkMsY0FBUSxFQUFFbEIsS0FBSyxDQUFDa0I7QUFGTSxLQURMLENBRHZCLENBSEYsT0FVaUJsQixLQUFLLENBQUNtQixNQUFOLENBQWFYLE1BQWIsR0FBc0IsRUFBdEIsR0FBMkI7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FBNEJSLEtBQUssQ0FBQ21CLE1BQU4sQ0FBYUosTUFBYixDQUFvQixDQUFwQixFQUF1QixFQUF2QixDQUE1QixDQUEzQixHQUE0RmYsS0FBSyxDQUFDbUIsTUFWbkgsQ0FiRixFQXlCRTtBQUNFLGVBQVMsRUFBQztBQURaLE9BR0duQixLQUFLLENBQUNJLEtBQU4sY0FBa0JNLG9GQUFnQixDQUFDVixLQUFLLENBQUNJLEtBQVAsRUFBYztBQUFFYSxlQUFTLEVBQUU7QUFBYixLQUFkLENBQWxDLElBQXNFLEVBSHpFLENBekJGLENBSEssQ0FBUDtBQW1DRCxHQXhDQSxDQURILENBMUJGLENBSEYsRUEwRUd4QixjQUFjLENBQUNlLE1BQWYsR0FBd0IsQ0FBeEIsSUFBNkIsbUVBQzVCO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLG9EQUFELENBQVEsTUFBUjtBQUNFLFVBQU0sRUFBQyxNQURUO0FBRUUsV0FBTyxFQUFFcEIsY0FGWDtBQUdFLGFBQVMsRUFBQyw0RUFIWjtBQUlFLFdBQU8sRUFBRUYsV0FBVyxHQUFHLE1BQUgsR0FBWSxPQUpsQztBQUtFLFdBQU8sRUFBQyxPQUxWO0FBTUUsWUFBUSxFQUFFO0FBQ1JrQyxXQUFLLEVBQUU7QUFDTEMsZUFBTyxFQUFFLENBREo7QUFFTEMsU0FBQyxFQUFFO0FBRkUsT0FEQztBQUtSQyxVQUFJLEVBQUU7QUFDSkQsU0FBQyxFQUFFLENBQUMsRUFEQTtBQUVKRCxlQUFPLEVBQUU7QUFGTDtBQUxFO0FBTlosS0FpQkc5QyxDQUFDLENBQUMsVUFBRCxDQWpCSixDQURGLENBRDRCLENBMUVoQyxDQURvQixDQXJDeEIsQ0FESyxDQUFQO0FBK0lELENBcExNOztHQUFNSCxZO1VBQ0dFLHVELEVBQ0NHLHFEOzs7S0FGSkwsWSIsImZpbGUiOiIuL2xpYi9jb21wb25lbnRzL0xvb3RCb3hUYWJsZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBvcmRlckJ5IH0gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2xpYi8uLi9pMThuJ1xuaW1wb3J0IHsgQ29udHJpYnV0ZVRvTG9vdEJveERyb3Bkb3duIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvQ29udHJpYnV0ZVRvTG9vdEJveERyb3Bkb3duJ1xuaW1wb3J0IHsgUG9vbERhdGFDb250ZXh0IH0gZnJvbSAnbGliL2NvbXBvbmVudHMvY29udGV4dFByb3ZpZGVycy9Qb29sRGF0YUNvbnRleHRQcm92aWRlcidcbmltcG9ydCB7IEV0aGVyc2NhbkFkZHJlc3NMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvRXRoZXJzY2FuQWRkcmVzc0xpbmsnXG5pbXBvcnQgeyBQb29sTnVtYmVyIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvUG9vbE51bWJlcidcbmltcG9ydCB7IEVyYzIwSW1hZ2UgfSBmcm9tICdsaWIvY29tcG9uZW50cy9FcmMyMEltYWdlJ1xuaW1wb3J0IHsgZGlzcGxheUFtb3VudEluRXRoZXIgfSBmcm9tICdsaWIvdXRpbHMvZGlzcGxheUFtb3VudEluRXRoZXInXG5pbXBvcnQgeyBudW1iZXJXaXRoQ29tbWFzIH0gZnJvbSAnbGliL3V0aWxzL251bWJlcldpdGhDb21tYXMnXG5cbmltcG9ydCBHaWZ0SWNvbiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb24tZ2lmdEAyeC5wbmcnXG5cbmV4cG9ydCBjb25zdCBMb290Qm94VGFibGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgLy8gbG9vdEJveGVzKHdoZXJlOiB7IGVyYzcyMTogXCIweDJjYjI2MGYxMzEzNDU0Mzg2MjYyMzczNzczMTI0ZjZiYzkxMmNmMjhcIiwgdG9rZW5JZDogXCIxXCIgfSkge1xuICAvLyAgIGlkXG4gIC8vIH1cblxuICBjb25zdCB7IGxvb3RCb3ggfSA9IHVzZUdyYXBoTG9vdEJveFF1ZXJ5KGxvb3RCb3hBZGRyZXNzLCB0b2tlbklkKVxuXG4gIGNvbnN0IHsgYmFzZVBhdGgsIGhpc3RvcmljYWwsIHBvb2wgfSA9IHByb3BzXG5cbiAgY29uc3QgW21vcmVWaXNpYmxlLCBzZXRNb3JlVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHNldE1vcmVWaXNpYmxlKHRydWUpXG5cbiAgICByb3V0ZXIucHVzaChcbiAgICAgIGAke2Jhc2VQYXRofSNsb290LWJveC10YWJsZWAsXG4gICAgKVxuICB9XG5cbiAgaWYgKCFsb290Qm94KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGJhbGFuY2VQcm9wZXJ0eSA9IGhpc3RvcmljYWwgPyAnYmFsYW5jZUF3YXJkZWRCTicgOiAnYmFsYW5jZSdcblxuICBsZXQgZXh0ZXJuYWxBd2FyZHMgPSBPYmplY3Qua2V5cyhleHRlcm5hbEVyYzIwQXdhcmRzKVxuICAgIC5tYXAoa2V5ID0+IGV4dGVybmFsRXJjMjBBd2FyZHNba2V5XSlcbiAgICAuZmlsdGVyKGF3YXJkID0+IGF3YXJkPy5bYmFsYW5jZVByb3BlcnR5XT8uZ3QoMCkpXG5cbiAgY29uc3Qgc29ydGVkQXdhcmRzID0gb3JkZXJCeShleHRlcm5hbEF3YXJkcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgfHwgJycsIFsnZGVzYyddKVxuICBjb25zdCBhd2FyZHMgPSBtb3JlVmlzaWJsZSA/IHNvcnRlZEF3YXJkcyA6IHNvcnRlZEF3YXJkcz8uc2xpY2UoMCwgNSlcblxuICByZXR1cm4gPD5cbiAgICA8ZGl2XG4gICAgICBpZD0nbG9vdC1ib3gtdGFibGUnXG4gICAgICBjbGFzc05hbWU9J25vbi1pbnRlcmFjdGFibGUtY2FyZCBtdC0yIHNtOm10LTEwIHB5LTQgc206cHktNiBweC00IHhzOnB4LTQgc206cHgtMTAgYmctY2FyZCByb3VuZGVkLWxnIGNhcmQtbWluLWhlaWdodC1kZXNrdG9wJ1xuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWNhcHRpb24gdXBwZXJjYXNlIG1iLTMnXG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0dpZnRJY29ufVxuICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIG1yLTIgY2FyZC1pY29uJ1xuICAgICAgICAvPiB7dCgnbG9vdEJveCcpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBzbTppdGVtcy1jZW50ZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHthd2FyZHMubGVuZ3RoID09PSAwID8gPD5cbiAgICAgICAgICAgIHtoaXN0b3JpY2FsID8gdCgnbm9PdGhlclByaXplc0F3YXJkZWQnKSA6IHQoJ2N1cnJlbnRseU5vT3RoZXJQcml6ZXMnKX1cbiAgICAgICAgICA8Lz4gOiA8PlxuICAgICAgICAgICAge3Bvb2w/LmV4dGVybmFsQXdhcmRzVVNEICYmIDw+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7bnVtYmVyV2l0aENvbW1hcyhwb29sPy5leHRlcm5hbEF3YXJkc1VTRCl9IHt0KCd2YWx1ZScpfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC8+fSBcbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyFoaXN0b3JpY2FsICYmIDw+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZVRvTG9vdEJveERyb3Bkb3duXG4gICAgICAgICAgICAgIHBvb2w9e3Bvb2x9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gXG4gICAgICBcbiAgICAgIHthd2FyZHMubGVuZ3RoID4gMCAmJiA8PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSd4czpiZy1wcmltYXJ5IHRoZW1lLWxpZ2h0LS1uby1wYWRkaW5nIHRleHQtaW52ZXJzZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLWxnIHAtMCB4czpwLTMgc206cHgtOCBtdC00J1xuICAgICAgICA+XG4gICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RhYmxlLWZpeGVkIHctZnVsbCB0ZXh0LXh4eHMgeHM6dGV4dC14eHMgc206dGV4dC1zbSBhbGlnbi10b3AnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYvMTInXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGg2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmVlbiB0ZXh0LWxlZnQnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdhbW91bnRUb2tlbnMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBzb3J0ZWRBd2FyZHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQvMTInXG4gICAgICAgICAgICAgICAgPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMi8xMiBzbTp3LTEvMTInXG4gICAgICAgICAgICAgICAgPjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7YXdhcmRzLm1hcChhd2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhd2FyZC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gPEZyYWdtZW50XG4gICAgICAgICAgICAgICAgICBrZXk9e2F3YXJkLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHB5LTIgdGV4dC1sZWZ0IGZvbnQtYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxFcmMyMEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXthd2FyZC5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgIC8+IDxFdGhlcnNjYW5BZGRyZXNzTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17YXdhcmQuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1pbnZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthd2FyZC5uYW1lLmxlbmd0aCA+IDIwID8gPHNwYW4gY2xhc3NOYW1lPSd0cnVuY2F0ZSc+e2F3YXJkLm5hbWUuc3Vic3RyKDAsIDIwKX08L3NwYW4+IDogYXdhcmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0V0aGVyc2NhbkFkZHJlc3NMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgc206cHgtMyBweS0yIHRleHQtbGVmdCB0ZXh0LWFjY2VudC0xIHRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFBvb2xOdW1iZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheUFtb3VudEluRXRoZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkW2JhbGFuY2VQcm9wZXJ0eV0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IGF3YXJkLmRlY2ltYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Qb29sTnVtYmVyPiB7YXdhcmQuc3ltYm9sLmxlbmd0aCA+IDIwID8gPHNwYW4gY2xhc3NOYW1lPSd0cnVuY2F0ZSc+e2F3YXJkLnN5bWJvbC5zdWJzdHIoMCwgMjApfTwvc3Bhbj4gOiBhd2FyZC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktMiBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YXdhcmQudmFsdWUgPyBgJCR7bnVtYmVyV2l0aENvbW1hcyhhd2FyZC52YWx1ZSwgeyBwcmVjaXNpb246IDIgfSl9YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIHtleHRlcm5hbEF3YXJkcy5sZW5ndGggPiA1ICYmIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgICAgIGJvcmRlcj0nbm9uZSdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTYgbWItMyB1bmRlcmxpbmUgZm9udC1ib2xkIHRleHQteHhzIHhzOnRleHQtYmFzZSBzbTp0ZXh0LWxnIHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgIGFuaW1hdGU9e21vcmVWaXNpYmxlID8gJ2V4aXQnIDogJ2VudGVyJ31cbiAgICAgICAgICAgICAgICBpbml0aWFsPSdlbnRlcidcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleGl0OiB7XG4gICAgICAgICAgICAgICAgICAgIHk6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3QoJ3Nob3dNb3JlJyl9XG4gICAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgPC8+fVxuXG4gICAgPC9kaXY+XG4gIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/components/LootBoxTable.jsx\n");

/***/ })

})