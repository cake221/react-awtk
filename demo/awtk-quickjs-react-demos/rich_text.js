import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../src"

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
  }

  render() {
    return (
      <Window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <RichText
          parent = { "win1" }
          text = { '<image name="bricks"/><font color="gold" align_v="bottom" size="24">hello awtk!</font><font color="green" size="20">ProTip! The feed shows you events from people you follow and repositories you watch. nhello world. </font><font color="red" size="20">确定取消中文字符测试。确定。取消。中文字符测试。</font>' }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"100%",
              h:"100%"
            },
          }}
        />
      </Window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


