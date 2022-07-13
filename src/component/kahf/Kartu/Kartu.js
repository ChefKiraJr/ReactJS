import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './kartu.css';
import { Button, Skeleton, Text } from '@chakra-ui/react';

const Kartu = (props) => {
  const { getCartData } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () => {
    axios
      .get('https://paragon-training-api.herokuapp.com/products')
      .then((res) => {
        setData(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        // alert(err.name)
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  };
  // const fetchData3 = async() => {
  //   try{
  //     const response = await axios.get('https://paragon-training-api.herokuapp.com/products')
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  // const fetchData2 = async() => {
  //   try{
  //     const response = await axios.get('https://paragon-training-api.herokuapp.com/products')
  //     fetchData3(response.id)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  useEffect(() => {
    fetchData();
  }, []);
  const addCart = (value) => {
    axios
      .post('https://paragon-training-api.herokuapp.com/cart', value)
      .then((res) => getCartData())
      .catch((err) => alert(err.name));
  };

  const sort = useCallback(() => {
    if (data.length > 0) {
      return data.sort((a, b) => b.id - a.id);
    }
  }, [data]);
  // useEffect(() => {
  //   sort()
  // }, [data])

  return (
    <>
      {isLoading ? (
        <div className="product">
          {[1, 2, 3].map((i) => {
            return (
              <div className="kartu">
                <Skeleton height="290px" width="250px"></Skeleton>
                <Skeleton height="30px" width="250px" marginTop="15px" marginBottom="20px"></Skeleton>
                <Skeleton height="40px" width="250px"></Skeleton>
              </div>
            );
          })}
        </div>
      ) : data.length > 0 ? (
        <>
          <div className="product">
            {sort().map((value, i) => {
              return (
                <div className="kartu">
                  <div className="img-prod">
                    <img src={value.image} alt="value-img" />
                  </div>
                  <div className="title">
                    <p>{value.name}</p>
                  </div>
                  {/* <div className="cart-button"> */}
                  <Button onClick={() => addCart(value)} colorScheme="blackAlpha" variant="solid" width="100%">
                    ADD TO CART
                  </Button>
                  {/* <button onClick={() => addCart(value)} type="button">
                      ADD TO CART
                    </button> */}
                  {/* </div> */}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <Text>404 Data Not Found</Text>
      )}
    </>
  );
};

export default Kartu;
