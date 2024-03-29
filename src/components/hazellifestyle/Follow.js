import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsInstagram } from 'react-icons/bs';
import InstaFeeds from '../InstaFeeds';
import './follow.css';

const Follow = () => {
    return (
        <section id='follow-lifestyle'>
            <Container className='py-5'>
                <h2 className='display-5 mb-3 text-center'>
                    Follow Us On Instagram
                </h2>

                <p className='fs-5 text-center mb-5'>
                    Stay inspired and connected with the latest minimalist
                    design trends by following us on Instagram.
                    <span className='d-sm-inline d-none'>
                        Our page is filled with beautiful photos of our curated
                        collection, styling tips, and interior design
                        inspiration to help you create the perfect space.
                    </span>
                </p>

                <Row className='g-5 mt-5 mx-auto'>
                    <Col className='d-flex align-items-center justify-content-sm-start justify-content-center'>
                        <div className='circle d-flex align-items-center justify-content-center'>
                            <BsInstagram className='text-dark fs-2' />
                        </div>

                        <p className='username mb-0 ms-sm-4 ms-3 fs-2 fw-bold text-black text-sm-start text-center'>
                            hazel_lifestyle
                        </p>
                    </Col>
                </Row>

                <InstaFeeds
                    token='IGQVJYZAU5zaU9MNEtKMVJPenRrdGdLejJ6V29yci1WX2hBZATNrRWtPcjc1Y3FkS0wzY1dpMmFnM25yNkE5RWkyRTBLc3ZAoZAGtyLTJSOEpDTWo0QUk4Ukw4b3V0c19rTVBsN0F3bmEweW02Y2VQQmtjawZDZD'
                    limit={9}
                />

                <Button
                    target='_blank'
                    href='https://www.instagram.com/hazel_lifestyle/'
                    className='d-block mx-auto py-3 mt-5  px-5 fs-4'>
                    <BsInstagram className='text-white fs-3 me-3 mb-1' />
                    Follow Us
                </Button>
            </Container>
        </section>
    );
};

export default Follow;
