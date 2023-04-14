import React from 'react';
import Collection from '../components/hazelbabies/Collection';
import Follow from '../components/hazelbabies/Follow';
import Footer from '../components/hazelbabies/Footer';
import Header from '../components/hazelbabies/Header';
import Hero from '../components/hazelbabies/Hero';
import './hazelbabies.css';

const HazelBabies = () => {
    return (
        <div className='hazel-babies'>
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

export default HazelBabies;
