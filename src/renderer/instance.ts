import {
  t_button,
  t_window,
  t_check_button,
  t_edit,
  t_combo_box,
  t_image,
  t_label,
  t_rich_text,
  t_progress_bar,
  t_slider,
  t_spin_box,
} from '../components/';
import {TWidget} from "../native/awtk"
import { Node } from "../utils/nodeMixins"

export type InstanceType = TWidget & Node

export function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress):InstanceType {
  const COMPONENTS = {
    t_window: () => new t_window( newProps ),
    t_button: () => new t_button( newProps ) ,
    t_check_button:()=>new t_check_button( newProps),
    t_edit: ()=> new t_edit( newProps ),
    t_combo_box: ()=> new t_combo_box(newProps),
    t_image: ()=> new t_image(newProps),
    t_label: ()=> new t_label(newProps),
    t_rich_text: ()=> new t_rich_text(newProps),
    t_progress_bar: ()=> new t_progress_bar(newProps),
    t_slider: ()=> new t_slider(newProps),
    t_spin_box: ()=> new t_spin_box(newProps),
    default: undefined,
  };
  
  return COMPONENTS[type]() || COMPONENTS.default;
}

export function createTextInstance(text, newProps, rootContainerInstance, currentHostContext) {
  // 暂时不支持。
  // type：是 文字的内容。
  // return new Text( text );
}

export function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {

}

export function commitTextUpdate(textInstance, oldText, newText) {

}



