import React, { useState, useMemo, useCallback, useEffect } from 'react';

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [dblNumber, setDblNumber] = useState(0)
  const doubleNumber = useCallback(() => {
    return slowFunction(number);
  }, [number]);
  useEffect(() => {
    let result = doubleNumber()
    setDblNumber(result)
  }, [doubleNumber])
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{dblNumber}</div>
    </>
  );
};



export default Memo;
