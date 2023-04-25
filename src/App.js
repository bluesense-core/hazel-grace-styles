import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactUs from './ui/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Grace from './components/genesis/Grace';
import Jessica from './components/genesis/Jessica';
import Anita from './components/genesis/Anita';
import Naomi from './components/genesis/Naomi';
import Ruth from './components/genesis/Ruth';
import Chia from './components/genesis/Chia';
import Wildrice from './components/genesis/Wildrice';
import Quinoa from './components/genesis/Quinoa';
import Sesame from './components/genesis/Sesame';
import BB from './components/genesis/BB';
import Esta from './components/genesis/Esta';
import Pink from './components/genesis/Pink';
import { CartProvider } from 'react-use-cart';
import HazelBee from './ui/HazelBee';
import HazelBabies from './ui/HazelBabies';
import HazelLifestyle from './ui/HazelLifestyle';
import BespokeShop from './ui/BespokeShop';
import Yellow from './components/bespoke/Yellow';
import Look1 from './components/bespoke/Look1';
import Look2 from './components/bespoke/Look2';
import Look3 from './components/bespoke/Look3';
import Look4 from './components/bespoke/Look4';
import Look5 from './components/bespoke/Look5';
import Look6 from './components/bespoke/Look6';
import Look7 from './components/bespoke/Look7';
import Look8 from './components/bespoke/Look8';
import Look9 from './components/bespoke/Look9';
import Look10 from './components/bespoke/Look10';
import Look11 from './components/bespoke/Look11';

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
                            path='/bespoke'
                            element={<BespokeShop isLoading={isLoading} />}
                        />
                        <Route
                            path='/hazelbee/genesis'
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

                        {/* Bespoke Clothes */}
                        <Route path='/bespoke/look-1' element={<Look1 />} />
                        <Route path='/bespoke/look-2' element={<Look2 />} />
                        <Route path='/bespoke/look-3' element={<Look3 />} />
                        <Route path='/bespoke/look-4' element={<Look4 />} />
                        <Route path='/bespoke/look-5' element={<Look5 />} />
                        <Route path='/bespoke/look-6' element={<Look6 />} />
                        <Route path='/bespoke/look-7' element={<Look7 />} />
                        <Route path='/bespoke/look-8' element={<Look8 />} />
                        <Route path='/bespoke/look-9' element={<Look9 />} />
                        <Route path='/bespoke/look-10' element={<Look10 />} />
                        <Route path='/bespoke/look-11' element={<Look11 />} />
                        <Route path='/bespoke/look-12' element={<Yellow />} />

                        {/* Genesis Clothes */}
                        <Route
                            path='/hazelbee/genesis/pomegranate-blouse'
                            element={<Pomegranate formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/hazel-shirt'
                            element={<Hazel formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/pistachio-blouse'
                            element={<Pistachio formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/grace-dress'
                            element={<Grace formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/jessica-dress'
                            element={<Jessica formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/anita-dress'
                            element={<Anita formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/naomi-dress'
                            element={<Naomi formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/ruth-dress'
                            element={<Ruth formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/chia-dress'
                            element={<Chia formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/wildrice-dress'
                            element={<Wildrice formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/quinoa-dress'
                            element={<Quinoa formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/sesame-dress'
                            element={<Sesame formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/yellow-dress'
                            element={<Yellow formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/bb-ensemble'
                            element={<BB formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/esta-dress'
                            element={<Esta formatter={formatter} />}
                        />
                        <Route
                            path='/hazelbee/genesis/pink-blouse'
                            element={<Pink formatter={formatter} />}
                        />

                        <Route path='/hazelbee' element={<HazelBee />} />
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
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
