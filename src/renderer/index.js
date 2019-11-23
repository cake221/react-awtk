import Reconciler from 'react-reconciler'
import hostConfig from "./hostConfig"
import { createInstance } from "./instance"
import { Root } from ".."


// Renders the input component
function AwtkRender(element, callBack) {

    const reconciler = Reconciler(hostConfig);

    const node = reconciler.createContainer(createInstance(Root) , false);

    reconciler.updateContainer(element, node, null);

    callBack();
}

export default AwtkRender;
