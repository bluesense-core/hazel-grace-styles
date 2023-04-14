import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './hero.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import hero from '../../img/hazelbee-img/hero.png';

const Hero = () => {
    return (
        <section id='bee-hero'>
            <Container
                fluid
                className='h-100 ps-lg-5 ps-md-4 ps-3 pt-lg-0 pt-5 pb-5'>
                <Row className='h-100 justify-content-center gy-lg-0 gy-5'>
                    <Col
                        xs={{ order: 'last' }}
                        lg={{ span: 6, order: 'first' }}
                        className='text-lg-start text-center my-lg-auto py-xl-0 py-lg-5 ps-lg-0 pe-lg-4'>
                        <h1 className='display-3 mb-0'>
                            Affordable Bespoke Clothing for Every Occasion
                        </h1>
                        <p className='my-4 pe-lg-5 fs-5 '>
                            Welcome to Hazel Bee, your destination for
                            affordable bespoke ready-to-wear clothing. We
                            understand that looking good shouldn't come at a
                            high cost, which is why we offer our clients quality
                            clothing at prices that won't break the bank.
                        </p>
                        <Button
                            href='/naledi'
                            className='mt-2 px-md-5 px-4 py-3 '>
                            Shop Now <FaAngleDoubleDown className='ms-2 mb-1' />
                        </Button>
                    </Col>

                    <Col
                        xs={{ order: 'first' }}
                        lg={{ span: 6, order: 'last' }}
                        className='px-0 ms-lg-auto text-center'>
                        <Image src={hero} alt='Grace Dress' fluid />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
