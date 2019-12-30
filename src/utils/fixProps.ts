import {TWidget, TWindow} from "../native/awtk"
import {  eventFunName } from "../native/react_awtk"
import { isFunction } from "lodash"
import { setChildWidget } from "./fixParentChildComponent"
import React from "react";


export interface ParentChildProps {
  // 声明自己的父控件
  parent?:string;
}

export function unpacParentChildProps(props:ParentChildProps) {
  const parent_child_props:ParentChildProps = {};
  ( { parent:parent_child_props.parent} = props);
  return parent_child_props;
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
  useStyle?:string;
  // 设置窗口主题
  useTheme?:string;
  // 文本。用途视具体情况而定
  text?:string;
  // 控件名字
  name?:string;
  ref?:any;
}

export function unpackWidgetProps(props:WidgetProps) {
  const widget_props:WidgetProps = {};
  ( { style:widget_props.style, useStyle:widget_props.useStyle, useTheme:widget_props.useTheme, text:widget_props.text,name:widget_props.name, ref:widget_props.ref } = props);
  return widget_props;
}

export interface TWindowBaseProps extends WidgetProps{
  children?:any[]|any;
}

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
  fixOtherProps(instance, other);
}

export function fixParentProps(instance:TWidget, parentChildProps:ParentChildProps){
  
  const { parent, ...other } = parentChildProps;
  parent && setChildWidget(instance, parent);
  fixOtherProps(instance, other);
}

export function fixOtherProps(instance:TWidget, other: any) {
  
  for(const item in other){
    if(other.hasOwnProperty(item)){
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

// todo 目前不知道怎么解决
export function separateProps(props) {

}
