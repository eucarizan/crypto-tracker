import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <div className="divLogo">
        <img src={logo} id="logo" className="logo" alt="logo"/>
        <div id="company_name">Crypto Tracker</div>
      </div>
      <header className="App-header">
        Welcome to SkillReactor!
      </header>
    </div>
  );
}

export default App;
