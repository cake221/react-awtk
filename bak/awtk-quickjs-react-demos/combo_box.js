import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../src"

class App extends Component {
  constructor(props){
    super(props);
    this.box3 = React.createRef();
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    // todo 测试 componentDidMount 先，还是 getPublicInstance 先
    const box3 = this.box3
    box3.appendOption(10, 'Aaaaaaa');
    box3.appendOption(20, 'Waaaaaa');
    box3.appendOption(30, 'Taaaaaa');
    box3.appendOption(40, 'Kaaaaaa');
    box3.setSelectedIndex(3);
  }

  render() {
    return (
      <Window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <ComboBox
          parent = { "win1" }
          name = { "color" }
          options = {"Red;Green;Blue"}
          defaultIndex = { 0 }
          style = {{
            selfLayout:{
              x:"10",
              y:"10",
              w:"168",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              console.log(box.name + ' changed: ' + (box.value))
            }
          }
        />
        <ComboBox
          parent = { "win1" }
          name = { "zlg" }
          options = {"0.Zzzzzzzz;1.Lzzzzzzz;2.Gzzzzzzz"}
          defaultIndex = { 1 }
          style = {{
            selfLayout:{
              x:"50",
              y:"50",
              w:"168",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              console.log(box.name + ' changed: ' + (box.value))
            }
          }
        />
        <ComboBox
          ref = { this.box3 }
          parent = { "win1" }
          name = { "awtk" }
          options = {""}
          defaultIndex = { 1 }
          style = {{
            selfLayout:{
              x:"10",
              y:"90",
              w:"168",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              console.log(box.name + ' changed: ' + (box.value))
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


