import React, { Component } from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="Header">
        <img src={require('./HRProfileLogo.jpg')}/>
        <NavBar/>
        <SearchBar/>
      </div>
    );
  }
}

export default Header
