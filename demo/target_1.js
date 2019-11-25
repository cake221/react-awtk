import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../src"

class App extends Component {
    constructor(props){
        super(props);
        this.winRef = React.createRef();
    }

    componentDidMount () {
        console.log('APP DID MOUNT!');
    }

    render() {
        return (
            <Window
                ref = {
                    (ref) => setParentWidget(ref, "win1")
                }
                x="0" y="0" w="0" h="0"
            >
                <Button
                    parent = { "win1" }
                    text = { "wenyufei" }
                    x="0" y="0" w="0" h="0"
                    tk_style = {{
                        selfLayoutParams:{
                            x:"center",
                            y:"middle",
                            w:"50%",
                            h:"30"
                        },
                    }}
                />
            </Window>
        )
    }
}


AwtkRender(<App />, () => {
    console.log(' 渲染成功 AWTK ');
});


