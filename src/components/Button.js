import Widget from "./Widget"

class Button extends Widget{

    constructor(nativeObj){
        super(nativeObj);
    }

    static create({parent, x, y, w, h}) {
        return new Button(button_create(parent ? parent.nativeObj : null, x, y, w, h));
    };

    static cast(widget) {
        return new Button(button_cast(widget ? (widget.nativeObj || widget) : null));
    };

    setRepeat(repeat) {
        return button_set_repeat(this.nativeObj, repeat);
    };
    setEnableLongPress(enable_long_press) {
        return button_set_enable_long_press(this.nativeObj, enable_long_press);
    };

    get repeat() {
        return button_t_get_prop_repeat(this.nativeObj);
    }

    get enableLongPress() {
        return button_t_get_prop_enable_long_press(this.nativeObj);
    }

}

export default Button;
