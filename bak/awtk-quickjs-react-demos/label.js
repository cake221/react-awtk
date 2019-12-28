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
        <Label
          parent = { "win1" }
          text = { "ok" }
          useStyle{'big_green'}
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"50%",
              h:"30"
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


