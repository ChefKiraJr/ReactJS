import React, { useEffect, useState } from 'react';
import Header from '../component/kahf/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../component/kahf/Login/Login';
import Kartu from '../component/kahf/Kartu/Kartu';
import Cart from '../component/kahf/Cart/Cart';
import axios from 'axios';
import Blank from '../component/kahf/Blank/Blank';
import { ChakraProvider } from '@chakra-ui/react';

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
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <Header cartData={cartData} />
          <div className="container">
            <Routes>
              {/* <Route path="/" element={<Blank page="Home Page" />} /> */}
              <Route path="/products" element={<Kartu getCartData={getCartData} />} />
              {/* <Route path="/brand" element={<Blank page="Brand Page" />} />
            <Route path="/kahf-product" element={<Blank page="Kahf Program Page" />} />
            <Route path="/discovery" element={<Blank page="Discovery Page" />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart cartData={cartData} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default Home;
