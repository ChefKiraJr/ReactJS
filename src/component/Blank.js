import React from 'react';
import './blank.css';

const Blank = (props) => {
  return (
    <div className="landing-page">
      <h1>Anda Sedang Berada di {props.page}</h1>
    </div>
  );
};

export default Blank;
