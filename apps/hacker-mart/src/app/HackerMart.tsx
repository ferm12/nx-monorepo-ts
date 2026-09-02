import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import { item } from './types';


function HackerMart(){
    const [cart, setCart] = useState<item[]>([]);

    const addToCart = (item: item) => {
        setCart((prev) =>
            prev.some(el => el.id === item.id)
            ? [...prev]
            : [...prev, item]
        )
    }

    const removeFromCart = (item: item) => {
        setCart((prev) =>
            prev.filter(el => el.id !== item.id)
        )
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    )
}

export default HackerMart;
