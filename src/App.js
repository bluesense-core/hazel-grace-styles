import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactUs from './ui/ContactUs';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './ui/Home';
import NalediShop from './ui/NalediShop';
import Checkout from './ui/Checkout';
import { useState, useEffect } from 'react';
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
import Chia from './components/genesis/Chia';
import Wildrice from './components/genesis/Wildrice';
import Quinoa from './components/genesis/Quinoa';
import Sesame from './components/genesis/Sesame';

import Pink from './components/genesis/Pink';
import { CartProvider } from 'react-use-cart';
import HazelBee from './ui/HazelBee';
import HazelBabies from './ui/HazelBabies';
import HazelLifestyle from './ui/HazelLifestyle';
import BespokeShop from './ui/BespokeShop';
import Yellow from './components/resurgence/Yellow';
import Look1 from './components/resurgence/Look1';
import Look2 from './components/resurgence/Look2';
import Look3 from './components/resurgence/Look3';
import Look4 from './components/resurgence/Look4';
import Look5 from './components/resurgence/Look5';
import Look6 from './components/resurgence/Look6';
import Look7 from './components/resurgence/Look7';
import Look8 from './components/resurgence/Look8';
import Look9 from './components/resurgence/Look9';
import Look10 from './components/resurgence/Look10';
import Look11 from './components/resurgence/Look11';
import HazelBeeShop from './ui/HazelBeeShop';
import Grace from './components/hazelbee/single/Grace';
import Jessica from './components/hazelbee/single/Jessica';
import Anita from './components/hazelbee/single/Anita';
import Naomi from './components/hazelbee/single/Naomi';
import Ruth from './components/hazelbee/single/Ruth';
import BB from './components/hazelbee/single/BB';
import Esta from './components/hazelbee/single/Esta';
import Terms from './ui/Terms';
import Becca from './components/hazelbee/single/Becca';
import Jane from './components/hazelbee/single/Jane';
import Keith from './components/hazelbee/single/Keith';
import Cilia from './components/hazelbee/single/Cilia';
import Sanny from './components/hazelbee/single/Sanny';
import Zaya from './components/hazelbee/single/Zaya';
import Zuri from './components/hazelbee/single/Zuri';

function App() {
    const formatter = new Intl.NumberFormat('en-US');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            <CartProvider>
                <BrowserRouter>
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
                            path='/resurgence'
                            element={
                                <BespokeShop
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

                        {/* Resurgence Clothes */}
                        <Route
                            path='/resurgence/look-1'
                            element={<Look1 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-2'
                            element={<Look2 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-3'
                            element={<Look3 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-4'
                            element={<Look4 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-5'
                            element={<Look5 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-6'
                            element={<Look6 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-7'
                            element={<Look7 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-8'
                            element={<Look8 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-9'
                            element={<Look9 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-10'
                            element={<Look10 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-11'
                            element={<Look11 formatter={formatter} />}
                        />
                        <Route
                            path='/resurgence/look-12'
                            element={<Yellow formatter={formatter} />}
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
                            path='/genesis/sophie-blouse'
                            element={<Pink formatter={formatter} />}
                        />

                        <Route path='/hazelbee' element={<HazelBee />} />
                        <Route
                            path='/hazelbee/shop'
                            element={
                                <HazelBeeShop
                                    isLoading={isLoading}
                                    formatter={formatter}
                                />
                            }
                        />
                        {/* Hazel Bee Clothes */}
                        <Route
                            path='/hazelbee/shop/grace-dress'
                            element={<Grace formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/shop/jessica-dress'
                            element={<Jessica formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/shop/anita-dress'
                            element={<Anita formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/shop/naomi-dress'
                            element={<Naomi formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/shop/ruth-dress'
                            element={<Ruth formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/shop/bb-ensemble'
                            element={<BB formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/lush-blouse'
                            element={
                                <Navigate
                                    to='/hazelbee/shop/bb-ensemble'
                                    replace
                                />
                            }
                        />

                        <Route
                            path='/hazelbee/shop/esta-dress'
                            element={<Esta formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/becca-set'
                            element={<Becca formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/jane-dress'
                            element={<Jane formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/keith-set'
                            element={<Keith formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/cilia-dress'
                            element={<Cilia formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/sanny-kimono-dress'
                            element={<Sanny formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/zaya-dress'
                            element={<Zaya formatter={formatter} />}
                        />

                        <Route
                            path='/hazelbee/shop/zuri-set'
                            element={<Zuri formatter={formatter} />}
                        />

                        <Route path='/hazelbabies' element={<HazelBabies />} />
                        <Route
                            path='/hazellifestyle'
                            element={<HazelLifestyle />}
                        />

                        <Route
                            path='/cart'
                            element={<Cart formatter={formatter} />}
                        />
                        <Route
                            path='/checkout'
                            element={<Checkout formatter={formatter} />}
                        />

                        <Route path='/contact' element={<ContactUs />} />
                        <Route path='/terms' element={<Terms />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
