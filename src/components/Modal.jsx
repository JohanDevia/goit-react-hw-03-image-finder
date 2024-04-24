import React from 'react';
import '../styles.css';

const Modal = ({ isOpen, imageUrl, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
