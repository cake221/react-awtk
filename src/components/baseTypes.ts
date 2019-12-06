export interface childWidgetProps {
  // 声明自己的父控件
  parent?:string;
}

export interface StyleProps {
  selfLayout?:{
    x?:any;
    y?:any;
    w?:any;
    h?:any;
    floating?:boolean;
  },
  children_layout?:{
    rows?:any;
    cols?:any;
    width?:any;
    height?:any;
    x_margin?:any;
    y_margin?:any;
    spacing?:any;
    keep_invisible?:any;
    keep_disable?:any;
  }
}

export interface WidgetProps {
  style?:StyleProps;
  // todo： 风格和主题有什么区别？主题是只有容器才能设置么？
  // 设置控件风格
  use_style?:string;
  // 设置窗口主题
  use_theme?:string;
  // 文本。用途视具体情况而定
  text?:string;
  // 控件名字
  name?:string;
  ref?:any;
}

export interface TWindowBaseProps extends WidgetProps{
  children?:any[];
}
