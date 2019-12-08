import React, { Component } from 'react';
import {  AwtkRender, TEventType, TWindowManager, TWindow } from "../src"

class App extends Component {
  private winRef: React.RefObject<TWindow> = React.createRef();
  constructor(props){
    super(props);
  }
  
  componentDidMount () {
    console.log('APP DID MOUNT!');
    const inc_widget =  this.winRef.current.lookup("inc_value", true);
    inc_widget.on(TEventType.CLICK,()=>{
      this.winRef.current.child("bar1").addValue(10);
      this.winRef.current.child("bar2").addValue(10);
    }, null);
    
    const dec_widget =  this.winRef.current.lookup("inc_value", true);
    dec_widget.on(TEventType.CLICK,()=>{
      this.winRef.current.child("bar1").addValue(-10);
      this.winRef.current.child("bar2").addValue(-10);
    },null);
    
    const close_widget =  this.winRef.current.lookup("inc_value", true);
    inc_widget.on(TEventType.CLICK,()=>{
      const bar1 =  this.winRef.current.child("bar1").getValue();
      const bar2 =  this.winRef.current.child("bar2").getValue();
      console.log('bar1 value:' + bar1);
      console.log('bar2 value:' + bar2);
    }, null);
    
    // todo 错误;需要检验
    this.winRef.setShowFps(true);
    // TWindowManager.cast( this.winRef.getWindowManager()).setShowFps(true);
  }
  
  render() {
    return (
      <t_window
        useTheme="basic"
        ref = {this.winRef}
      />
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


