import {
    Button,
    Root,
    Window,
} from '../components/';


// Creates an element with an element type, props and a root instance
function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
    const COMPONENTS = {
        ROOT: () => new Root(),
        WINDOW: () => new Window( newProps ),
        BUTTON: () => new Button( newProps ),
        default: undefined,
    };

    return COMPONENTS[type]() || COMPONENTS.default;
}

export { createInstance };
