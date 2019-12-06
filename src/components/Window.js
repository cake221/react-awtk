"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var awtk_1 = require("../native/awtk");
var nodeMixins_1 = require("../utils/nodeMixins");
var t_window_base = /** @class */ (function (_super) {
    __extends(t_window_base, _super);
    function t_window_base(props) {
        return _super.call(this, awtk_1.window_create(null, 0, 0, 0, 0)) || this;
    }
    return t_window_base;
}(awtk_1.TWindow));
exports.t_window = nodeMixins_1.nodeMixins(t_window_base);
