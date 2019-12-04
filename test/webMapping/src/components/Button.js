import Widget from "./Widget"
import { isFunction } from "lodash"
import { setChildWidget } from "../util/parentWidget"

class Button extends Widget{

    constructor(nativeObj){
        super(nativeObj);
    }

    static create(props) {
        console.log("Button create", ...arguments);
        const {parent, x, y, w, h, ...other} = props;
        const btn =  new Button( null , x, y, w, h);
        parent && setChildWidget(btn, parent);

        for(const item in other){
            if(other.hasOwnProperty(item)){
                if( isFunction(other[item]) ){

                }else {
                    btn[item] = other[item];
                }
            }
        }

        return btn;
    };

}

export default Button;
