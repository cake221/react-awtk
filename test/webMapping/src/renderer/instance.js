import {
    Button,
    Root,
    Window,
    Text,
} from '../components/';


// Creates an element with an element type, props and a root instance
function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
    const COMPONENTS = {
        ROOT: () => new Root(),
        WINDOW: () => Window.create( newProps ),
        BUTTON: () => Button.create( newProps ) ,
        default: undefined,
    };

    return COMPONENTS[type]() || COMPONENTS.default;
}

function createTextInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
    // 暂时不支持。
    // type：是 文字的内容。
    return new Text( type );
}

export { createInstance, createTextInstance };
