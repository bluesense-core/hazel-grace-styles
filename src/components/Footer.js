import React from 'react';
import Logo from '../img/logo.png';
import { Row, Col, Nav, Container, Image } from 'react-bootstrap';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import './footer.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import sizeGuide from '../files/HazelGrace Size Guide.pdf';

function Footer() {
    return (
        <footer className=''>
            <Container fluid className='px-lg-5 pt-5 pb-4'>
                <Row className='align-items-end'>
                    <Col
                        lg={8}
                        className='justify-content-lg-start justify-content-center'>
                        <div className='d-flex justify-content-lg-start justify-content-center'>
                            <LazyLoadImage
                                className='d-lg-inline d-none footer-logo img-fluid mx-auto'
                                src={Logo}
                                effect='blur'
                                alt='HazelGrace Styles Logo'
                            />

                            <Image
                                className='d-lg-none d-inline-block footer-logo img-fluid mx-auto'
                                src={Logo}
                                alt='HazelGrace Styles Logo'
                            />
                        </div>

                        <Nav
                            id='footer-nav'
                            className='mt-4 text-center justify-content-lg-start justify-content-center'>
                            <Nav.Item className='pe-2'>
                                <Nav.Link className='ps-lg-0' href='/contact'>
                                    Contact
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='px-2'>
                                <Nav.Link
                                    href={sizeGuide}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Size Guide
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='px-2'>
                                <Nav.Link href='/terms'>
                                    Terms of Service, Delivery and Refund Policy
                                </Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item className='px-xl-2'>
                                <Nav.Link href='/'>Privacy policy</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                    </Col>
                    <Col lg={4}>
                        <div className='socials mt-lg-0 mt-3 mb-4 d-flex justify-content-lg-end justify-content-center'>
                            <a
                                className='me-3'
                                href='https://web.facebook.com/hazelgracestyles/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <BsFacebook />
                            </a>

                            <a
                                className='ms-3 me-lg-4'
                                href='https://www.instagram.com/hazelgracestyles/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <BsInstagram />
                            </a>

                            {/* <a
                                className='me-lg-3'
                                href='/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <BsTwitter />
                            </a> */}
                        </div>
                        <p className='text-lg-end text-center mb-2'>
                            © HazelGrace Styles 2023
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
