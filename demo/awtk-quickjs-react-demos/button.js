import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../../src"

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
      >
        <Button
          parent = { "win1" }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"50%",
              h:"30"
            },
          }}
          onClick = {
            (evt)=>{
              const e = TPointerEvent.cast(evt);
              const target = TButton.cast(e.target);

              console.log("click at " + e.x + " " + e.y + " on " + target.name);
              console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());

              return TRet.OK;
            }
          }
        />
      </Window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


