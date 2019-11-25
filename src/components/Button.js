import Widget from "./Widget"
import {isArray, isFunction} from "lodash"

class Button extends Widget{

    constructor(nativeObj){
        super(nativeObj);
    }

    static create(props) {

        const { x, y, w, h, repeat, enable_long_press, ...widget_props} = props;
        const btn =  new Button(button_create( null, x, y, w, h));
        Widget.widgetSetProps(btn, widget_props);

        const other = { repeat, enable_long_press };
        for(const item in other){
            if(other.hasOwnProperty(item)){
                if( isFunction(other[item]) ){

                }else {
                    btn[item] = other[item];
                }
            }
        }

        btn.layout();
        return btn;
    };

    static cast(widget) {
        return new Button(button_cast(widget ? (widget.nativeObj || widget) : null));
    };


    get repeat() {
        return button_t_get_prop_repeat(this.nativeObj);
    }

    set repeat(repeat) {
        this.checkWidgetTRet( button_set_repeat(this.nativeObj, repeat) );
    };

    // 将 enableLongPress 改成了 enable_long_press
    get enable_long_press() {
        return button_t_get_prop_enable_long_press(this.nativeObj);
    }

    set enable_long_press(enable_long_press) {
        this.checkWidgetTRet( button_set_enable_long_press(this.nativeObj, enable_long_press) );
    };

}

export default Button;
