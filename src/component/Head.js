import React from 'react';
// import CardApp from './CardApp';
// import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from '../store/storeRedux/actions/textAction';

const Head = (props) => {
  const { count } = useSelector((state) => state.countReducer);
  const { text } = useSelector((state) => state.textReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HELLO MY FRIEND!</h1>
      <span>{count}</span>
      <button onClick={() => dispatch(setText('LAGI'))}>Change text</button>
      <button onClick={() => dispatch(setText('KOK BERUBAH YA'))}>Change text 2</button>
      <p>{text}</p>
      {/* <Card person={props.person} name="Rafi Naufal" job="FrontEnd Dev" /> */}
    </div>
  );
};

export default Head;
