import { TWidget }from "../native/awtk"
import { fixOtherProps } from "./fixProps"
import { log } from "./common"

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

/**
 * @description:用于新建和更新操作
 * @author 温宇飞
 * @date 2020-01-03
 * @export
 * @param {*} instance
 * @param {ParentChildProps} parentChildProps
 */
export function fixParentProps(instance:any, parentChildProps:ParentChildProps){
  
  const { parent, ...other } = parentChildProps;
  if(parentChildProps.hasOwnProperty("parent")){
    if(parent){
      setChildWidget(instance, parent);
    }else{
      // 清除 parent
      if(!!instance.parentId){
        const parentArr = __parentWidgets[instance.parentId]
        const index = parentArr.indexOf(instance);
    
        if (index !== -1) {
          parentArr.splice(index, 1);
        }    

        delete instance.parentId
      }
    }
  }
  fixOtherProps(instance, other);
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
  log(`${parentId} 子控件 数量: ${__parentWidgets[parentId] ? __parentWidgets[parentId].length:"没有"}`)
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
/**
 * @description 用于删除父控件组件
 * @param {*} parentInstance
 */
export const deleteParentWidget = (parentInstance:any) => {
  // 删除 parent 和 子孙
  if(!!parentInstance.parentSelfId){
    const parentSelfId = parentInstance.parentSelfId;
    delete __parentWidgets[parentSelfId];
  }
}
/**
 * @description 用于删除子控件组件
 * @param {*} childInstance
 */
export const deleteChildWidget = (childInstance:any) => {
  if(!!childInstance.parentId){
    const parentArr = __parentWidgets[childInstance.parentId]
    const index = parentArr.indexOf(childInstance);

    if (index !== -1) {
      parentArr.splice(index, 1);
    }    
  }
}

