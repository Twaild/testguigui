import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Header />
        </header>
      </div>
    );
  }
}

export default App;