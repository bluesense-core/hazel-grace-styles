import React from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { hazelLifestyleData } from '../Images';
import './collection.css';

const Collection = () => {
    return (
        <section id='lifestyle-about'>
            <Container className=''>
                <h2 className='display-5 mb-4 text-center'>Our Collection</h2>
                <p className='fs-5 text-center'>
                    Our collection of high-quality, timeless pieces is carefully
                    curated to help you create a space that is both functional
                    and beautiful. From sleek, modern furniture to soft, natural
                    textiles, our collection is designed to help you create a
                    space that reflects your unique style and personality.
                </p>

                <ResponsiveMasonry
                    className='mx-auto mt-5 pt-sm-5 pb-sm-5'
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter='0' className='mx-auto g-md-'>
                        {hazelLifestyleData.map((e) => (
                            <LazyLoadImage
                                delayTime='150'
                                effect='blur'
                                visibleByDefault={true}
                                key={e.id}
                                className='h-100'
                                src={e.img}
                                alt=''
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        </section>
    );
};

export default Collection;
