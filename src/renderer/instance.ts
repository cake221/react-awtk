import * as components from '../components/';
import {TWidget} from "../native/awtk"
import { Node } from "../utils/nodeMixins"
import { react_text } from "../renderer/ReactText"

export type InstanceType = TWidget & Node

export function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress):InstanceType {
  return new components[type](newProps) || undefined
}

export function createTextInstance(text, newProps, rootContainerInstance, currentHostContext) {

  return new react_text(text);
}

export function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  // 提交更新
  if(instance){
    instance.Update(oldProps, newProps)
  }
}

export function commitTextUpdate(textInstance, oldText, newText) {
  // 文字更新
  if(textInstance){
    textInstance.TextUpdate(oldText, newText)
  }
}



