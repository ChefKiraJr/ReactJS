import React, { useEffect, useRef, useState } from 'react';

const Ref = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  const inputRef = useRef();
  const prevName = useRef();
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus(e) {
    console.log(e);
    inputRef.current.click()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name}, before that {prevName.current}
      </div>
      <div>I have rendered {renderCount.current} times</div>
      <button onClick={(event) => focus(event)}>Focus</button>
    </>
  );
};

export default Ref;
