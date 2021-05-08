import React from 'react'
import '/Users/Kevin/Documents/GitHub/artesculinarios.com/artesculinarias.com/src/App.css';
import Navigation from './organisms/nav.js'

function Header() {
    return (
        <div className="App-header">
          <div className="fixed-top">
            <Navigation fix="margin-text-white" pos="default"></Navigation>
            <hr/>
          </div>
          <div className="fixed-bottom">
            <hr/>
            <Navigation pos="default" fix="margin-text-transparent"></Navigation>
          </div>
        </div>
    );
  }

export default Header