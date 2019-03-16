import React, { Component } from 'react';
import List from './components/List';
import './App.css';
import vancityLogo from "../src/vancityLogo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={vancityLogo} alt="logo" width={200} height={100}/>
        <header className="App-header">Lost and Found</header>
        <List />
      </div>
    );
  }
}

export default App;
