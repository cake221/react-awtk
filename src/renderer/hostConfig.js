const SHOW_RECONCILER_CALLS = true
const log = (...args) => SHOW_RECONCILER_CALLS && console.log(...args)
import { createInstance } from "./createInstance"

export default  {
    // Methods for first-time rendering
    // --------------------------------
    appendInitialChild (parent, stateNode) {
        log('appendInitialChild')
    },

    appendChildToContainer(container, child){
        log('appendChildToContainer')
        container.appendChild(child)
    },

    appendChild (parent, stateNode) {
        log('appendChild')
    },

    /**
     *  type fiber 节点的 nodename
     *  newProps 传递给当前节点的属性
     *  rootContainerInstance  根节点
     *  currentHostContext  从上级节点传递下来的上下文
     *  workInProgress   当前这个dom节点对应的fiber节点
     */
    createInstance (type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
        log('createInstance', type)
        return createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress)
    },

    finalizeInitialChildren (wordElement, type, props) {
        log('finalizeInitialChildren')
        return false
    },

    now: Date.now,

    prepareForCommit () {
        log('prepareForCommit')
    },

    prepareUpdate (wordElement, type, oldProps, newProps) {
        log('prepareUpdate')
        return true
    },

    resetAfterCommit () {
        log('resetAfterCommit')
    },

    resetTextContent (wordElement) {
        log('resetTextContent')
    },

    getRootHostContext (instance) {
        log('getRootHostContext', instance)
        return {};
    },

    getChildHostContext (instance) {
        log('getChildHostContext')
        return {};
    }
    ,
    shouldSetTextContent (type, props) {
        log('shouldSetTextContent')
        return false
    },

    // Methods for updating state
    // --------------------------
    commitTextUpdate (textInstance, oldText, newText) {
        log('commitTextUpdate')
    },

    commitUpdate (
        instance, updatePayload, type, oldProps, newProps, finishedWork
    ) {
        log('commitUpdate')
    },

    removeChildFromContainer (parent, stateNode) {
        log('removeChildFromContainer')
    },

    useSyncScheduling: true,
    supportsMutation: true
}
