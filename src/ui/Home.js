import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import pink from '../img/home-img/top-left.webp';
import brown from '../img/home-img/bottom-right.webp';
import cream from '../img/home-img/bottom-left.webp';
import orange from '../img/home-img/top-right.webp';
import spotlight from '../img/home-img/center.webp';
import about1 from '../img/home-img/who.png';
import about2 from '../img/home-img/we.png';
import { FaAngleDoubleDown, FaAngleDoubleRight } from 'react-icons/fa';
import '../components/home/home-hero.css';
import '../components/home/home-collection.css';
import '../components/home/home-about.css';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollPopup from '../components/ScrollPopup';
import { Link } from 'react-router-dom';

function Home() {
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                'service_hd6w2lk',
                'template_00yb4e5',
                formRef.current,
                'tg7ERiwud9xjrmGpl'
            )

            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        formRef.current.reset();
    };

    return (
        <>
            <Header />
            <main>
                <section id='home'>
                    <div className='home-hero text-center text-white'>
                        <div className='text'>
                            <h1 className='display-2'>HazelGrace styles</h1>
                        </div>

                        <Link to='/resurgence' className='d-sm-inline d-none'>
                            Explore <FaAngleDoubleDown />{' '}
                        </Link>
                    </div>

                    <Container
                        id='home-collection'
                        className='pb-5 px-3 text-center'>
                        <h2 className='display-5'>
                            Latest <br />{' '}
                            <span className='display-6'>Collection</span>
                        </h2>

                        <Row className='masonry d-lg-flex d-none gy-4 align-items-center'>
                            <Col lg={4}>
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={pink}
                                    className='naledi-img img-fluid'
                                />
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={brown}
                                    className='naledi-img img-fluid down'
                                />
                            </Col>

                            <Col lg={4} className=''>
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={spotlight}
                                    className='naledi-img img-fluid'
                                />
                                <Button
                                    href='/resurgence'
                                    as='a'
                                    className='shop-btn'>
                                    Shop Now <FaAngleDoubleRight />{' '}
                                </Button>
                            </Col>

                            <Col lg={4}>
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={orange}
                                    className='naledi-img img-fluid'
                                />

                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={cream}
                                    className='naledi-img img-fluid down'
                                />
                            </Col>
                        </Row>

                        <Masonry
                            breakpointCols={{ 991: 2, 575: 1 }}
                            className='masonry row gy-4 d-lg-none d-flex'
                            columnClassName='my-masonry-grid_column'>
                            <div className='mb-sm-0 mb-5'>
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={pink}
                                    className='naledi-img img-fluid'
                                />
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={brown}
                                    className='naledi-img img-fluid down'
                                />

                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={orange}
                                    className='naledi-img img-fluid down'
                                />
                            </div>

                            <div>
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={spotlight}
                                    className='naledi-img img-fluid'
                                />

                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    src={cream}
                                    className='mb-sm-0 mb-5 naledi-img img-fluid down'
                                />

                                <Button
                                    href='/resurgence'
                                    as='a'
                                    className='shop-btn'>
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
                                        delayTime='150'
                                        effect='blur'
                                        visibleByDefault={true}
                                        src={about1}
                                        className='img-fluid'
                                    />
                                    <LazyLoadImage
                                        delayTime='150'
                                        effect='blur'
                                        visibleByDefault={true}
                                        src={about2}
                                        className='mt-5 about-2 d-lg-inline d-none img-fluid'
                                    />
                                </Col>
                                <Col lg={6} className='ms-auto pe-lg-5'>
                                    <h2 className='h2 mb-3'>The Brand</h2>
                                    <p className='mb-4'>
                                        {' '}
                                        HazelGrace Styles is defined by
                                        unconventional styles and individuality.
                                        We have since launched HazelBee,
                                        HazelBabies, followed by HazelLifestyle.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className='newsletter pt-5'>
                        <Container className='text-center px-4 pt-5'>
                            <h2 className='display-6'>Subscribe</h2>
                            <p className='mt-3'>
                                Sign up with your email address to receive news
                                and updates.
                            </p>

                            <Form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className='d-flex mt-3 justify-content-between align-items-center'>
                                <Form.Control
                                    className='d-inline'
                                    name='from_email'
                                    type='email'
                                    placeholder='Email'
                                    required
                                />
                                <Button type='submit' className='d-inline'>
                                    Sign Up
                                </Button>
                            </Form>
                        </Container>
                    </div>
                </section>
            </main>
            {/* <CookieConsent
                location='bottom'
                buttonText='Agree'
                cookieName='myAwesomeCookieName2'
                style={{ background: '#ffffff', color: '#191919' }}
                buttonStyle={{
                    background: '#d5b066',
                    color: '#191919',
                    fontSize: '16px',
                    fontWeight: '700',
                }}
                expires={150}>
                This website uses cookies to enhance the user experience.{' '}
            </CookieConsent> */}
            <Footer />
            <ScrollPopup />
        </>
    );
}

export default Home;
