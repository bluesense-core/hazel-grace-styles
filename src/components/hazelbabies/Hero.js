import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './hero.css';

const Hero = () => {
    return (
        <section id='babies-hero'>
            <Container fluid className='h-100'>
                <Row className='justify-content-center h-100 align-items-center'>
                    <Col md={10} className=''>
                        <h1 className='mb-0 display-4  text-center text-capitalize'>
                            Creating magical moments for every girl.
                            {/* Resurgence Kidswear for Life's Special Occasions
                            with HazelBabies */}
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
