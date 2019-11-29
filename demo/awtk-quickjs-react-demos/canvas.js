import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget, TEventType } from "../src"

class App extends Component {
  constructor(props){
    super(props);
    this.winRef = React.createRef();
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    this.winRef.child("paint_vgcanvas").on(TEventType.PAINT, function(e) {
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
    });
  }

  render() {
    return (
      <Window
        ref = { this.winRef }
        useTheme = { "vgcanvas" }
      />
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


