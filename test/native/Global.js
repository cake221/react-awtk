class Global {
    constructor(nativeObj){
        this.nativeObj = nativeObj;
    }

    static quit() {
        return tk_quit();
    };
    static getPointerX() {
        return tk_get_pointer_x();
    };
    static getPointerY() {
        return tk_get_pointer_y();
    };
    static isPointerPressed() {
        return tk_is_pointer_pressed();
    };
}

export default Global;
