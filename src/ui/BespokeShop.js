import React from 'react';
import BespokeList from '../components/BespokeList.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Spinner from '../components/Spinner.js';
import './shop.css';

const BespokeShop = ({ isLoading }) => {
    return (
        <>
            <Header />
            <main className='shop'>
                <section id='shop-naledi'>
                    <p className='new text-center py-3 mb-2'>
                        #HazelGraceStyles
                    </p>
                    <h1 className='text-center display-6 lh-1'>
                        Bespoke Collection
                    </h1>
                    {isLoading ? <Spinner /> : <BespokeList />}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BespokeShop;
