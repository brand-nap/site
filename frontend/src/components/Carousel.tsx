import React from 'react';
import Photo from './Photo';

const Carousel = ({ srcList, id, photoClass = "photo" }) => {
  return (
    <div className='carousel' id={id}>
      {srcList.map((src, index) => (
        <Photo key={index} src={src} alt={`Image ${index + 1}`} className={photoClass} />
      ))}
    </div>
  );
};

export default Carousel;