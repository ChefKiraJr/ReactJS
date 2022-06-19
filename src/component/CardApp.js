import React from 'react';
import Head from './Head';
import Card from './Card';

const CardApp = (props) => {
  console.log(props, 'ini app');
  return (
    <div>
      <Card person={props.person} name="Rafi Naufal" job="FrontEnd Developer" />
      <Card person={props.person} name="Gilang Bandol" job="Project Manager" />
      <Card person={props.person} name="Nisa Sabyan" job="UI/UX Designer" />
    </div>
  );
};

export default CardApp;
