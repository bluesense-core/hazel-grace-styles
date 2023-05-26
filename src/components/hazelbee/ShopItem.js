import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CurrencyContext } from '../CurrencyContext';

const ShopItem = ({ product, formatter }) => {
    const [isOverlay, setIsOverlay] = useState(false);

    const styles = {
        display: !isOverlay ? 'none' : 'flex',
    };

    const gray = {
        filter: !isOverlay ? 'none' : 'grayscale(100%)',
        transform: !isOverlay ? 'none' : 'scale(1.05)',
    };

    const toLink = (param) => {
        return param.toLowerCase().replaceAll(' ', '-');
    };

    const { selectedCurrency, convertPrice, selectedSign } =
        useContext(CurrencyContext);

    return (
        <Col>
            <Card
                className='product__card h-100  text-center border-white rounded-0'
                onMouseOver={() => setIsOverlay(true)}
                onMouseLeave={() => setIsOverlay(false)}>
                <NavLink
                    reloadDocument
                    to={'/hazelbee/shop/' + toLink(product.alt)}
                    className='text-decoration-none '>
                    <LazyLoadImage
                        delayTime='150'
                        effect='blur'
                        visibleByDefault={true}
                        style={gray}
                        className='position-relative product__image h-100 shop-img img-fluid'
                        src={product.src}
                        alt={product.alt}
                    />

                    <Card.Text
                        style={styles}
                        className='shop-overlay h5 fw-bolder'>
                        View More
                    </Card.Text>
                </NavLink>
                <Card.Body className='product__info text-uppercase'>
                    <h5 className='product__name shop-title py-2'>
                        {product.alt}
                    </h5>

                    <div className='product__details'>
                        <p className='product__price shop-text'>
                            {selectedSign}
                            {formatter.format(
                                convertPrice(product.price, selectedCurrency)
                            )}
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

ShopItem.propTypes = {
    product: PropTypes.object,
};

export default ShopItem;
