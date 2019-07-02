import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const isDebug = true;


let debug = () => {};
if( isDebug ) {
  debug = console.log.bind(window.console, "%cToto", "background: #222; color: #bada55", '~~');
}

function foo(...args) {
  console.log.apply(console, args);
}


export default class App extends Component {
  render() {
    console.log('\x1b[33m%s\x1b[0m',"Hello World");
    console.log("%c%s", "background: #222; color: #bada55", "Hello World");
    foo("testing");
    debug("Hello World", "2");
    let obj = { a: "a", b:'b'};
    debug(obj);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}
