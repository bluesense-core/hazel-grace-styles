import React from 'react';
import Footer from './Footer';
import { Row, Col, Card } from 'react-bootstrap';
import Spinner from '../components/Spinner.js';

const Shop = ({ isLoading, data }) => {
    return (
        <div>
            <section id='shop'>
                <h1 className='text-center py-3'>All Products</h1>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Row xs={1} md={2} lg={4} className='gy-5 gx-4 py-5 px-3'>
                        {data.map((e) => (
                            <Col>
                                <Card
                                    key={e.id}
                                    className='h-100 pb-5 text-center border-white rounded-0'>
                                    <Card.Img
                                        variant='top'
                                        src={e.src}
                                        alt={e.alt}
                                        className='h-100 shop-img'
                                    />
                                    {/* <Card.ImgOverlay className='shop-overlay'>
                                    <Card.Text>Shop Now</Card.Text>
                                </Card.ImgOverlay> */}
                                    <Card.Body className='text-uppercase'>
                                        <Card.Title className='shop-title py-2'>
                                            {e.alt}
                                        </Card.Title>
                                        <Card.Text className='shop-text'>
                                            ₦{e.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default Shop;
