import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  }

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })

  console.log(refContainer);

  return <>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
      </div>
    </form>
    <div ref={divContainer}>Hello world</div>
  </>;
};

export default UseRefBasics;
