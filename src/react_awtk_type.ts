import { ButtonProps, 
  WindowProps, 
  CheckButtonProps,
  EditProps,
  ComboBoxProps,
}from "./components"


declare global{
  namespace JSX {
    interface IntrinsicElements {
      t_button:ButtonProps;
      t_window:WindowProps;
      t_check_button:CheckButtonProps;
      t_edit: EditProps;
      t_combo_box: ComboBoxProps;
    }
  }

  var __AwtkSnapshot
}

export type IntrinsicElementsTypes = "t_button" | "t_window" | "t_check_button" | "t_edit" | "t_combo_box"

