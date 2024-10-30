import React, {useEffect, useRef} from 'react';
import Carousel from '../components/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../stylesheets/home.css";
import HomeBio from '../components/HomeBio';

const Home = () => {

  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#252423');
    document.documentElement.style.setProperty('--drop-select', '#565351');
    document.documentElement.style.setProperty('--drop-down', 'rgb(164, 156, 156)');
    document.documentElement.style.setProperty('---scrollable', 'hidden');
  }, []);

  
  let pics1 = [
    '/pics/balloons.jpeg',
    '/pics/yume.jpeg',
    '/pics/hawaii.jpg',
    '/pics/bike_garage.jpg',
    '/pics/banana_bread.jpeg',
    '/pics/dance_rome.jpeg',
  ];
  pics1 = pics1.concat(pics1);
  
  let pics2 = [
    '/pics/sf.jpg',
    '/pics/cali_sign.jpg',
    '/pics/kid_on_car.jpeg',
    '/pics/black_canyon.jpg',
    '/pics/seattle.jpeg',
    '/pics/surfers.jpg',
  ];
  pics2 = pics2.concat(pics2);

  let pics3 = [
    '/pics/peachy_pompeii.jpg',
    '/pics/spiderman.jpeg',
    '/pics/roman_forum.jpg',
    '/pics/karaoke.jpg',
    '/pics/rino_rhinos.jpeg',
    '/pics/nye_fire.jpeg',
  ];
  pics3 = pics3.concat(pics3);

  return (
    <div id='home-page'>
      <div id='pic-carousel'>
        <Carousel srcList={pics1} id="first-car"/>
        <Carousel srcList={pics2} id="mid-car" />
        <Carousel srcList={pics3} id="last-car"/>
      </div>
      <HomeBio></HomeBio>
    </div>
  );
};

export default Home;