import React from 'react';
import logo from './logo.svg';
import './App.css';
import favicon from './favicon.ico'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={favicon} className="App-logo" alt="logo" height='100px' />
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

export default App;
