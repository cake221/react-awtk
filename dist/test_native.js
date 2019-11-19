/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/native/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test/native/Button.js":
/*!*******************************!*\
  !*** ./test/native/Button.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ "./test/native/Widget.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Button =
/*#__PURE__*/
function (_Widget) {
  _inherits(Button, _Widget);

  function Button(nativeObj) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, nativeObj));
  }

  _createClass(Button, [{
    key: "setRepeat",
    value: function setRepeat(repeat) {
      return button_set_repeat(this.nativeObj, repeat);
    }
  }, {
    key: "setEnableLongPress",
    value: function setEnableLongPress(enable_long_press) {
      return button_set_enable_long_press(this.nativeObj, enable_long_press);
    }
  }, {
    key: "repeat",
    get: function get() {
      return button_t_get_prop_repeat(this.nativeObj);
    }
  }, {
    key: "enableLongPress",
    get: function get() {
      return button_t_get_prop_enable_long_press(this.nativeObj);
    }
  }], [{
    key: "create",
    value: function create(parent, x, y, w, h) {
      return new Button(button_create(parent ? parent.nativeObj : null, x, y, w, h));
    }
  }, {
    key: "cast",
    value: function cast(widget) {
      return new Button(button_cast(widget ? widget.nativeObj || widget : null));
    }
  }]);

  return Button;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./test/native/Global.js":
/*!*******************************!*\
  !*** ./test/native/Global.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Global =
/*#__PURE__*/
function () {
  function Global(nativeObj) {
    _classCallCheck(this, Global);

    this.nativeObj = nativeObj;
  }

  _createClass(Global, null, [{
    key: "quit",
    value: function quit() {
      return tk_quit();
    }
  }, {
    key: "getPointerX",
    value: function getPointerX() {
      return tk_get_pointer_x();
    }
  }, {
    key: "getPointerY",
    value: function getPointerY() {
      return tk_get_pointer_y();
    }
  }, {
    key: "isPointerPressed",
    value: function isPointerPressed() {
      return tk_is_pointer_pressed();
    }
  }]);

  return Global;
}();

/* harmony default export */ __webpack_exports__["default"] = (Global);

/***/ }),

/***/ "./test/native/Widget.js":
/*!*******************************!*\
  !*** ./test/native/Widget.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Widget =
/*#__PURE__*/
function () {
  function Widget(nativeObj) {
    _classCallCheck(this, Widget);

    this.nativeObj = nativeObj;
  }

  _createClass(Widget, [{
    key: "countChildren",
    value: function countChildren() {
      return widget_count_children(this.nativeObj);
    }
  }, {
    key: "getChild",
    value: function getChild(index) {
      return new Widget(widget_get_child(this.nativeObj, index));
    }
  }, {
    key: "indexOf",
    value: function indexOf() {
      return widget_index_of(this.nativeObj);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      return widget_move(this.nativeObj, x, y);
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      return widget_resize(this.nativeObj, w, h);
    }
  }, {
    key: "moveResize",
    value: function moveResize(x, y, w, h) {
      return widget_move_resize(this.nativeObj, x, y, w, h);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      return widget_set_value(this.nativeObj, value);
    }
  }, {
    key: "animateValueTo",
    value: function animateValueTo(value, duration) {
      return widget_animate_value_to(this.nativeObj, value, duration);
    }
  }, {
    key: "addValue",
    value: function addValue(delta) {
      return widget_add_value(this.nativeObj, delta);
    }
  }, {
    key: "useStyle",
    value: function useStyle(style) {
      return widget_use_style(this.nativeObj, style);
    }
  }, {
    key: "setText",
    value: function setText(text) {
      return widget_set_text_utf8(this.nativeObj, text);
    }
  }, {
    key: "setTrText",
    value: function setTrText(text) {
      return widget_set_tr_text(this.nativeObj, text);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return widget_get_value(this.nativeObj);
    }
  }, {
    key: "getText",
    value: function getText() {
      return widget_get_text(this.nativeObj);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return widget_set_name(this.nativeObj, name);
    }
  }, {
    key: "setCursor",
    value: function setCursor(cursor) {
      return widget_set_cursor(this.nativeObj, cursor);
    }
  }, {
    key: "setAnimation",
    value: function setAnimation(animation) {
      return widget_set_animation(this.nativeObj, animation);
    }
  }, {
    key: "createAnimator",
    value: function createAnimator(animation) {
      return widget_create_animator(this.nativeObj, animation);
    }
  }, {
    key: "startAnimator",
    value: function startAnimator(name) {
      return widget_start_animator(this.nativeObj, name);
    }
  }, {
    key: "setAnimatorTimeScale",
    value: function setAnimatorTimeScale(name, time_scale) {
      return widget_set_animator_time_scale(this.nativeObj, name, time_scale);
    }
  }, {
    key: "pauseAnimator",
    value: function pauseAnimator(name) {
      return widget_pause_animator(this.nativeObj, name);
    }
  }, {
    key: "findAnimator",
    value: function findAnimator(name) {
      return widget_find_animator(this.nativeObj, name);
    }
  }, {
    key: "stopAnimator",
    value: function stopAnimator(name) {
      return widget_stop_animator(this.nativeObj, name);
    }
  }, {
    key: "destroyAnimator",
    value: function destroyAnimator(name) {
      return widget_destroy_animator(this.nativeObj, name);
    }
  }, {
    key: "setEnable",
    value: function setEnable(enable) {
      return widget_set_enable(this.nativeObj, enable);
    }
  }, {
    key: "setFloating",
    value: function setFloating(floating) {
      return widget_set_floating(this.nativeObj, floating);
    }
  }, {
    key: "setFocused",
    value: function setFocused(focused) {
      return widget_set_focused(this.nativeObj, focused);
    }
  }, {
    key: "child",
    value: function child(name) {
      return new Widget(widget_child(this.nativeObj, name));
    }
  }, {
    key: "lookup",
    value: function lookup(name, recursive) {
      return new Widget(widget_lookup(this.nativeObj, name, recursive));
    }
  }, {
    key: "lookupByType",
    value: function lookupByType(type, recursive) {
      return new Widget(widget_lookup_by_type(this.nativeObj, type, recursive));
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible, recursive) {
      return widget_set_visible(this.nativeObj, visible, recursive);
    }
  }, {
    key: "setVisibleOnly",
    value: function setVisibleOnly(visible) {
      return widget_set_visible_only(this.nativeObj, visible);
    }
  }, {
    key: "setSensitive",
    value: function setSensitive(sensitive) {
      return widget_set_sensitive(this.nativeObj, sensitive);
    }
  }, {
    key: "on",
    value: function on(type, on_event, ctx) {
      return widget_on(this.nativeObj, type, on_event, ctx);
    }
  }, {
    key: "off",
    value: function off(id) {
      return widget_off(this.nativeObj, id);
    }
  }, {
    key: "invalidateForce",
    value: function invalidateForce(r) {
      return widget_invalidate_force(this.nativeObj, r ? r.nativeObj : null);
    }
  }, {
    key: "setPropStr",
    value: function setPropStr(name, v) {
      return widget_set_prop_str(this.nativeObj, name, v);
    }
  }, {
    key: "getPropStr",
    value: function getPropStr(name, defval) {
      return widget_get_prop_str(this.nativeObj, name, defval);
    }
  }, {
    key: "setPropInt",
    value: function setPropInt(name, v) {
      return widget_set_prop_int(this.nativeObj, name, v);
    }
  }, {
    key: "getPropInt",
    value: function getPropInt(name, defval) {
      return widget_get_prop_int(this.nativeObj, name, defval);
    }
  }, {
    key: "setPropBool",
    value: function setPropBool(name, v) {
      return widget_set_prop_bool(this.nativeObj, name, v);
    }
  }, {
    key: "getPropBool",
    value: function getPropBool(name, defval) {
      return widget_get_prop_bool(this.nativeObj, name, defval);
    }
  }, {
    key: "isWindowOpened",
    value: function isWindowOpened() {
      return widget_is_window_opened(this.nativeObj);
    }
  }, {
    key: "isWindow",
    value: function isWindow() {
      return widget_is_window(this.nativeObj);
    }
  }, {
    key: "isDesigningWindow",
    value: function isDesigningWindow() {
      return widget_is_designing_window(this.nativeObj);
    }
  }, {
    key: "isWindowManager",
    value: function isWindowManager() {
      return widget_is_window_manager(this.nativeObj);
    }
  }, {
    key: "foreach",
    value: function foreach(visit, ctx) {
      return widget_foreach(this.nativeObj, visit, ctx);
    }
  }, {
    key: "getWindow",
    value: function getWindow() {
      return new Widget(widget_get_window(this.nativeObj));
    }
  }, {
    key: "getWindowManager",
    value: function getWindowManager() {
      return new Widget(widget_get_window_manager(this.nativeObj));
    }
  }, {
    key: "getType",
    value: function getType() {
      return widget_get_type(this.nativeObj);
    }
  }, {
    key: "clone",
    value: function clone(parent) {
      return new Widget(widget_clone(this.nativeObj, parent ? parent.nativeObj : null));
    }
  }, {
    key: "equal",
    value: function equal(other) {
      return widget_equal(this.nativeObj, other ? other.nativeObj : null);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return widget_destroy(this.nativeObj);
    }
  }, {
    key: "layout",
    value: function layout() {
      return widget_layout(this.nativeObj);
    }
  }, {
    key: "setSelfLayout",
    value: function setSelfLayout(params) {
      return widget_set_self_layout(this.nativeObj, params);
    }
  }, {
    key: "setChildrenLayout",
    value: function setChildrenLayout(params) {
      return widget_set_children_layout(this.nativeObj, params);
    }
  }, {
    key: "setSelfLayoutParams",
    value: function setSelfLayoutParams(x, y, w, h) {
      return widget_set_self_layout_params(this.nativeObj, x, y, w, h);
    }
  }, {
    key: "setStyleInt",
    value: function setStyleInt(state_and_name, value) {
      return widget_set_style_int(this.nativeObj, state_and_name, value);
    }
  }, {
    key: "setStyleStr",
    value: function setStyleStr(state_and_name, value) {
      return widget_set_style_str(this.nativeObj, state_and_name, value);
    }
  }, {
    key: "setStyleColor",
    value: function setStyleColor(state_and_name, value) {
      return widget_set_style_color(this.nativeObj, state_and_name, value);
    }
  }, {
    key: "x",
    get: function get() {
      return widget_t_get_prop_x(this.nativeObj);
    }
  }, {
    key: "y",
    get: function get() {
      return widget_t_get_prop_y(this.nativeObj);
    }
  }, {
    key: "w",
    get: function get() {
      return widget_t_get_prop_w(this.nativeObj);
    }
  }, {
    key: "h",
    get: function get() {
      return widget_t_get_prop_h(this.nativeObj);
    }
  }, {
    key: "name",
    get: function get() {
      return widget_t_get_prop_name(this.nativeObj);
    }
  }, {
    key: "trText",
    get: function get() {
      return widget_t_get_prop_tr_text(this.nativeObj);
    }
  }, {
    key: "style",
    get: function get() {
      return widget_t_get_prop_style(this.nativeObj);
    }
  }, {
    key: "animation",
    get: function get() {
      return widget_t_get_prop_animation(this.nativeObj);
    }
  }, {
    key: "enable",
    get: function get() {
      return widget_t_get_prop_enable(this.nativeObj);
    }
  }, {
    key: "visible",
    get: function get() {
      return widget_t_get_prop_visible(this.nativeObj);
    },
    set: function set(value) {
      widget_t_set_prop_visible(this.nativeObj, value);
    }
  }, {
    key: "floating",
    get: function get() {
      return widget_t_get_prop_floating(this.nativeObj);
    }
  }, {
    key: "sensitive",
    get: function get() {
      return widget_t_get_prop_sensitive(this.nativeObj);
    },
    set: function set(value) {
      widget_t_set_prop_sensitive(this.nativeObj, value);
    }
  }, {
    key: "focusable",
    get: function get() {
      return widget_t_get_prop_focusable(this.nativeObj);
    },
    set: function set(value) {
      widget_t_set_prop_focusable(this.nativeObj, value);
    }
  }, {
    key: "withFocusState",
    get: function get() {
      return widget_t_get_prop_with_focus_state(this.nativeObj);
    },
    set: function set(value) {
      widget_t_set_prop_with_focus_state(this.nativeObj, value);
    }
  }], [{
    key: "cast",
    value: function cast(widget) {
      return new Widget(widget_cast(widget ? widget.nativeObj || widget : null));
    }
  }]);

  return Widget;
}();

/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./test/native/Window.js":
/*!*******************************!*\
  !*** ./test/native/Window.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ "./test/native/Widget.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Window =
/*#__PURE__*/
function (_Widget) {
  _inherits(Window, _Widget);

  function Window(nativeObj) {
    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, _getPrototypeOf(Window).call(this, nativeObj));
  }

  _createClass(Window, [{
    key: "setFullscreen",
    value: function setFullscreen(fullscreen) {
      return window_set_fullscreen(this.nativeObj, fullscreen);
    }
  }, {
    key: "close",
    value: function close() {
      return window_close(this.nativeObj);
    }
  }, {
    key: "closeForce",
    value: function closeForce() {
      return window_close_force(this.nativeObj);
    }
  }, {
    key: "fullscreen",
    get: function get() {
      return window_t_get_prop_fullscreen(this.nativeObj);
    }
  }], [{
    key: "create",
    value: function create(parent, x, y, w, h) {
      return new Window(window_create(parent ? parent.nativeObj : null, x, y, w, h));
    }
  }, {
    key: "open",
    value: function open(name) {
      return new Window(window_open(name));
    }
  }, {
    key: "openAndClose",
    value: function openAndClose(name, to_close) {
      return new Window(window_open_and_close(name, to_close ? to_close.nativeObj : null));
    }
  }, {
    key: "cast",
    value: function cast(widget) {
      return new Window(window_cast(widget ? widget.nativeObj || widget : null));
    }
  }]);

  return Window;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Window);

/***/ }),

/***/ "./test/native/index.js":
/*!******************************!*\
  !*** ./test/native/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Window */ "./test/native/Window.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./test/native/Button.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global */ "./test/native/Global.js");




function applicationInit() {
  var win = _Window__WEBPACK_IMPORTED_MODULE_0__["default"].create(null, 0, 0, 0, 0);
  var ok = _Button__WEBPACK_IMPORTED_MODULE_1__["default"].create(win, 0, 0, 0, 0);
  ok.setText("ok");
  ok.setSelfLayoutParams("center", "middle", "50%", "30");
  /**
   * 暂时不考虑事件
   */
  // ok.on(TEventType.CLICK, function(evt) {
  //     const e = TPointerEvent.cast(evt);
  //     console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
  //     console.log("on click: " + e.x + " " + e.y);
  //
  //     return TRet.OK;
  // });

  console.log("global: " + _Global__WEBPACK_IMPORTED_MODULE_2__["default"].getPointerX() + " " + _Global__WEBPACK_IMPORTED_MODULE_2__["default"].getPointerY() + " " + _Global__WEBPACK_IMPORTED_MODULE_2__["default"].isPointerPressed());
  win.layout();
}

applicationInit();

/***/ })

/******/ });
//# sourceMappingURL=test_native.js.map