import React, {useEffect} from 'react'
import ContBack from '../components/ContBack';
import '../stylesheets/contact.css';

const Contact = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#473d36');
    document.documentElement.style.setProperty('--drop-select', '#272214');
    document.documentElement.style.setProperty('--drop-down', '#252423');
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