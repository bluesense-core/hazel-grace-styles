import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';

function Socials() {
    return (
        <div
            id='social-offcanvas'
            className='py-3 bg-white sticky-bottom text-decoration-none d-flex justify-content-evenly'>
            <a href='#'>
                <FaFacebookF />
            </a>
            <a href='#'>
                <BsTwitter />
            </a>
            <a href='https://www.instagram.com/hazelgracestyles/'>
                <BsInstagram />
            </a>
            <a href='#'>
                <FaPinterestP />
            </a>
        </div>
    );
}

export default Socials;
