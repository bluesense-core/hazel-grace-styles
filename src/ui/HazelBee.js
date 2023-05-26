import React from 'react';
import Collection from '../components/hazelbee/Collection';
import Follow from '../components/hazelbee/Follow';
import Footer from '../components/hazelbee/Footer';
import Header from '../components/hazelbee/Header';
import Hero from '../components/hazelbee/Hero';
import './hazelbee.css';

const HazelBee = ({ formatter }) => {
    return (
        <div className='hazel-bee'>
            <Header />
            <main>
                <Hero />
                <Collection formatter={formatter} />
                <Follow />
            </main>
            <Footer />
        </div>
    );
};

export default HazelBee;
