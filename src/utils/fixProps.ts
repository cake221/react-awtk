import { TWidget, TRet, TEventType } from "../native/awtk"
import { isFunction } from "lodash"
import { setChildWidget } from "./fixParentChildComponent"


export interface ParentChildProps {
  // 声明自己的父控件
  parent?:string;
}

export interface StyleProps {
  selfLayout?:{
    x?:any;
    y?:any;
    w?:any;
    h?:any;
    floating?:boolean;
  },
  children_layout?:{
    rows?:any;
    cols?:any;
    width?:any;
    height?:any;
    x_margin?:any;
    y_margin?:any;
    spacing?:any;
    keep_invisible?:any;
    keep_disable?:any;
  }
}

export interface WidgetProps {
  style?:StyleProps;
  // todo： 风格和主题有什么区别？主题是只有容器才能设置么？
  // 设置控件风格
  use_style?:string;
  // 设置窗口主题
  use_theme?:string;
  // 文本。用途视具体情况而定
  text?:string;
  // 控件名字
  name?:string;
  ref?:any;
}

export interface TWindowBaseProps extends WidgetProps{
  children?:any[];
}

export interface eventFun {
  (evt?:any):TRet;
}

export const eventFunName = {
  // onClick : TEventType.POINTER_DOWN,
  // onClick : TEventType.POINTER_DOWN_BEFORE_CHILDREN,
  // onClick : TEventType.POINTER_MOVE,
  // onClick : TEventType.POINTER_MOVE_BEFORE_CHILDREN,
  // onClick : TEventType.POINTER_UP,
  // onClick : TEventType.POINTER_UP_BEFORE_CHILDREN,
  // onClick : TEventType.WHEEL,
  // onClick : TEventType.WHEEL_BEFORE_CHILDREN,
  // onClick : TEventType.POINTER_DOWN_ABORT,
  // onClick : TEventType.CONTEXT_MENU,
  // onClick : TEventType.POINTER_ENTER,
  // onClick : TEventType.POINTER_LEAVE,
  onLongPress : TEventType.LONG_PRESS,
  onClick : TEventType.CLICK,
  // onClick : TEventType.FOCUS,
  // onClick : TEventType.BLUR,
  // onClick : TEventType.KEY_DOWN,
  // onClick : TEventType.KEY_DOWN_BEFORE_CHILDREN,
  // onClick : TEventType.KEY_REPEAT,
  // onClick : TEventType.KEY_UP,
  // onClick : TEventType.KEY_UP_BEFORE_CHILDREN,
  // onClick : TEventType.WILL_MOVE,
  // onClick : TEventType.MOVE,
  // onClick : TEventType.WILL_RESIZE,
  // onClick : TEventType.RESIZE,
  // onClick : TEventType.WILL_MOVE_RESIZE,
  // onClick : TEventType.MOVE_RESIZE,
  // onClick : TEventType.VALUE_WILL_CHANGE,
  // onClick : TEventType.VALUE_CHANGED,
  // onClick : TEventType.VALUE_CHANGING,
  // onClick : TEventType.PAINT,
  // onClick : TEventType.BEFORE_PAINT,
  // onClick : TEventType.AFTER_PAINT,
  // onClick : TEventType.PAINT_DONE,
  // onClick : TEventType.LOCALE_CHANGED,
  // onClick : TEventType.ANIM_START,
  // onClick : TEventType.ANIM_STOP,
  // onClick : TEventType.ANIM_PAUSE,
  // onClick : TEventType.ANIM_ONCE,
  // onClick : TEventType.ANIM_END,
  // onClick : TEventType.WINDOW_LOAD,
  // onClick : TEventType.WINDOW_WILL_OPEN,
  // onClick : TEventType.WINDOW_OPEN,
  // onClick : TEventType.WINDOW_TO_BACKGROUND,
  // onClick : TEventType.WINDOW_TO_FOREGROUND,
  // onClick : TEventType.WINDOW_CLOSE,
  // onClick : TEventType.REQUEST_CLOSE_WINDOW,
  // onClick : TEventType.TOP_WINDOW_CHANGED,
  // onClick : TEventType.IM_COMMIT,
  // onClick : TEventType.IM_SHOW_CANDIDATES,
  // onClick : TEventType.IM_ACTION,
  // onClick : TEventType.IM_ACTION_INFO,
  // onClick : TEventType.DRAG_START,
  // onClick : TEventType.DRAG,
  // onClick : TEventType.DRAG_END,
  // onClick : TEventType.SCREEN_SAVER,
  // onClick : TEventType.LOW_MEMORY,
  // onClick : TEventType.OUT_OF_MEMORY,
  // onClick : TEventType.ORIENTATION_WILL_CHANGED,
  // onClick : TEventType.ORIENTATION_CHANGED,
  // onClick : TEventType.WIDGET_CREATED,
  // onClick : TEventType.REQUEST_QUIT_APP,
  // onClick : TEventType.THEME_CHANGED,
  // onClick : TEventType.REQ_START,
  // onClick : TEventType.USER_START,
  // onClick : TEventType.NONE,
  // onClick : TEventType.PROP_WILL_CHANGE,
  // onClick : TEventType.PROP_CHANGED,
  // onClick : TEventType.ITEMS_WILL_CHANGE,
  // onClick : TEventType.ITEMS_CHANGED,
  // onClick : TEventType.PROPS_CHANGED,
  // onClick : TEventType.PROGRESS,
  // onClick : TEventType.DESTROY,
};

function fixStyleProps(instance:TWidget, styleProps:StyleProps) {
  const { selfLayout, children_layout, ...other } = styleProps;
  
  instance.setSelfLayoutParams(selfLayout.x, selfLayout.y, selfLayout.w, selfLayout.h);
  // todo 这个函数的参数不知道如何设置
  instance.setChildrenLayout("");
  // todo 其他参数得修改 awtk.ts
  for(const item in other){
    // todo 在awtk.ts 中加入 getter函数
    // if(other.hasOwnProperty(item)) instance[item] = other[item];
  }
}

export function fixWidgetProps(instance:TWidget, widgetProps:WidgetProps){
  
  const { style, ...other } = widgetProps;
  
  style && fixStyleProps(instance, style);
  fixOtherProps(other);
}

export function fixParentProps(instance:TWidget, parentChildProps:ParentChildProps){
  
  const { parent, ...other } = parentChildProps;
  parent && setChildWidget(instance, parent);
  fixOtherProps(other);
}

export function fixOtherProps(other: any) {
  
  for(const item in other){
    if(other.hasOwnProperty(item)){
      // 传入函数
      if(isFunction(other[item])){
        // 处理事件
        if(eventFunName.hasOwnProperty(item)){
          this.on(eventFunName[item], other[item], null);
        }
        // 其他传入的函数
      }else {
        // 传入值
        // todo 需要协商。希望统一可以用 setter 形式
      }
    }
  }
}

// todo 目前不知道怎么解决
export function separateProps(props) {

}
