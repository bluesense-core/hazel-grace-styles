import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import { genesisData } from './Images';
import GenesisItem from './GenesisItem';

const GenesisList = ({ formatter }) => {
    return (
        <Container className='px-0'>
            <Row
                xs={1}
                md={2}
                xl={4}
                className='gy-5 gx-sm-5 pt-5 products'
                id='products'>
                {genesisData.map((product) => (
                    <GenesisItem
                        key={product.id}
                        product={product}
                        formatter={formatter}
                    />
                ))}
            </Row>
        </Container>
    );
};

GenesisList.propTypes = {
    products: PropTypes.array,
};

export default GenesisList;
