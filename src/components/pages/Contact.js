import React, { useState, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Form, Button} from 'react-bootstrap';
import emailjs from '@emailjs/browser';


export default function About () {
    const form = useRef();
    
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_v2mr3o3', 'template_bec3gg8', form.current, 'tpLuuWR0rYJb60VJQ')
        .then((result) => {
            console.log(result.text);
            alert('Message successfully sent!')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <> 
            <Header/>
            <Form ref={form} className='mx-auto w-50 p-4 m-5 border rounded' onSubmit={sendEmail} >
                <h3 className='mb-5'>Send me a line!</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='reply_to' type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name='message' type='text' placeholder="Enter message"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Footer/>
        </>
    )
}