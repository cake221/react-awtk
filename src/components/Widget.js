import Node from "./Node"

class Widget extends Node {

    constructor(props) {
        super();
        this.props = { ...props };
    }
}

export default Widget;
