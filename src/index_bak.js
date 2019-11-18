import React, { Component } from 'react';
import { render } from 'react-dom';
import {applicationInit} from "./button"

class Button extends Component {
  render() {
    return <h1>Hello,wenyufei</h1>
  }
}

render(<Button/>, window.document.getElementById('app'));
