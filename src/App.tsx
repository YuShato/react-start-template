import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './stories/logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Logo viewtype="default" />
      </header>
    </div>
  );
}

export default App;
