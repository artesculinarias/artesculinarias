import React from 'react'
import '../contact/contact.css'

function Contact(props) {
    return (
        <div className="Contact" id="contactbm">
          {/*<div className="test1">Hellow</div>
          <div className="test2">Hellow X2</div>*/}
          <div className="contact__text-container  d-flex align-items-center flex-">
            <div className="d-flex flex-column">
              <h1 className="contact__text-main">
                Nuestros medios de contacto:
              </h1>
              <div className="contact__text-list-box">
                <h3  className="contact__text-subtitle p-0">
                  PROFESORA:
                </h3>
                <h4 className="contact__text-main p-0">
                  Geovanna Calderón flores
                </h4>
                <h3  className="contact__text-subtitle p-0">
                  TÉLEFONO:
                </h3>
                <h4 className="contact__text-main p-0">
                  +506 8365 2871
                </h4>
                <h3  className="contact__text-subtitle p-0">
                  LUGAR:
                </h3>
                <h4 className="contact__text-main p-0">
                  POCOCí, GUAPILES
                </h4>
              </div>
            </div>
          </div>
          <div className="contact__image-container"></div>
        </div>
    );
  }

export default Contact