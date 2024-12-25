import React from 'react';
import './style.css';

function Modal({isOpen, onClose, items}) {
  if(!isOpen) return null;
  return (
    <div className='fade'>
      <div id={items.url} className='modal'>
        <h2>{items.title}</h2>
        <p>{items.content}</p>
        <p>{items.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal