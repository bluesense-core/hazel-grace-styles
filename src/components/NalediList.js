import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { Container, Row } from 'react-bootstrap';
import { nalediData } from './Images';

const NalediList = ({ formatter, showCart, setShowCart }) => {
    return (
        <Container>
            <Row
                xs={1}
                md={2}
                lg={3}
                className='gy-5 gx-sm-5 pt-5 products'
                id='products'>
                {nalediData.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        formatter={formatter}
                        showCart={showCart}
                        setShowCart={setShowCart}
                    />
                ))}
            </Row>
        </Container>
    );
};

NalediList.propTypes = {
    products: PropTypes.array,
};

export default NalediList;
