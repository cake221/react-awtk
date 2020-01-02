import { TLabel } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps, 
} from "../utils/fixProps"
import {
  ParentChildProps,
  unpacParentChildProps,
  fixParentProps,
} from "../utils/fixParentChildComponent"
import {eventFun} from "../native/react_awtk"


export interface LabelProps extends WidgetProps, ParentChildProps {
  // 显示字符的个数(小余0时全部显示)。 
  length?: number
}

export function unpackLabelProps(props:LabelProps) {
  const label_props:LabelProps = {};
  ( { length:label_props.length } = props);
  return label_props;
}

export class t_label_base extends TLabel{
  constructor(props:LabelProps){
    const { ...otherLabelProps } = props;
    super(label_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherLabelProps);
    const label_props:LabelProps = unpackLabelProps(otherLabelProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherLabelProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, label_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_label = nodeMixins( t_label_base );
