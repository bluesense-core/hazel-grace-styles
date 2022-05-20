import React from 'react';
import CurrencyForm from '../components/CurrencyForm';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import SidebarMenu from '../components/SidebarMenu';

function Footer() {
    return (
        <footer className='d-flex flex-column pt-5 pb-3'>
            <Row className='pt-4 flex-wrap'>
                <Col sm className='ps-4 ms-1 pb-md-0 pb-5'>
                    <h3 className='follow text-uppercase'>
                        follow @hazelgracestyles
                    </h3>
                    <div
                        id='footer-socials'
                        className='pt-lg-4 pt-2  text-decoration-none w-100'>
                        <a href='#' className='pe-5'>
                            <FaFacebookF />
                        </a>
                        <a href='#' className='pe-5'>
                            <BsTwitter />
                        </a>
                        <a
                            className='pe-5'
                            href='https://www.instagram.com/hazelgracestyles/'>
                            <BsInstagram />
                        </a>
                        <a href='#' className=''>
                            <FaPinterestP />
                        </a>
                    </div>
                </Col>
                <Col sm className=''>
                    <h3 className='footer-info ps-3'>INFO</h3>
                    <SidebarMenu />
                </Col>
                <Col sm className='pe-5 ps-md-0 ps-4'>
                    <h3 className='updated'>STAY UPDATED!</h3>
                    <p className='pe-5 pt-4'>
                        Subscribe to receive updates about A.I events, product
                        launches and new collections
                    </p>
                    <Form>
                        <Form.Group className='mb-3 pt-2'>
                            <Form.Control
                                type='email'
                                className='rounded-0 subscribe py-2'
                                placeholder='Enter your email address'
                                required
                            />
                        </Form.Group>

                        <Button
                            type='submit'
                            className='subscribe-btn py-3 px-3 mt-3 rounded-0 text-white text-uppercase'>
                            Subscribe
                        </Button>
                    </Form>
                </Col>
            </Row>

            <div className='d-flex flex-column align-items-md-start align-items-center py-5'>
                <CurrencyForm id='footer-currency' className='text-center' />
                <div className='ps-3'>
                    <a
                        href='#'
                        className='text-uppercase copyright text-decoration-none'>
                        © Hazel Grace Styles
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
