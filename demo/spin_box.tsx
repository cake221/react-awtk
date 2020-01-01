import React, { Component } from 'react';
import { AwtkRender, setParentWidget, TGlobal,TEvent,TSpinBox } from "../src"

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
  }

  onValueChanged(evt){
    const target = TEvent.cast(evt).target;
    const instance = TSpinBox.cast(target);
    console.log(instance.name + ' changing. ' );
    return TRet.OK;
  }

  onValueChanging(evt){
    const target = TEvent.cast(evt).target;
    const instance = TSpinBox.cast(target);
    console.log(instance.name + ' changed. ' );
    return TRet.OK;
  }


  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_spin_box
          parent = { "win1" }
          name = { "int" }
          text = { "" }
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
          intLimit = { [1, 100, 1] }
        />
        <t_spin_box
          parent = { "win1" }
          name = { "uint" }
          text = { "" }
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
          intLimit = { [1, 100, 1] }
        />
        <t_spin_box
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
          intLimit = { [1, 10, 1] }
        />
        <t_spin_box
          parent = { "win1" }
          name = { "ufloat" }
          text = { "" }
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
          intLimit = { [1, 10, 0.1] }
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


