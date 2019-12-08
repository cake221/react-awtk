import { StyleProps } from "../components/baseTypes"
import { TWidget } from "../native/awtk"

export function fixStyleProps(instance:TWidget, styleProps:StyleProps) {
  const { selfLayout, children_layout, ...other } = styleProps;
  
  instance.setSelfLayoutParams(selfLayout.x, selfLayout.y, selfLayout.w, selfLayout.h);
  // todo 这个函数的参数不知道如何设置
  instance.setChildrenLayout();
  
}
