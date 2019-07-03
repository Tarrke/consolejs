import React, { Component } from 'react'

import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        console.info("Header Render Info");
        console.warn("Header Render Warn");
        console.debug("Header Render Debug");
        return (
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
        );
    }
}