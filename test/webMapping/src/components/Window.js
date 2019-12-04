import Widget from "./Widget"

class Window extends Widget{

    constructor(nativeObj){
        super(nativeObj);
    }

    static create( props ) {
        console.log(" Window create", ...arguments);
        const {parent, x, y, w, h,ref, ...other} = props;

        return new Window({});
    };
}

export default Window;
