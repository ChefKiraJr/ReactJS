import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const Calculator = () => {
  const [screenValue, setScreenValue] = useState(0);
  const handleClick = (value) => {
    console.log(value);
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (screenValue === 0) {
      setScreenValue(value);
    } else if (arr.includes(value)) {
      setScreenValue(screenValue.toString() + value.toString());
    } else if (value === 'C') {
      setScreenValue(0);
    } else if ((value === '+' || value === '-' || value === 'X' || value === '/' || value === '%') && arr.includes(parseInt(screenValue.toString()[screenValue.length - 1]))) {
      setScreenValue(screenValue.toString() + value.toString());
    }
  };
  return (
    <Wrapper>
      <Screen value={screenValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return <Button className="" value={btn} onClick={() => handleClick(btn)} />;
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
