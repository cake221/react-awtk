import { ButtonProps, 
  WindowProps, 
  CheckButtonProps,
  EditProps,
  ComboBoxProps,
  ImageProps,
  LabelProps,
  RichTextProps,
}from "./components"


declare global{
  namespace JSX {
    interface IntrinsicElements {
      t_button:ButtonProps;
      t_window:WindowProps;
      t_check_button:CheckButtonProps;
      t_edit: EditProps;
      t_combo_box: ComboBoxProps;
      t_image: ImageProps;
      t_label: LabelProps;
      t_rich_text: RichTextProps;
    }
  }

  var __AwtkSnapshot
}

export type IntrinsicElementsTypes = "t_button" | 
  "t_window" | 
  "t_check_button" | 
  "t_edit" | 
  "t_combo_box" | 
  "t_image" | 
  "t_label" |
  "t_rich_text"

