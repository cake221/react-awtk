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
      >
        <SpinBox
          parent = { "win1" }
          name = { "int" }
          text = {  }
          inputType = { TInputType.INT }
          inputTips = { "int" }
          style = {{
            selfLayout:{
              x: 10,
              y: 10,
              w: 228,
              h: 30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(spinBox.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(spinBox.name + ' changing.' + tostring(spinBox.getDouble()));
            }
          }
          intLimit = { [1, 100, 1] }
        />
        <SpinBox
          parent = { "win1" }
          name = { "uint" }
          text = {  }
          inputType = { TInputType.UINT }
          inputTips = { "uint" }
          style = {{
            selfLayout:{
              x: 10,
              y: 50,
              w: 228,
              h: 30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(spinBox.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(spinBox.name + ' changing.' + tostring(spinBox.getDouble()));
            }
          }
          intLimit = { [1, 100, 1] }
        />
        <SpinBox
          parent = { "win1" }
          name = { "float" }
          text = { '1.23' }
          inputType = { TInputType.FLOAT }
          inputTips = { "float" }
          style = {{
            selfLayout:{
              x: 10,
              y: 90,
              w: 228,
              h: 30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(spinBox.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(spinBox.name + ' changing.' + tostring(spinBox.getDouble()));
            }
          }
          intLimit = { [1, 10, 1] }
        />
        <SpinBox
          parent = { "win1" }
          name = { "ufloat" }
          text = {  }
          inputType = { TInputType.UFLOAT }
          inputTips = { "ufloat" }
          style = {{
            selfLayout:{
              x: 10,
              y: 10+128,
              w: 228,
              h: 30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(spinBox.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(spinBox.name + ' changing.' + tostring(spinBox.getDouble()));
            }
          }
          intLimit = { [1, 10, 0.1] }
        />
      </Window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


