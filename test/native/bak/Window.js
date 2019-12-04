import Widget from "./Widget"

class Window extends Widget{

    constructor(nativeObj){
        super(nativeObj);
    }

    static create(parent, x, y, w, h) {
        return new Window(window_create(parent ? parent.nativeObj : null, x, y, w, h));
    };

    setFullscreen(fullscreen) {
        return window_set_fullscreen(this.nativeObj, fullscreen);
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

    static cast(widget) {
        return new Window(window_cast(widget ? (widget.nativeObj || widget) : null));
    };

    get fullscreen () {
        return window_t_get_prop_fullscreen(this.nativeObj);
    }
}

export default Window;
