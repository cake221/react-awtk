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
} from '../components/';


// Creates an element with an element type, props and a root instance
function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
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
    default: undefined,
  };
  
  return COMPONENTS[type]() || COMPONENTS.default;
}

function createTextInstance(text, newProps, rootContainerInstance, currentHostContext) {
  // 暂时不支持。
  // type：是 文字的内容。
  // return new Text( text );
}

function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {

}

function commitTextUpdate(textInstance, oldText, newText) {

}

export { createInstance, createTextInstance, commitTextUpdate, commitUpdate };
