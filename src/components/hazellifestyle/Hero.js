import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './hero.css';

const Hero = () => {
    return (
        <section id='lifestyle-hero'>
            <Container fluid className='h-100'>
                <Row className='justify-content-center h-100 align-items-center'>
                    <Col className=''>
                        <h1 className='mb-xl-5 mb-sm-4 mb-0 display-3  text-center'>
                            Elevate your space with unique interior details and
                            enjoy premium intimate experiences with
                            HazelLifestyle.
                        </h1>

                        <Button
                            href='#lifestyle-about'
                            className='px-4 py-3 mx-auto d-md-block d-none'>
                            Explore Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
