"use strict";
exports.__esModule = true;
exports.parentWidgets = {};
exports.setParentWidget = function (parentInstance, parentId) {
    for (var _i = 0, _a = exports.parentWidgets[parentId]; _i < _a.length; _i++) {
        var child = _a[_i];
        parentInstance.addWidgetChild(child);
    }
    parentInstance.layout();
};
exports.setChildWidget = function (childInstance, parentId) {
    !exports.parentWidgets[parentId] && (exports.parentWidgets[parentId] = []);
    exports.parentWidgets[parentId].push(childInstance);
};
