/**

 reateInstance,
 createTextInstance,
 appendChild,
 insertBefore,
 removeChild,
 * */

class Node {

  constructor() {
    this.tk_children = [];
    this.tk_parent = null;
  }

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

    child.cleanup();
  }

  removeAllChilds() {
    const tk_children = [...this.tk_children];
    for (let i = 0; i < tk_children.length; i++) {
      tk_children[i].remove();
    }
  }

  remove() {
    this.tk_parent.removeChild(this);
  }


  isEmpty() {
    return this.tk_children.length === 0;
  }

  onAppendDynamically() {}

  cleanup() {
    this.tk_children.forEach(c => c.cleanup());
  }

}

export default Node;

// bak

// bak
//
// class Node {
//
//   constructor() {
//     this.parent = null;
//     this.children = [];
//   }
//
//   appendChild(child) {
//     console.log("到这里了", this)
//     console.log("到这里了", this.tk_children)
//     if (child) {
//       child.parent = this;
//       this.children.push(child);
//     }
//   }
//
//   insertBefore(child, beforeChild) {
//     const index = this.children.indexOf(beforeChild);
//
//     if (index !== -1 && child) {
//       child.parent = this;
//       this.children.splice(index, 0, child);
//     }
//   }
//
//   removeChild(child) {
//     const index = this.children.indexOf(child);
//
//     if (index !== -1) {
//       child.parent = null;
//       this.children.splice(index, 1);
//     }
//
//     child.cleanup();
//   }
//
//   removeAllChilds() {
//     const children = [...this.children];
//     for (let i = 0; i < children.length; i++) {
//       children[i].remove();
//     }
//   }
//
//   remove() {
//     this.parent.removeChild(this);
//   }
//
//
//   isEmpty() {
//     return this.children.length === 0;
//   }
//
//   onAppendDynamically() {}
//
//   cleanup() {
//     this.children.forEach(c => c.cleanup());
//   }
//
// }
