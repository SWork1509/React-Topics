import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>

    {/* <h1>{firstValue}</h1>
    <h1>value:{secondValue}</h1> */}

    <div>
      {isError ? <p>Check Error</p> : <p>There is no error</p>}
    </div>

    <h1>{text || 'Shubham Jain'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
    {isError && <h1>Error is present</h1>}




  </>;
};

export default ShortCircuit;
