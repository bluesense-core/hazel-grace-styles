import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Feed from './Feed';

import { Col, Row } from 'react-bootstrap';

const InstaFeeds = ({ token, limit }) => {
    const [feeds, setFeedsData] = useState();
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost() {
            try {
                axios
                    .get(
                        `https://graph.instagram.com/me/media?fields=id,is_shared_to_feed,media_type,caption,media_url,permalink,thumbnail_url,username,timestamp&limit=${limit}&access_token=${token}`
                    )
                    .then((resp) => {
                        setFeedsData(resp.data.data);
                    });
            } catch (err) {
                console.log('error', err);
            }
        }

        // manually call the fecth function
        fetchInstagramPost();

        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort();
        };
    });

    return (
        <>
            {feeds ? (
                <Row
                    xs={1}
                    md={2}
                    lg={3}
                    className='ig-box g-5 mt-1 mx-auto justify-content-center'>
                    {feeds.map((feed) => (
                        <Col key={feed.id} className='d-flex align-items-end'>
                            <Feed feed={feed} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <p className='text-center mt-5 fs-4'>
                    Can't access instagram feed! Check your internet connection,
                    reload page or try again later.{' '}
                </p>
            )}
        </>
    );
};

export default InstaFeeds;
