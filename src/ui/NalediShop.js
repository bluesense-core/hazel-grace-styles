import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import NalediList from '../components/NalediList.js';
import Spinner from '../components/Spinner.js';
import './shop.css';

function NalediShop({ isLoading, formatter }) {
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
                            Naledi Collection
                        </h1>
                        <p className='text-center px-lg-5 fs-5 mt-1'>
                            The urban nature of every star in the constellation
                            inspired the creation of this collection. Every
                            piece transcends the beauty of the next with comfort
                            and style.
                        </p>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <NalediList formatter={formatter} />
                        )}
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default NalediShop;
