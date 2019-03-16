import React, { Component } from 'react';
import List from './components/List';
import Search from './components/Search';
import './App.css';
import vanCityLogo from '../src/vanCityLogo.png';

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
      <img src={vanCityLogo} alt="logo" width={200} height={100}/>
        
        <div className="wrapper">
        
        <div className="main">

        <div className="container">
        
        <div className="row">
        
        <div className="col-xs-3 title-container">
        <header className="App-header">PET FINDER
        
        <header className="App-header2"> <Search /></header>
        
        </header>
        
        </div>
      
        <div className="col-xs-7 form-container">
        <h1>Dogs are listed with Name, Breed, Colour and Apparent Sex</h1>
        <List data = {this.state.data} />
        </div>
      
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
};



export default App;
