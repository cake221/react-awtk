import { TButton, button_create } from "../native/awtk"
import { WidgetProps, childWidgetProps } from "./baseTypes"
import { nodeMixins } from "../utils/nodeMixins"

export interface ButtonProps extends WidgetProps, childWidgetProps {
  // 重复按的时间
  repeat? :number;
  // 是否允许长按
  enableLongPress?:boolean;
  // 下按 时间
  onClick?:any;
}

class t_button_base extends TButton{
  constructor(props:ButtonProps){
    super(button_create(null,0,0,0,0));
  }
}

export const t_button = nodeMixins( t_button_base );
