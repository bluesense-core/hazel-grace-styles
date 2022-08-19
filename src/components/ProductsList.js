import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { Row } from 'react-bootstrap';

const ProductsList = ({ products, onAddToCart }) => {
    return (
        <Row
            xs={1}
            md={2}
            lg={4}
            className='gy-5 gx-4 py-5 px-3 products'
            id='products'>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </Row>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
};

export default ProductsList;
