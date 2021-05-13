import React from 'react';
import '../organisms/header-view.css';

function HeaderView(props) {
    return (
        <div className="HeaderView">
            <h5 className="header__text-title">BIENVENIDOS A</h5>
            <h1 className="header__text-subtitle">arte culinario geovanita</h1>
        </div>
    );
}

export default HeaderView;