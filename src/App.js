import React, { Component } from 'react';
import Converter from './components/Converter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="line">
          <Converter coinA="USD" coinB="BRL"></Converter>
          <Converter coinA="BRL" coinB="USD"></Converter>
        </div>
        <div className="line">
          <Converter coinA="EUR" coinB="BRL"></Converter>
          <Converter coinA="BRL" coinB="EUR"></Converter>
        </div>
        <div className="line">
          <Converter coinA="GBP" coinB="BRL"></Converter>
          <Converter coinA="BRL" coinB="GBP"></Converter>
        </div>
        <div className="line">
          <Converter coinA="CAD" coinB="BRL"></Converter>
          <Converter coinA="BRL" coinB="CAD"></Converter>
        </div>
        <div className="line">
          <Converter coinA="JPY" coinB="BRL"></Converter>
          <Converter coinA="BRL" coinB="JPY"></Converter>
        </div>
      </div>
    );
  }
}

export default App;
