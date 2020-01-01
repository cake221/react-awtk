import * as React from 'react';
import {AwtkRender, setParentWidget, TCheckButton, TEvent} from "../src"

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount () {
    console.log('APP DID MOUNT!');
  }

  onValueChanged(evt) {
      const target = TEvent.cast(evt).target;
      const btn = TCheckButton.cast(target)
      console.log(btn.name + ' changed. ' + (btn.value));
      return TRet.OK;
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
          text = { "1" }
          name = { "1" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:10,
              y:10+128,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_check_button
          parent = { "win1" }
          text = { "2" }
          name = { "2" }
          isRadio = { false }
          style = {{
            selfLayout:{
              x:10,
              y:50+128,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_check_button
          parent = { "win1" }
          text = { "3" }
          name = { "3" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:10,
              y:90+129,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_check_button
          parent = { "win1" }
          text = { "4" }
          name = { "4" }
          isRadio = { false }
          style = {{
            selfLayout:{
              x:10,
              y:130+129,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_check_button
          parent = { "win1" }
          text = { "5" }
          name = { "5" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:10,
              y:10,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_check_button
          parent = { "win1" }
          text = { "6" }
          name = { "6" }
          isRadio = { false }
          style = {{
            selfLayout:{
              x:10,
              y:50,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
        <t_check_button
          parent = { "win1" }
          text = { "7" }
          name = { "7" }
          isRadio = { true }
          style = {{
            selfLayout:{
              x:10,
              y:90,
              w:128,
              h:30
            },
          }}
          //@ts-ignore
          onValueChanged = {this.onValueChanged}
        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


