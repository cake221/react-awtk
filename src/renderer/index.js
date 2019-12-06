"use strict";
exports.__esModule = true;
var react_reconciler_1 = require("react-reconciler");
var hostConfig_1 = require("./hostConfig");
var Root_1 = require("./Root");
// Renders the input component
function AwtkRender(element, callBack) {
    var reconciler = react_reconciler_1["default"](hostConfig_1.hostConfig);
    var node = reconciler.createContainer(new Root_1.t_root(), false, false);
    reconciler.updateContainer(element, node, null, function () { });
    callBack();
}
exports["default"] = AwtkRender;
