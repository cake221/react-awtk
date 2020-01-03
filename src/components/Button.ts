import { TButton } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { 
  unpackUpdateProps,
  unpackCreateProps,
  WidgetProps, 
  widgetBaseProps,
  fixWidgetProps, 
  fixOtherProps, 
} from "../utils/fixProps"
import {
  fixParentProps,
  parentChildProps,
  ParentChildProps,
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

export class t_button_base extends TButton{
  constructor(props:ButtonProps){
    const { ...otherButtonProps } = props;
    super(button_create(null,0,0,0,0));
    const widget_create_props:WidgetProps = unpackCreateProps(otherButtonProps, widgetBaseProps);
    const button_create_props:ButtonBaseProps = unpackCreateProps(otherButtonProps, buttonBaseProps);
    const parent_child_create_props:ParentChildProps = unpackCreateProps(otherButtonProps, parentChildProps);
   
    fixWidgetProps(this, widget_create_props);
    fixOtherProps(this, button_create_props);
    fixParentProps(this, parent_child_create_props);
  }

  Update(oldProps:ButtonProps, newProps:ButtonProps){
    
    const button_update_props:ButtonBaseProps = unpackUpdateProps(oldProps, newProps, buttonBaseProps);
    const widget_update_props:WidgetProps = unpackUpdateProps(oldProps, newProps, widgetBaseProps);
    const parent_child_props:ParentChildProps = unpackUpdateProps(oldProps, newProps, parentChildProps);
    fixOtherProps(this, button_update_props);
    fixWidgetProps(this, widget_update_props);
    fixParentProps(this, parent_child_props);

  }

}

export const t_button = nodeMixins( t_button_base );
