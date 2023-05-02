import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import { Container, Row } from 'react-bootstrap';
import { hazelBeeShopData } from '../Images';

const ShopList = ({ formatter }) => {
    return (
        <Container>
            <Row
                xs={1}
                md={2}
                lg={3}
                className='gy-5 gx-sm-5 pt-5 products'
                id='products'>
                {hazelBeeShopData.map((product) => (
                    <ShopItem
                        key={product.id}
                        product={product}
                        formatter={formatter}
                    />
                ))}
            </Row>
        </Container>
    );
};

ShopList.propTypes = {
    products: PropTypes.array,
};

export default ShopList;
