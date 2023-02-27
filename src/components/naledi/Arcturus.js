import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './single.css';
import { nalediData } from '../Images';
import hangar from '../../img/coat-hanger-icon.png';
import ReactImageGallery from 'react-image-gallery';

const Arcturus = ({ formatter }) => {
    const data = nalediData.filter((e) => e.alt === 'Arcturus Blouse')[0];
    console.log(data);
    return (
        <main id='single-view'>
            <Container className='p-5'>
                <Row>
                    <Col>
                        {data && (
                            <ReactImageGallery
                                items={data.carousel}
                                lazyLoad={true}
                                showNav={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                autoPlay={true}
                            />
                        )}
                    </Col>

                    <Col>
                        <p className='hgs'>Hazel grace styles</p>
                        <h1 className='name'>{data.alt}</h1>
                        <h2 className='price'>
                            ₦{formatter.format(data.price)}
                        </h2>
                        <Button as='a' href='#' className='ms-auto'>
                            <Image src={hangar} fluid />
                            Size Guide
                        </Button>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Arcturus;
