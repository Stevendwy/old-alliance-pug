webpackJsonp([8],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_detail_vue__ = __webpack_require__(257);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_a151e4d2_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_detail_vue__ = __webpack_require__(433);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(415)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a151e4d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_a151e4d2_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/buyer/order/detail/detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a151e4d2", Component.options)
  } else {
    hotAPI.reload("data-v-a151e4d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__express_vue__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_vue__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list_vue__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  components: {
    oExpress: __WEBPACK_IMPORTED_MODULE_0__express_vue__["a" /* default */],
    oAddress: __WEBPACK_IMPORTED_MODULE_1__address_vue__["a" /* default */],
    oList: __WEBPACK_IMPORTED_MODULE_2__list_list_vue__["a" /* default */]
  },
  computed: _extends({}, __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].mapState("buyer", ["detailOrdersData"]), {
    carriage: function carriage() {
      return this.detailOrdersData.carriage_unit + this.detailOrdersData.carriage;
    }
  }),
  methods: {
    back: function back() {
      this.$router.history.go(-1);
    }
  }
});

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  props: ['orderStatus'],
  data: function data() {
    return {
      expressObj: {} // 运单对象
    };
  },

  computed: _extends({}, __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].mapState('buyer', ['detailOrdersData']), {
    list: function list() {
      return this.expressObj.tracing || [];
    },
    expressStatusStr: function expressStatusStr() {
      var str = '';
      switch (this.orderStatus) {
        case 'created':
          str = '待付款';
          break;
        case 'paid':
          str = '待发货';
          break;
        case 'closed':
          str = '已关闭';
          break;
      }
      return str;
    },
    carriage: function carriage() {
      return this.expressObj.carriage_unit + this.expressObj.carriage;
    }
  }),
  mounted: function mounted() {
    this.aList();
  },

  methods: {
    aList: function aList() {
      var _this = this;

      u.get('/community/order/logistics/info', { order_id: this.detailOrdersData.order_id }).then(function (res) {
        return _this.expressObj = res;
      });
    }
  }
});

/***/ }),

/***/ 259:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['addressInfo'],
  mounted: function mounted() {
    // this.aList()
  },

  methods: {
    changeAddress: function changeAddress() {},
    aList: function aList() {
      // u.get('/community/order/logistics/info')
    }
  }
});

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_vue__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    lTable: __WEBPACK_IMPORTED_MODULE_0__table_vue__["a" /* default */]
  },
  computed: _extends({}, __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].mapState('buyer', ['detailOrdersData']))
});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  props: ['ordersData'],
  data: function data() {
    return {
      headerTitles: ['', '零件名称', '零件号', '单价(元)', '数量', '金额(元)'], //, '运费(元)'],
      allSelected: false,
      isIndeterminate: false // 全选按钮标识
    };
  },

  computed: _extends({}, __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].mapState('cart', ['orders']), {
    carriage: function carriage() {
      return this.ordersData.carriage_unit + this.ordersData.carriage;
    }
  }),
  methods: {}
});

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("4a6e97b4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a151e4d2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./detail.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a151e4d2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.order[data-v-a151e4d2] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: calc(100% - 32px);\n}\n.order .o-title[data-v-a151e4d2] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 60px;\n  background-color: white;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);\n  font-size: 20px;\n  color: #ec6337;\n}\n.order .o-top[data-v-a151e4d2] {\n  margin-top: 10px;\n}\n.order .pay-total-container .pay-total[data-v-a151e4d2] {\n  display: flex;\n  align-items: center;\n  height: 112px;\n  width: 1024px;\n  padding: 0 10px;\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n  background-color: #fdefeb;\n  justify-content: space-between;\n}\n.order .pay-total-container .pay-total .pt-pay[data-v-a151e4d2] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.order .pay-total-container .pay-total .pt-pay span[data-v-a151e4d2] {\n  margin: 4px 0;\n}\n.order .pay-total-container .pay-total .pt-pay .money[data-v-a151e4d2] {\n  color: #ec6337;\n  margin-left: 4px;\n}\n.order .o-top[data-v-a151e4d2] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: calc(100% - 120px);\n  overflow-y: scroll;\n}\n.order .o-top .o-list-container[data-v-a151e4d2] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.order .o-footer-container[data-v-a151e4d2] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 10px;\n  background-color: white;\n}\n.order .o-footer-container .o-footer[data-v-a151e4d2] {\n  display: flex;\n  justify-content: flex-end;\n  width: 1024px;\n}\n.order .o-footer-container .o-footer .back[data-v-a151e4d2] {\n  width: 110px;\n  padding: 10px 20px;\n  background-color: #ec6337;\n  border: 1px solid #ec6337;\n}\n", ""]);

// exports


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_express_vue__ = __webpack_require__(258);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_7a6cc6cc_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_express_vue__ = __webpack_require__(420);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(418)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a6cc6cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_express_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_7a6cc6cc_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_express_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/buyer/order/detail/express.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a6cc6cc", Component.options)
  } else {
    hotAPI.reload("data-v-7a6cc6cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(419);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("3d3e98be", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7a6cc6cc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./express.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7a6cc6cc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./express.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.express-container[data-v-7a6cc6cc] {\n  width: 1024px;\n}\n.express-container .title[data-v-7a6cc6cc] {\n  display: flex;\n  align-items: center;\n  width: 1024px;\n  height: 40px;\n  background-color: #fdefeb;\n  font-size: 14px;\n  color: #333;\n}\n.express-container .title span[data-v-7a6cc6cc] {\n  margin-left: 10px;\n}\n.express-container .express[data-v-7a6cc6cc] {\n  width: 1024px;\n  font-size: 18px;\n}\n.express-container .express .e-container[data-v-7a6cc6cc] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n  background-color: white;\n}\n.express-container .express .e-container .ec-title[data-v-7a6cc6cc] {\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  color: #333;\n  white-space: pre;\n}\n.express-container .express .e-container .ec-title[data-v-7a6cc6cc]:nth-child(4) {\n  margin-bottom: 10px;\n}\n.express-container .express .e-container .ec-after[data-v-7a6cc6cc] {\n  display: flex;\n  margin-bottom: 10px;\n}\n.express-container .express .e-container .ec-after .eca-list[data-v-7a6cc6cc] {\n  display: flex;\n  flex-direction: column;\n  width: 900px;\n  margin-top: 10px;\n}\n.express-container .express .e-container .ec-after .eca-list .eca-item[data-v-7a6cc6cc] {\n  color: #333;\n  font-size: 12px;\n}\n.express-container .no-info[data-v-7a6cc6cc] {\n  width: 100%;\n  line-height: 60px;\n  padding-left: 10px;\n  font-size: 14px;\n  background: #fdefeb;\n}\n", ""]);

// exports


/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "express-container" }, [
    _vm.expressObj.waybill_no
      ? _c("div", { staticClass: "has-info" }, [
          _vm._m(0),
          _c("div", { staticClass: "express" }, [
            _c("div", { staticClass: "e-container" }, [
              _c("span", { staticClass: "ec-title" }, [
                _vm._v("物流公司: " + _vm._s(_vm.expressObj.logistics))
              ]),
              _c("span", { staticClass: "ec-title" }, [
                _vm._v("运单号码: " + _vm._s(_vm.expressObj.waybill_no))
              ]),
              _c("span", { staticClass: "ec-title" }, [
                _vm._v("备注: " + _vm._s(_vm.expressObj.remark))
              ]),
              _c("span", { staticClass: "ec-title" }, [
                _vm._v("运费金额: " + _vm._s(_vm.carriage) + " ")
              ])
            ])
          ])
        ])
      : _c("div", { staticClass: "no-info" }, [
          _vm._v(" 当前订单状态：" + _vm._s(_vm.expressStatusStr))
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("span", [_vm._v(" 物流信息")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7a6cc6cc", esExports)
  }
}

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_address_vue__ = __webpack_require__(259);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_6644c71e_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_address_vue__ = __webpack_require__(424);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(422)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6644c71e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_address_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_6644c71e_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_address_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/buyer/order/detail/address.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6644c71e", Component.options)
  } else {
    hotAPI.reload("data-v-6644c71e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("14a900fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6644c71e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./address.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6644c71e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./address.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.address-container[data-v-6644c71e] {\n  margin-top: 10px;\n  width: 1024px;\n}\n.address-container .title[data-v-6644c71e] {\n  display: flex;\n  align-items: center;\n  width: 1024px;\n  height: 40px;\n  background-color: #fdefeb;\n  font-size: 14px;\n  color: #333;\n}\n.address-container .title span[data-v-6644c71e] {\n  margin-left: 10px;\n}\n.address-container .address[data-v-6644c71e] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 1024px;\n  height: 60px;\n  margin-top: 10px;\n  font-size: 18px;\n  background-color: white;\n}\n.address-container .address .a-container[data-v-6644c71e] {\n  width: 100%;\n}\n.address-container .address .a-container .ac-title[data-v-6644c71e] {\n  margin-left: 10px;\n  color: #999;\n}\n.address-container .address .a-container span[data-v-6644c71e] {\n  color: #333;\n  font-size: 12px;\n  margin-left: 64px;\n  white-space: pre;\n}\n", ""]);

// exports


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "address-container" }, [
    _vm._m(0),
    _c("div", { staticClass: "address" }, [
      _c("div", { staticClass: "a-container" }, [
        _c("span", [
          _c("i", { staticClass: "el-icon-service" }),
          _vm._v(_vm._s(" " + (_vm.addressInfo.receiver || "")))
        ]),
        _c("span", [
          _c("i", { staticClass: "el-icon-location" }),
          _vm._v(_vm._s(" " + (_vm.addressInfo.area_cn || "")))
        ]),
        _c("span", [
          _c("i", { staticClass: "el-icon-location-outline" }),
          _vm._v(_vm._s(" " + (_vm.addressInfo.address || "")))
        ]),
        _c("span", [
          _c("i", { staticClass: "el-icon-message" }),
          _vm._v(_vm._s(" " + (_vm.addressInfo.zip_code || "")))
        ]),
        _c("span", [
          _c("i", { staticClass: "el-icon-phone-outline" }),
          _vm._v(
            _vm._s(
              " " +
                (_vm.addressInfo.contact_phone ||
                  _vm.expressRes.contact_tel ||
                  "")
            )
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("span", [_vm._v(" 订单信息")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-6644c71e", esExports)
  }
}

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_list_vue__ = __webpack_require__(260);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_372e9c99_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_list_vue__ = __webpack_require__(432);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(426)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-372e9c99"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_372e9c99_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/buyer/order/detail/list/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-372e9c99", Component.options)
  } else {
    hotAPI.reload("data-v-372e9c99", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(427);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("6e7c244d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-372e9c99\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-372e9c99\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_table_vue__ = __webpack_require__(261);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_f896a93a_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_table_vue__ = __webpack_require__(431);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(429)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f896a93a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_f896a93a_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/buyer/order/detail/list/table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f896a93a", Component.options)
  } else {
    hotAPI.reload("data-v-f896a93a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("57e38cf2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f896a93a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./table.vue", function() {
     var newContent = require("!!../../../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f896a93a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.table[data-v-f896a93a] {\n  width: 1024px;\n  display: flex;\n  flex-direction: column;\n}\n.table .t-server[data-v-f896a93a] {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding-left: 10px;\n  font-size: 12px;\n  color: #666;\n  white-space: pre;\n}\n.table .order[data-v-f896a93a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n}\n.table .order[data-v-f896a93a]:nth-child(1) {\n  width: 40px;\n}\n.table .order[data-v-f896a93a]:nth-child(2) {\n  width: 140px;\n}\n.table .order[data-v-f896a93a]:nth-child(3) {\n  width: 214px;\n}\n.table .order[data-v-f896a93a]:nth-child(4) {\n  width: 230px;\n}\n.table .order[data-v-f896a93a]:nth-child(5) {\n  width: 80px;\n}\n.table .order[data-v-f896a93a]:nth-child(6) {\n  width: 320px;\n}\n.table .money[data-v-f896a93a] {\n  color: #ec6337 !important;\n  margin-left: 4px;\n}\n.table .t-box[data-v-f896a93a] {\n  width: 1024px;\n  padding: 10px;\n  background-color: white;\n}\n.table .t-box .header[data-v-f896a93a] {\n  display: flex;\n  height: 32px;\n  border: 1px solid #d8d8d8;\n  background-color: #d8d8d8;\n}\n.table .t-box .header .h-order[data-v-f896a93a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n  font-size: 12px;\n}\n.table .t-box .header .h-order[data-v-f896a93a]:nth-child(1) {\n  width: 40px;\n}\n.table .t-box .header .h-order[data-v-f896a93a]:nth-child(2) {\n  width: 140px;\n}\n.table .t-box .header .h-order[data-v-f896a93a]:nth-child(3) {\n  width: 214px;\n}\n.table .t-box .header .h-order[data-v-f896a93a]:nth-child(4) {\n  width: 230px;\n}\n.table .t-box .header .h-order[data-v-f896a93a]:nth-child(5) {\n  width: 80px;\n}\n.table .t-box .header .h-order[data-v-f896a93a]:nth-child(6) {\n  width: 320px;\n}\n.table .t-box .content[data-v-f896a93a] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #d8d8d8;\n  border-top: 0;\n}\n.table .t-box .content .c-order[data-v-f896a93a] {\n  display: flex;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n  font-size: 14px;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a]:nth-child(1) {\n  width: 40px;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a]:nth-child(2) {\n  width: 140px;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a]:nth-child(3) {\n  width: 214px;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a]:nth-child(4) {\n  width: 230px;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a]:nth-child(5) {\n  width: 80px;\n}\n.table .t-box .content .c-order .c-order[data-v-f896a93a]:nth-child(6) {\n  width: 320px;\n}\n.table .t-box .content .c-order .c-delete[data-v-f896a93a] {\n  color: #ec6337;\n  cursor: pointer;\n}\n.table .l-requirement[data-v-f896a93a] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 1024px;\n  padding: 8px 0;\n  background-color: white;\n}\n.table .l-requirement .lr-remind[data-v-f896a93a] {\n  margin-left: 10px;\n  font-size: 14px;\n  color: #333;\n  white-space: pre;\n}\n.table .l-requirement .lr-total[data-v-f896a93a] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-left: 120px;\n  font-size: 12px;\n  color: #333;\n}\n.table .l-requirement .lr-total > span[data-v-f896a93a] {\n  margin: 4px 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "table" }, [
    _c("div", { staticClass: "t-server" }, [
      _vm._v(
        "订单号: " +
          _vm._s(_vm.ordersData.order_id) +
          "  " +
          _vm._s(_vm.ordersData.order_dt) +
          "  " +
          _vm._s(_vm.ordersData.seller_name)
      )
    ]),
    _c("div", { staticClass: "t-box" }, [
      _c(
        "div",
        { staticClass: "header" },
        _vm._l(_vm.headerTitles, function(title, index) {
          return _c("div", { key: index, staticClass: "h-order" }, [
            _c("span", [_vm._v(" " + _vm._s(title))])
          ])
        })
      ),
      _c(
        "div",
        { staticClass: "content" },
        _vm._l(_vm.ordersData.data, function(order, gIndex) {
          return _c("div", { key: gIndex, staticClass: "c-order" }, [
            _c("div", { staticClass: "c-order" }),
            _c("div", { staticClass: "c-order" }, [
              _vm._v(" " + _vm._s(order.label))
            ]),
            _c("div", { staticClass: "c-order" }, [
              _vm._v(" " + _vm._s(order.pid))
            ]),
            _c("div", { staticClass: "c-order money" }, [
              _vm._v(" ¥" + _vm._s(order.price))
            ]),
            _c("div", { staticClass: "c-order" }, [
              _vm._v(" " + _vm._s(order.quantity))
            ]),
            _c("div", { staticClass: "c-order money" }, [
              _vm._v(" ¥" + _vm._s(order.money))
            ])
          ])
        })
      )
    ]),
    _c("div", { staticClass: "l-requirement" }, [
      _c("div", { staticClass: "lr-remind" }, [
        _vm._v(" 备注: " + _vm._s(_vm.ordersData.remark))
      ]),
      _c("div", { staticClass: "lr-total" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f896a93a", esExports)
  }
}

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "list" },
    [_c("l-table", { attrs: { ordersData: _vm.detailOrdersData } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-372e9c99", esExports)
  }
}

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "order" }, [
    _c("div", { staticClass: "o-title" }, [_vm._v(" 订单详情")]),
    _c(
      "div",
      { staticClass: "o-top" },
      [
        _c("o-express", {
          attrs: { orderStatus: _vm.detailOrdersData.status }
        }),
        _c("o-address", {
          attrs: { addressInfo: _vm.detailOrdersData.contact }
        }),
        _c(
          "div",
          { staticClass: "o-list-container" },
          [
            _c("o-list"),
            _c("div", { staticClass: "pay-total-container" }, [
              _c("div", { staticClass: "pay-total" }, [
                _c("div", { staticClass: "pt-count" }, [
                  _vm._v("总计:"),
                  _c("span", [
                    _vm._v(
                      "货品种类: " +
                        _vm._s(_vm.detailOrdersData.total_quantity) +
                        "类"
                    )
                  ]),
                  _c("span", [
                    _vm._v(
                      "数量总计: " +
                        _vm._s(_vm.detailOrdersData.total_quantity) +
                        "件"
                    )
                  ])
                ]),
                _c("div", { staticClass: "pt-pay" }, [
                  _c("span", [
                    _vm._v("货品总金额: "),
                    _c("span", { staticClass: "money" }, [
                      _vm._v("¥" + _vm._s(_vm.detailOrdersData.total_money))
                    ])
                  ]),
                  _c("span", [
                    _vm._v(" 运费到付: "),
                    _c("span", { staticClass: "money" }, [
                      _vm._v(" " + _vm._s(_vm.carriage))
                    ])
                  ])
                ])
              ])
            ])
          ],
          1
        )
      ],
      1
    ),
    _c("div", { staticClass: "o-footer-container" }, [
      _c("div", { staticClass: "o-footer" }, [_vm._m(0)], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "el-button",
      {
        staticClass: "back",
        attrs: { type: "primary" },
        on: { click: _vm.back }
      },
      [_vm._v("返回")]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a151e4d2", esExports)
  }
}

/***/ })

});