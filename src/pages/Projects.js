import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../data/projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

export default function Projects () {
    
    return (
        <div className='bg-light'>
            <Header/>
            <div className='container-fluid d-flex justify-content-center gap-3 flex-wrap p-3'>
                {projects.map(project => {
                    return (
                        <Card className='p-3 bg-white' border='dark' style={{ width: '18rem' }} onMouseOver={(e) => e.target.style.cursor='pointer'} onClick={() => window.location.replace(project.link)}>
                            <Card.Img className='border' variant="top" src={project.image}/>
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                {project.subtitle}
                                </Card.Text>
                                <Button variant="dark" onClick={() => window.location.replace(project.github_link)}><FontAwesomeIcon icon={faLaptopCode} color="#fff" /> Repo Link</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}