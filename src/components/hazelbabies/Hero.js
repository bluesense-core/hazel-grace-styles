import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './hero.css';

const Hero = () => {
    return (
        <section id='babies-hero'>
            <Container fluid className='h-100'>
                <Row className='justify-content-lg-end h-100 align-items-md-center align-items-end'>
                    <Col lg={6} className='blue-box py-md-5 px-md-5 p-3'>
                        <h1 className='mb-0 display-4 text-lg-start text-center'>
                            <span className='text-pink'>
                                Make Every Moment Magical:
                            </span>{' '}
                            Bespoke Kidswear for Life's Special Occasions with
                            Hazel Babies
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
