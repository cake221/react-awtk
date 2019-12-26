// import Reconciler from 'react-reconciler'
const Reconciler = require("react-reconciler")
import { hostConfig } from "./hostConfig"
import { t_root } from "./Root"



// Renders the input component
export function AwtkRender(element, callBack?) {
    
  const reconciler = Reconciler(hostConfig);
  
  const node = reconciler.createContainer(new t_root(), false, false);
  
  reconciler.updateContainer(element, node, null, ()=>{});
  
  callBack &&callBack();
}

