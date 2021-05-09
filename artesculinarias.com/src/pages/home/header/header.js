import React from 'react'
import '/Users/Kevin/Documents/GitHub/artesculinarios.com/artesculinarias.com/src/App.css';
import Navigation from './organisms/nav.js'
import HeaderView from './organisms/header-view.js'

function Header() {
    return (
        <div className="App-header">
          {/*--- Top Navigation bar ---*/}
          <div className="fixed-top">
            <Navigation fix="margin-text-white" pos="default"></Navigation>
            <hr/>
          </div>
          {/*--- Bottom navigation line ---*/}
          <div className="fixed-bottom">
            <hr/>
            <Navigation pos="default" fix="margin-text-transparent"></Navigation>
          </div>
          {/*--- Bottom navigation line ---*/}
          <HeaderView></HeaderView>
        </div>
    );
  }

export default Header