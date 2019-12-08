import { TButton, button_create } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, fixParentProps, fixOtherProps, WidgetProps, ParentChildProps, eventFun } from "../utils/fixProps"


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

class t_button_base extends TButton{
  constructor(props:ButtonProps){
    super(button_create(null,0,0,0,0));
    // todo 处理 props
    const { repeat, enableLongPress, onClick, onLongClick, parent, ...widgetProps } = props;
    fixWidgetProps(this, widgetProps);
    const buttonProps = { repeat, enableLongPress, onClick, onLongClick };
    fixOtherProps(buttonProps);
    const parentChildProps = { parent };
    fixParentProps(this, parentChildProps);
  }
}

export const t_button = nodeMixins( t_button_base );
