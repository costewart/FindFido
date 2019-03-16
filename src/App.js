import React, { Component } from 'react';
import List from './components/List';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="wrapper">
        
        <div className="main">

        <div className="container">
        
        <div className="row">
        
        <div className="col-xs-3 title-container">
        <header className="App-header">Lost and Found 
        
        <header className="App-header2"> <Search /></header>
        
        </header>
        
        </div>
      
        <div className="col-xs-7 form-container">
        <List />
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
