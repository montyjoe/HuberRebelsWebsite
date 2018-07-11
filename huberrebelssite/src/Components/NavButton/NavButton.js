import React, { Component } from 'react';
import './NavButton.css';

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <a className="NavButton">Click</a>

    );
  }
}

export default NavButton;
