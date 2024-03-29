import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { hazelBabiesData } from '../Images';
import './collection.css';

const Collection = () => {
    return (
        <section id='babies-about'>
            <Container className=''>
                <h2 className='display-5 mb-4 text-center'>
                    Explore Our Collection
                </h2>
                <p className='fs-5 text-center'>
                    Step into the magical world of Hazel Babies and explore our
                    stunning collection of kidswear. Discover our range of
                    high-quality and stylish outfits today.
                </p>

                <Row
                    xs={1}
                    md={2}
                    lg={3}
                    className='g-5 mt-5 mx-auto justify-content-center'>
                    {hazelBabiesData.map((e) => (
                        <Col key={e.id}>
                            <Card className='h-100'>
                                {/* <NavLink
                                    reloadDocument
                                    to='/genesis'
                                    className='text-decoration-none'> */}
                                <LazyLoadImage
                                    delayTime='150'
                                    effect='blur'
                                    visibleByDefault={true}
                                    className='img-fluid d-block mx-auto'
                                    src={e.img}
                                    alt={e.title}
                                />

                                {/* <Card.Body className='px-0 py-4 display-5'>
                                        <Card.Title className='fs-3'>
                                            {e.title}
                                        </Card.Title>
                                    </Card.Body> */}
                                {/* </NavLink> */}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Collection;
