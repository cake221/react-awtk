import { TRichText } from "../native/awtk"
import { nodeMixins } from "../utils/nodeMixins"
import { fixWidgetProps, 
  fixOtherProps, 
  WidgetProps, 
  unpackWidgetProps, 
} from "../utils/fixProps"
import {
  ParentChildProps,
  unpacParentChildProps,
  fixParentProps,
} from "../utils/fixParentChildComponent"




export interface RichTextProps extends WidgetProps, ParentChildProps {
  // 行间距。
  rich_text?: string;
  
}

export function unpackRichTextProps(props:RichTextProps) {
  const rich_text_props:RichTextProps = {};
  ( { rich_text:rich_text_props.rich_text } 
    = props);
  return rich_text_props;
}

export class t_rich_text_base extends TRichText{
  constructor(props:RichTextProps){
    const { ...otherRichTextProps } = props;
    super(rich_text_create(null,0,0,0,0));
    const widget_props:WidgetProps = unpackWidgetProps(otherRichTextProps);
    const rich_text_props:RichTextProps = unpackRichTextProps(otherRichTextProps);
    const parent_child_props:ParentChildProps = unpacParentChildProps(otherRichTextProps);
   
    fixWidgetProps(this, widget_props);
    fixOtherProps(this, rich_text_props);
    fixParentProps(this, parent_child_props);
  }
}

export const t_rich_text = nodeMixins( t_rich_text_base );
