import React from 'react';
import {Navbar, Nav, Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faUser,
    faEnvelope,
    faLaptopCode,
    faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer (){
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" style={{position: 'sticky', bottom: 0, zIndex: 1, borderRadius: 2}}>
            <Nav className='me-auto ms-auto'>
                <Stack className='text-center'>
                    <Stack direction="horizontal">
                        <Nav.Link href="mailto:jonathan.warkentine@gmail.com"><FontAwesomeIcon icon={faEnvelope} color="#fff" /></Nav.Link>
                        <Nav.Link href="https://github.com/jonathan-warkentine"><FontAwesomeIcon icon={faGithub} color="#fff" /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/jonathan-warkentine-b72bb984/"><FontAwesomeIcon icon={faLinkedin} color="#fff" /></Nav.Link>
                        <Nav.Link href="https://github.com/jonathan-warkentine/react-portfolio"><FontAwesomeIcon icon={faLaptopCode} color="#fff" /></Nav.Link>
                    </Stack>
                    <Nav.Link className='text-muted p-0 m-0'> © {new Date().getFullYear()}</Nav.Link>
                </Stack>
            </Nav>
        </Navbar>
    )
};