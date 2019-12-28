import { TCheckButton } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, fixParentProps, fixOtherProps, WidgetProps, ParentChildProps } from "../utils/fixProps"
import {eventFun} from "../native/react_awtk"


export interface CheckButtonProps extends WidgetProps, ParentChildProps {
  value?:boolean;
  // 值（勾选状态）即将改变事件
  onValueWillChange?:eventFun;
  // 值（勾选状态）改变事件
  onValueChanged?:eventFun;
  // 是否是单选
  isRadio?:boolean;
}

export class t_check_button_base extends TCheckButton{
  constructor(props:CheckButtonProps){
    // todo 处理 props
    const { value, onValueWillChange, onValueChanged, isRadio, parent, ...widgetProps } = props;
    if(isRadio){
      super(check_button_create_radio(null,0,0,0,0))
    }else {
      super(check_button_create);
    }
    fixWidgetProps(this, widgetProps);
    const buttonProps = { value, onValueWillChange, onValueChanged,  };
    fixOtherProps(this, buttonProps);
    const parentChildProps = { parent };
    fixParentProps(this, parentChildProps);
  }
}

export const t_check_button = nodeMixins( t_check_button_base );
