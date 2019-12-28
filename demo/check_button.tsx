import * as React from 'react';
import {AwtkRender, setParentWidget, TCheckButton} from "../src"

class App extends React.Component {
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
        <t_check_button
          parent = { "win1" }
          text = { "Zzzzzz" }
          name = { "Zzzzzz" }
          isRadio = { false }
          style = {{
            selfLayout:{
              x:"10",
              y:"10",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              // TODO: 需要检测是否正确
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
              return TRet.OK;
            }
          }
        />
        <t_check_button
          parent = { "win1" }
          text = { "Lzzzzz" }
          name = { "Lzzzzz" }
          isRadio = { false }
          style = {{
            selfLayout:{
              x:"10",
              y:"50",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
              return TRet.OK;
            }
          }
        />
        <t_check_button
          parent = { "win1" }
          text = { "Zzzzzz" }
          name = { "Zzzzzz" }
          isRadio = { false }
          style = {{
            selfLayout:{
              x:"10",
              y:"90",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
              return TRet.OK;
            }
          }
        />
        <t_check_button
          parent = { "win1" }
          text = { "Aaaaaa" }
          name = { "Aaaaaa" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:"10",
              y:"10+128",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
              return TRet.OK;
            }
          }
        />
        <t_check_button
          parent = { "win1" }
          text = { "Waaaaa" }
          name = { "Waaaaa" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:"10",
              y:"50+128",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
              return TRet.OK;
            }
          }
        />
        <t_check_button
          parent = { "win1" }
          text = { "Tttttt" }
          name = { "Tttttt" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:"10",
              y:"90+129",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
              return TRet.OK;
            }
          }
        />
        <t_check_button
          parent = { "win1" }
          text = { "Kkkkkk" }
          name = { "Kkkkkk" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:"10",
              y:"130+129",
              w:"128",
              h:"30"
            },
          }}
          onValueChanged = {
            (evt)=>{
              const btn = TCheckButton.cast(evt.target);
              console.log(btn.name + ' changed. ' + (btn.value));
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


