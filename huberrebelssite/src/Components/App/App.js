import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        
      </div>
    );
  }
}

export default App;
