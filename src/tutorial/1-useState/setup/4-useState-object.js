import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Shubham', age: 27, message: 'Random Message' })


  const msgChangeHandler = () => {
    setPerson({ ...person, message: 'New message' });
  }

  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={msgChangeHandler}>Change Message</button>
  </>;
};

export default UseStateObject;
