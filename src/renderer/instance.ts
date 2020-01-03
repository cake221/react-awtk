import * as components from '../components/';
import {TWidget} from "../native/awtk"
import { Node } from "../utils/nodeMixins"

export type InstanceType = TWidget & Node

export function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress):InstanceType {
  return new components[type](newProps) || undefined
}

export function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  // 提交更新
  if(instance){
    instance.Update(oldProps, newProps)
  }
}

export function createTextInstance(text, newProps, rootContainerInstance, currentHostContext) {

  // 不支持文本
}

export function commitTextUpdate(textInstance, oldText, newText) {
  // 不支持文本
  
}



