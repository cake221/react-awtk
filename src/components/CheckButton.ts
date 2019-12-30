import { TCheckButton } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, 
  fixParentProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps,
  ParentChildProps ,
  unpacParentChildProps,
} from "../utils/fixProps"
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

export function unpackCheckButtonProps(props:CheckButtonProps) {
  const check_button_props:CheckButtonProps = {};
  ( { value:check_button_props.value, onValueWillChange:check_button_props.onValueWillChange, onValueChanged:check_button_props.onValueChanged, isRadio:check_button_props.isRadio } = props);
  return check_button_props;
}

export class t_check_button_base extends TCheckButton{
  constructor(props:CheckButtonProps){
    const {isRadio, ...otherCheckButtonProps} = props;
    if(isRadio){
      super(check_button_create_radio(null,0,0,0,0))
    }else {
      super(check_button_create(null,0,0,0,0));
    }

    const widget_props:WidgetProps = unpackWidgetProps(otherCheckButtonProps);
    const check_button_props:CheckButtonProps = unpackCheckButtonProps(otherCheckButtonProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherCheckButtonProps);
  

    fixWidgetProps(this, widget_props);
    fixOtherProps(this, check_button_props);
    fixParentProps(this, parent_child_props);   
  }
}

export const t_check_button = nodeMixins( t_check_button_base );
