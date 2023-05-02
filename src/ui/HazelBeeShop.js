import React from 'react';
import Footer from '../components/hazelbee/Footer.js';
import Header from '../components/hazelbee/Header.js';
import ShopList from '../components/hazelbee/ShopList.js';

import Spinner from '../components/Spinner.js';
import './shop.css';

const HazelBeeShop = ({ isLoading, formatter }) => {
    return (
        <>
            <Header />
            <main className='shop'>
                <section id='shop-naledi'>
                    <h1 className='text-center my-4 display-6 lh-1'>
                        HazelBee Shop
                    </h1>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <ShopList formatter={formatter} />
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HazelBeeShop;
