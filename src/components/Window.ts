import {TWindow} from "../native/awtk"
import {fixOtherProps, 
  fixWidgetProps, 
  WidgetProps,
  unpackWidgetProps,
} from "../utils/fixProps"
import { nodeMixins } from "../utils/nodeMixins"

interface TWindowBaseProps extends WidgetProps{
  children?:any[]|any;
}

export interface WindowProps extends TWindowBaseProps{
  // 是否全屏
  fullscreen? :boolean;
  // 从资源文件中加载并创建window_base对象。本函数在ui_loader/ui_builder_default里实现。
  sourceName? :string;
}

export function unpackWindowProps(props:WindowProps) {
  const window_props:WindowProps = {};
  ( { fullscreen:window_props.fullscreen } = props);
  return window_props;
}

export class t_window_base extends TWindow{
  constructor(props:WindowProps){
    const { sourceName, ...otherWindowProps } = props;
    if(sourceName){
      super(window_open(sourceName));
    }else{
      super(window_create(null,0,0,0,0));
    }
    
    const widget_props:WidgetProps = unpackWidgetProps(otherWindowProps);
    const window_props:WindowProps = unpackWindowProps(otherWindowProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, window_props);
  }

  Update(oldProps, newProps){
    
  }
}

export const t_window = nodeMixins( t_window_base );
