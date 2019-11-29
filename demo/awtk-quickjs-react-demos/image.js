import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../src"

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
  }

  render() {
    return (
      <Window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
        childrenLayout = {"rows:3 cols:3 margin:2 spacing:2"}
      >
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.ICON }
          source = { "earth" } // 得区分不同的情况。直接字符串，表示加载入内存
          rotation = {0.5}
          scale = {[1,2]}
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.CENTER }
          source = { "earth" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.SCALE_AUTO }
          source = { "earth" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.SCALE }
          source = { "1" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.SCALE_W }
          source = { "1" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.SCALE_H }
          source = { "1" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.REPEAT }
          source = { "bricks" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.REPEAT_X }
          source = { "bricks" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
        <Image
          parent = { "win1" }
          useStyle = { "border" }
          drawType = { TImageDrawType.REPEAT_Y }
          source = { "bricks" } // 得区分不同的情况。直接字符串，表示加载入内存
        />
      </Window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


