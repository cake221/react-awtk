import * as React from 'react';
import { AwtkRender, t_window_base, TPaintEvent, TCanvas } from "../src"

class App extends React.Component {
  private winRef: React.RefObject<t_window_base> = React.createRef();
  constructor(props){
    super(props);
  }
  
  componentDidMount () {
    console.log('APP DID MOUNT!');
    this.winRef.current.child("paint_vgcanvas").on(TEventType.PAINT, function(e) {
      const evt = TPaintEvent.cast(e);
      const c = TCanvas.cast(evt.c);
      const vg = c.getVgcanvas();
      
      c.setFillColor("#f0f0f0");
      c.fillRect(0, 0, c.getWidth(), c.getHeight());
      
      vg.setFillColor("green");
      vg.rect(10, 10, vg.w-20, vg.h-20);
      vg.fill();
      
      vg.save();
      vg.setLineWidth(3);
      vg.setStrokeColor("blue");
      vg.rect(30, 30, vg.w-60, vg.h-60);
      vg.stroke();
      vg.restore();
    },null);
  }
  
  render() {
    return (
      <t_window
        ref = { this.winRef }
        // todo 有name时怎么处理
        name = { "vgcanvas" }
      />
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


