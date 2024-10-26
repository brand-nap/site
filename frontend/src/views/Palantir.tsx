import React, {useEffect} from 'react';
import '../stylesheets/palantir.css';

const Palantir = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#000000');
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Palantir