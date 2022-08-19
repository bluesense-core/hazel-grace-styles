import React from 'react';
import ProductsList from '../components/ProductsList.js';
import Spinner from '../components/Spinner.js';

function Shop({ isLoading, products, onAddToCart }) {
    return (
        <div>
            <section id='shop'>
                <h1 className='text-center py-3'>Collection</h1>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <ProductsList
                        products={products}
                        onAddToCart={onAddToCart}
                    />
                )}
            </section>
        </div>
    );
}

export default Shop;
