import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './single.css';
import { bespokeData } from '../Images';
import ReactImageGallery from 'react-image-gallery';
import sizeGuide from '../../files/HazelGrace Size Guide.pdf';

import Header from '../Header';
import Footer from '../Footer';

const Look7 = () => {
    const data = bespokeData.filter((e) => e.alt === 'Look 7')[0];
    return (
        <>
            <Header />
            <main id='bespoke'>
                <Container className='py-5 px-sm-5'>
                    <Row className='py-3 gy-lg-0 gy-5'>
                        <Col lg={6}>
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

                        <Col
                            lg={6}
                            className='d-flex flex-column text-lg-start text-center'>
                            <p className='hgs mb-4 fs-6'>HazelGrace Styles</p>
                            <h1 className='name mt-1 fs-2 mb-4'>{data.alt}</h1>
                            <p className='mt-1'>
                                To custom order this look, send us a direct
                                message on our{' '}
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.instagram.com/hazelbe.e/'>
                                    Instagram
                                </a>{' '}
                                or contact us directly via phone at{' '}
                                <a href='tel:+2349056043956'>+2349056043956</a>.
                                Our team is always happy to help you bring your
                                vision to life!
                            </p>
                            {/* <h2 className='price fs-3 mb-5'>
                                ₦{formatter.format(data.price)}
                            </h2> 
                            <Button
                                as='a'
                                href={sizeGuide}
                                        target='_blank'
                                        rel='noopener noreferrer'

                                className='size-guide ms-lg-auto mx-lg-0 mx-auto py-3 mb-4  px-3'>
                                <Image src={hangar} fluid className='me-2' />
                                Size Guide
                            </Button>

                            <Form onSubmit={(e) => e.preventDefault()}>
                                <Form.Label className='fs-6 mb-2'>
                                    Size:
                                </Form.Label>
                                <div
                                    key='inline-radio'
                                    className='mb-4 size fs-6 w-100'>
                                    <Form.Check
                                        className='px-0 me-0'
                                        inline
                                        label='XS'
                                        value='XS'
                                        name='size'
                                        type='radio'
                                        id='size-xs'
                                        checked={formData.size === 'XS'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline
                                        className='px-0 me-0 ms-md-4 ms-3'
                                        label='S'
                                        value='S'
                                        name='size'
                                        type='radio'
                                        id='size-s'
                                        checked={formData.size === 'S'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        className='px-0 me-0 ms-md-4 ms-3'
                                        inline
                                        label='M'
                                        value='M'
                                        name='size'
                                        type='radio'
                                        id='size-m'
                                        checked={formData.size === 'M'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        className='px-0 me-0 ms-md-4 ms-3'
                                        inline
                                        label='L'
                                        value='L'
                                        name='size'
                                        type='radio'
                                        id='size-l'
                                        checked={formData.size === 'L'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        className='px-0 me-0 ms-md-4 ms-3'
                                        inline
                                        label='XL'
                                        value='XL'
                                        name='size'
                                        type='radio'
                                        id='size-xl'
                                        checked={formData.size === 'XL'}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        className='px-0 me-0 ms-md-4 ms-3'
                                        inline
                                        label='2XL'
                                        value='2XL'
                                        name='size'
                                        type='radio'
                                        id='size-2xl'
                                        checked={formData.size === '2XL'}
                                        onChange={handleChange}
                                    />
 <Form.Check
                                        className='px-0 me-0 ms-md-4 ms-3'
                                        inline
                                        label='3XL'
                                        value='3XL'
                                        name='size'
                                        type='radio'
                                        id='size-3xl'
                                        checked={formData.size === '3XL'}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Form.Label className='fs-6 mt-1 mb-2'>
                                    Quantity:
                                </Form.Label>

                                <FormGroup className='mx-lg-0 mx-auto details-qty mb-5 d-flex align-items-center justify-space-between'>
                                    <button
                                        className='px-3 py-2 minus fs-6'
                                        type='button'
                                        disabled={
                                            formData.quantity === 1
                                                ? true
                                                : false
                                        }
                                        onClick={() =>
                                            setFormData((prevData) => {
                                                return {
                                                    ...prevData,
                                                    quantity:
                                                        (prevData.quantity -= 1),
                                                };
                                            })
                                        }>
                                        -
                                    </button>
                                    <Form.Control
                                        type='number'
                                        name='quantity'
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className='px-3 m-0 quantity fs-6'
                                    />

                                    <button
                                        className='px-3 py-2 plus fs-6'
                                        type='button'
                                        onClick={() =>
                                            setFormData((prevData) => {
                                                return {
                                                    ...prevData,
                                                    quantity:
                                                        (prevData.quantity += 1),
                                                };
                                            })
                                        }>
                                        +
                                    </button>
                                </FormGroup>

                                <Button
                                    className='addToCart w-100 py-3 fs-5'
                                    onClick={() => {
                                        addToCart();

                                        updateItem(data.id, {
                                            ...data,
                                            size: formData.size,
                                            quantity: Number(formData.quantity),
                                        });
                                    }}>
                                    Add To Cart
                                </Button>
                            </Form>
                            */}
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Look7;
