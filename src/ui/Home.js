import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import pink from '../img/home-img/pink.png';
import brown from '../img/home-img/brown.png';
import cream from '../img/home-img/cream.png';
import orange from '../img/home-img/orange.png';
import spotlight from '../img/home-img/spotlight.png';
import about1 from '../img/home-img/who.png';
import about2 from '../img/home-img/we.png';
import { FaAngleDoubleDown, FaAngleDoubleRight } from 'react-icons/fa';
import '../components/home/home-hero.css';
import '../components/home/home-naledi.css';
import '../components/home/home-about.css';
import { NavHashLink } from 'react-router-hash-link';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import emailjs from '@emailjs/browser';

function Home() {
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                'service_hd6w2lk',
                'template_6b6tzjx',
                formRef.current,
                'NadKuQM6677lL9__h'
            )

            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <main>
            <section id='home'>
                <div className='home-hero text-center text-white'>
                    <div className='text'>
                        <h1 className='display-2'>Genesis Collection</h1>
                        <h2 className='display-6'>Hazel grace styles</h2>
                    </div>

                    <NavHashLink
                        to='/#home-naledi'
                        className='d-sm-inline d-none'>
                        Explore <FaAngleDoubleDown />{' '}
                    </NavHashLink>
                </div>

                <Container id='home-naledi' className='pb-5 px-3 text-center'>
                    <h2 className='display-5'>
                        Naledi <br />{' '}
                        <span className='display-6'>Collection</span>
                    </h2>

                    <Row className='masonry d-lg-flex d-none gy-4 align-items-center'>
                        <Col lg={4}>
                            <LazyLoadImage
                                effect='blur'
                                src={pink}
                                className='naledi-img img-fluid'
                            />
                            <LazyLoadImage
                                effect='blur'
                                src={brown}
                                className='naledi-img img-fluid down'
                            />
                        </Col>

                        <Col lg={4} className=''>
                            <LazyLoadImage
                                effect='blur'
                                src={spotlight}
                                className='naledi-img img-fluid'
                            />
                            <Button href='/naledi' as='a' className='shop-btn'>
                                Shop Now <FaAngleDoubleRight />{' '}
                            </Button>
                        </Col>

                        <Col lg={4}>
                            <LazyLoadImage
                                effect='blur'
                                src={orange}
                                className='naledi-img img-fluid'
                            />

                            <LazyLoadImage
                                effect='blur'
                                src={cream}
                                className='naledi-img img-fluid down'
                            />
                        </Col>
                    </Row>

                    <Masonry
                        breakpointCols={2}
                        className='masonry row gy-4 d-lg-none d-flex'
                        columnClassName='my-masonry-grid_column'>
                        <div>
                            <LazyLoadImage
                                effect='blur'
                                src={pink}
                                className='naledi-img img-fluid'
                            />
                            <LazyLoadImage
                                effect='blur'
                                src={brown}
                                className='naledi-img img-fluid down'
                            />

                            <LazyLoadImage
                                effect='blur'
                                src={orange}
                                className='naledi-img img-fluid down'
                            />
                        </div>

                        <div className=''>
                            <LazyLoadImage
                                effect='blur'
                                src={spotlight}
                                className='naledi-img img-fluid'
                            />

                            <LazyLoadImage
                                effect='blur'
                                src={cream}
                                className='naledi-img img-fluid down'
                            />

                            <Button href='/naledi' as='a' className='shop-btn'>
                                Shop Now <FaAngleDoubleRight />{' '}
                            </Button>
                        </div>
                    </Masonry>
                </Container>

                <div className='home-about'>
                    <Container className='ps-4 pe-lg-5 pe-4'>
                        <Row className='align-items-center gx-5 gy-5'>
                            <Col lg={6} className='text-center'>
                                <LazyLoadImage
                                    effect='blur'
                                    src={about1}
                                    className='img-fluid'
                                />
                                <LazyLoadImage
                                    effect='blur'
                                    src={about2}
                                    className='mt-5 about-2 d-lg-inline d-none img-fluid'
                                />
                            </Col>
                            <Col lg={6} className='ms-auto pe-lg-5'>
                                <h2 className='h2 mb-3'>Who We Are</h2>
                                <p className='mb-4'>
                                    We are a contemporary African luxury fashion
                                    and lifestyle brand found in Nigeria! We
                                    create high fashion pieces for special
                                    occasions and unique pieces for every
                                    client.{' '}
                                </p>
                                <p>
                                    With Hazelgrace, every day is special and
                                    every consumer deserves a special design to
                                    suit their unique personality. Be sure to
                                    stand out in our pieces as our pieces adds
                                    the most important style to your look;
                                    CONFIDENCE!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='newsletter'>
                    <Container className='text-center px-4'>
                        <h2 className='display-6'>Subscribe</h2>
                        <p className='mt-3'>
                            Sign up with your email address to receive news and
                            updates.
                        </p>

                        <Form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='d-flex mt-3 justify-content-between align-items-center'>
                            <Form.Control
                                className='d-inline'
                                type='email'
                                placeholder='Email'
                                required
                            />
                            <Button className='d-inline'>Sign Up</Button>
                        </Form>
                    </Container>
                </div>
            </section>
        </main>
    );
}

export default Home;
