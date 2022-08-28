import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { Row } from 'react-bootstrap';
import { shopImages } from './Images';

const ProductsList = ({ formatter, showCart, setShowCart }) => {
    return (
        <Row
            xs={2}
            md={2}
            lg={4}
            className='gy-5 gx-4 py-5 px-3 products'
            id='products'>
            {shopImages.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    formatter={formatter}
                    showCart={showCart}
                    setShowCart={setShowCart}
                />
            ))}
        </Row>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
};

export default ProductsList;
