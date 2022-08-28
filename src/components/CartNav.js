import React, { useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';

import { useCart } from 'react-use-cart';

const CartNav = ({ formatter, showCart, setShowCart }) => {
    const { isEmpty, totalItems } = useCart();

    return (
        <div className='nav'>
            <div className='nav__cart'>
                <Link
                    to='/cart'
                    className='nav__cart-open text-decoration-none text-dark'
                    onClick={() => setShowCart(true)}>
                    <BsBag className='icon' />
                    {!isEmpty && (
                        <span className=' badge rounded-circle bg-dark'>
                            <span className='text-white'>{totalItems}</span>
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default CartNav;
