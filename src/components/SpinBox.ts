import { TSpinBox } from "../native/awtk"
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
import { EditProps, unpackEditProps } from "./Edit"

export interface SpinBoxProps extends EditProps {

}

export function unpackSpinBoxProps(props:SpinBoxProps) {
  const spin_box_props:SpinBoxProps = {};
  ( {

  } = props);
  return spin_box_props;
}

export class t_spin_box_base extends TSpinBox{
  constructor(props:SpinBoxProps){
    const { ...otherSpinBoxProps } = props;
    super(spin_box_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherSpinBoxProps);
    const edit_props:EditProps = unpackEditProps(otherSpinBoxProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherSpinBoxProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, edit_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_spin_box = nodeMixins( t_spin_box_base );
