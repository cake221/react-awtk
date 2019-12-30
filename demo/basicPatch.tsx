import * as React from 'react';
import {  AwtkRender, t_window_base, TWindowManager } from "../src"
import { TEventTypePatch } from "../src/native/awtkPatch"

export class App extends React.Component {
  private winRef: React.RefObject<t_window_base> = React.createRef();
  constructor(props){
    super(props);
  }
  
  componentDidMount () {
    console.log('APP DID MOUNT!');
    const inc_widget =  this.winRef.current.lookup("inc_value", true);
    //@ts-ignore
    inc_widget.on(TEventTypePatch.CLICK,()=>{
      this.winRef.current.child("bar1").addValue(10);
      this.winRef.current.child("bar2").addValue(10);
    }, null);
    
    const dec_widget =  this.winRef.current.lookup("dec_value", true);
    //@ts-ignore
    dec_widget.on(TEventTypePatch.CLICK,()=>{
      this.winRef.current.child("bar1").addValue(-10);
      this.winRef.current.child("bar2").addValue(-10);
    },null);
    
    const close_widget =  this.winRef.current.lookup("close", true);
    //@ts-ignore
    close_widget.on(TEventTypePatch.CLICK,()=>{
      const bar1 =  this.winRef.current.child("bar1").getValue();
      const bar2 =  this.winRef.current.child("bar2").getValue();
      console.log('bar1 value:' + bar1);
      console.log('bar2 value:' + bar2);
    }, null);
    
    TWindowManager.cast(this.winRef.current.getWindowManager()).setShowFps(true);
  }
  
  render() {
    return (
      <t_window
        sourceName="basic"
        ref = {this.winRef}
      />
    )
  }
}

AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});
