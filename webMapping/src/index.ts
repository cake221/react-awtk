import './polyfill'
import AwtkRender from "./renderer";
import { setParentWidget } from "./utils/fixParentChildComponent";
import {TEventType} from "./native/awtk"

const t_button = "t_button";
const t_window = "t_window";


export {
  
  t_window,
  t_button,
  AwtkRender,
  setParentWidget,
  TEventType
}

