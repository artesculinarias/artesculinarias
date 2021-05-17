import React from 'react'
import '../body/body.css'
import TextField from '../../../components/text.js'

function Body(props) {
    return (
        <div className="Body" id="bodybm">
          {/*<div className="test1">Hellow</div>
          <div className="test2">Hellow X2</div>*/}
          <div className="body__text-container  d-flex align-items-center flex-">
            <div className="d-flex flex-column">
              <h1 className="body__text-main">
                ¡Ofrecemos
                las mejores <span className="body__text-highlight"><TextField textType= "text-highlight" content="clases de gastronomía" /></span> en todo el
                <span className="body__text-highlight"> <TextField textType= "text-highlight" content="pais!" /></span>
              </h1>
              <a href="#contactbm" className="p-2 body__link-text">Aprende más! <h3>&#62;</h3></a>
            </div>
          </div>
          <div className="body__image-container"></div>
        </div>
    );
  }

export default Body