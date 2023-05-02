import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { hazelBeeData } from '../Images';
import './collection.css';

const Collection = () => {
    const toLink = (param) => {
        return param.toLowerCase().replaceAll(' ', '-');
    };

    return (
        <section id='bee-about'>
            <Container className='pt-5'>
                <h2 className='display-5 mb-4 text-center'>
                    Explore Our Collection
                </h2>
                <p className='fs-5 text-center'>
                    Our collection is made using high-quality materials and
                    designed with the latest fashion trends in mind. Each piece
                    is crafted with care to ensure that it fits you perfectly,
                    and that you feel confident and stylish in every outfit.
                </p>

                <Row
                    xs={1}
                    md={2}
                    lg={3}
                    className='g-5 mt-5 mx-auto justify-content-center'>
                    {hazelBeeData.map((e) => (
                        <Col key={e.id}>
                            <Card className='h-100'>
                                <NavLink
                                    reloadDocument
                                    to={'/hazelbee/shop/' + toLink(e.title)}
                                    className='text-decoration-none'>
                                    <LazyLoadImage
                                        delayTime='150'
                                        effect='blur'
                                        visibleByDefault={true}
                                        className='img-fluid d-block mx-auto'
                                        src={e.img}
                                        alt={e.title}
                                    />

                                    <Card.Body className='px-0 py-4 text-md-start text-center'>
                                        <Card.Title className='fs-3 '>
                                            {e.title}
                                        </Card.Title>
                                        <Card.Text className='fs-4 p-0'>
                                            {e.price}
                                        </Card.Text>
                                    </Card.Body>
                                </NavLink>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Collection;
