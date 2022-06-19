import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const DEFLT_STATE = {
  people: data,
  isModalOpen: false,
  modalContent: ''
};

const Index = () => {

  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, DEFLT_STATE);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
    <form onSubmit={submitHandler} className="form">
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add Person</button>
      </div>
    </form>
    {state.people.map(person => {
      return <div key={person.id} className="item">
        <h4>{person.name}</h4>
        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: person.id } })}>REMOVE</button>
      </div>
    })}
  </>;
};

export default Index;
