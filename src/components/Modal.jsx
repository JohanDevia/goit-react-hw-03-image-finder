import React, { useEffect } from 'react';
import '../styles.css';

const Modal = ({ isOpen, imageUrl, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27 && isOpen) {
        // Verifica si la tecla presionada es ESC (código 27)
        closeModal(); // Cierra el modal llamando a la función closeModal
      }
    };

    const handleClickOutside = event => {
      if (event.target === event.currentTarget && isOpen) {
        // Verifica si se hizo clic en la superposición (event.currentTarget)
        closeModal(); // Cierra el modal llamando a la función closeModal
      }
    };

    // Agrega event listeners para escuchar las pulsaciones de teclas y los clics en la superposición
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal" onClick={e => e.stopPropagation()}>
        {/* Detiene la propagación del evento de clic en la ventana modal para evitar que se cierre al hacer clic dentro de ella */}
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
