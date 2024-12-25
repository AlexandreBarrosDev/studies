import React, { useState } from 'react';
import Modal from '../Modal';
import './style.css';

function Card({ url, title, content, description }) {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleOpenModal}>See more</button>
            <Modal isOpen={showModal} onClose={handleCloseModal} items={{ url, title, content, description }}/>
        </div>
  )
}

export default Card;