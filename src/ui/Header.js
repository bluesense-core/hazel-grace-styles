import React from 'react';
import { Col, Image, Navbar, Nav, Row, Offcanvas } from 'react-bootstrap';
import Logo from '../img/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { GrSearch } from 'react-icons/gr';
import CurrencyForm from '../components/CurrencyForm';
import SidebarMenu from '../components/SidebarMenu';
import Socials from '../components/Socials';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartNav from '../components/CartNav';

function Header({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
    const [show, setShow] = useState(false);

    return (
        <header className='shadow-sm h-75'>
            {/* Component */}
            <div className='banner'>
                <a href='#' className='text-decoration-none text-white'>
                    <p className='m-0 py-1 text-uppercase text-center'>
                        Shop Our New Collection
                    </p>
                </a>
            </div>

            <Navbar
                bg='white'
                expand='false'
                className='d-flex flex-column pb-0'>
                <div className='header-wrapper w-100 py-1'>
                    {/* Component */}
                    <Row className='align-items-center justify-content-between'>
                        <Col className='d-lg-none d-flex'>
                            {/* Component */}
                            <Navbar.Toggle
                                className='border-white text-dark'
                                onClick={() => setShow(true)}
                            />
                            <Navbar.Offcanvas placement='start' show={show}>
                                <Offcanvas.Header
                                    closeButton
                                    onHide={() => setShow(false)}
                                    className='py-4 ps-4 sticky-top'></Offcanvas.Header>
                                <Offcanvas.Body className=''>
                                    <Nav
                                        id='nav1'
                                        className=' justify-content-end flex-grow-1 px-3 text-uppercase'>
                                        <Link
                                            to='/'
                                            className='py-4 text-decoration-none'
                                            onClick={() => setShow(false)}>
                                            Home
                                        </Link>
                                        <Link
                                            to='/shop'
                                            className='py-4 text-decoration-none'
                                            onClick={() => setShow(false)}>
                                            Shop
                                        </Link>
                                        <Link
                                            to='/contact-us'
                                            className='py-4 text-decoration-none'
                                            onClick={() => setShow(false)}>
                                            Contact Us
                                        </Link>
                                        <SidebarMenu />
                                    </Nav>
                                </Offcanvas.Body>

                                <Socials />
                            </Navbar.Offcanvas>
                        </Col>

                        <Col className='d-lg-flex d-none'>
                            <CurrencyForm />
                        </Col>

                        <Col>
                            <Navbar.Brand
                                href='#home'
                                className='d-flex justify-content-center'>
                                <Image
                                    src={Logo}
                                    fluid
                                    className='d-none d-md-block'
                                />
                                <Image
                                    src={Logo}
                                    className='ms-3 logo2 d-md-none d-block'
                                />
                            </Navbar.Brand>
                        </Col>

                        <Col>
                            <div className='d-flex justify-content-end'>
                                <div className='px-2 d-md-flex d-none'>
                                    <a
                                        href='#'
                                        className='text-decoration-none text-dark'>
                                        <AiOutlineUser className='icon' />
                                    </a>
                                </div>
                                <div className='px-2'>
                                    <a
                                        href='#'
                                        className='text-decoration-none text-dark'>
                                        <GrSearch className='icon' />
                                    </a>
                                </div>
                                <div className='ps-2 me-md-0 me-3'>
                                    <CartNav
                                        cart={cart}
                                        onUpdateCartQty={onUpdateCartQty}
                                        onRemoveFromCart={onRemoveFromCart}
                                        onEmptyCart={onEmptyCart}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Nav
                    id='nav2'
                    className='text-uppercase d-lg-flex d-none flex-row py-0'>
                    <Link to='/' className='me-4 py-3 text-decoration-none'>
                        Home
                    </Link>
                    <Link to='/shop' className='py-3 text-decoration-none'>
                        Shop
                    </Link>
                    <Link
                        to='/contact-us'
                        className='ms-4 py-3 text-decoration-none'>
                        Contact Us
                    </Link>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;
