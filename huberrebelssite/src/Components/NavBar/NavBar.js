import React, { Component } from 'react';
import './NavBar.css';
import NavButton from '../NavButton/NavButton';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="NavBar">
        <NavButton/>
        <NavButton/>
        <NavButton/>
        <NavButton/>
      </div>
    );
  }
}

export default NavBar;
