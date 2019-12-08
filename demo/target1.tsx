import React, { Component } from 'react';
import { AwtkRender, setParentWidget, TRet } from "../src"

class App extends Component {
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
        <t_button
          parent = { "win1" }
          text = { "按钮1" }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"50%",
              h:"30"
            },
          }}
          onClick = {
            (e)=>{
              console.log("按钮1",e);
              return TRet.OK;
            }
          }
        />
        <t_button
          parent = { "win1" }
          name="open:dialog1"
          style = {{
            selfLayout:{
              x:"10",
              y:"10",
              w:"50%",
              h:"30"
            },
          }}
          text="按钮2"
          onClick = {
            (e)=>{
              console.log("按钮2",e);
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


