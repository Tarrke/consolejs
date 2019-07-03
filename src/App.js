import React, { Component } from 'react';

import Header from './component/Header'

import './App.css';

require('./console.js');


export default class App extends Component {
  render() {
    console.debug("Hello World", "2");
    let obj = { a: "a", b:'b'};
    console.debug(obj);
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
