"use strict";
exports.__esModule = true;
var components_1 = require("../components/");
// Creates an element with an element type, props and a root instance
function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
    var COMPONENTS = {
        t_window: function () { return new components_1.t_window(newProps); },
        t_button: function () { return new components_1.t_button(newProps); },
        "default": undefined
    };
    return COMPONENTS[type]() || COMPONENTS["default"];
}
exports.createInstance = createInstance;
function createTextInstance(text, newProps, rootContainerInstance, currentHostContext) {
    // 暂时不支持。
    // type：是 文字的内容。
    // return new Text( text );
}
exports.createTextInstance = createTextInstance;
function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
}
exports.commitUpdate = commitUpdate;
function commitTextUpdate(textInstance, oldText, newText) {
}
exports.commitTextUpdate = commitTextUpdate;
