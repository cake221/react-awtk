import { ButtonProps, WindowProps }from "./components"


declare global{
  namespace JSX {
    interface IntrinsicElements {
      // todo 只能用小写，不知道为什么
      t_button:ButtonProps;
      t_window:WindowProps;
    }
  }
}

export type IntrinsicElementsTypes = "t_button" | "t_window"

