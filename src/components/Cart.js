import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {
    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
            return;
        }

        return (
            <div className='py-5 cart__empty'>
                <h6 className='text-center text-uppercase mb-3'>
                    Your Cart is Empty
                </h6>
                <p className='cart__none text-center '>
                    You have no items in your shopping cart, start adding some!
                </p>
            </div>
        );
    };

    const renderItems = () =>
        cart.line_items.map((lineItem) => (
            <CartItem
                item={lineItem}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
                key={lineItem.id}
                className='cart__inner'
            />
        ));

    const renderTotal = () => (
        <div className='cart__total text-center'>
            <p className='cart__total-title'>
                <strong>
                    {' '}
                    Subtotal:{' '}
                    <span className='cart__total-price ms-3'>
                        {cart.subtotal.formatted_with_symbol}
                    </span>
                </strong>
            </p>
        </div>
    );

    return (
        <div className='cart'>
            <div className=''>
                {renderEmptyMessage()}
                {renderItems()}
                {renderTotal()}
            </div>
        </div>
    );
};

export default Cart;

Cart.propTypes = {
    cart: PropTypes.object,
    onRemoveFromCart: () => {},
    onUpdateCartQty: () => {},
    onEmptyCart: () => {},
};
