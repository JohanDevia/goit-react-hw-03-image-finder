import React from 'react';
import '../styles.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button className="load-more" onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

export default Button;
