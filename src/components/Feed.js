import React from 'react';

const Feed = (props) => {
    const { id, caption, permalink, media_type, media_url } = props.feed;
    let post;

    switch (media_type) {
        case 'VIDEO':
            post = (
                <video
                    width='100%'
                    height='auto'
                    src={media_url}
                    type='video/mp4'
                    controls
                    playsinline></video>
            );
            break;
        case 'CAROUSEL_ALBUM':
            post = (
                <img
                    id={id}
                    className='img-fluid'
                    src={media_url}
                    alt={caption}
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
