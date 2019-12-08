import './polyfill'
export { AwtkRender } from "./renderer";
export { setParentWidget } from "./utils/fixParentChildComponent";
// todo 得区分什么可以传出去，什么不可以
// export { TRet, TWindowManager, TEventType, TGlobal, TPointerEvent, TButton, TWindow } from "./native/awtk"
export * from "./native/awtk"


