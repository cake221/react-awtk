import { TImage } from "../native/awtk"
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

interface ImageBaseProps extends WidgetProps, ParentChildProps{
  // 图片的名称。
  image?: string;
  // 控件的旋转角度(幅度)。
  rotation?: number;
  // 点击时，是否触发EVT_CLICK事件。
  clickable?: boolean;
  // 是否设置选中状态。
  selectable?: boolean;
  // 当前是否被选中。
  selected?: boolean;
  // 缩放比例
  scale?: number[]
}

function unpackImageBaseProps(props:ImageBaseProps) {
  const image_base_props:ImageBaseProps = {};
  ( { image:image_base_props.image,
    rotation:image_base_props.rotation,
    clickable:image_base_props.clickable,
    selectable:image_base_props.selectable,
    selected:image_base_props.selected,
    scale: image_base_props.scale
  } = props);
  return image_base_props;
}

export interface ImageProps extends  ImageBaseProps{
  // 图片的绘制方式(仅在没有旋转和缩放时生效)。
  drawType?: TImageDrawType;
}

export function unpackImageProps(props:ImageProps) {
  const image_props:ImageProps = {};
  ( { drawType:image_props.drawType } = props);
  return image_props;
}

export class t_image_base extends TImage{
  constructor(props:ImageProps){
    const { ...otherImageProps } = props;
    super(image_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherImageProps);
    const image_props:ImageProps = unpackImageProps(otherImageProps);
    const image_base_props:ImageBaseProps = unpackImageBaseProps(otherImageProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherImageProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, image_props);
    fixOtherProps(this, image_base_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_image = nodeMixins( t_image_base );
