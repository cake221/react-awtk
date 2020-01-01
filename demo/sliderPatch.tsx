import * as React from 'react';
import {  AwtkRender, setParentWidget,TEvent,TSlider } from "../src"
import { TRetPatch } from "../src/native/awtkPatch"

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
  }

  onValueChanged(evt){
    const target = TEvent.cast(evt).target;
    const instance = TSlider.cast(target);
    console.log(instance.name + ' changing. ' + instance.value);
    return TRetPatch.OK;
  }

  onValueChanging(evt){
    const target = TEvent.cast(evt).target;
    const instance = TSlider.cast(target);
    console.log(instance.name + ' changed. ' + instance.value);
    return TRetPatch.OK;
  }

  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_slider
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
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
          //@ts-ignore
          onValueChanging = { this.onValueChanging }
        />
        <t_slider
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
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
          //@ts-ignore
          onValueChanging = { this.onValueChanging }
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


