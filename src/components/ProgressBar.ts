import { TProgressBar } from "../native/awtk"
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


export interface ProgressBarProps extends WidgetProps, ParentChildProps {
  // 进度条的值[0-100]。
  value?: number;
  // 最大值(缺省为100)。
  max?: number;
  // 进度条的是否为垂直方向。
  vertical?: boolean;
  // 是否显示文本。
  showText?: boolean;
  // 值改变
  onValueChanged?: eventFun;
}

export function unpackProgressBarProps(props:ProgressBarProps) {
  const progress_bar_props:ProgressBarProps = {};
  ( { 
    value:progress_bar_props.value, 
    max:progress_bar_props.max, 
    vertical:progress_bar_props.vertical, 
    showText:progress_bar_props.showText,
    onValueChanged: progress_bar_props.onValueChanged,
  } = props);
  return progress_bar_props;
}

export class t_progress_bar_base extends TProgressBar{
  constructor(props:ProgressBarProps){
    const { ...otherProgressBarProps } = props;
    super(progress_bar_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherProgressBarProps);
    const progress_bar_props:ProgressBarProps = unpackProgressBarProps(otherProgressBarProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherProgressBarProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, progress_bar_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_progress_bar = nodeMixins( t_progress_bar_base );
