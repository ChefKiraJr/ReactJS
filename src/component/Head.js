import React from 'react';
import CardApp from './CardApp';
import Card from './Card';

const Head = (props) => {
  return (
    <div>
      <h1>HELLO MY FRIEND!</h1>
      <Card person={props.person} name="Rafi Naufal" job="FrontEnd Dev" />
    </div>
  );
};

export default Head;
