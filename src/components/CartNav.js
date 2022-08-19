import React, { useState } from 'react';
import Cart from './Cart';

import PropTypes from 'prop-types';
import { BsBag, BsCart4, BsXLg } from 'react-icons/bs';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(true);
    const [showCart, setShowCart] = useState(false);
    const handleEmptyCart = () => {
        onEmptyCart();
    };

    return (
        <div className='nav'>
            <div className='nav__cart'>
                <a
                    className='nav__cart-open text-decoration-none text-dark'
                    onClick={() => setShowCart(true)}>
                    <BsBag className='icon' />
                    {cart == null || cart.total_items == 0 ? (
                        ''
                    ) : (
                        <span className=' badge rounded-circle bg-dark'>
                            <span className='text-white'>
                                {cart.total_items}
                            </span>
                        </span>
                    )}
                </a>
            </div>
            {isCartVisible && (
                <Offcanvas
                    scroll='false'
                    id='cart-menu'
                    show={showCart}
                    placement='end'
                    onHide={() => setShowCart(false)}>
                    <Offcanvas.Header className='py-4 sticky-top' closeButton>
                        <Offcanvas.Title>CART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Cart
                            cart={cart}
                            onUpdateCartQty={onUpdateCartQty}
                            onRemoveFromCart={onRemoveFromCart}
                            onEmptyCart={onEmptyCart}
                        />
                    </Offcanvas.Body>
                    <div className='cart__footer py-4 mx-auto bg-white '>
                        <button
                            className='lh-0  px-3 me-2 border-0 cart__btn-empty text-uppercase text-white'
                            onClick={handleEmptyCart}>
                            Empty cart
                        </button>

                        {/* <Link
                            to='/checkout'
                            className='text-decoration-none lh-0 px-3 ms-2 border-0 cart__btn-checkout text-white text-uppercase'>
                            <BsCart4 className='me-2 fs-6' />
                            Checkout
                        </Link> */}
                    </div>
                </Offcanvas>
            )}
        </div>
    );
};

export default CartNav;

CartNav.propTypes = {
    cart: PropTypes.object,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onEmptyCart: PropTypes.func,
};
