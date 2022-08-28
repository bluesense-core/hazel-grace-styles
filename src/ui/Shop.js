import React from 'react';
import ProductsList from '../components/ProductsList.js';
import Spinner from '../components/Spinner.js';

function Shop({ isLoading, formatter, showCart, setShowCart }) {
    return (
        <main>
            <section id='shop'>
                <h1 className='text-center py-3'>Collection</h1>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <ProductsList
                        formatter={formatter}
                        showCart={showCart}
                        setShowCart={setShowCart}
                    />
                )}
            </section>
        </main>
    );
}

export default Shop;
