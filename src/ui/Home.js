import React from 'react';

import { Carousel, Image } from 'react-bootstrap';
import { carouselImages } from '../components/Images.js';
import aboutPic from '../img/about-4.webp';
import aboutPic2 from '../img/Wcollect.webp';

import { FaTruck, FaHeadset, FaUndo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

function Home() {
    return (
        <div>
            <section id='home'>
                <Carousel fade variant='dark' pause='hover'>
                    {carouselImages.map((e) => (
                        <Carousel.Item
                            // interval={5000}
                            key={e.id}
                            id={e.select}
                            className='h-25'>
                            <img
                                className='d-block w-100 carousel-img'
                                fluid
                                src={e.src}
                                alt='First slide'
                            />
                            <Carousel.Caption className='d-flex h-100 text-white justify-content-center align-items-center'>
                                <h3 className='mt-5'>{e.caption}</h3>
                                <Link to='/shop'>
                                    <button className='btn text-white mt-5 py-2 px-3 border-none'>
                                        SHOP NOW
                                    </button>
                                </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className='about-us d-flex justify-content-between flex-md-nowrap flex-wrap pt-md-5 pb-md-0 py-5 ps-md-5 pe-md-0 p px-3'>
                    <div className='about-text-div w-100 m-auto text-md-start text-center  ps-md-2 pe-md-5 px-1'>
                        <h3 className='py-lg-2 text-uppercase py-0 text-md-start text-center'>
                            About Us
                        </h3>
                        <p className='pe-lg-3 pe-0 lh-lg'>
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
                            className='about-img w-100 justify-self-end'
                        />
                    </div>
                </div>

                <div className='services bg-light d-flex justify-content-center justify-content-md-between  align-items-center pt-5 pb-4 px-xl-5 ps-md-4 pe-md-2 px-2 flex-md-nowrap flex-wrap'>
                    <div className='d-flex justify-content-center'>
                        <FaTruck className='service-icon me-2 mt-2' />
                        <div className='ms-2 lh-sm text-wrap'>
                            <h3>PAYMENT & DELIVERY</h3>
                            <p>Free Shipping for orders over N1000</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-md-0 mt-4'>
                        <FaUndo className='service-icon me-2 mt-2' />
                        <div className='ms-2 lh-sm text-wrap'>
                            <h3>RETURN & REFUND</h3>
                            <p>Free 100% money back guarantee</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-md-0 mt-4'>
                        <FaHeadset className='service-icon me-2 mt-2' />
                        <div className='ms-2 lh-sm text-wrap'>
                            <h3>QUALITY SUPPORT</h3>
                            <p>Always online feedback 24/7</p>
                        </div>
                    </div>
                </div>

                <div className='collection d-flex justify-content-center'>
                    <div className='collection-div w-100 h-100'></div>

                    <div className='about-text-div w-100 d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='py-2 text-center lh-sm text-white'>
                            Explore our new collection
                        </h3>
                        <Link to='/shop' className=''>
                            <button className='btn text-white py-2 px-3 border-none'>
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
