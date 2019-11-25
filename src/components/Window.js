import Widget from "./Widget"
import {isArray, isFunction} from "lodash"

class Window extends Widget{

    constructor(nativeObj){
        super(nativeObj);
    }

    static create(props) {
        const { x, y, w, h, fullscreen, ...widget_props} = props;

        const win =  new Window(window_create( null, x, y, w, h));
        Widget.widgetSetProps(win, widget_props);

        const other = { fullscreen };
        for(const item in other){
            if(other.hasOwnProperty(item)){
                if( isFunction(other[item]) ){

                }else {
                    win[item] = other[item];
                }
            }
        }
        win.layout();
        return win;
    };

    static cast(widget) {
        return new Window(window_cast(widget ? (widget.nativeObj || widget) : null));
    };

    // 属性
    get fullscreen () {
        return window_t_get_prop_fullscreen(this.nativeObj);
    }

    set fullscreen(fullscreen) {
        this.checkWidgetTRet( window_set_fullscreen(this.nativeObj, fullscreen) );
    };

    static open(name) {
        return new Window(window_open(name));
    };
    static openAndClose(name, to_close) {
        return new Window(window_open_and_close(name, to_close ? to_close.nativeObj : null));
    };

    close() {
        return window_close(this.nativeObj);
    };
    closeForce() {
        return window_close_force(this.nativeObj);
    };

}

export default Window;
