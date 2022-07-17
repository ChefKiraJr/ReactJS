import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './cart.css';
import { Link } from 'react-router-dom';
import { Skeleton, Modal, ModalOverlay, ModalContent, Button, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';

const Cart = (props) => {
  // const { cartData } = props;
  const [cartData, setCartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { onOpen, onClose, isOpen } = useDisclosure();
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://paragon-training-api.herokuapp.com/cart');
      setCartData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>asdadadasdasdsadasd</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;
