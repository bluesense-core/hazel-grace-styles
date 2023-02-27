import React, { Component, useState } from 'react';
// import { stripHtml } from 'string-strip-html';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';
import { Button, Card, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductItem = ({ product, formatter, showCart, setShowCart }) => {
    const [isOverlay, setIsOverlay] = useState(false);

    const styles = {
        display: !isOverlay ? 'none' : 'flex',
    };

    const gray = {
        filter: !isOverlay ? 'none' : 'grayscale(100%)',
        transform: !isOverlay ? 'none' : 'scale(1.05)',
    };

    const toLink = (param) => {
        return param.toLowerCase().replace(' ', '-');
    };

    return (
        <Col>
            <Card
                className='product__card h-100  text-center border-white rounded-0'
                onMouseOver={() => setIsOverlay(true)}
                onMouseLeave={() => setIsOverlay(false)}>
                <a
                    href={'/shop/naledi/' + toLink(product.alt)}
                    className='text-decoration-none '>
                    <LazyLoadImage
                        style={gray}
                        className='position-relative product__image h-100 shop-img img-fluid'
                        src={product.src}
                        alt={product.alt}
                    />
                </a>
                <Card.Text style={styles} className='shop-overlay h5 fw-bolder'>
                    View More
                </Card.Text>

                <Card.Body className='product__info text-uppercase'>
                    <h5 className='product__name shop-title py-2'>
                        {product.alt}
                    </h5>

                    <div className='product__details'>
                        <p className='product__price shop-text'>
                            ₦{formatter.format(product.price)}
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
};

export default ProductItem;
