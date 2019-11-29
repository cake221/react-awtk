import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget, TEventType } from "../src"

class App extends Component {
    constructor(props){
        super(props);
        this.winRef = React.createRef();
    }

    componentDidMount () {
        console.log('APP DID MOUNT!');
        const inc_widget =  this.winRef.lookup("inc_value", true)
        inc_widget.on(TEventType.CLICK,()=>{
            this.winRef.child("bar1").addValue(10);
            this.winRef.child("bar2").addValue(10);
        })

        const dec_widget =  this.winRef.lookup("inc_value", true)
        dec_widget.on(TEventType.CLICK,()=>{
            this.winRef.child("bar1").addValue(-10);
            this.winRef.child("bar2").addValue(-10);
        })

        const close_widget =  this.winRef.lookup("inc_value", true)
        inc_widget.on(TEventType.CLICK,()=>{
            const bar1 =  this.winRef.child("bar1").getValue();
            const bar2 =  this.winRef.child("bar2").getValue();
            console.log('bar1 value:' + bar1);
            console.log('bar2 value:' + bar2);
        })

        TWindowManager.cast( this.winRef.getWindowManager()).setShowFps(true);
    }

    render() {
        return (
            <Window
                useTheme="basic"
                ref = {this.winRef}
            />
        )
    }
}


AwtkRender(<App />, () => {
    console.log(' 渲染成功 AWTK ');
});


