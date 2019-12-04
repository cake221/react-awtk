import React, { Component } from 'react';
import { Window, Button, AwtkRender,setParentWidget } from "../src"

class App extends Component {
    constructor(props){
        super(props);
    }


    componentDidMount () {
        console.log('APP DID MOUNT!');
    }

    render() {
        return (
            <Window anim_hint="htranslate"
                ref = {(ref)=>{
                    setParentWidget(ref, "win1")
                }}
            >
                <Button name="open:dialog1" style="round" enable_long_press="true" x="c" y="10" w="128" h="30" text="Long Press"
                    onPress = {
                        (e)=>{
                            console.log(e)
                        }
                    }
                    parent = { "win1" }
                />
                <Button style="red_btn" x="c" y="50" w="128" h="30" text="Text"/>
                <Button style="icon" x="c" y="90" w="128" h="30" text="Fullscreen" name="fullscreen"/>
                {/*<Button x="c" y="130" w="128" h="30">*/}
                    {/*<label y="0" x="0" w="100%" h="100%" text="Text"/>*/}
                    {/*<image image="earth" draw_type="icon" y="0" x="right" w="30" h="100%"/>*/}
                {/*</Button>*/}
                <Button style="icon" x="c" y="170" w="60" h="60" text="Text"/>
                <Button style="icon" x="c" y="240" w="60" h="60"/>
                <Button style="image" x="c" y="310" w="30" h="30"/>
                <Button name="close" x="center" y="bottom:10" w="25%" h="30" text="Close"/>
            </Window>
        )
    }
}


AwtkRender(<App />, () => {
    console.log(' 渲染成功 AWTK ');
});


