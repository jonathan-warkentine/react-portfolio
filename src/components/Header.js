import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function Header (){
    return (
        <Navbar bg="dark" variant="dark" style={{position: 'sticky', top: 0, zIndex: 1, borderRadius: 2}}>
            <Container>
                <Navbar.Brand href="/">J.P. Warkentine</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/react-portfolio/#/about">About Me</Nav.Link>
                    <Nav.Link href='/react-portfolio/#/projects'>Projects</Nav.Link>
                    <Nav.Link href="https://warkentine.info/assets/pdfs/Warkentine_Resume.pdf">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
