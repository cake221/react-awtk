import { TEdit } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, 
  fixParentProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps, 
  ParentChildProps,
  unpacParentChildProps,
} from "../utils/fixProps"
import {eventFun} from "../native/react_awtk"


export interface EditProps extends WidgetProps, ParentChildProps {
  // 编辑器是否为只读。
  readonly?:boolean;
  // 密码是否可见。
  passwordVisible? :boolean;
  // 输入无效时，是否自动改正
  autoFix? :boolean;
  // 
  selectNoneWhenFocused?: boolean;
  // 
  openImWhenFocused?: boolean;
  // 输入类型
  inputType?: TInputType;
  // 输入提示。
  inputTips?: string;
  // 文本改变事件。
  onValueChanged?: eventFun; 
  // 文本正在改变事件(编辑中)。
  onValueChanging?: eventFun; 
  // 设置为文本输入及其长度限制，不允许输入超过max个字符，少于min个字符时进入error状态。
  textLimit?: number[];
  // 设置为整数输入及取值范围。
  intLimit?: number[];
  // 设置为浮点数输入及取值范围。
  floatLimit?: number[];
}

export function unpackEditProps(props:EditProps) {
  const edit_props:EditProps = {};
  ( { 
    readonly:edit_props.readonly, 
    passwordVisible:edit_props.passwordVisible, 
    autoFix:edit_props.autoFix, 
    selectNoneWhenFocused:edit_props.selectNoneWhenFocused,
    openImWhenFocused: edit_props.openImWhenFocused,
    inputType: edit_props.inputType,
    inputTips: edit_props.inputTips,
    onValueChanged: edit_props.onValueChanged, 
    onValueChanging: edit_props.onValueChanging,
    textLimit: edit_props.textLimit,
    intLimit: edit_props.intLimit,
    floatLimit: edit_props.floatLimit
  } = props);
  return edit_props;
}

export class t_edit_base extends TEdit{
  constructor(props:EditProps){
    const { ...otherEditProps } = props;
    super(edit_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherEditProps);
    const edit_props:EditProps = unpackEditProps(otherEditProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherEditProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, edit_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_edit = nodeMixins( t_edit_base );
