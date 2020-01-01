import * as React from 'react';
import { AwtkRender, setParentWidget, t_progress_bar_base, TEvent, TTimer } from "../src"
import { TRetPatch } from "../src/native/awtkPatch"

class App extends React.Component {

  private bar1:React.RefObject<t_progress_bar_base> = React.createRef()
  private bar2:React.RefObject<t_progress_bar_base> = React.createRef()

  constructor(props){
    super(props);
  }

  onValueChanged(evt){
    const e = TEvent.cast(evt);
    const instance = t_progress_bar_base.cast(e.target);
    console.log(instance.name + ' changed. ' + instance.value);

    return TRetPatch.OK;
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    // @ts-ignore
    TTimer.add((info) => {
      this.bar1.current.setValue(this.bar1.current.value+5);
      this.bar2.current.setValue(this.bar2.current.value+5);

      if(this.bar1.current.value < 100) {
        return TRetPatch.REPEAT;
      } else {
        return TRetPatch.REMOVE;
      }
    }, null, 500);
  }

  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_progress_bar
          ref = {this.bar1}
          parent = { "win1" }
          name = {"wenyufei"}
          value = { 10 }
          vertical = { false }
          showText = { true }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"bottom:10",
              w:"90%",
              h:"30"
            },
          }}
          // @ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_progress_bar
          ref = {this.bar2}
          parent = { "win1" }
          name = {"bar2"}
          value = { 10 }
          vertical = { true }
          showText = { true }
          text = { "ok" }
          style = {{
            selfLayout:{
              x:"center",
              y:"10",
              w:"30",
              h:"80%"
            },
          }}
          // @ts-ignore
          onValueChanged = {this.onValueChanged}
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


