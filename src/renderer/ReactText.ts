import { Node } from "../utils/nodeMixins"

// TODO: 这个是 widget。现在简单的继承不行
export class react_text extends Node{
  private text:string = "";
  constructor(text:string) {
    super();
    this.text = text
  }
}
