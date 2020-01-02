import { TSlider } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps, 
} from "../utils/fixProps"
import {
  fixParentProps,
  unpacParentChildProps,
  ParentChildProps,
} from "../utils/fixParentChildComponent"
import {eventFun} from "../native/react_awtk"


export interface SliderProps extends WidgetProps, ParentChildProps {
  // 值
  value?: number;
  // 
  min?: number;
  // 
  max?: number;
  // 拖动的最小单位。
  step?: number;
  // 滑块的是否为垂直方向。
  vertical?: boolean;
  // bar的宽度或高度。
  barSize?: number;
  //
  onValueChanged?: eventFun;
  onValueChanging?: eventFun;
}

export function unpackSliderProps(props:SliderProps) {
  const slider_props:SliderProps = {};
  ( { value:slider_props.value, 
    min:slider_props.min, 
    max:slider_props.max, 
    step:slider_props.step,
    vertical:slider_props.vertical,
    barSize:slider_props.barSize,
    onValueChanged:slider_props.onValueChanged,
    onValueChanging:slider_props.onValueChanging
  } = props);
  return slider_props;
}

export class t_slider_base extends TSlider{
  constructor(props:SliderProps){
    const { ...otherSliderProps } = props;
    super(slider_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherSliderProps);
    const slider_props:SliderProps = unpackSliderProps(otherSliderProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherSliderProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, slider_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_slider = nodeMixins( t_slider_base );
