import React from 'react';
import NalediList from '../components/NalediList.js';
import Spinner from '../components/Spinner.js';
import './shop.css';

function NalediShop({ isLoading, formatter }) {
    return (
        <main className='shop'>
            <section id='shop-naledi'>
                <p className='new text-center py-3 mb-2'>#New</p>
                <h1 className='text-center display-6 lh-1'>
                    Naledi Collection
                </h1>
                {isLoading ? <Spinner /> : <NalediList formatter={formatter} />}
            </section>
        </main>
    );
}

export default NalediShop;