import React from 'react';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';
import {
    BsEnvelopeFill,
    BsGeoAltFill,
    BsInstagram,
    BsTelephoneFill,
} from 'react-icons/bs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './contact.css';

function ContactUs() {
    return (
        <>
            <Header />
            <main>
                <section id='contact-us' className='pt-4 pb-5'>
                    <Container className='px-lg-5'>
                        <h1 className='text-center pt-5 mb-3 '>Contact Us</h1>
                        <p className='text-center'>
                            For virtual consultations and to order from our
                            Hazel Bee, Hazel Babies, and Hazel Lifestyle stores,
                            please don't hesitate to reach out to us. You can
                            send us a direct message on our Instagram pages
                            below or contact us directly via phone at{' '}
                            <a href='tel:+2349056043956'>+2349056043956</a>. Our
                            team is always happy to help you bring your vision
                            to life!
                        </p>
                        <Row className='py-md-5 pb-5 gy-5'>
                            <Col lg={6} xl={4}>
                                <div className='open-days text-md-start text-center'>
                                    <h2 className='pb-3 text-decoration-underline'>
                                        We Open At:
                                    </h2>
                                    <p className='mb-1'>
                                        Monday, Tuesday, Thursday and Friday
                                    </p>
                                    <p className='lh-sm mb-4'>
                                        9:30am - 6pm WAT
                                    </p>
                                    <p className='mb-1'>Wednesday</p>
                                    <p className='lh-sm mb-4'>11am - 6pm WAT</p>
                                    <p className='mb-1'>Saturday</p>
                                    <p className='lh-sm mb-4'>
                                        10am - 4:30pm WAT
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} xl={8}>
                                <div className='contact text-md-end text-center'>
                                    <h2 className='pb-3 text-decoration-underline'>
                                        Reach Us On:
                                    </h2>

                                    <div className='mb-3'>
                                        <BsTelephoneFill className='icon mb-1' />
                                        <span className='ms-3'>
                                            <a
                                                href='tel:+2349056043956'
                                                className='text-decoration-none'>
                                                +2349056043956
                                            </a>
                                        </span>
                                    </div>

                                    <div className='mb-3'>
                                        <BsEnvelopeFill className='icon mb-1' />
                                        <span className='ms-3'>
                                            <a
                                                href='mailto:infohazelgrace@gmail.com'
                                                className='text-decoration-none'>
                                                infohazelgrace@gmail.com
                                            </a>
                                        </span>
                                    </div>

                                    <div className='mb-4'>
                                        <BsGeoAltFill className='icon mb-1' />
                                        <span className='ms-3'>
                                            12, Omerelu street, GRA Phase I,
                                            Port-Harcourt.
                                        </span>
                                    </div>

                                    <div className='mb-3'>
                                        <span className='ms-3'>
                                            <a
                                                href='https://www.instagram.com/hazelbe.e/'
                                                target='_blank'
                                                className='fw-bolder ig text-decoration-none'
                                                rel='noopener noreferrer'>
                                                @hazelbe.e
                                            </a>{' '}
                                            - Hazel Bee
                                        </span>
                                    </div>

                                    <div className='mb-3'>
                                        <span className='ms-3'>
                                            <a
                                                href='https://www.instagram.com/hazel_babies/'
                                                target='_blank'
                                                className='fw-bolder ig text-decoration-none'
                                                rel='noopener noreferrer'>
                                                @hazel_babies
                                            </a>{' '}
                                            - Hazel Babies
                                        </span>
                                    </div>

                                    <div className='mb-3'>
                                        <span className='ms-3'>
                                            <a
                                                href='https://www.instagram.com/hazel_lifestyle/'
                                                target='_blank'
                                                className='fw-bolder ig text-decoration-none'
                                                rel='noopener noreferrer'>
                                                @hazel_lifestyle
                                            </a>{' '}
                                            - Hazel Lifestyle
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div className='my-5 contact-form'>
                            <h2 className='text-center'>Send Us Message</h2>
                            <Form className='mt-4 pb-5 d-block mx-auto'>
                                <Row>
                                    <Col lg={6} className='mt-4 mb-2'>
                                        <Form.Control
                                            placeholder='Your name'
                                            required
                                            className=' message '
                                        />
                                    </Col>
                                    <Col lg={6} className='mt-4 mb-2'>
                                        <Form.Control
                                            placeholder='Your email'
                                            type='email'
                                            required
                                            className=' message'
                                        />
                                    </Col>

                                    <Form.Group className='mt-4 mb-2'>
                                        <Form.Control
                                            className=' message '
                                            placeholder='Your phone (optional)'
                                        />
                                    </Form.Group>

                                    <Form.Group className='mt-4 mb-2'>
                                        <Form.Control
                                            as='textarea'
                                            placeholder='Your message'
                                            rows={5}
                                            required
                                            className=' message'
                                        />
                                    </Form.Group>
                                    <div className='text-center mt-5'>
                                        <Button className='message-btn py-3 px-5  text-uppercase'>
                                            Send
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ContactUs;
