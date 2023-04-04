import React from 'react';
import Spinner from '../components/Spinner.js';
import './shop.css';
import GenesisList from '../components/GenesisList.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const GenesisShop = ({ isLoading, formatter }) => {
    return (
        <>
            <Header />
            <main className='shop'>
                <section id='shop-genesis'>
                    <h1 className='text-center display-6 lh-1 py-md-5 py-3'>
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
