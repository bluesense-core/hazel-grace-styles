import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactUs from './ui/ContactUs';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './ui/Home';
import Shop from './ui/Shop';
import Checkout from './ui/Checkout';
import Confirmation from './ui/Confirmation';
import { useState, useEffect } from 'react';
import { cartItems } from './components/Images';
import Header from './ui/Header';
import Footer from './ui/Footer';
import commerce from './lib/commerce';
// import { Checkout } from '@chec/commerce.js/features/checkout';

function App() {
    const [cards, setCards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        fetchProducts();
        fetchCart();
        loadOrderFromLocalStorage();
    }, []);

    /**
     * Fetch a saved order receipt from local storage so we can show the confirmation page
     * again between page refreshes.
     */
    const loadOrderFromLocalStorage = () => {
        if (window.localStorage.getItem('order_receipt')) {
            return JSON.parse(window.localStorage.getItem('order_receipt'));
        }
    };

    const [order, setOrder] = useState(loadOrderFromLocalStorage() ?? {});

    /**
     * Retrieve the current cart or create one if one does not exist
     * https://commercejs.com/docs/sdk/cart
     */
    const fetchCart = () => {
        commerce.cart
            .retrieve()
            .then((cart) => {
                setCart(cart);
            })
            .catch((error) => {
                console.log('There was an error fetching the cart', error);
            });
    };

    const fetchProducts = () => {
        commerce.products
            .list({ limit: 100 })
            .then((products) => {
                setProducts(products.data);
            })
            .catch((error) => {
                console.log('There was an error fetching the products', error);
            });
    };

    /**
     * Adds a product to the current cart in session
     * https://commercejs.com/docs/sdk/cart/#add-to-cart
     *
     * @param {string} productId The ID of the product being added
     * @param {number} quantity The quantity of the product being added
     */
    const handleAddToCart = (productId, quantity) => {
        commerce.cart
            .add(productId, quantity)
            .then((item) => {
                setCart(item.cart);
            })
            .catch((error) => {
                console.error(
                    'There was an error adding the item to the cart',
                    error
                );
            });
    };

    /**
     * Removes line item from cart
     * https://commercejs.com/docs/sdk/cart/#remove-from-cart
     *
     * @param {string} lineItemId ID of the line item being removed
     */
    const handleRemoveFromCart = (lineItemId) => {
        commerce.cart
            .remove(lineItemId)
            .then((resp) => {
                setCart(resp.cart);
            })
            .catch((error) => {
                console.error(
                    'There was an error removing the item from the cart',
                    error
                );
            });
    };

    /**
     * Updates line_items in cart
     * https://commercejs.com/docs/sdk/cart/#update-cart
     *
     * @param {string} lineItemId ID of the cart line item being updated
     * @param {number} newQuantity New line item quantity to update
     */
    const handleUpdateCartQty = (lineItemId, quantity) => {
        commerce.cart
            .update(lineItemId, { quantity })
            .then((resp) => {
                setCart(resp.cart);
            })
            .catch((error) => {
                console.log(
                    'There was an error updating the cart items',
                    error
                );
            });
    };

    /**
     * Empties cart contents
     * https://commercejs.com/docs/sdk/cart/#remove-from-cart
     */
    const handleEmptyCart = () => {
        commerce.cart
            .empty()
            .then((resp) => {
                setCart(resp.cart);
            })
            .catch((error) => {
                console.error('There was an error emptying the cart', error);
            });
    };

    const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
        commerce.checkout
            .capture(checkoutTokenId, newOrder)
            .then((order) => {
                setOrder(order);
                // Store the order in session storage so we can show it again
                // if the user refreshes the page!
                window.localStorage.setItem(
                    'order_receipt',
                    JSON.stringify(order)
                );
                // Clears the cart
                refreshCart();
                // Send the user to the receipt
                <Navigate replace to={'/confirmation'} />;
            })
            .catch((error) => {
                console.log('There was an error confirming your order', error);
            });
    };

    const refreshCart = () => {
        commerce.cart
            .refresh()
            .then((newCart) => {
                setCart(newCart);
            })
            .catch((error) => {
                console.log('There was an error refreshing your cart', error);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            fetch(cards).then(() => {
                setIsLoading(false);
            });
        }, 1800);
    }, []);
    return (
        <div>
            <BrowserRouter>
                <Header
                    cart={cart}
                    onUpdateCartQty={handleUpdateCartQty}
                    onRemoveFromCart={handleRemoveFromCart}
                    onEmptyCart={handleEmptyCart}
                />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='shop'
                        element={
                            <Shop
                                products={products}
                                isLoading={isLoading}
                                onAddToCart={handleAddToCart}
                            />
                        }
                    />
                    {/* <Route
                        path='checkout'
                        element={
                            <Checkout
                                cart={cart}
                                onCaptureCheckout={handleCaptureCheckout}
                            />
                        }
                    /> */}
                    {/* <Route
                        path='confirmation'
                        element={
                            !order ? (
                                <Navigate replace to={'/'} />
                            ) : (
                                <Confirmation
                                    order={order}
                                    onBackToHome={() =>
                                        window.localStorage.removeItem(
                                            'order_receipt'
                                        )
                                    }
                                />
                            )
                        }
                    /> */}

                    <Route path='contact-us' element={<ContactUs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
