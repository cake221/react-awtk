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
        <Edit
          parent = { "win1" }
          text = { "" }
          name = { 'text[3-8]' }
          inputTips = { 'text[3-8]' }
          inputType = { TInputType.TEXT }
          style = {{
            selfLayout:{
              x:"10",
              y:"10",
              w:"228",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          textLimit = {[3, 8]}
        />
        <Edit
          parent = { "win1" }
          text = { "" }
          name = { 'int auto fix[1-100]' }
          inputTips = { 'int auto fix[1-100]' }
          inputType = { TInputType.INT }
          style = {{
            selfLayout:{
              x:"10",
              y:"50",
              w:"228",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          intLimit = {[1, 100, 1]}
          autoFix = { true }
        />
        <Edit
          parent = { "win1" }
          text = { '1.23' }
          name = { "float[1-10]" }
          inputTips = { "float[1-10]" }
          inputType = { TInputType.FLOAT }
          style = {{
            selfLayout:{
              x:"10",
              y:"90",
              w:"228",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          floatLimit = {[1, 10, 1]}
        />
        <Edit
          parent = { "win1" }
          text = { "" }
          name = { 'password' }
          inputTips = { 'password' }
          inputType = { TInputType.PASSWORD }
          style = {{
            selfLayout:{
              x:10,
              y:10+128,
              w:228,
              h:30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          TextLimit = {}
        />
        <Edit
          parent = { "win1" }
          text = { "readonly" }
          name = { 'text' }
          inputTips = { 'text' }
          inputType = { TInputType.TEXT }
          style = {{
            selfLayout:{
              x:10,
              y:50+128,
              w:228,
              h:30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          readonly = {true}
        />
        <Edit
          parent = { "win1" }
          text = { "" }
          name = { 'hex' }
          inputTips = { 'hex' }
          inputType = { TInputType.HEX }
          style = {{
            selfLayout:{
              x:10,
              y:90+128,
              w:228,
              h:30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
        />
        <Edit
          parent = { "win1" }
          text = { "" }
          name = { 'email' }
          inputTips = { 'email' }
          inputType = { TInputType.EMAIL }
          style = {{
            selfLayout:{
              x:10,
              y:130+128,
              w:228,
              h:30
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(edit.name + ' changed');
            }
          }
          onValueChanging = {
            (evt)=>{
              // console.log(edit.name + ' changed');
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


