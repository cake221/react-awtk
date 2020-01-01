import * as React from 'react';
import { AwtkRender, setParentWidget, TEvent, TEdit } from "../src";


class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
  }

  onValueChanged(evt){
    const target = TEvent.cast(evt).target;
    const instance = TEdit.cast(target)
    console.log(instance.name + ' changed');
    return TRet.OK;
  }

  onValueChanging(evt){
    const target = TEvent.cast(evt).target;
    const instance = TEdit.cast(target)
    console.log(instance.name + ' changing');
    return TRet.OK;
  }

  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = { this.onValueChanging }
          textLimit = {[3, 8]}
        />
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
          intLimit = {[1, 100, 1]}
          autoFix = { true }
        />
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
          floatLimit = {[1, 10, 1]}
        />
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging}
        />
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging }
          readonly = {true}
        />
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging }
        />
        <t_edit
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
          onValueChanged = {this.onValueChanged}
          onValueChanging = {this.onValueChanging }
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


