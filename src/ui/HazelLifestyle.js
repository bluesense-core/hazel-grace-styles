import React from 'react';
import Collection from '../components/hazellifestyle/Collection';
import Follow from '../components/hazellifestyle/Follow';
import Footer from '../components/hazellifestyle/Footer';
import Header from '../components/hazellifestyle/Header';
import Hero from '../components/hazellifestyle/Hero';
import './hazellifestyle.css';

const HazelLifestyle = () => {
    return (
        <div className='hazel-lifestyle'>
            <Header />
            <main>
                <Hero />
                <Collection />
                <Follow />
            </main>
            <Footer />
        </div>
    );
};

export default HazelLifestyle;
