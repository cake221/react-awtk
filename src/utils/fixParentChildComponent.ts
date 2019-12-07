import { TWidget }from "../native/awtk"

// parentWidgets 外部不可以更改
// todo 后期重构成类
const parentWidgets = {};


export interface setParentWidgetFun {
  (parentInstance:TWidget, parentId:string):void;
}

export const setParentWidget:setParentWidgetFun = function(parentInstance:TWidget, parentId:string){
  
  for(const child of parentWidgets[parentId]){
    parentInstance.addWidgetChild(child);
  }
  parentInstance.layout();
};

export interface setChildWidgetFun {
  (childInstance:TWidget, id:string):void;
}

export const setChildWidget:setChildWidgetFun = function(childInstance:TWidget, parentId:string) {
  !parentWidgets[parentId] && (parentWidgets[parentId] = []);
  parentWidgets[parentId].push(childInstance)
};


