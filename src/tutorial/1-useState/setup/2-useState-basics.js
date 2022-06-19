import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Hello'));
  // const val = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(val, handler);

  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if (text === 'Random Title') {
      setText('Text Change');
    } else {
      setText('Random Title');
    }
  }

  return (<React.Fragment>
    <h2>{text}</h2>;
    <button className='btn' onClick={handleClick}>Change Title</button>
  </React.Fragment>)
};

export default UseStateBasics;
