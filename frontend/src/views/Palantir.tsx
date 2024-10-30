import React, {useEffect, useState} from 'react';
import "../stylesheets/palantir.css";

const Palantir = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#000000');
  }, []);

  return (
    <div>
      <p></p>
    </div>
  )
}

export default Palantir