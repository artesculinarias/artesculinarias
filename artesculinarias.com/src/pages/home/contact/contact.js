import React from 'react'
import '../contact/contact.css'
import TextField from '../../../components/text.js'

function Contact(props) {
    return (
        <div className="Contact" id="contactbm">
          {/*<div className="test1">Hellow</div>
          <div className="test2">Hellow X2</div>*/}
          <div className="contact__text-container  d-flex align-items-center flex-">
            <div className="d-flex flex-column">
              <h1 className="contact__text-main">
                <TextField textType="text-main" content="Nuestros medio de contacto:"></TextField>
              </h1>
              <div className="contact__text-list-box">
                <h3 className="contact__text-subtitle">
                  <TextField textType="text-subtitle" content="PROFESORA:"></TextField>
                </h3>
                <h4 className="contact__text-main p-0">
                  <TextField textType="text-main" content="Geovanna Calderón flores"></TextField>
                </h4>
                <h3  className="contact__text-subtitle">
                  <TextField textType="text-subtitle" content="TÉLEFONO:"></TextField> 
                </h3>
                <h4 className="contact__text-main p-0">
                  <TextField textType="text-main" content="+506 8365 2871"></TextField> 
                </h4>
                <h3  className="contact__text-subtitle p-0">
                  <TextField textType="text-subtitle" content="LUGAR"></TextField>
                </h3>
                <h4 className="contact__text-main p-0">
                  <TextField textType="text-main" content="+506 8365 2871"></TextField> 
                  Pococí, Guapiles
                </h4>
              </div>
            </div>
          </div>
          <div className="contact__image-container"></div>
        </div>
    );
  }

export default Contact