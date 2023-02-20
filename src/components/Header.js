import React, { useState } from 'react';
import {
    Image,
    Navbar,
    Nav,
    Offcanvas,
    Container,
    NavDropdown,
    Col,
    Row,
} from 'react-bootstrap';
import Logo from '../img/logo.png';
import './header.css';
import SidebarMenu from './SidebarMenu';
import Socials from './Socials';
import CartNav from './CartNav';
import { BsBag, BsChevronDown } from 'react-icons/bs';

function Header({ formatter, showCart, setShowCart }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dropdown, setDropdown] = useState(false);
    const showDropdown = (e) => {
        setDropdown(!show);
    };
    const hideDropdown = (e) => {
        setDropdown(false);
    };

    return (
        <header className='shadow-sm fixed-top'>
            {/* Component */}
            <div className='banner'>
                <a href='#' className='text-decoration-none text-white'>
                    <p className='m-0 py-2 text-uppercase text-center'>
                        Shop Our New Collection
                    </p>
                </a>
            </div>

            <Navbar expand='lg' className=''>
                <Container fluid className='px-lg-5'>
                    <Row className='g-0 w-100 align-items-center justify-content-between'>
                        <Col xs={3} lg='auto' className='d-lg-none d-block'>
                            <Navbar.Toggle onClick={handleShow} />
                            <Navbar.Offcanvas
                                id='navbar-off'
                                placement='start'
                                show={show}
                                onHide={handleClose}>
                                <Offcanvas.Header
                                    closeButton
                                    className='py-4 ps-4 sticky-top'>
                                    <Navbar.Brand>
                                        <Image
                                            className='off-logo'
                                            src={Logo}
                                            alt='Hazel Grace Styles Logo'
                                            fluid
                                        />
                                    </Navbar.Brand>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav
                                        id='header-nav'
                                        className=' text-uppercase justify-content-end flex-grow-1 px-3'>
                                        <Nav.Item className='py-3 text-decoration-none'>
                                            <Nav.Link href='/'>Home</Nav.Link>
                                        </Nav.Item>

                                        <NavDropdown
                                            className='py-3 text-decoration-none'
                                            title={
                                                <span>
                                                    Shop
                                                    <BsChevronDown className='ms-2 mb-1 arrow' />
                                                </span>
                                            }
                                            id=''>
                                            <NavDropdown.Item
                                                className='text-capitalize'
                                                href='/shop/genesis'>
                                                Genesis Collection
                                            </NavDropdown.Item>
                                            <NavDropdown.Item
                                                className='text-capitalize'
                                                href='/shop/naledi'>
                                                Naledi Collection
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Item className='py-3 text-decoration-none'>
                                            <Nav.Link href='/contact'>
                                                Contact
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <SidebarMenu />
                                </Offcanvas.Body>
                                <Socials />
                            </Navbar.Offcanvas>
                        </Col>

                        <Col xs={6} lg='auto' className='d-lg-flex d-block'>
                            <Navbar.Brand className='d-block m-0'>
                                <Image
                                    className='header-logo d-lg-inline d-block m-lg-0 mx-auto my-auto'
                                    src={Logo}
                                    alt='Hazel Grace Styles Logo'
                                    fluid
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col className='d-lg-block d-none'>
                            <Nav
                                id='header-nav'
                                className=' text-uppercase justify-content-end flex-grow-1'>
                                <Nav.Item className='px-2'>
                                    <Nav.Link href='/'>Home</Nav.Link>
                                </Nav.Item>

                                <NavDropdown
                                    className='px-2 d-md-block d-none'
                                    title={
                                        <span>
                                            Shop
                                            <BsChevronDown className='ms-2 mb-1 arrow' />
                                        </span>
                                    }
                                    id=''
                                    show={dropdown}
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}>
                                    <NavDropdown.Item
                                        className='text-capitalize'
                                        href='/shop/genesis'>
                                        Genesis Collection
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        className='text-capitalize'
                                        href='/shop/naledi'>
                                        Naledi Collection
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    className='px-2 d-md-none d-block'
                                    title={
                                        <span>
                                            Shop
                                            <BsChevronDown className='ms-2 mb-1 arrow' />
                                        </span>
                                    }
                                    id=''>
                                    <NavDropdown.Item
                                        className='text-capitalize'
                                        href='/shop/genesis'>
                                        Genesis Collection
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        className='text-capitalize'
                                        href='/shop/naledi'>
                                        Naledi Collection
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item className='px-2'>
                                    <Nav.Link href='/contact'>Contact</Nav.Link>
                                </Nav.Item>

                                <div className='ps-2'>
                                    <Nav.Link href='/cart'>
                                        <BsBag className='cart-icon ' />
                                    </Nav.Link>
                                </div>
                            </Nav>
                        </Col>
                        <Col xs={3} lg='auto' className='d-lg-none d-block'>
                            <Nav
                                id='header-nav'
                                className=' text-uppercase justify-content-end'>
                                <Nav.Link href='/cart' className='ms-auto px-3'>
                                    <BsBag className='cart-icon ' />
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
