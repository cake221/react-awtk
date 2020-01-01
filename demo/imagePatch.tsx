import * as React from 'react';
import { AwtkRender, setParentWidget, TGlobal } from "../src"
import { TImageDrawTypePatch } from "../src/native/awtkPatch"

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
  }

  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
        style={{
          children_layout : "rows:3 cols:3 margin:2 spacing:2"
        }}
      >
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.ICON }
          image = { "earth" } // 得区分不同的情况。直接字符串，表示加载入内存
          rotation = {0.5}
          scale = {[1,2]}
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.CENTER }
          image = { "earth" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.SCALE_AUTO }
          image = { "earth" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.SCALE }
          image = { "1" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.SCALE_W }
          image = { "1" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.SCALE_H }
          image = { "1" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.REPEAT }
          image = { "bricks" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.REPEAT_X }
          image = { "bricks" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <t_image
          parent = { "win1" }
          useStyle = { "border" }
          // @ts-ignore
          drawType = { TImageDrawTypePatch.REPEAT_Y }
          image = { "bricks" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


