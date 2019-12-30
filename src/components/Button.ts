import { TButton } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, 
  fixParentProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps, 
  ParentChildProps,
  unpacParentChildProps
} from "../utils/fixProps"
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
  ( { repeat:button_props.repeat, enableLongPress:button_props.enableLongPress, onClick:button_props.onClick, onLongClick:button_props.onLongClick } = props);
  return button_props;
}

export class t_button_base extends TButton{
  constructor(props:ButtonProps){
    super(button_create(null,0,0,0,0));
    // TODO: 处理 props
    let widget_props:WidgetProps = unpackWidgetProps(props);
    const button_props:ButtonProps = unpackButtonProps(props);
    let parent_child_props:ParentChildProps = unpacParentChildProps(props);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, button_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_button = nodeMixins( t_button_base );
