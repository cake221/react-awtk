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
var nodeMixins_1 = require("../utils/nodeMixins");
var t_root = /** @class */ (function (_super) {
    __extends(t_root, _super);
    function t_root() {
        return _super.call(this) || this;
    }
    return t_root;
}(nodeMixins_1.Node));
exports.t_root = t_root;
