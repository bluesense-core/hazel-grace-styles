import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactUs from './ui/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './ui/Home';
import NalediShop from './ui/NalediShop';
import Checkout from './ui/Checkout';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Arcturus from './components/naledi/Arcturus';
import Canopus from './components/naledi/Canopus';
import Orion from './components/naledi/Orion';
import Castor from './components/naledi/Castor';
import Rigel from './components/naledi/Rigel';
import Procyon from './components/naledi/Procyon';
import Altair from './components/naledi/Altair';
import Sirius from './components/naledi/Sirius';
import Venus from './components/naledi/Venus';
import GenesisShop from './ui/GenesisShop';
import Pomegranate from './components/genesis/Pomegranate';
import Hazel from './components/genesis/Hazel';
import Pistachio from './components/genesis/Pistachio';
import Grace from './components/genesis/Grace';
import Jessica from './components/genesis/Jessica';
import Anita from './components/genesis/Anita';
import Naomi from './components/genesis/Naomi';
import Ruth from './components/genesis/Ruth';
import Chia from './components/genesis/Chia';
import Wildrice from './components/genesis/Wildrice';
import Quinoa from './components/genesis/Quinoa';
import Sesame from './components/genesis/Sesame';
import Yellow from './components/genesis/Yellow';
import BB from './components/genesis/BB';
import Esta from './components/genesis/Esta';
import Pink from './components/genesis/Pink';
import { CartProvider } from 'react-use-cart';

function App() {
    const formatter = new Intl.NumberFormat('en-US');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1800);
    }, []);
    return (
        <div>
            <CartProvider>
                <BrowserRouter>
                    <Header formatter={formatter} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/naledi'
                            element={
                                <NalediShop
                                    isLoading={isLoading}
                                    formatter={formatter}
                                />
                            }
                        />
                        <Route
                            path='/genesis'
                            element={
                                <GenesisShop
                                    isLoading={isLoading}
                                    formatter={formatter}
                                />
                            }
                        />
                        {/* Naledi CLothes */}
                        <Route
                            path='/naledi/arcturus-blouse'
                            element={<Arcturus formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/canopus-dress'
                            element={<Canopus formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/orion-dress'
                            element={<Orion formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/castor-ensemble'
                            element={<Castor formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/rigel-dress'
                            element={<Rigel formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/procyon-ensemble'
                            element={<Procyon formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/altair-dress'
                            element={<Altair formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/sirius-dress'
                            element={<Sirius formatter={formatter} />}
                        />
                        <Route
                            path='/naledi/venus-dress'
                            element={<Venus formatter={formatter} />}
                        />

                        {/* Genesis Clothes */}
                        <Route
                            path='/genesis/pomegranate-blouse'
                            element={<Pomegranate formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/hazel-shirt'
                            element={<Hazel formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/pistachio-blouse'
                            element={<Pistachio formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/grace-dress'
                            element={<Grace formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/jessica-dress'
                            element={<Jessica formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/anita-dress'
                            element={<Anita formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/naomi-dress'
                            element={<Naomi formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/ruth-dress'
                            element={<Ruth formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/chia-dress'
                            element={<Chia formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/wildrice-dress'
                            element={<Wildrice formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/quinoa-dress'
                            element={<Quinoa formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/sesame-dress'
                            element={<Sesame formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/yellow-dress'
                            element={<Yellow formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/bb-ensemble'
                            element={<BB formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/esta-dress'
                            element={<Esta formatter={formatter} />}
                        />
                        <Route
                            path='/genesis/pink-blouse'
                            element={<Pink formatter={formatter} />}
                        />

                        <Route
                            path='/cart'
                            element={<Cart formatter={formatter} />}
                        />
                        <Route
                            path='/checkout'
                            element={<Checkout formatter={formatter} />}
                        />
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

                        <Route path='/contact' element={<ContactUs />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
