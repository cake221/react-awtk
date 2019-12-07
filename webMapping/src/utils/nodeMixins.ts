import { TWidget } from "../native/awtk"

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}


export class Node{
  tk_children: Node[] = [];
  tk_parent: Node = null;
  
  appendChild(child) {
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

  removeChild(child) {
    const index = this.tk_children.indexOf(child);

    if (index !== -1) {
      child.tk_parent = null;
      this.tk_children.splice(index, 1);
    }

    child.removeAllChilds();
  }
  
  isEmpty() {
    return this.tk_children.length === 0;
  }
  
  removeAllChilds() {
    this.tk_children.forEach(c => this.removeChild(c));
  }

}

export function nodeMixins( parent: typeof TWidget){
  class mixinsClass extends parent implements Node{

    tk_children: Node[] = [];
    tk_parent: Node = null;
    readonly nativeName = parent.name;
    
    constructor(props){
      super(props);
    }
    
    appendChild(child): void {
    }
  
    insertBefore(child, beforeChild): void {
    }
  
    isEmpty(): boolean {
      return undefined;
    }
  
    removeAllChilds(): void {
    }
  
    removeChild(child): void {
    }
  }
  
  applyMixins(mixinsClass, [Node]);
  
  return mixinsClass;
}
