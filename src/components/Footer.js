import React from 'react';
import Logo from '../img/logo.png';
import { Row, Col, Nav, Container, Image } from 'react-bootstrap';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import './footer.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                                alt='Hazel Grace Styles Logo'
                            />

                            <Image
                                className='d-lg-none d-inline-block footer-logo img-fluid mx-auto'
                                src={Logo}
                                alt='Hazel Grace Styles Logo'
                            />
                        </div>

                        <Nav
                            id='footer-nav'
                            className='mt-4 justify-content-lg-start justify-content-center'>
                            <Nav.Item className='pe-2'>
                                <Nav.Link className='ps-lg-0' href='/contact'>
                                    Contact
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='px-2'>
                                <Nav.Link href='/'>Size Guide</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='px-2'>
                                <Nav.Link href='/'>Terms of service</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='px-xl-2'>
                                <Nav.Link href='/y'>Privacy policy</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={4}>
                        <div className='socials mt-lg-0 mt-3 mb-4 d-flex justify-content-lg-end justify-content-center'>
                            <a
                                className='me-lg-4'
                                href='/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <BsFacebook />
                            </a>

                            <a
                                className='me-lg-4 mx-lg-0 mx-4'
                                href='https://www.instagram.com/hazelgracestyles/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <BsInstagram />
                            </a>

                            <a
                                className='me-lg-3'
                                href='/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <BsTwitter />
                            </a>
                        </div>
                        <p className='text-lg-end text-center mb-2'>
                            © Hazel Grace Styles 2022
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
