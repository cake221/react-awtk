import React, { Component } from 'react';
import { Window, AwtkRender } from "../src"

class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        console.log('APP DID MOUNT!');
    }
    render() {
        return (
            <Window/>
        )
    }
}


AwtkRender(<App />, () => {
    console.log(' 渲染成功 AWTK ');
});


