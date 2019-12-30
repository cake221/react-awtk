import { ButtonProps, WindowProps, CheckButtonProps }from "./components"


declare global{
  namespace JSX {
    interface IntrinsicElements {
      t_button:ButtonProps;
      t_window:WindowProps;
      t_check_button:CheckButtonProps;
    }
  }

  var __AwtkSnapshot
}

export type IntrinsicElementsTypes = "t_button" | "t_window"

