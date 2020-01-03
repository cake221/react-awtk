import {TWindow} from "../native/awtk"
import {
  fixOtherProps, 
  fixWidgetProps, 
  WidgetProps,
  widgetBaseProps,
  unpackUpdateProps,
  unpackCreateProps
} from "../utils/fixProps"
import { nodeMixins } from "../utils/nodeMixins"

interface TWindowBaseProps extends WidgetProps{
  children?:any[]|any;
}

interface WindowBaseProps{
  // 是否全屏
  fullscreen? :boolean;
  // 从资源文件中加载并创建window_base对象。本函数在ui_loader/ui_builder_default里实现。
  sourceName? :string;
}

const windowBaseProps:string[] = [
  "fullscreen", 
  "sourceName", 
]

export type WindowProps = WindowBaseProps & TWindowBaseProps

export class t_window_base extends TWindow{
  constructor(props:WindowProps){
    const { sourceName, ...otherWindowProps } = props;
    if(sourceName){
      super(window_open(sourceName));
    }else{
      super(window_create(null,0,0,0,0));
    }
    
    const widget_props:WidgetProps = unpackCreateProps(otherWindowProps, windowBaseProps);
    const window_props:WindowProps = unpackCreateProps(otherWindowProps, widgetBaseProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, window_props);
  }

  Update(oldProps:WindowProps, newProps:WindowProps){
    
    const button_update_props:WindowProps = unpackUpdateProps(oldProps, newProps, windowBaseProps);
    const widget_update_props:WidgetProps = unpackUpdateProps(oldProps, newProps, widgetBaseProps);
    fixOtherProps(this, button_update_props);
    fixWidgetProps(this, widget_update_props);
  }
}

export const t_window = nodeMixins( t_window_base );
