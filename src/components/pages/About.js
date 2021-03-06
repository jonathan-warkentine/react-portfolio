import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Card, Container} from 'react-bootstrap';

import bckImg from '../../images/headshot.jpg'

export default function About () {
    
    return (
        <div style={{ backgroundImage:`url(${bckImg})`, backgroundRepeat:"no-repeat", backgroundPosition: 'left', backgroundSize: 'cover'  }}> 
            <Header/>
            <Container>
                <Card className='p-3 bg-white w-50 p-2 m-4' border='dark'>
                    <Card.Body>
                        <Card.Title>[ Bio: ]</Card.Title>
                        <div>
                            I'm Canadian-American, but I grew up in Central Asia.
                            I graduated from Emory University in Atlanta with a degree in English and Chemistry.
                            My hobbies include working on my truck, guitar, <a href="https://www.chess.com/member/strong-brew">chess</a>, and cooking.
                        </div>
                    </Card.Body>
                </Card>
                <Card className='p-3 bg-white w-50 p-2 m-4' border='dark'>
                    <Card.Body>
                        <Card.Title>[ Work Experience: ]</Card.Title>
                        <div>
                            In addition to full-stack web development certification from Georgia Tech, I have significant work experience in start-up operations.
                            I graduated from Emory University in Atlanta with a degree in English and Chemistry.
                            My hobbies include working on my truck, guitar, <a href="https://www.chess.com/member/strong-brew">chess</a>, and cooking.
                            My professional interests include:
                            <ul>
                                <li>Web Development (Front- and Back-end)</li>
                                <li>Operations</li>
                                <li>PeopleOps (HR)</li>
                                <li>Remote Work Readiness</li>
                                <li>Process and Onboarding Documentation</li>
                                <li>Operational Security</li>
                                <li>AP/AR Fiancial Streamlining</li>
                            </ul>                 
                        </div>
                    </Card.Body>
                </Card>
                <Card className='p-3 bg-white w-50 p-2 m-4' border='dark'>
                    <Card.Body >
                        <Card.Title>[ Skills: ]</Card.Title>
                        <div>
                            My techncial proficiencies include:
                            <ul>
                                <li>Client-side Web Development
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li> 
                                        <li>JQuery</li>
                                        <li>Bootstrap</li>
                                        <li>React</li>
                                        <li>Handlebars.js</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>Server-side Web Development
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express.js + REST APIs</li>
                                        <li>JavaScript</li> 
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>Sequelize SQL-Nodejs ORMs</li>
                                        <li>GraphQL</li>
                                        <li>React, Handlebars.js</li>
                                        <li>Webpack</li>
                                        <li>Progressive Web Applications</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>Microsoft Office/Gsuite:
                                    <ul>
                                        <li>Word/Google Docs</li>
                                        <li>Excel/Google Sheets</li>
                                        <li>Powerpoint/Google Slides</li>
                                        <li>Google Admin</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>Financial Operations:
                                    <ul>
                                        <li>AP/AR Management</li>
                                        <li>Payroll</li>
                                        <li>Banking + Crypto Asset Management </li>
                                        <li>Bookkeeping (QuickBooks)</li>
                                    </ul>
                                </li>
                                <br/>
                                <li>Coda/Notion/Clickup</li>
                                <li>HRIS Software: Gusto, JustWorks, etc</li>
                            </ul>              
                        </div>
                    </Card.Body>
                </Card>
            </Container>
            <Footer/>
        </div>
    )
}