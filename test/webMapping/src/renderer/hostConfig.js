const SHOW_RECONCILER_CALLS = true
const log = (...args) => SHOW_RECONCILER_CALLS && console.log(...args)
import { createInstance, createTextInstance } from "./instance"


const rootHostContext = {};
const childHostContext = {};

export default  {
    getPublicInstance(instance){
        log('getPublicInstance', [...arguments]);
        return instance;
    },
    getRootHostContext (rootContainerInstance) {
        log('getRootHostContext', [...arguments]);
        return rootHostContext;
    },
    /**
     * parentHostContext  从上一级节点传递过来的上下文
     * type   当前节点的 nodeType
     * rootContainerInstance  根节点
     */
    // 从上一层fiber节点获取上下文，并且向下一层传递
    getChildHostContext(parentHostContext, type, rootContainerInstance) {
        // context, fiber.type, rootInstance
        log('getChildHostContext', [...arguments]);
        return childHostContext;
    },

    prepareForCommit (containerInfo) {
        log('prepareForCommit',[...arguments]);
    },
    resetAfterCommit (containerInfo) {
        // todo
        // 大部分什么都没做。 除了 ink
        log('resetAfterCommit',[...arguments]);
    },

    /**
     *  type fiber 节点的 nodename
     *  newProps 传递给当前节点的属性
     *  rootContainerInstance  根节点
     *  currentHostContext  从上级节点传递下来的上下文
     *  workInProgress   当前这个 dom 节点对应的 fiber 节点
     */
    createInstance (type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
        log('createInstance',[...arguments]);
        log(type);
        // todo
        // 都是建立了一个树结点。 各有各的不同。
        return createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress)
    },
    appendInitialChild (parentInstance, child) {
        log('appendInitialChild',[...arguments]);
        log('appendInitialChild 温宇飞',parentInstance.children);
        parentInstance.appendChild(child);
    },

    finalizeInitialChildren (parentInstance,type,props,rootContainerInstance,hostContext) {
        log('finalizeInitialChildren',[...arguments]);
        return false
    },

    prepareUpdate (instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
        log('prepareUpdate',[...arguments]);
        // todo
        return true
    },

    shouldSetTextContent (type, props) {
        log('shouldSetTextContent',[...arguments]);
        // todo
        // 大部分是， false。除了 ink
        return false
    },

    createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle){
        log('createTextInstance',[...arguments]);
        // todo
        // 大部分 建立了文本节点
        return createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle);
    },

    now: Date.now,

    supportsMutation: true,


    appendChild (parentInstance, child) {
        log('appendChild',[...arguments]);
        parentInstance.appendChild(child);
    },

    appendChildToContainer(container, child){
        log('appendChildToContainer',[...arguments]);
        container.appendChild(child)
    },

    commitTextUpdate (textInstance, oldText, newText) {
        log('commitTextUpdate',[...arguments]);
        // todo
        // 利用节点更新
        textInstance.update(textInstance, oldText, newText);
    },

    commitUpdate (instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        log('commitUpdate',[...arguments]);
        // todo
        // 利用节点更新
        instance.update(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle);
    },

    insertBefore(parentInstance, child, beforeChild){
        log('insertBefore',[...arguments]);
        // todo
        parentInstance.insertChild(child, beforeChild);
    },

    removeChild(parentInstance, child){
        log('removeChild',[...arguments]);
        parentInstance.removeChild(child);
    },

    removeChildFromContainer(container, child){
        log('removeChildFromContainer',[...arguments]);
        container.removeChild(child);
    }

    // todo :
    // resetTextContent : proton-native react-pdf
    // commitMount : proton-native
    // insertInContainerBefore : remax
    // schedulePassiveEffects, cancelPassiveEffects , shouldYield,scheduleDeferredCallbackcancelDeferredCallback,useSyncScheduling

}
