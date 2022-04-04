"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_bookmark_Show_vue"],{

/***/ "./resources/js/components/bookmark/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/bookmark/Show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_1bde8d1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=1bde8d1b& */ "./resources/js/components/bookmark/Show.vue?vue&type=template&id=1bde8d1b&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Show_vue_vue_type_template_id_1bde8d1b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_1bde8d1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/bookmark/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/bookmark/Show.vue?vue&type=template&id=1bde8d1b&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/bookmark/Show.vue?vue&type=template&id=1bde8d1b& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1bde8d1b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1bde8d1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1bde8d1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=1bde8d1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/Show.vue?vue&type=template&id=1bde8d1b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/Show.vue?vue&type=template&id=1bde8d1b&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/Show.vue?vue&type=template&id=1bde8d1b& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-12 mb-2" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-success",
            attrs: { to: { name: "crearBlog" } },
          },
          [_c("i", { staticClass: "fas fa-plus-circle" })]
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.blogs, function (blog) {
              return _c("tr", { key: blog.id }, [
                _c("td", [_vm._v(_vm._s(blog.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(blog.titulo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(blog.contenido))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-info",
                        attrs: {
                          to: { name: "editarBlog", params: { id: blog.id } },
                        },
                      },
                      [_c("i", { staticClass: "fas fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.borrarBlog(blog.id)
                          },
                        },
                      },
                      [_c("i", { staticClass: "fas fa-trash" })]
                    ),
                  ],
                  1
                ),
              ])
            }),
            0
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white" }, [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Título")]),
        _vm._v(" "),
        _c("th", [_vm._v("Contenido")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);