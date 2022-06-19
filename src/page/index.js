import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../component/Login';
import App from '../App';
import Kartu from '../component/Kartu';
import Cart from '../component/Cart';
import axios from 'axios';

function Home() {
  const [cartData, setCartData] = useState([]);
  const getCartData = () => {
    axios
      .get('https://paragon-training-api.herokuapp.com/cart')
      .then((res) => {
        setCartData(res.data);
      })
      .catch((err) => alert(err.name));
  };
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Header cartData={cartData} />
        <div className="container">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Kartu getCartData={getCartData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart cartData={cartData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Home;
