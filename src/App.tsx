import React from 'react';
import './App.css';
import logo from './logo.png';
import facebookLogo from './sm_icons/facebook.png'
import linkedinLogo from './sm_icons/linkedin.png'
import twitterLogo from './sm_icons/twitter.png'

function App() {
  return (
    <div className="App">
      <div className="divLogo">
        <img src={logo} id="logo" className="logo" alt="logo"/>
        <div id="company_name">Crypto Tracker</div>
      </div>
      <div className="divProductHeadline">
        <div id="product_headline">Crypto Tracker: All your crypto in one place</div>
        <p id="product_description">Crypto Tracker is a web app that allows you to easily manage your Crypto currency holdings in one place. Keep track of the prices and your profit/loss trends.</p>
      </div>
      <div>
        <div id="features_heading">Features</div>
        <div id="features_list">
          <div className="feature">Add/Remove Crypto Assets</div>
          <div className="feature">Track Prices</div>
          <div className="feature">View PnL</div>
        </div>
      </div>
      <div>
        <div id="copyright_notice">Copyright Crypto Tracker</div>
        <div id="sm_links">
          <a href="https://skillreactor.io">
            <img id="sm_facebook" src={facebookLogo} alt="facebook logo"/>
          </a>
          <a href="https://skillreactor.io">
            <img id="sm_linkedin" src={linkedinLogo} alt="linkedin logo"/>
          </a>
          <a href="https://skillreactor.io">
            <img id="sm_twitter" src={twitterLogo} alt="twitter logo"/>
          </a>
        </div>
      </div>

      {/* <header className="App-header">
        Welcome to SkillReactor!
      </header> */}
    </div>
  );
}

export default App;
