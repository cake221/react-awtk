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
        x="0" y="0" w="0" h="0"
      >
        <Button
          parent = { "win1" }
          text = { "按钮1" }
          x="0" y="0" w="0" h="0"
          tk_style = {{
            selfLayoutParams:{
              x:"center",
              y:"middle",
              w:"50%",
              h:"30"
            },
          }}
          onClick = {
            (e)=>{
              console.log("按钮1",e);
            }
          }
        />
        <Button
          parent = { "win1" }
          name="open:dialog1"
          x="0" y="0" w="0" h="0"
          tk_style = {{
            selfLayoutParams:{
              x:"10",
              y:"10",
              w:"50%",
              h:"30"
            },
          }}
          text="按钮2"
          onClick = {
            (e)=>{
              console.log("按钮2",e)
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


