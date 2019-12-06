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
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
var Node = /** @class */ (function () {
    function Node() {
        this.tk_children = [];
        this.tk_parent = null;
    }
    Node.prototype.appendChild = function (child) {
        if (child) {
            child.tk_parent = this;
            this.tk_children.push(child);
        }
    };
    Node.prototype.insertBefore = function (child, beforeChild) {
        var index = this.tk_children.indexOf(beforeChild);
        if (index !== -1 && child) {
            child.tk_parent = this;
            this.tk_children.splice(index, 0, child);
        }
    };
    Node.prototype.removeChild = function (child) {
        var index = this.tk_children.indexOf(child);
        if (index !== -1) {
            child.tk_parent = null;
            this.tk_children.splice(index, 1);
        }
        child.removeAllChilds();
    };
    Node.prototype.isEmpty = function () {
        return this.tk_children.length === 0;
    };
    Node.prototype.removeAllChilds = function () {
        var _this = this;
        this.tk_children.forEach(function (c) { return _this.removeChild(c); });
    };
    return Node;
}());
exports.Node = Node;
function nodeMixins(parent) {
    var tmpClass = /** @class */ (function (_super) {
        __extends(tmpClass, _super);
        function tmpClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        tmpClass.prototype.appendChild = function (child) {
        };
        tmpClass.prototype.insertBefore = function (child, beforeChild) {
        };
        tmpClass.prototype.isEmpty = function () {
            return undefined;
        };
        tmpClass.prototype.removeAllChilds = function () {
        };
        tmpClass.prototype.removeChild = function (child) {
        };
        return tmpClass;
    }(parent));
    applyMixins(tmpClass, [Node]);
    return tmpClass;
}
exports.nodeMixins = nodeMixins;
