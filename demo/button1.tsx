import * as React from 'react';
import { AwtkRender, setParentWidget, TGlobal, TButton, TPointerEvent } from "../src"

class App extends React.Component<{}, {btnState:boolean}> {
  
  constructor(props){
    super(props);
    this.state = {
      btnState:true,
    }
  }
  
  componentDidMount () {
    console.log('APP DID MOUNT!');
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
    this.setState({
      btnState:false
    })
  }

  onClick = (evt)=>{
    this.setState((preState)=>{
      btnState: !preState.btnState
    })
    const e = TPointerEvent.cast(evt);
    const target = TButton.cast(e.target);
    
    console.log("click at " + e.x + " " + e.y + " on " + target.name);
    return TRet.OK;
  }

  btn = () => {
    if(this.state.btnState){
      return (<t_button
        parent = { "win1" }
        text = { "lalal" }
        style = {{
          selfLayout:{
            x:"center",
            y:"middle",
            w:"50%",
            h:"30"
          },
        }}
        onClick = {this.onClick}
      />)
    }else{
      return(
        <t_label
          parent = { "win1" }
          text = { "wenyufei" }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"50%",
              h:"30"
            },
          }}
        />
      )
    }
  }
  render() {
    return (
      <t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        {this.btn()}
      </t_window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


