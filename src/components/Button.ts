import { TButton } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { 
  fixWidgetProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps, 
} from "../utils/fixProps"
import {
  fixParentProps,
  ParentChildProps,
  unpacParentChildProps,
} from "../utils/fixParentChildComponent"
import {eventFun} from "../native/react_awtk"


export interface ButtonProps extends WidgetProps, ParentChildProps {
  // 重复按的时间
  repeat? :number;
  // 是否允许长按
  enableLongPress?:boolean;
  // 下按事件
  onClick?:eventFun;
  // 长按事件
  onLongClick?:eventFun;
}

export function unpackButtonProps(props:ButtonProps) {
  const button_props:ButtonProps = {};
  ( { repeat:button_props.repeat, 
    enableLongPress:button_props.enableLongPress, 
    onClick:button_props.onClick, 
    onLongClick:button_props.onLongClick 
  } = props);
  return button_props;
}

export class t_button_base extends TButton{
  constructor(props:ButtonProps){
    const { ...otherButtonProps } = props;
    super(button_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherButtonProps);
    const button_props:ButtonProps = unpackButtonProps(otherButtonProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherButtonProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, button_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_button = nodeMixins( t_button_base );
