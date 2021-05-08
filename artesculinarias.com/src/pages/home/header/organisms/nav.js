import React from 'react';
import '../organisms/nav.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {   
    return (
        <div className="Navigation">
            <Navbar bg="transparent" expand="md" className={props.pos || "fixed-top"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"ml-auto justify-content-end navi__fix-" + props.fix}>
                        <Nav.Link href="#home" className={props.text || "text-reset"}>INICIO</Nav.Link>
                        <Nav.Link href="#link" className={props.text || "text-reset"}>CONTACTO</Nav.Link>
                        <Nav.Link href="#link" className={props.text || "text-reset"}>CLASES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;