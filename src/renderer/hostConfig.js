"use strict";
exports.__esModule = true;
var SHOW_RECONCILER_CALLS = true;
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return SHOW_RECONCILER_CALLS && console.log.apply(console, args);
};
var instance_1 = require("./instance");
var rootHostContext = {};
var childHostContext = {};
// @ts-ignore
exports.hostConfig = {
    getPublicInstance: function (instance) {
        log('getPublicInstance');
        return instance;
    },
    getRootHostContext: function (rootContainerInstance) {
        log('getRootHostContext');
        return rootHostContext;
    },
    /**
     * parentHostContext  从上一级节点传递过来的上下文
     * type   当前节点的 nodeType
     * rootContainerInstance  根节点
     */
    // 从上一层fiber节点获取上下文，并且向下一层传递
    getChildHostContext: function (parentHostContext, type, rootContainerInstance) {
        // context, fiber.type, rootInstance
        log('getChildHostContext');
        return childHostContext;
    },
    prepareForCommit: function (containerInfo) {
        log('prepareForCommit');
    },
    resetAfterCommit: function (containerInfo) {
        log('resetAfterCommit');
    },
    /**
     *  type fiber 节点的 nodename
     *  newProps 传递给当前节点的属性
     *  rootContainerInstance  根节点
     *  currentHostContext  从上级节点传递下来的上下文
     *  workInProgress   当前这个 dom 节点对应的 fiber 节点
     */
    createInstance: function (type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
        log('createInstance');
        // todo
        // 都是建立了一个树结点。 各有各的不同。
        return instance_1.createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress);
    },
    appendInitialChild: function (parentInstance, child) {
        log('appendInitialChild');
        parentInstance.appendChild(child);
    },
    finalizeInitialChildren: function (parentInstance, type, props, rootContainerInstance, hostContext) {
        log('finalizeInitialChildren');
        return false;
    },
    prepareUpdate: function (instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
        log('prepareUpdate');
        return true;
    },
    shouldSetTextContent: function (type, props) {
        log('shouldSetTextContent');
        return false;
    },
    createTextInstance: function (text, rootContainerInstance, hostContext, internalInstanceHandle) {
        log('createTextInstance');
        // todo
        // 大部分 建立了文本节点
        return instance_1.createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle);
    },
    now: Date.now,
    supportsMutation: true,
    appendChild: function (parentInstance, child) {
        log('appendChild');
        parentInstance.appendChild(child);
    },
    appendChildToContainer: function (container, child) {
        log('appendChildToContainer');
        container.appendChild(child);
    },
    commitTextUpdate: function (textInstance, oldText, newText) {
        log('commitTextUpdate');
        // todo
        // 利用节点更新
        instance_1.commitTextUpdate(textInstance, oldText, newText);
    },
    commitUpdate: function (instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        log('commitUpdate');
        // todo
        // 利用节点更新
        instance_1.commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle);
    },
    insertBefore: function (parentInstance, child, beforeChild) {
        log('insertBefore');
        // todo
        parentInstance.insertBefore(child, beforeChild);
    },
    removeChild: function (parentInstance, child) {
        log('removeChild');
        parentInstance.removeChild(child);
    },
    removeChildFromContainer: function (container, child) {
        log('removeChildFromContainer');
        container.removeChild(child);
    }
    // todo :
    // resetTextContent : proton-native react-pdf
    // commitMount : proton-native
    // insertInContainerBefore : remax
    // schedulePassiveEffects, cancelPassiveEffects , shouldYield,scheduleDeferredCallbackcancelDeferredCallback,useSyncScheduling
};
