import React from 'react';
import Footer from './Footer';
import { Carousel, Image } from 'react-bootstrap';
import { carouselImages } from '../components/Images.js';
import aboutPic from '../img/about-4.webp';
import aboutPic2 from '../img/Wcollect.webp';

import { FaTruck, FaHeadset, FaUndo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id='home'>
                <Carousel fade variant='dark'>
                    {carouselImages.map((e) => (
                        <Carousel.Item
                            // interval={5000}
                            key={e.id}
                            className='h-25'>
                            <img
                                className='d-block w-100 carousel-img'
                                fluid
                                src={e.src}
                                alt='First slide'
                            />
                            <Carousel.Caption className='d-flex h-100 text-white justify-content-center align-items-center'>
                                <h3>{e.caption}</h3> <button>Shop Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className='about-us d-flex justify-content-between py-5 px-5'>
                    <div className='about-text-div w-100 m-auto ps-2 pe-5'>
                        <h3 className='py-2'>About Us</h3>
                        <p className='pe-3 lh-lg'>
                            We are a contemporary African luxury fashion and
                            lifestyle brand found in Nigeria! We create high
                            fashion pieces for special occasions and unique
                            pieces for every client. With Hazelgrace, every day
                            is special and every consumer deserves a special
                            design to suit their unique personality. Be sure to
                            stand out in our pieces as our pieces adds the most
                            important style to your look; CONFIDENCE!
                        </p>
                    </div>
                    <div className='about-img-div w-100'>
                        <Image
                            src={aboutPic}
                            fluid
                            width='100%'
                            className='about-img justify-self-end'
                        />
                    </div>
                </div>

                <div className='d-flex justify-content-between py-3 px-5'>
                    <div className='d-flex justify-content-between'>
                        <FaTruck className='align-self-center' />
                        <div>
                            <h3>PAYMENT & DELIVERY</h3>
                            <p>Free Shipping for orders over N1000</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <FaUndo className='align-self-center' />
                        <div>
                            <h3>RETURN & REFUND</h3>
                            <p>Free 100% money back guarantee</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <FaHeadset className='align-self-center' />
                        <div>
                            <h3>QUALITY SUPPORT</h3>
                            <p>Always online feedback 24/7</p>
                        </div>
                    </div>
                </div>

                <div className='about-us d-flex justify-content-between pe-5'>
                    <div className='about-img-div w-100 h-100'>
                        {/* <Image
                            src={aboutPic2}
                            fluid
                            width='100%'
                            className='about-img2 justify-self-end'
                        /> */}
                    </div>

                    <div className='about-text-div w-100 m-auto ps-2 pe-5'>
                        <h3 className='py-2'>
                            Shop from our collection <Link to='shop'>NOW!</Link>
                        </h3>
                    </div>
                </div>

                <div className='about-us d-flex justify-content-between py-5 pe-5'>
                    <div className='about-text-div w-100 m-auto ps-2 pe-5'>
                        <h3 className='py-2'>#hazelgracestyles</h3>
                        <p className='pe-3 lh-lg'>
                            A brand that inspires confidence
                        </p>
                    </div>
                    <div className='about-img-div2 w-100'></div>
                </div>
                <Footer />
            </section>
        </div>
    );
};

export default Home;
