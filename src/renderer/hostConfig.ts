import ReactReconciler from "react-reconciler";
import { IntrinsicElementsTypes } from "../react_awtk_type"
import { Node } from "../utils/nodeMixins"

const SHOW_RECONCILER_CALLS = true;
const log = (funName:string) => {
  if(SHOW_RECONCILER_CALLS){
    globalThis.__AwtkSnapshot && __AwtkSnapshot.push(`${funName}`);
  }
}

import { createInstance, createTextInstance, commitTextUpdate, commitUpdate } from "./instance"


const rootHostContext = {};
const childHostContext = {};


// Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout
type Created = ReactReconciler.HostConfig<IntrinsicElementsTypes, any, any, Node, any, any, any, any, any, any, any, any>;

// @ts-ignore
export const hostConfig :Created =  {
  getPublicInstance(instance){
    log('getPublicInstance');
    return instance;
  },
  getRootHostContext (rootContainerInstance) {
    log('getRootHostContext');
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
    log('getChildHostContext');
    return childHostContext;
  },
  
  prepareForCommit (containerInfo) {
    log('prepareForCommit');
  },
  resetAfterCommit (containerInfo) {
    log('resetAfterCommit');
  },
  
  /**
   *  type fiber 节点的 nodename
   *  newProps 传递给当前节点的属性
   *  rootContainerInstance  根节点
   *  currentHostContext  从上级节点传递下来的上下文
   *  workInProgress   当前这个 dom 节点对应的 fiber 节点
   */
  createInstance (type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
    log('createInstance');
    // todo
    // 都是建立了一个树结点。 各有各的不同。
    return createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress)
  },
  
  appendInitialChild (parentInstance, child) {
    log('appendInitialChild');
      parentInstance.appendNodeChild(child);
  },
  finalizeInitialChildren (parentInstance,type,props,rootContainerInstance,hostContext) {
    log('finalizeInitialChildren');
    return false
  },
  
  prepareUpdate (instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
    log('prepareUpdate');
    return true
  },
  
  shouldSetTextContent (type, props) {
    log('shouldSetTextContent');
    return false
  },
  
  createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle){
    log('createTextInstance');
    // todo
    // 大部分 建立了文本节点
    return createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle);
  },
  
  now: Date.now,
  
  supportsMutation: true,
  
  
  appendChild (parentInstance, child) {
    log('appendNodeChild');
    parentInstance.appendNodeChild(child);
  },
  
  appendChildToContainer(container, child){
    log('appendNodeChild');
    container.appendNodeChild(child)
  },
  
  commitTextUpdate (textInstance, oldText, newText) {
    log('commitTextUpdate');
    // todo
    // 利用节点更新
    commitTextUpdate(textInstance, oldText, newText);
  },
  
  commitUpdate (instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
    log('commitUpdate');
    // todo
    // 利用节点更新
    commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle);
  },
  
  insertBefore(parentInstance, child, beforeChild){
    log('insertBefore');
    // todo
    parentInstance.insertBefore(child, beforeChild);
  },
  
  removeChild(parentInstance, child){
    log('removeNodeChild');
    parentInstance.removeNodeChild(child);
  },
  
  removeChildFromContainer(container, child){
    log('removeNodeChildFromContainer');
    container.removeNodeChild(child);
  }
  
  // todo :
  // resetTextContent : proton-native react-pdf
  // commitMount : proton-native
  // insertInContainerBefore : remax
  // schedulePassiveEffects, cancelPassiveEffects , shouldYield,scheduleDeferredCallbackcancelDeferredCallback,useSyncScheduling
  
}
