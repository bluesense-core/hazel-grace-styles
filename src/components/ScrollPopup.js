import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './popup.css';
const ScrollPopup = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                'service_hd6w2lk',
                'template_00yb4e5',
                formRef.current,
                'NadKuQM6677lL9__h'
            )

            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        formRef.current.reset();

        setFormSubmitted(true);
    };
    const [showModal, setShowModal] = useState(false);

    const shouldShowPopup = useRef(false);

    const handleExitIntent = (event) => {
        if (shouldShowPopup.current && event.clientY <= 20) {
            setShowModal(true);
        }
    };

    useEffect(() => {
        shouldShowPopup.current = true;

        return () => {
            shouldShowPopup.current = false;
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mouseout', handleExitIntent);

        return () => {
            document.removeEventListener('mouseout', handleExitIntent);
        };
    }, []);

    return (
        <>
            <Modal
                id='scroll-popup'
                backdrop='static'
                show={showModal && !formSubmitted}
                onHide={() => setShowModal(false)}>
                <Modal.Header className='border-0 ' closeButton />

                <Modal.Body className='pb-4 text-center'>
                    <Modal.Title className='display-6 mb-3  text-center'>
                        Get Access to Exclusive Sales and Discounts!
                    </Modal.Title>
                    <p className='text-center'>
                        Enter your name and email below to receive exclusive
                        sales and discount offers.
                    </p>
                    <Form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mx-sm-5'>
                        <Form.Group controlId='formBasicName' className='mb-4'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className='border-0 rounded-0'
                                type='text'
                                placeholder='Enter your name'
                                required
                                name='from_name'
                            />
                        </Form.Group>
                        <Form.Group controlId='formBasicEmail' className='mb-4'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                className='border-0 rounded-0'
                                type='email'
                                placeholder='Enter your email'
                                required
                                name='from_email'
                            />
                        </Form.Group>
                        <Button
                            className='bg-black text-white border-0 rounded-0 px-5 py-3'
                            variant='primary'
                            type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ScrollPopup;
