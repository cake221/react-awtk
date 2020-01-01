import {
  t_button,
  t_window,
  t_check_button,
  t_edit,
  t_combo_box
} from '../components/';


// Creates an element with an element type, props and a root instance
function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
  const COMPONENTS = {
    t_window: () => new t_window( newProps ),
    t_button: () => new t_button( newProps ) ,
    t_check_button:()=>new t_check_button( newProps),
    t_edit: ()=> new t_edit( newProps ),
    t_combo_box: ()=> new t_combo_box(newProps),
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
