import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './kartu.css';

const Kartu = (props) => {
  const { getCartData } = props;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const fetchData = () => {
    axios
      .get('https://paragon-training-api.herokuapp.com/products')
      .then((res) => setData(res.data))
      .catch((err) => alert(err.name));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addCart = (value) => {
    axios
      .post('https://paragon-training-api.herokuapp.com/cart', value)
      .then((res) => getCartData())
      .catch((err) => alert(err.name));
  };
  return (
    <>
      {data.length > 0 && (
        <>
          <div className="product">
            {data.map((value, i) => {
              return (
                <div className="kartu">
                  <div className="img-prod">
                    <img src={value.image} alt="value-img" />
                  </div>
                  <div className="title">
                    <p>{value.name}</p>
                  </div>
                  <div className="cart-button">
                    <button onClick={() => addCart(value)} type="button">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total-kartu">{<p>Total Cart:{count}</p>}</div>
        </>
      )}
    </>
  );
};

export default Kartu;
