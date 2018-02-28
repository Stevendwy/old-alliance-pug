webpackJsonp([25],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_record_vue__ = __webpack_require__(241);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_39d2b700_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_record_vue__ = __webpack_require__(358);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(356)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_record_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_39d2b700_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/person/record/record.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39d2b700", Component.options)
  } else {
    hotAPI.reload("data-v-39d2b700", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["balance"],
  data: function data() {
    return {
      items: []
    };
  },
  mounted: function mounted() {
    this.aHistory();
  },

  methods: {
    aHistory: function aHistory() {
      var _this = this;

      u.get('/account/balance/history').then(function (res) {
        _this.items = res.data || [];
      });
    }
  }
});

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(357);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("7d0e60ce", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39d2b700\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./record.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39d2b700\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./record.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.record {\n  width: 100%;\n  height: 100%;\n}\n.record .title {\n  margin-top: 20px;\n  margin-left: 40px;\n  font-size: 14px;\n  color: #666;\n  font-weight: 800;\n}\n.record .title .money {\n  color: #ec6337;\n}\n.record .table {\n  width: 804px;\n  height: 344px;\n  margin: 10px 0 0 10px;\n  border: 1px solid #d8d8d8;\n}\n.record .table .row {\n  display: flex;\n  height: 40px;\n}\n.record .table .row .item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #666;\n  font-size: 12px;\n}\n.record .table .row .item:nth-child(1) {\n  width: 90px;\n  padding-left: 10px;\n}\n.record .table .row .item:nth-child(2) {\n  width: 70px;\n}\n.record .table .row .item:nth-child(3) {\n  width: 242px;\n}\n.record .table .row .item:nth-child(4) {\n  width: 150px;\n}\n.record .table .row .item:nth-child(5) {\n  width: 80px;\n}\n.record .table .row .item:nth-child(6) {\n  width: 70px;\n}\n.record .table .row .item:nth-child(7) {\n  width: 100px;\n  padding-right: 10px;\n}\n.record .table .header {\n  display: flex;\n  height: 40px;\n  background: #f6f6f6;\n}\n.record .table .header .item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #666;\n  font-size: 12px;\n}\n.record .table .header .item:nth-child(1) {\n  width: 90px;\n  padding-left: 10px;\n}\n.record .table .header .item:nth-child(2) {\n  width: 70px;\n}\n.record .table .header .item:nth-child(3) {\n  width: 242px;\n}\n.record .table .header .item:nth-child(4) {\n  width: 150px;\n}\n.record .table .header .item:nth-child(5) {\n  width: 80px;\n}\n.record .table .header .item:nth-child(6) {\n  width: 70px;\n}\n.record .table .header .item:nth-child(7) {\n  width: 100px;\n  padding-right: 10px;\n}\n.record .table .content {\n  height: 304px;\n  overflow-y: scroll;\n}\n.record .table .c-row {\n  display: flex;\n  height: 40px;\n  min-height: 58px;\n  border-top: 1px solid #d8d8d8;\n}\n.record .table .c-row .item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #666;\n  font-size: 12px;\n}\n.record .table .c-row .item:nth-child(1) {\n  width: 90px;\n  padding-left: 10px;\n}\n.record .table .c-row .item:nth-child(2) {\n  width: 70px;\n}\n.record .table .c-row .item:nth-child(3) {\n  width: 242px;\n}\n.record .table .c-row .item:nth-child(4) {\n  width: 150px;\n}\n.record .table .c-row .item:nth-child(5) {\n  width: 80px;\n}\n.record .table .c-row .item:nth-child(6) {\n  width: 70px;\n}\n.record .table .c-row .item:nth-child(7) {\n  width: 100px;\n  padding-right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "record" }, [
    _c("div", { staticClass: "title" }, [_vm._v("账户管理")]),
    _c("div", { staticClass: "title" }, [
      _vm._v("账户余额："),
      _c("span", { staticClass: "money" }, [
        _vm._v(" ¥" + _vm._s(_vm.balance.total_balance))
      ])
    ]),
    _c("div", { staticClass: "table" }, [
      _vm._m(0),
      _c(
        "div",
        { staticClass: "content" },
        _vm._l(_vm.items, function(item, index) {
          return _c("div", { key: index, staticClass: "c-row" }, [
            _c("div", { staticClass: "item" }, [
              _vm._v("   " + _vm._s(item.create_time))
            ]),
            _c("div", { staticClass: "item" }, [
              _vm._v("   " + _vm._s(item.reason_str))
            ]),
            item.order_id
              ? _c("div", { staticClass: "item" }, [
                  _vm._v(" 订单号：" + _vm._s(item.order_id)),
                  _c("div", [_vm._v("流水号：" + _vm._s(item.serial))])
                ])
              : _vm._e(),
            _c("div", { staticClass: "item" }, [
              _c("div", [_vm._v(_vm._s(item.name))]),
              _c("div", [_vm._v(_vm._s(item.bank_info))])
            ]),
            _c("div", { staticClass: "item" }, [
              _vm._v("   " + _vm._s(item.amount))
            ]),
            _c("div", { staticClass: "item" }, [
              _vm._v("   " + _vm._s(item.status))
            ]),
            _c("div", { staticClass: "item" }, [
              _vm._v("   " + _vm._s(item.enable_time))
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "item" }, [_vm._v(" 申请时间")]),
      _c("div", { staticClass: "item" }, [_vm._v(" 内容")]),
      _c("div", { staticClass: "item" }, [_vm._v(" 订单号|流水号")]),
      _c("div", { staticClass: "item" }, [_vm._v(" 对方")]),
      _c("div", { staticClass: "item" }, [_vm._v(" 金额|明细")]),
      _c("div", { staticClass: "item" }, [_vm._v(" 状态")]),
      _c("div", { staticClass: "item" }, [_vm._v(" 完成时间")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-39d2b700", esExports)
  }
}

/***/ })

});