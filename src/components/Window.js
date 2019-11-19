import Node from "./Node"

class Window extends Node {

    constructor(props) {
        super();
        this.props = { ...props };
        this.newInstance();
    }

    newInstance() {
        this.instance = TWindow.create(null, 0, 0, 0, 0)
        this.instance.layout();
    }
}

export default Window;
