import React from 'react'
import Carousel from '../components/Carousel';

let pics = [
  '/pics/balloons.jpeg',
  '/pics/dance_rome.jpeg',
  '/pics/yume.jpeg',
  '/pics/hawaii.jpg',
  '/pics/cali_sign.jpg',
  '/pics/kid_on_car.jpeg',
  '/pics/black_canyon.jpg',
  '/pics/seattle.jpeg',
  '/pics/surfers.jpg',
  '/pics/peachy_pompeii.jpg',
  '/pics/sf.jpg',
  '/pics/roman_forum.jpg',
  '/pics/spiderman.jpeg',
  '/pics/rino_rhinos.jpeg',
  '/pics/nye_fire.jpeg',
];
pics = pics.concat(pics);

const Contact = () => {
  return (
    <div id='contact-page'>
      <h2>Contact Me</h2>
      <form id='contact-form'>
        <input type="email" name="email" id="" placeholder="your email" />
        <input type="file" name="file" id="" />
        <input type="text" placeholder="subject" />
        <input type="text" placeholder="body"/>
        <input type="submit" value="submit" />
      </form>
      <div id='pic-car-hor'>
        <Carousel id="car-hor" srcList={pics} photoClass='horizontal'/>
      </div>
    </div>
    
  )
}

export default Contact