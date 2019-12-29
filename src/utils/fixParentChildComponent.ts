import { TWidget }from "../native/awtk"

// __parentWidgets 外部不可以更改
// TODO: 后期重构成类
interface IParentWidgets {
  [propName: string]: TWidget[];
}
const __parentWidgets:IParentWidgets = {};


export interface setParentWidgetFun {
  (parentInstance:TWidget, parentId:string):void;
}

export const setParentWidget:setParentWidgetFun = function(parentInstance:TWidget, parentId:string){
  
  if( __parentWidgets[parentId] ){
    for(const child of __parentWidgets[parentId]){
      parentInstance.addChild(child);
    }
    parentInstance.layout();
  }

};

export interface setChildWidgetFun {
  (childInstance:TWidget, id:string):void;
}

export const setChildWidget:setChildWidgetFun = function(childInstance:TWidget, parentId:string) {
  !__parentWidgets[parentId] && (__parentWidgets[parentId] = []);
  __parentWidgets[parentId].push(childInstance)
};


