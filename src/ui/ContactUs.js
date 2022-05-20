import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Footer from './Footer';
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import Header from './Header';

function ContactUs() {
    return (
        <div>
            <Header />
            <section id='contact-us' className='pt-4 pb-5'>
                <div className='d-flex flex-column col col-lg-6 col-md-9 col-12 mx-auto'>
                    <div className='d-flex flex-column  text-uppercase'>
                        <h1 className='align-self-center pt-3 pb-5'>
                            Contact Us
                        </h1>
                        <div className='open-days align-self-start'>
                            <h2 className='pb-3'>We Open At:</h2>
                            <p>Monday, Tuesday, Thursday and Friday</p>
                            <p className='lh-sm pb-3'>9:30am - 6pm WAT</p>
                            <p>Wednesday</p>
                            <p className='lh-sm pb-3'>11am - 6pm WAT</p>
                            <p>Saturday</p>
                            <p className='lh-sm pb-3'>10am - 4:30pm WAT</p>
                        </div>
                        <div className='contact align-self-end text-end'>
                            <div className='pb-3'>
                                <BsTelephoneFill />
                                <span className='ms-3'>
                                    <a
                                        href='tel:+2349056043956'
                                        className='text-decoration-none'>
                                        +2349056043956
                                    </a>
                                </span>
                            </div>

                            <div className='pb-3'>
                                <BsEnvelopeFill />
                                <span className='ms-3'>
                                    <a
                                        href='mailto:infohazelgrace@gmail.com'
                                        className='text-decoration-none'>
                                        infohazelgrace@gmail.com
                                    </a>
                                </span>
                            </div>

                            <div className='pb-3'>
                                <BsGeoAltFill />
                                <span className='ms-3'>
                                    12, Omerelu street, GRA Phase I,
                                    Port-Harcourt.
                                </span>
                            </div>
                        </div>
                    </div>
                    <Form className='mt-4 pb-5'>
                        <Row>
                            <Col className='mt-4'>
                                <Form.Control
                                    placeholder='Your name'
                                    required
                                    className='rounded-0 message ps-3 py-2'
                                />
                            </Col>
                            <Col className='mt-4'>
                                <Form.Control
                                    placeholder='Your email'
                                    type='email'
                                    required
                                    className='rounded-0 message ps-3 py-2'
                                />
                            </Col>

                            <Form.Group className='mt-4'>
                                <Form.Control
                                    className='rounded-0 message ps-3 py-2'
                                    placeholder='Your phone (optional)'
                                />
                            </Form.Group>

                            <Form.Group className='mt-4'>
                                <Form.Control
                                    as='textarea'
                                    placeholder='Your message'
                                    rows={5}
                                    required
                                    className='rounded-0 message ps-3 pt-2'
                                />
                            </Form.Group>
                            <div className='d-grid gap-2 mt-4'>
                                <Button className='message-btn py-3 rounded-0 text-uppercase'>
                                    send message
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactUs;
