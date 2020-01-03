import { TWidget }from "../native/awtk"
import { fixOtherProps } from "./fixProps"

// __parentWidgets 外部不可以更改
const __parentWidgets:IParentWidgets = {};

interface IParentWidgets {
  [propName: string]: TWidget[] & ParentChildProps[];
}

export interface ParentChildProps {
  // 声明自己的父控件
  parent?:string;
}

export const parentChildProps = [
  "parent"
]


export function fixParentProps(instance:TWidget, parentChildProps:ParentChildProps){
  
  const { parent, ...other } = parentChildProps;
  parent && setChildWidget(instance, parent);
  fixOtherProps(instance, other);
}

export function unpacParentChildProps(props:ParentChildProps) {
  const parent_child_props:ParentChildProps = {};
  ( { parent:parent_child_props.parent} = props);
  return parent_child_props;
}

export interface setParentWidgetFun {
  (parentInstance:TWidget, parentId:string):void;
}

export const setParentWidget:setParentWidgetFun = function(parentInstance:any, parentId:string){
  if(parentInstance){
    !__parentWidgets[parentId] && (__parentWidgets[parentId] = []);
    // 保存 父母自己的 parentSelfId
    parentInstance.parentSelfId = parentId;
    if( !!__parentWidgets[parentId].length ){
      for(const child of __parentWidgets[parentId]){
        
        parentInstance.addChild(child);
      }
      parentInstance.layout();
    }
  }
  console.log("__parentWidgets",__parentWidgets[parentId].length)
  __AwtkSnapshot.push(`${parentId} 子控件 数量: ${__parentWidgets[parentId] ? __parentWidgets[parentId].length:"没有"}` )
};

export interface setChildWidgetFun {
  (childInstance:TWidget, id:string):void;
}

const setChildWidget:setChildWidgetFun = function(childInstance:any, parentId:string) {
  !__parentWidgets[parentId] && (__parentWidgets[parentId] = []);
  // 保存父母的 parentId
  childInstance.parentId = parentId;
  __parentWidgets[parentId].push(childInstance);
};

export const deleteParentWidget = (parentInstance:any) => {
  // 删除 parent 和 子孙
  const parentSelfId = parentInstance.parentSelfId;
  delete __AwtkSnapshot[parentSelfId];
}

export const deleteChildWidget = (childInstance:any) => {
  if(!!childInstance.parentId){
    const parentArr = __parentWidgets[childInstance.parentId]
    const index = parentArr.indexOf(childInstance);

    if (index !== -1) {
      parentArr.splice(index, 1);
    }    
  }
}

