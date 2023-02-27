import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';

function Socials() {
    return (
        <div
            id='social-offcanvas'
            className='py-3 bg-white sticky-bottom text-decoration-none d-flex justify-content-evenly'>
            <a
                target='_blank'
                href='https://web.facebook.com/hazelgracestyles/'>
                <BsFacebook className='icon' />
            </a>
            {/* <a  href='#'>
                <BsTwitter />
            </a> */}
            <a
                target='_blank'
                href='https://www.instagram.com/hazelgracestyles/'>
                <BsInstagram className='icon' />
            </a>
            {/* <a href='#'>
                <FaPinterestP />
            </a> */}
        </div>
    );
}

export default Socials;
