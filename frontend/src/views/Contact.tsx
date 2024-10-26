import React, {useEffect} from 'react'
import HorizCaro from '../components/HorizCaro';
import ContBack from '../components/ContBack';
import '../stylesheets/contact.css';

const Contact = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#473d36');
  }, []);
  return (
    <div>
      <div id='contact-page'>
        <ContBack></ContBack>
      </div>
    </div>
    
  )
}

export default Contact