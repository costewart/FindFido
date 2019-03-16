import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
  	const data = require('./data.json');
  	this.state = {
  		data: data
  	}
 

  }
  render() {
    return (
      <div className="App">
        {
        	
        }
        <header className="App-header">Lost and Found</header>
        <h1>Dogs are listed with Name, Breed, Colour and Apparent Sex</h1>
        <List data = {this.state.data} />
      </div>
    );
  }
}

export default App;
