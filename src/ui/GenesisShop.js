import React from 'react';
import Spinner from '../components/Spinner.js';
import '..css';
import GenesisList from '../components/GenesisList.js';

const GenesisShop = ({ isLoading, formatter }) => {
    return (
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
    );
};

export default GenesisShop;
