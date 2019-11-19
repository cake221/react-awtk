class Node {

  constructor() {
    this.parent = null;
    this.children = [];
  }

  appendChild(child) {
    if (child) {
      child.parent = this;
      this.children.push(child);
    }
  }

  appendChildBefore(child, beforeChild) {
    const index = this.children.indexOf(beforeChild);

    if (index !== -1 && child) {
      child.parent = this;
      this.children.splice(index, 0, child);
    }
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    if (index !== -1) {
      child.parent = null;
      this.children.splice(index, 1);
    }

    child.cleanup();
  }

  removeAllChilds() {
    const children = [...this.children];
    for (let i = 0; i < children.length; i++) {
      children[i].remove();
    }
  }

  remove() {
    this.parent.removeChild(this);
  }


  isEmpty() {
    return this.children.length === 0;
  }

  onAppendDynamically() {}

  cleanup() {
    this.children.forEach(c => c.cleanup());
  }

}

export default Node;
