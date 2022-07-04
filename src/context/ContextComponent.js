import React, { useContext, useState } from 'react';
import { useTheme, useCount, useUpdate } from '../store/storeContext/ThemeContext';

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const updateTheme = useUpdate();
  const [countNum, setCountNum] = useState(useCount());
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  return (
    <>
      <button onClick={updateTheme}>Toggle Theme</button>
      <div style={{ backgroundColor: darkTheme ? '#333' : '#CCC', color: darkTheme ? '#CCC' : '#333', padding: '2rem', margin: '2rem' }}>Function Theme</div>
      <button onClick={() => setCountNum(countNum - 1)}>-</button>
      <span>{countNum}</span>
      <button onClick={() => setCountNum(countNum + 1)}>+</button>
    </>
  );
};

export default FunctionContextComponent;
