import React from 'react';
import '../styles.css';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className="gallery-item" onClick={() => openModal(image.largeImageURL)}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
