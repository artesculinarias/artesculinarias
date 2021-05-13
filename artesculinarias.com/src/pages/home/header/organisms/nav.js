import React from 'react';
import '../organisms/nav.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
    const hasnonavcollapse = props.hasnonavcollapse? "navi__hasnonavcollapse" : "";
    return (
        <div className="Navigation">
            <Navbar expand="md" className={props.pos || ("fixed-top")}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={hasnonavcollapse}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"ml-auto justify-content-end navi__fix-" + props.fix}>
                        <Nav.Link href="#" className={props.text || "text-reset"}>INICIO</Nav.Link>
                        <Nav.Link href="#contactbm" className={props.text || "text-reset"}>CONTACTO</Nav.Link>
                        <Nav.Link href="#bodybm" className={props.text || "text-reset"}>CLASES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;