webpackJsonp([24],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_sale_vue__ = __webpack_require__(243);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_41a451b4_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_sale_vue__ = __webpack_require__(364);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(362)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41a451b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_sale_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_41a451b4_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_sale_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/sale/sale.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41a451b4", Component.options)
  } else {
    hotAPI.reload("data-v-41a451b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_steven_Desktop_0007web_ppy_alliance_theme_loading_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_steven_Desktop_0007web_ppy_alliance_theme_loading_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_steven_Desktop_0007web_ppy_alliance_theme_loading_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_steven_Desktop_0007web_ppy_alliance_theme_base_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_steven_Desktop_0007web_ppy_alliance_theme_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_steven_Desktop_0007web_ppy_alliance_theme_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_loading__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(9);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contentList: [], // 特卖列表
      cities: [], // 城市列表
      page: 1, // 初始请求页码
      isLoading: false, // 是否请求中，避免滚动多次请求
      noMore: false, // 是否还有更多
      selectedCity: "全部" // 默认选中全部
    };
  },

  computed: _extends({}, __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].mapState(["appScrollTop"]), {
    reqCity: function reqCity() {
      var city = this.selectedCity;
      if (city === "全部") city = "";
      return city;
    }
  }),
  watch: {
    appScrollTop: function appScrollTop(value) {
      // console.log(value)
      // console.log(window.innerHeight)
      // console.log(this.$refs.list.offsetHeight)
      if (value !== 0) {
        if (value + window.innerHeight >= this.$refs.list.offsetHeight + 90) {
          // 70 是上方高度, 20 是 padding-bottom
          this.loadMore();
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.contentList = []; // 初始化清空数据
    this.aList().then(function (res) {
      if (res.total_page === _this.page || !res.total_page) _this.noMore = true;
      _this.isLoading = false;
    });
  },

  methods: _extends({}, __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].mapMutations("cart", ["updateOrders"]), __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].mapMutations(["updateBadgeCount"]), {
    aList: function aList(payload) {
      var _this2 = this;

      return u.get("/community/sailling", payload).then(function (res) {
        var _contentList;

        if (!res) return;

        payload = payload || {}; // 安全处理

        if (payload.loadMore) (_contentList = _this2.contentList).push.apply(_contentList, _toConsumableArray(res.data)); // loadMore 在后方追加
        else _this2.contentList = res.data; // 其他直接替换

        var cities = res.item_city;
        if (cities) cities.unshift("全部");else cities = [];
        _this2.cities = cities;

        return res;
      });
    },
    cartClick: function cartClick(item) {
      this.handleCart({ item: item });
    },
    handleCart: function handleCart(payload) {
      var _this3 = this;

      var item = payload.item;
      var obj = {
        p_uid: item.p_uid
      };
      var loading = __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_loading___default.a.service();

      var in_spcarts = item.in_spcarts;
      var url = in_spcarts ? "/community/spcart/del" : "/community/spcart/add";
      var nextInSpcarts = !in_spcarts;
      var mode = in_spcarts ? "decrease" : "plus";
      var message = in_spcarts ? "取消加入购物车" : "加入购物车成功";

      return u.post(url, obj).then(function (res) {
        loading.close();

        if (!res) return;

        _this3.$set(item, "in_spcarts", nextInSpcarts);
        _this3.updateOrders({ item: item, mode: mode });
        _this3.updateBadgeCount({ mode: mode });
        _this3.$message.success(message);
      });
    },
    handleReq: function handleReq(loadMore) {
      var _this4 = this;

      this.aList({ page: this.page, address: this.reqCity, loadMore: loadMore }).then(function (res) {
        if (res.total_page === _this4.page || !res.total_page) _this4.noMore = true;
        _this4.isLoading = false;
      }).catch(function (err) {
        return _this4.isLoading = false;
      });
    },
    loadMore: function loadMore() {
      if (this.isLoading || this.noMore) return;

      this.page++;
      this.isLoading = true;
      this.handleReq(true);
    },
    cityClass: function cityClass(city) {
      return city === this.selectedCity ? "city-selected" : "city";
    },
    cityClick: function cityClick(city) {
      this.init();
      this.selectedCity = city;
      this.handleReq();
    },

    /**@description 初始化一些数据 */
    init: function init() {
      this.page = 1;
      this.noMore = false;
    }
  })
});

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("6f58355a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41a451b4\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./sale.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41a451b4\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./sale.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.sale[data-v-41a451b4] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sale div[data-v-41a451b4] {\n  color: #333;\n  font-size: 14px;\n}\n.sale .title-container[data-v-41a451b4] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background-color: white;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);\n  z-index: 2;\n}\n.sale .title-container .title[data-v-41a451b4] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1024px;\n  height: 60px;\n  color: #ed6337;\n  font-size: 20px;\n}\n.sale .list[data-v-41a451b4] {\n  width: 1024px;\n  min-height: 400px;\n}\n.sale .list .filters[data-v-41a451b4] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 1024px;\n  height: 60px;\n  padding: 0 46px;\n  background: white;\n}\n.sale .list .filters .city[data-v-41a451b4] {\n  width: 44px;\n  line-height: 20px;\n  margin-left: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n.sale .list .filters .city-selected[data-v-41a451b4] {\n  width: 44px;\n  line-height: 20px;\n  margin-left: 50px;\n  text-align: center;\n  cursor: pointer;\n  color: white;\n  background: #ff5502;\n}\n.sale .list .items[data-v-41a451b4] {\n  display: flex;\n  flex-wrap: wrap;\n  background: white;\n  margin-top: 10px;\n  padding-bottom: 20px;\n}\n.sale .list .items .item[data-v-41a451b4] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 220px;\n  height: 370px;\n  border: 1px solid #d8d8d8;\n  margin-left: 30px;\n  margin-top: 20px;\n  padding: 0 8px;\n}\n.sale .list .items .item .part-img[data-v-41a451b4] {\n  width: 204px;\n  height: 204px;\n}\n.sale .list .items .item .part-id[data-v-41a451b4] {\n  font-size: 14px;\n  color: #333;\n  font-weight: 800;\n}\n.sale .list .items .item .part-annotation[data-v-41a451b4] {\n  font-size: 12px;\n  color: #666;\n}\n.sale .list .items .item > div[data-v-41a451b4] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sale .list .items .item > div .span[data-v-41a451b4] {\n  font-size: 12px;\n  color: #999;\n}\n.sale .list .items .item > div .part-company[data-v-41a451b4] {\n  font-size: 12px;\n  color: #999;\n}\n.sale .list .items .item > div .part-address[data-v-41a451b4] {\n  font-size: 12px;\n  color: #999;\n}\n.sale .list .items .item > div .part-price[data-v-41a451b4] {\n  font-size: 20px;\n  color: #ff5502;\n}\n.sale .list .items .item > div .part-carriage[data-v-41a451b4] {\n  font-size: 12px;\n  color: #999;\n}\n.sale .list .items .item .cart[data-v-41a451b4] {\n  height: 35px;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 0;\n}\n.sale .list .items .item .cart-handle[data-v-41a451b4] {\n  height: 35px;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 0;\n  background-image: linear-gradient(90deg, #e9414e 0%, #f3a533 100%);\n  border: 1px solid #e9414e;\n}\n.sale .list .items .item .cart-handle-cancle[data-v-41a451b4] {\n  height: 35px;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 0;\n  background: #999;\n  border: 0;\n}\n.sale .list .no-more[data-v-41a451b4] {\n  width: 1024px;\n  height: 40px;\n  padding-bottom: 20px;\n  text-align: center;\n  font-size: 14px;\n  color: #999;\n  background: white;\n  letter-spacing: 0;\n}\n.sale .list .no-more img[data-v-41a451b4] {\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sale" }, [
    _vm._m(0),
    _c("div", { ref: "list", staticClass: "list" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.cities.length > 0,
              expression: "cities.length > 0"
            }
          ],
          staticClass: "filters"
        },
        [
          _c("span", [_vm._v(" 城市：")]),
          _vm._l(_vm.cities, function(city, index) {
            return _c(
              "div",
              {
                key: index,
                class: _vm.cityClass(city),
                on: {
                  click: function($event) {
                    _vm.cityClick(city)
                  }
                }
              },
              [_vm._v(_vm._s(city))]
            )
          })
        ],
        2
      ),
      _c(
        "div",
        { staticClass: "items" },
        _vm._l(_vm.contentList, function(item, index) {
          return _c("div", { key: index, staticClass: "item" }, [
            _c("img", {
              staticClass: "part-img",
              attrs: { src: item.img, alt: "商品图片" }
            }),
            _c("span", { staticClass: "part-id" }, [_vm._v(_vm._s(item.pid))]),
            _c("span", { staticClass: "part-annotation" }, [
              _vm._v(" " + _vm._s(item.label))
            ]),
            _c("div", [
              _c("span", { staticClass: "part-company" }, [
                _vm._v(" " + _vm._s(item.supplier))
              ]),
              _c("span", { staticClass: "part-address" }, [
                _vm._v(" " + _vm._s(item.address))
              ])
            ]),
            _c("div", [
              _c("span", { staticClass: "part-price" }, [
                _vm._v(" " + _vm._s(item.prices_sale))
              ]),
              _c("span", { staticClass: "part-carriage" }, [
                _vm._v(" " + _vm._s(item.carriage))
              ])
            ]),
            !item.in_spcarts
              ? _c(
                  "button",
                  {
                    staticClass: "cart-handle",
                    on: {
                      click: function($event) {
                        _vm.cartClick(item)
                      }
                    }
                  },
                  [_vm._v(" 加入购物车")]
                )
              : _c(
                  "button",
                  {
                    staticClass: "cart-handle-cancle",
                    on: {
                      click: function($event) {
                        _vm.cartClick(item)
                      }
                    }
                  },
                  [_vm._v("取消购物车")]
                )
          ])
        })
      ),
      this.noMore
        ? _c("div", { staticClass: "no-more" }, [_vm._v(" 已经到底了！")])
        : _c("div", { staticClass: "no-more" }, [
            _c("img", {
              attrs: { src: "/static/img/loading.gif", alt: "loading" }
            })
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title-container" }, [
      _c("div", { staticClass: "title" }, [_vm._v(" 特卖会")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-41a451b4", esExports)
  }
}

/***/ })

});