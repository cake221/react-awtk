import Node from "./Node"

class Widget extends Node{

    constructor(nativeObj) {
        super();
        this.nativeObj = nativeObj;
    };

    set name(name){
        console.log("set name", name)
    }

    set style(style){
        console.log("set style", style)
    }

    set text(text){
        console.log("set text", text)
    }
    layout  () {
        console.log("layout()")
    };

    // 用于添加子控间
    addWidgetChild(child_widget){
        console.log("addWidgetChild()", child_widget)
    }
}

export default Widget;
