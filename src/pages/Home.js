import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Typewriter } from 'react-simple-typewriter'
import { Container, Row, Col } from 'react-bootstrap';


export default function Home () {
    
    return (
        <div className='bg-light h-100'>
            <Header/>
            <Container className='container-fluid min-vh-100 text-center pt-5 mt-5'>
                        <h1> 
                            <span >
                                <Typewriter
                                words={[' My name is Jonathan. I am a full-stack web developer!']}
                                cursor
                                cursorStyle='_'
                                typeSpeed={125}
                                deleteSpeed={1000000000}
                                delaySpeed={1500}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                                />
                            </span>
                        </h1>
            </Container>
            <Footer/>
        </div>
    )
}