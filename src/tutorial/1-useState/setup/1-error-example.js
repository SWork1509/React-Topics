import React from 'react';

const ErrorExample = () => {
  let title = "Sample title";

  const clickHandler = () => {
    title = "title changes";
    console.log(title);
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' onClick={clickHandler}>Click Me</button>
    </React.Fragment>
  );
};

export default ErrorExample;
