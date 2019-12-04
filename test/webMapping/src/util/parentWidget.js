const parentWidgets = {}

function setParentWidget(ref, id){

    console.log("测试", parentWidgets, id);
    for(const child of parentWidgets[id]){
        ref.addWidgetChild(child);
    }
    ref.layout();
}

function setChildWidget(ref, id) {
    console.log("测试", parentWidgets, id);
    !parentWidgets[id] && (parentWidgets[id] = []);
    parentWidgets[id].push(ref)
}

export {
    parentWidgets,
    setParentWidget,
    setChildWidget
}
