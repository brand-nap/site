import React from 'react'
import Carousel from '../components/Carousel';

let pics = [
  '/pics/balloons.jpeg',
  '/pics/bike_garage.jpg',
  '/pics/yume.jpeg',
  '/pics/hawaii.jpg',
  '/pics/cali_sign.jpg',
  '/pics/kid_on_car.jpeg',
  '/pics/black_canyon.jpg',
  '/pics/boston_bridge.jpg',
  '/pics/surfers.jpg',
  '/pics/peachy_pompeii.jpg',
  '/pics/stars.jpeg',
  '/pics/roman_forum.jpg',
  '/pics/tent.jpeg',
  '/pics/paros.jpeg',
  '/pics/nye_fire.jpeg',
];
pics = pics.concat(pics);

const HorizCaro = () => {
  return (
    <div id='pic-car-hor'>
        <Carousel id="car-hor" srcList={pics} photoClass='horizontal' />
    </div>
  )
}

export default HorizCaro