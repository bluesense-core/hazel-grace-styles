import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { Button, Container, Table } from 'react-bootstrap';
import './cart.css';

const Cart = ({ formatter }) => {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
    } = useCart();

    return (
        <main>
            <Container className='cart py-5'>
                <div className='' id='cart-menu'>
                    <h1 className='text-uppercase text-center'>
                        <BsCart4 className='mb-1 me-1 logo' /> Cart
                    </h1>
                    {isEmpty ? (
                        <div className='py-5 cart__empty'>
                            <h6 className='text-center text-uppercase mb-3'>
                                Your Cart is Empty
                            </h6>
                            <p className='cart__none text-center '>
                                You have no items in your shopping cart, start
                                adding some!
                            </p>
                            <div className='d-flex justify-content-center'>
                                <Link
                                    to='/naledi'
                                    className='text-decoration-none cart-btn btn mx-auto  text-white mt-1 py-2 px-3 border-none'>
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {!isEmpty ? (
                        <div className='py-5'>
                            <Table className='d-md-block d-none'>
                                <thead>
                                    <tr className='text-center text-uppercase'>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr
                                                className='cart-item'
                                                key={index}>
                                                <td className='d-flex w-100 align-items-center justify-content-between'>
                                                    <img
                                                        className='cart-item__image w-50 '
                                                        src={item.src}
                                                        alt={item.title}
                                                    />
                                                    <div className='ms-lg-2 ms-3'>
                                                        <h4 className='cart-item__details-name'>
                                                            {item.alt}
                                                        </h4>
                                                        <div className='cart-item__details-price'>
                                                            ₦
                                                            {formatter.format(
                                                                item.price
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className=''>
                                                    <div className='item-group'>
                                                        <div className='cart-item__details-qty mb-2'>
                                                            <button
                                                                className='px-2 py-1 '
                                                                type='button'
                                                                disabled={
                                                                    item.quantity ===
                                                                    1
                                                                        ? true
                                                                        : false
                                                                }
                                                                onClick={() =>
                                                                    updateItemQuantity(
                                                                        item.id,
                                                                        item.quantity -
                                                                            1
                                                                    )
                                                                }>
                                                                -
                                                            </button>
                                                            <p className='px-3 py-1'>
                                                                {item.quantity}
                                                            </p>
                                                            <button
                                                                className='px-2 py-1 '
                                                                type='button'
                                                                onClick={() =>
                                                                    updateItemQuantity(
                                                                        item.id,
                                                                        item.quantity +
                                                                            1
                                                                    )
                                                                }>
                                                                +
                                                            </button>
                                                        </div>
                                                        <p className='fs-6 mt-2'>
                                                            Size:{' '}
                                                            {item.size
                                                                ? item.size
                                                                : 'Not specified'}
                                                        </p>
                                                        <button
                                                            type='button'
                                                            className='cart-item__remove mt-2'
                                                            onClick={() =>
                                                                removeItem(
                                                                    item.id
                                                                )
                                                            }>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </td>

                                                <td className=''>
                                                    <p className='d-flex justify-content-center total-price'>
                                                        ₦
                                                        {formatter.format(
                                                            item.price *
                                                                item.quantity
                                                        )}
                                                    </p>
                                                </td>
                                                {/* <div>
                                        <div className='cart-item__details'></div>
                                    </div> */}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                            {items.map((item, index) => {
                                return (
                                    <div
                                        className='cart-item1 d-md-none d-flex'
                                        key={index}>
                                        <img
                                            className='cart-item__image1'
                                            src={item.src}
                                            alt={item.alt}
                                        />
                                        <div className='cart-item__details1'>
                                            <h4 className='cart-item__details-name1'>
                                                {item.alt}
                                            </h4>
                                            <div className='cart-item__details-price1'>
                                                ₦{formatter.format(item.price)}
                                            </div>
                                            <p className='fs-6 mt-4'>
                                                Size:{' '}
                                                {item.size
                                                    ? item.size
                                                    : 'Not specified'}
                                            </p>
                                            <div className='item-group1  flex-wrap-sm-nowrap flex-wrap'>
                                                <div className='cart-item__details-qty1 '>
                                                    <button
                                                        className='px-2 py-1'
                                                        type='button'
                                                        disabled={
                                                            item.quantity === 1
                                                                ? true
                                                                : false
                                                        }
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                item.id,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        }>
                                                        -
                                                    </button>
                                                    <p className='px-3 py-1'>
                                                        {item.quantity}
                                                    </p>
                                                    <button
                                                        className='px-2 py-1 '
                                                        type='button'
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                item.id,
                                                                item.quantity +
                                                                    1
                                                            )
                                                        }>
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    type='button'
                                                    className='cart-item__remove1'
                                                    onClick={() =>
                                                        removeItem(item.id)
                                                    }>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        ''
                    )}

                    {!isEmpty ? (
                        <div className='cart__footer py-4 mx-auto bg-white '>
                            <div className='cart__total text-center'>
                                <p className='cart__total-title'>
                                    <strong>
                                        {' '}
                                        Subtotal:{' '}
                                        <span className='cart__total-price ms-2'>
                                            ₦{formatter.format(cartTotal)}
                                        </span>
                                    </strong>
                                </p>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button
                                    className='lh-0 me-2  cart__btn-empty text-uppercase text-white'
                                    onClick={() => emptyCart()}>
                                    Empty cart
                                </button>

                                <Link
                                    to='/checkout'
                                    className='text-decoration-none'>
                                    <Button className='lh-0 ms-2  cart__btn-checkout text-white text-uppercase'>
                                        <BsCart4 className='me-2 fs-6' />
                                        Checkout
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </Container>
        </main>
    );
};

export default Cart;

Cart.propTypes = {
    cart: PropTypes.object,
    onRemoveFromCart: () => {},
    onUpdateCartQty: () => {},
    onEmptyCart: () => {},
};
