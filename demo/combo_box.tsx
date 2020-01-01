import * as React from 'react';
import { AwtkRender, 
  setParentWidget, 
  t_combo_box_base, 
  TEvent,
  TComboBox
} from "../src"

class App extends React.Component {
  private box3:React.RefObject<t_combo_box_base> = React.createRef();
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    // todo 测试 componentDidMount 先，还是 getPublicInstance 先
    const box3 = this.box3.current
    box3.appendOption(10, 'Aaaaaaa');
    box3.appendOption(20, 'Waaaaaa');
    box3.appendOption(30, 'Taaaaaa');
    box3.appendOption(40, 'Kaaaaaa');
    box3.setSelectedIndex(3);
  }

  onValueChanged(evt){
    const target = TEvent.cast(evt).target;
    const instance = TComboBox.cast(target)
    console.log(instance.name + ' changed: ' + (instance.value))
    return TRet.OK
  }

  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <t_combo_box
          parent = { "win1" }
          name = { "color" }
          options = {"Red;Green;Blue"}
          style = {{
            selfLayout:{
              x:"10",
              y:"10",
              w:"168",
              h:"30"
            },
          }}
          onValueChanged = {this.onValueChanged}
        />
        <t_combo_box
          parent = { "win1" }
          name = { "zlg" }
          options = {"0.Zzzzzzzz;1.Lzzzzzzz;2.Gzzzzzzz"}
          style = {{
            selfLayout:{
              x:"50",
              y:"50",
              w:"168",
              h:"30"
            },
          }}
          onValueChanged = {this.onValueChanged}
        />
        <t_combo_box
          ref = { this.box3 }
          parent = { "win1" }
          name = { "awtk" }
          options = {""}
          style = {{
            selfLayout:{
              x:"10",
              y:"90",
              w:"168",
              h:"30"
            },
          }}
          onValueChanged = {this.onValueChanged}

        />
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


