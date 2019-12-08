import {button_create, TWindow, window_create} from "../native/awtk"
import {fixOtherProps, fixParentProps, fixWidgetProps, TWindowBaseProps} from "../utils/fixProps"
import { nodeMixins } from "../utils/nodeMixins"

export interface WindowProps extends TWindowBaseProps{
  // 是否全屏
  fullscreen? :boolean;
}

class t_window_base extends TWindow{
  constructor(props:WindowProps){
    super(window_create(null,0,0,0,0));
    // todo 处理 props
    const { fullscreen, ...widgetProps } = props;
    fixWidgetProps(this, widgetProps);
    const windowProps = { fullscreen };
    fixOtherProps(windowProps);
  }
}

export const t_window = nodeMixins( t_window_base );
