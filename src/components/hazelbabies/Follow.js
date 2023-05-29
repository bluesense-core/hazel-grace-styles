import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsInstagram } from 'react-icons/bs';
import InstaFeeds from '../InstaFeeds';
import './follow.css';

const Follow = () => {
    return (
        <section id='follow-babies'>
            <Container className='py-5'>
                <h2 className='display-5 mb-3 text-center'>
                    Follow Us On Instagram
                </h2>

                <p className='fs-5 text-center mb-5'>
                    Stay connected with the latest trends and styles by
                    following us on Instagram. Our page is full of inspirational
                    photos of our bespoke couture pieces, exclusive promotions,
                    and behind-the-scenes peeks at our design process.
                </p>

                <Row className='g-5 mt-5 mx-auto'>
                    <Col className='d-flex align-items-center justify-content-sm-start justify-content-center'>
                        <div className='circle d-flex align-items-center justify-content-center'>
                            <BsInstagram className='text-white fs-2' />
                        </div>

                        <p className='username mb-0 ms-sm-4 ms-3 fs-2 fw-bold text-black text-sm-start text-center'>
                            hazel_babies
                        </p>
                    </Col>
                </Row>

                <InstaFeeds
                    token='IGQVJYS2FWTWhIRUd3VzQ0OHQyZADZAsMDFvR3g5X0hnMTdoMHZAacGpGRUhGemFnUUN6WXRnd0FNRG04OTAwSkpBci02NVZAJbUJoWDlPeW9ieVRaRXpfQUhDSFJ0VkxxMGNMWUJrMlEzcUlRc2x5UEVOTgZDZD'
                    limit={11}
                />

                <Button
                    target='_blank'
                    href='https://www.instagram.com/hazel_babies/'
                    className='d-block mx-auto py-3 mt-5  px-5 fs-4'>
                    <BsInstagram className='text-white fs-3 me-3 mb-1' />
                    Follow Us
                </Button>
            </Container>
        </section>
    );
};

export default Follow;
