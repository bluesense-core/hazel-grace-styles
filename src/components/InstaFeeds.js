import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Feed from './Feed';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const InstaFeeds = ({ token, limit }) => {
    const [feeds, setFeedsData] = useState(null);
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        async function fetchInstagramPost() {
            try {
                const response = await axios.get(
                    `https://graph.instagram.com/me/media?fields=id,is_shared_to_feed,media_type,caption,media_url,permalink,thumbnail_url,username,timestamp&limit=${limit}&access_token=${tokenProp.current}`,
                    { cancelToken: source.token }
                );

                if (isMounted) {
                    setFeedsData(response.data.data);
                }
            } catch (error) {
                console.log('error', error);
            }
        }

        fetchInstagramPost();

        return () => {
            isMounted = false;
            source.cancel('Request canceled');
        };
    }, [limit]);

    return (
        <div id='feeds'>
            {feeds ? (
                <ResponsiveMasonry
                    className='mx-auto mt-5 pt-sm-5 pb-sm-5'
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter='1.5rem'>
                        {feeds.map((feed) => (
                            <Feed key={feed.id} feed={feed} className='h-100' />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            ) : (
                <p className='text-center mt-5 fs-4'>
                    Can't access instagram feed! Check your internet connection,
                    reload page or try again later.{' '}
                </p>
            )}
        </div>
    );
};

export default InstaFeeds;
