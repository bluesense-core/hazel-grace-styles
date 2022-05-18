import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactUs from './ui/ContactUs';
import Header from './ui/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './ui/Home';
import Shop from './ui/Shop';
import { useState, useEffect } from 'react';
import { shopImages } from './components/Images.js';

function App() {
    const [cards, setCards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(cards).then((e) => {
                setIsLoading(false);
                setCards({ shopImages });
            });
        }, 1500);
    }, []);
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='shop'
                        element={
                            <Shop isLoading={isLoading} data={shopImages} />
                        }
                    />
                    <Route path='contact-us' element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
