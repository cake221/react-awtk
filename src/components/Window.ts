import { TWindow, window_create } from "../native/awtk"
import { TWindowBaseProps } from "./baseTypes"
import { nodeMixins } from "../utils/nodeMixins"

export interface WindowProps extends TWindowBaseProps{
  // 是否全屏
  fullscreen? :boolean;
}

class t_window_base extends TWindow{
  constructor(props:WindowProps){
    super(window_create(null,0,0,0,0));
    // todo 处理 props
    const { style } = props;
  }
}

export const t_window = nodeMixins( t_window_base );
