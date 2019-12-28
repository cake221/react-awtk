import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../src"

class App extends Component {
  constructor(props){
    super(props);
    this.bar1 = React.createRef()
    this.bar2 = React.createRef()
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    TTimer.add(function(info) {
      this.bar1.setValue(bar1.value+5);
      this.bar2.setValue(bar2.value+5);

      if(this.bar1.value < 100) {
        return TRet.REPEAT;
      } else {
        return TRet.REMOVE;
      }
    }, 500);
  }

  render() {
    return (
      <Window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <ProgressBar
          ref = {this.bar1}
          parent = { "win1" }
          name = {"bar1"}
          value = { 10 }
          vertical = { false }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"bottom:10",
              w:"90%",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // console.log(bar.name + ' changed. ' + bar.value);
            }
          }
        />
        <ProgressBar
          ref = {this.bar2}
          parent = { "win1" }
          name = {"bar2"}
          value = { 10 }
          vertical = { true }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"10",
              w:"30",
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


