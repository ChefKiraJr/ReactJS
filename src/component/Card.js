import React from 'react';

const Card = (props) => {
  console.log(props, 'ini card');
  return (
    <div class="card">
      <h2>{props.person}</h2>
      <p class="title">{props.name}</p>
      <p>{props.job}</p>
    </div>
  );
};

export default Card;
