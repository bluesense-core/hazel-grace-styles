import React from 'react';

const Feed = (props) => {
    const { id, caption, permalink, media_type, thumbnail_url, media_url } =
        props.feed;
    let post;

    switch (media_type) {
        case 'VIDEO':
            post = (
                <video
                    width='100%'
                    height='auto'                 
                    src={media_url}
                    type='video/mp4'
                    preload='auto'
                    poster={thumbnail_url}
                    controls
                    playsInline></video>
            );
            break;
        case 'CAROUSEL_ALBUM':
            post = (
                <img
                    id={id}
                    className='img-fluid'
                    src={media_url}
                    alt={caption}
                    width='100%'
                    height='100%'
                />
            );
            break;
        default:
            post = (
                <img
                    className='img-fluid'
                    id={id}
                    src={media_url}
                    alt={caption}
                    width='100%'
                    height='100%'
                />
            );
    }

    return (
        <React.Fragment>
            <a href={permalink} target='_blank' rel='noopener noreferrer'>
                {post}
            </a>
        </React.Fragment>
    );
};

export default Feed;
