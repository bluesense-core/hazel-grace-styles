import React, { Component } from 'react';
// import { stripHtml } from 'string-strip-html';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';

const ProductItem = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    };

    return (
        <Col>
            <Card className='product__card h-100 pb-5 text-center border-white rounded-0'>
                <Card.Img
                    variant='top'
                    className='product__image h-100 shop-img'
                    src={product.image?.url}
                    alt={product.name}
                />
                {/* <Card.ImgOverlay className='shop-overlay'>
                    <Card.Text>Shop Now</Card.Text>
                </Card.ImgOverlay> */}
                <Card.Body className='product__info text-uppercase'>
                    <h4 className='product__name shop-title py-2'>
                        {product.name}
                    </h4>

                    <div className='product__details'>
                        <p className='product__price shop-text'>
                            {product.price.formatted_with_symbol}
                        </p>
                    </div>

                    <Button
                        name='Add to cart'
                        className='product__btn btn text-white py-2 px-3 border-none'
                        onClick={handleAddToCart}>
                        Add To Cart
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
};

export default ProductItem;
