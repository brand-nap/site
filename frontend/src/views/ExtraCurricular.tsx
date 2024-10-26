import React, {useEffect} from 'react';
import '../stylesheets/extracurricular.css';

const ExtraCurricular = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#565351');
  }, []);
  return (
    <div>ExtraCurricular</div>
  )
}

export default ExtraCurricular