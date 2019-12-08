import React, { Component } from 'react';
import { AwtkRender, setParentWidget, TGlobal, TRet, TButton, TPointerEvent } from "../src"

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
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_button
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
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


