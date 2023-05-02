import React from 'react';
import Spinner from '../components/Spinner.js';
import './shop.css';
import GenesisList from '../components/GenesisList.js';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Container } from 'react-bootstrap';

const GenesisShop = ({ isLoading, formatter }) => {
    return (
        <>
            <Header />
            <main className='shop'>
                <section id='shop-genesis'>
                    <Container>
                        {/* <p className='new text-center py-3 mb-2'>#HazelBee</p> */}
                        <h1 className='text-center display-6 mt-sm-5 mt-3 mb-4 lh-1'>
                            Genesis Collection
                        </h1>
                        <p className='text-center px-lg-5 fs-5 mt-1'>
                            Created for the modern working class woman, these
                            not-so-formal pieces were designed to flatter every
                            woman’s body in the corporate world and give a
                            stylish edge.
                        </p>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <GenesisList formatter={formatter} />
                        )}
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default GenesisShop;
