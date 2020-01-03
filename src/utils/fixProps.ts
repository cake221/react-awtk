import {TWidget} from "../native/awtk"
import {  eventFunName } from "../native/react_awtk"
import { isFunction, isUndefined, isString, isEqual, isObject, keys } from "lodash"

interface StyleProps {
  selfLayout?:{
    x?:any;
    y?:any;
    w?:any;
    h?:any;
    floating?:boolean;
  } | string,
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
  } | string
}

interface ReactProps {
  ref?:any;
}

interface WidgetBaseProps{
  style?:StyleProps;
  // 风格和主题有什么区别？主题是只有容器才能设置么？
  // 设置控件风格
  useStyle?:string;
  // 文本。用途视具体情况而定
  text?:string;
  // 控件名字
  name?:string;

}

export const widgetBaseProps:string[] = [
  "style", 
  "useStyle", 
  "text", 
  "name", 
]

export type WidgetProps = WidgetBaseProps & ReactProps


export function unpackWidgetProps(props:WidgetProps) {
  const widget_props:WidgetProps = {};
  ( { style:widget_props.style, 
    useStyle:widget_props.useStyle, 
    // useTheme:widget_props.useTheme, 
    text:widget_props.text,name:widget_props.name, 
    ref:widget_props.ref 
  } = props);
  return widget_props;
}


function fixStyleProps(instance:TWidget, styleProps:StyleProps) {
  const { selfLayout, children_layout, ...other } = styleProps;
  
  if(selfLayout){
    if(isString(selfLayout)){
      instance.setSelfLayout(selfLayout);
    }else{
      instance.setSelfLayoutParams(selfLayout.x, selfLayout.y, selfLayout.w, selfLayout.h);
    }
  }

  if(children_layout){
    if(isString(children_layout)){
      instance.setChildrenLayout(children_layout);
    }else{
      // TODO: 这个函数的参数不知道如何设置
    }
  }
  
  fixOtherProps(instance, other);
}

function fixReactProps(props:WidgetProps) {
  // TODO: 可能会做其他事
  const {ref:ReactProps, ...other} = props;
  return other
}

export function fixWidgetProps(instance:TWidget, props:WidgetProps){

  const widgetProps = fixReactProps(props)
  const {style, useStyle,  ...otherwidgetProps} = widgetProps;
  if(!isUndefined(style)){
    fixStyleProps(instance, style);
  }

  useStyle && instance.useStyle(useStyle);
  fixOtherProps(instance, otherwidgetProps);
}

export function fixOtherProps(instance:TWidget, other: any) {
  
  for(const item in other){
    if(other.hasOwnProperty(item) && !isUndefined(other[item])){
      if(isFunction(other[item])){
        // 传入函数
        // 处理事件
        if(eventFunName.hasOwnProperty(item)){
          instance.on(eventFunName[item], other[item], null);
        }
        // 其他传入的函数
      }else {
        // 传入值
        instance[item] = other[item]
      }
    }
  }
}

interface propsType {
  [key:string]:any
}

export function unpackUpdateProps(oldProps:propsType, newProps:propsType, allProps:string[]) {
  const update_props:propsType = {};
  for(const item of allProps){
    if(!isEqual(oldProps[item] ,newProps[item]) ){
      if(isObject(oldProps[item]) && isObject(newProps[item])){
        // TODO: 目前专门处理 widget.style 的情况。只向下遍历一层
        const newObj = {}
        const allKeys = keys({...oldProps[item], ...newProps[item]})
        for(const key of allKeys){
          newObj[key] = newProps[item][key]
        }
        update_props[item] = newObj
      }else{
        update_props[item] = newProps[item]
      }
    }
  }
  return update_props;
}

