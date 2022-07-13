import React, { useState } from 'react';
import './blank.css';
// import { useCount } from '../store/storeContext/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '../../../store/storeRedux/actions/countAction';

const Blank = (props) => {
  const { count, text } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="landing-page">
      <h1>Anda Sedang Berada di {props.page}</h1>
      <button onClick={() => dispatch(setCount(5))}>-</button>
      <span>{count}</span>
      <p>{text}</p>
    </div>
  );
};

export default Blank;
