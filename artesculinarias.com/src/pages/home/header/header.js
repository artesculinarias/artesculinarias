import React from 'react'
import '../header/header.css'
import Navigation from './organisms/nav.js'
import HeaderView from './organisms/header-view.js'

function Header() {
    return (
        <div className="App-header" id="headerbm">
          {/*--- Top Navigation bar ---*/}
          <div className="fixed-top">
            <Navigation fix="margin-text-white" pos="default navibar"></Navigation>
            <hr/>
          </div>
          <div className="fix-ct-top mb-auto">
            <hr/>
            <Navigation pos="default" fix="margin-text-transparent" hasnonavcollapse={true} ></Navigation>
          </div>
          <HeaderView></HeaderView>
          {/*--- Bottom navigation line ---*/}
          <div className="fix-ct-bottom mt-auto">
            <hr/>
            <Navigation pos="default" fix="margin-text-transparent" hasnonavcollapse={true} ></Navigation>
          </div>
          {/*--- Bottom navigation line ---*/}
        </div>
    );
  }

export default Header