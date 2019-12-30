import {TWindow} from "../native/awtk"
import {fixOtherProps, fixParentProps, fixWidgetProps, TWindowBaseProps} from "../utils/fixProps"
import { nodeMixins } from "../utils/nodeMixins"

export interface WindowProps extends TWindowBaseProps{
  // 是否全屏
  fullscreen? :boolean;
  // 从资源文件中加载并创建window_base对象。本函数在ui_loader/ui_builder_default里实现。
  sourceName? :string;
}

export class t_window_base extends TWindow{
  constructor(props:WindowProps){
    // TODO: 处理 props
    const { fullscreen, sourceName, ...widgetProps } = props;
    if(sourceName){
      super(window_open(sourceName));
    }else{
      super(window_create(null,0,0,0,0));
    }
    
    fixWidgetProps(this, widgetProps);
    const windowProps = { fullscreen };
    fixOtherProps(this, windowProps);
  }
}

export const t_window = nodeMixins( t_window_base );
