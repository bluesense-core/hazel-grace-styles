import React from 'react';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';
import { carouselImages } from '../components/Images.js';

const Home = () => {
    return (
        <div>
            <section id='home'>
                <Carousel>
                    {carouselImages.map((e) => (
                        <Carousel.Item key={e.id} className='h-50'>
                            <img
                                className='d-block w-100 carousel-img'
                                fluid
                                src={e.src}
                                alt='First slide'
                            />
                            <Carousel.Caption>
                                <h3>Welcome to a world of fashion!</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Footer />
            </section>
        </div>
    );
};

export default Home;
