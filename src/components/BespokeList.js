import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import { bespokeData } from './Images';
import BespokeItem from './BespokeItem';

const BespokeList = ({formatter}) => {
    return (
        <Container>
            <Row
                xs={1}
                md={2}
                lg={3}
                className='gy-5 gx-sm-5 pt-5 products'
                id='products'>
                {bespokeData.map((product) => (
                    <BespokeItem key={product.id} product={product} formatter={formatter} />
                ))}
            </Row>
        </Container>
    );
};

BespokeList.propTypes = {
    products: PropTypes.array,
};

export default BespokeList;
