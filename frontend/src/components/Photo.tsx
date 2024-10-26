import React from 'react';



const Photo = ({ src, alt = 'Image', className = 'photo'}) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Photo;