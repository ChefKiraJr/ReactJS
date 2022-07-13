import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './cart.css';
import { Link } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';

const Cart = (props) => {
  const { cartData } = props;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [cartData]);
  // const [data, setData] = useState([]);
  // const fetchData = () => {
  //   axios
  //     .get('https://paragon-training-api.herokuapp.com/cart')
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => alert(err.name));
  // };
  // useEffect(() => {
  //   let cartData = getCartData();
  //   console.log(cartData);
  //   fetchData();
  // }, []);
  return (
    <>
      {isLoading ? (
        <>
          <div className="cart-title">
            <Skeleton height="42px" width="986px"></Skeleton>
          </div>
          {[1, 2, 3].map((i) => {
            return (
              <div className="cart-detail">
                <Skeleton height="100px" width="789px"></Skeleton>
              </div>
            );
          })}
          <div className="go-back-shopping">
            <Skeleton height="19.5px" width="986px"></Skeleton>
          </div>
        </>
      ) : (
        <>
          <div className="cart-title">
            <h1>Shopping Cart</h1>
          </div>
          {cartData.length > 0 &&
            cartData.map((value) => {
              return (
                <div className="cart-detail">
                  <img src={value.image} />
                  <span>{value.name}</span>
                </div>
              );
            })}
          <div className="go-back-shopping">
            <hr></hr>
            <Link to="/products">
              <p class="go-back-shopping">
                <span>←</span> Go back to Shopping
              </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
