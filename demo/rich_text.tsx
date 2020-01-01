import * as React from 'react';
import { AwtkRender, setParentWidget } from "../src"

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
  }

  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_rich_text
          parent = { "win1" }
          rich_text = { '<image name="bricks"/><font color="gold" align_v="bottom" size="24">hello awtk!</font><font color="green" size="20">ProTip! The feed shows you events from people you follow and repositories you watch. nhello world. </font><font color="red" size="20">确定取消中文字符测试。确定。取消。中文字符测试。</font>' }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"100%",
              h:"100%"
            },
          }}
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


