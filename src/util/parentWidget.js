const parentWidgets = {}

function setParentWidget(ref, id){

    console.log("测试 setParentWidget()", ...arguments);
    for(const child of parentWidgets[id]){
        ref.addWidgetChild(child);
    }
    ref.layout();
}

function setChildWidget(ref, id) {
    console.log("测试, setChildWidget()", ...arguments);
    !parentWidgets[id] && (parentWidgets[id] = []);
    parentWidgets[id].push(ref)
}

export {
    setParentWidget,
    setChildWidget
}
