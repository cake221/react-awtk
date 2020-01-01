import { TComboBox } from "../native/awtk"
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


export interface ComboBoxProps extends WidgetProps, ParentChildProps {
  // 为点击按钮时，要打开窗口的名称。
  openWindow?: string;
  // 当前选中的选项。
  selectedIndex?: number;
  // 值
  value?: number;
  // 是否本地化(翻译)选项(缺省为TRUE)。
  localizeOptions?: boolean;
  // 设置可选项(冒号分隔值和文本，分号分隔选项，如:1:red;2:green;3:blue)。
  options?: string;
  // 下拉选项的高度。如果open_window为空，则使用缺省高度。
  itemHeight?: number;
  // 值将要改变
  onValueWillChange?: eventFun;
  // 值改变
  onValueChanged?: eventFun;
}

export function unpackComboBoxProps(props:ComboBoxProps) {
  const combo_box_props:ComboBoxProps = {};
  ( { openWindow:combo_box_props.openWindow, 
    selectedIndex:combo_box_props.selectedIndex, 
    value:combo_box_props.value, 
    localizeOptions:combo_box_props.localizeOptions,
    options:combo_box_props.options,
    itemHeight:combo_box_props.itemHeight,
    onValueWillChange: combo_box_props.onValueWillChange,
    onValueChanged: combo_box_props.onValueChanged
   }  = props);
  return combo_box_props;
}

export class t_combo_box_base extends TComboBox{
  constructor(props:ComboBoxProps){
    const { ...otherComboBoxProps } = props;
    super(combo_box_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherComboBoxProps);
    const combo_box_props:ComboBoxProps = unpackComboBoxProps(otherComboBoxProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherComboBoxProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, combo_box_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_combo_box = nodeMixins( t_combo_box_base );
