import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Carousel from '../components/Carousel';

const Home = () => {
  const name = 'Brandon A. Perez';

  const titles = ['Coder', '|', 'Biker', '|', 'Cook', '|', 'Singer'];
  const preferences = [
    'Action > Daydreams',
    'Good Questions > Answers',
    'Touching Grass > Code',
  ];
  const paragraphs = [
    "Software Developer interested in building disruptive, accessible Deep Learning applications to enable communities and businesses alike.",
    "My coding career started around 8 years old, building mods for Minecraft with Java. From there, I went on to teach Video Game Design, complete a 12 week bootcamp on Full Stack Development, and focus my collegiate studies towards Machine Learning.",
    "Now, I'm conducting research with CU Boulder's Natural Language Processing lab, BLAST, and interning for Splunk's Cloud Computing team. I'm also on the hunt for fast-paced internships for the Summer of 2025.",
    "Offline, I bike long distance, sing with the CU Buffoons, and really love cooking for my friends.",
  ];

  let pics1 = [
    '/pics/balloons.jpeg',
    '/pics/yume.jpeg',
    '/pics/hawaii.jpg',
    '/pics/digging.jpeg',
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
        <Carousel srcList={pics2} id="mid-car"/>
        <Carousel srcList={pics3} id="last-car"/>
      </div>
      <div id='home-bio'>
        <h2 id='home-name'>{name}</h2>
        
        <ul id='titles'>
          {titles.map((title, index) => (
            <li key={index}>
              {title}
            </li>
          ))}
        </ul>

        {/* Paragraphs Animation */}
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

        {/* Preferences Animation */}
        <ul id='preferences'>
          {preferences.map((preference, index) => (
            <li key={index} className='preference'>
              {preference}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;