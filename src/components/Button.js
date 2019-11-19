import Node from "./Node"
import { TButton } from  "../components_native"


class Button extends Node {

	constructor(props) {
		super();
		this.props = { ...props };
		this.newInstance();
	}

	newInstance() {
		// this.element = TButton.create(win, 0, 0, 0, 0);
	}
}

export default Button;
