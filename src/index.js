import './polyfill'
import AwtkRender from "./renderer";
import { setParentWidget } from "./util/parentWidget";
import {TEventType} from "./native/TEventType"

const Button = "BUTTON"
const Window = "WINDOW"
const Root = "ROOT"

export {
    Button,
    Window,
    Root,
    AwtkRender,
    setParentWidget,
    TEventType
}
