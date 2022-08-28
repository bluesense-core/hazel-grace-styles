import React, { Component } from 'react';
// import { stripHtml } from 'string-strip-html';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';
import { Button, Card, Col } from 'react-bootstrap';

const ProductItem = ({ product, formatter, showCart, setShowCart }) => {
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(product);
    };

    return (
        <Col>
            <Card className='product__card h-100 pb-5 text-center border-white rounded-0'>
                <Card.Img
                    variant='top'
                    className='product__image h-100 shop-img'
                    src={product.src}
                    alt={product.alt}
                />
                {/* <Card.ImgOverlay className='shop-overlay'>
                    <Card.Text>Shop Now</Card.Text>
                </Card.ImgOverlay> */}
                <Card.Body className='product__info text-uppercase'>
                    <h4 className='product__name shop-title py-2'>
                        {product.alt}
                    </h4>

                    <div className='product__details'>
                        <p className='product__price shop-text'>
                            ₦{formatter.format(product.price)}
                        </p>
                    </div>

                    <Button
                        name='Add to cart'
                        className='product__btn btn text-white py-2 px-3 border-none'
                        onClick={() => {
                            addToCart();
                            setShowCart(true);
                        }}>
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
