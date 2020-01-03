import { TButton } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { 
  fixWidgetProps, 
  WidgetProps, 
  widgetBaseProps,
  unpackWidgetProps, 
  fixOtherProps, 
  unpackUpdateProps,
} from "../utils/fixProps"
import {
  fixParentProps,
  parentChildProps,
  ParentChildProps,
  unpacParentChildProps,
} from "../utils/fixParentChildComponent"
import {eventFun} from "../native/react_awtk"

interface ButtonBaseProps{
  // 重复按的时间
  repeat? :number;
  // 是否允许长按
  enableLongPress?:boolean;
  // 下按事件
  onClick?:eventFun;
  // 长按事件
  onLongClick?:eventFun;
}

const buttonBaseProps:string[] = [
  "repeat", 
  "enableLongPress", 
  "onClick", 
  "onLongClick", 
]

export type ButtonProps = ButtonBaseProps & WidgetProps & ParentChildProps

function unpackButtonProps(props:ButtonBaseProps) {
  const button_props:ButtonBaseProps = {};

  for(const item of buttonBaseProps){
    if(props[item]) button_props[item] = props[item];
  }

  return button_props;
}

export class t_button_base extends TButton{
  constructor(props:ButtonProps){
    const { ...otherButtonProps } = props;
    super(button_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherButtonProps);
    const button_props:ButtonBaseProps = unpackButtonProps(otherButtonProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherButtonProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, button_props);
    fixParentProps(this, parent_child_props);
  }

  Update(oldProps:ButtonProps, newProps:ButtonProps){
    
    const button_update_props:ButtonBaseProps = unpackUpdateProps(oldProps, newProps, buttonBaseProps);
    fixOtherProps(this, button_update_props);
    const widget_update_props:WidgetProps = unpackUpdateProps(oldProps, newProps, widgetBaseProps);
    fixWidgetProps(this, widget_update_props);
    const parent_child_props:ParentChildProps = unpackUpdateProps(oldProps, newProps, parentChildProps);
    fixParentProps(this, parent_child_props);
    
  }

}

export const t_button = nodeMixins( t_button_base );
