import React from 'react';
import Spinner from '../components/Spinner.js';
import './shop.css';
import GenesisList from '../components/GenesisList.js';

import Header from '../components/hazelbee/Header.js';
import Footer from '../components/hazelbee/Footer.js';

const GenesisShop = ({ isLoading, formatter }) => {
    return (
        <>
            <Header />
            <main className='shop'>
                <section id='shop-genesis'>
                    <p className='new text-center py-3 mb-2'>#HazelBee</p>
                    <h1 className='text-center display-6 lh-1'>
                        Genesis Collection
                    </h1>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <GenesisList formatter={formatter} />
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default GenesisShop;
