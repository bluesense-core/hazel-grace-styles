import React from 'react';
import { Nav } from 'react-bootstrap';
import sizeGuide from '../files/HazelGrace Size Guide.pdf';

function SidebarMenu() {
    return (
        <div id='sidebar-menu' className='mt-4 text-capitalize pb-5'>
            <Nav.Link
                href={sizeGuide}
                target='_blank'
                rel='noopener noreferrer'
                className='py-2'>
                Size Guide
            </Nav.Link>
            {/* <Nav.Link href='#events' className='py-2'>
                Events
            </Nav.Link> */}
            <Nav.Link href='/terms' className='py-2'>
                Terms of Service, Delivery and Refund Policy
            </Nav.Link>
            {/* <Nav.Link href='#privacy-policy' className='py-2'>
                Privacy Policy
            </Nav.Link>
            <Nav.Link href='#faq' className='py-2'>
                FAQ
            </Nav.Link> */}
        </div>
    );
}

export default SidebarMenu;
