import React from 'react';
import { Container } from 'react-bootstrap';
import BespokeList from '../components/BespokeList.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Spinner from '../components/Spinner.js';
import './shop.css';

const BespokeShop = ({ isLoading, formatter }) => {
    return (
        <>
            <Header />
            <main className='shop'>
                <section id='shop-naledi'>
                    <Container>
                        {/* <p className='new text-center py-3 mb-2'>
                        #HazelGraceStyles
                    </p> */}
                        <h1 className='text-center display-6 mt-sm-5 mt-3 mb-4 lh-1'>
                            Resurgence Collection
                        </h1>
                        <p className='text-center px-lg-5 fs-5 mt-1'>
                            This collection is inspired by the Afro-centric
                            woman making a statement in every appearance.
                        </p>
                        {isLoading ? <Spinner /> : <BespokeList formatter={formatter} />}
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BespokeShop;
