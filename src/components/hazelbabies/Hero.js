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
                            Luxury Meets Comfort: Discover Unique Couture
                            Kidswear from Hazel Babies
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
