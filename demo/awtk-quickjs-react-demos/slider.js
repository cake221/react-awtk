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
        <TSlider
          parent = { "win1" }
          name = {"slider1"}
          value = { 10 }
          vertical = { false }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"bottom:10",
              w:"90%",
              h:"20"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(slider.name + ' changed. ' + slider.value);
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(slider.name + ' changing. ' + slider.value);
            }
          }
        />
        <TSlider
          parent = { "win1" }
          name = {"slider2"}
          value = { 10 }
          vertical = { true }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"10",
              w:"20",
              h:"80%"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(bar.name + ' changed. ' + bar.value);
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


