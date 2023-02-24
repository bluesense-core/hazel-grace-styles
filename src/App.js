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
import Header from './components/Header';
import Footer from './components/Footer';
import commerce from './lib/commerce';
import Cart from './components/Cart';
// import { Checkout } from '@chec/commerce.js/features/checkout';

function App() {
    const formatter = new Intl.NumberFormat('en-US');

    const [cards, setCards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showCart, setShowCart] = useState(false);

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
                    formatter={formatter}
                    showCart={showCart}
                    setShowCart={setShowCart}
                />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route
                        path='shop'
                        element={
                            <Shop
                                isLoading={isLoading}
                                showCart={showCart}
                                setShowCart={setShowCart}
                                formatter={formatter}
                            />
                        }
                    /> */}
                    {/* <Route
                        path='cart'
                        element={<Cart formatter={formatter} />}
                    /> */}
                    {/* <Route
                        path='checkout'
                        element={<Checkout formatter={formatter} />}
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

                    <Route path='contact' element={<ContactUs />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
