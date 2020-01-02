import { TWidget } from "../native/awtk"
import { InstanceType } from "../renderer/instance"
import { deleteParentWidget, deleteChildWidget } from "./fixParentChildComponent"

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}



export class Node{
  public tk_children:Node[] = [];
  public tk_parent:Node = null;

  appendNodeChild(child) {
    if (child) {
      child.tk_parent = this;
      this.tk_children.push(child);
    }
  }

  insertBefore(child, beforeChild) {
    const index = this.tk_children.indexOf(beforeChild);

    if (index !== -1 && child) {
      child.tk_parent = this;
      this.tk_children.splice(index, 0, child);
    }
  }

  removeNodeChild(child:InstanceType) {
    const index = this.tk_children.indexOf(child);

    if (index !== -1) {
      child.tk_parent = null;
      this.tk_children.splice(index, 1);
    }
    // 移除所有子节点
    child.removeAllChilds();
    // 在 awtk 中 销毁所有子控件
    child.destroyChildren();
    // 在awtk中销毁child控件
    child.destroy();
    // 删除所有子组件
    deleteChildWidget(child);
    // 删除所有本组件
    deleteParentWidget(child);
  }
  
  isEmpty() {
    return this.tk_children.length === 0;
  }
  
  removeAllChilds() {
    this.tk_children.forEach((item:InstanceType) => this.removeNodeChild(item));
  }

}

export function nodeMixins( Parent: typeof TWidget){
  class tmpClass extends Parent implements Node{
    tk_children: Node[] = [];
    tk_parent: Node = null;
  
    appendNodeChild(child): void {
    }
  
    insertBefore(child, beforeChild): void {
    }
  
    isEmpty(): boolean {
      return undefined;
    }
  
    removeAllChilds(): void {
    }
  
    removeNodeChild(child): void {
    }
  }
  
  applyMixins(tmpClass, [Node]);

  return tmpClass;
}
