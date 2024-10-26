import React, {useEffect} from 'react';
import Carousel from '../components/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../stylesheets/home.css'


const Home = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#252423');
  }, []);
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
    "Now, I'm conducting research with CU Boulder's Natural Language Processing lab, BLAST, and interning for Splunk's Cloud Computing team. I'm also on the hunt for fast-paced internships for the Summer of 2025."
  ];

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
        <Carousel srcList={pics1} id="first-car" />
        <Carousel srcList={pics2} id="mid-car" />
        <Carousel srcList={pics3} id="last-car"/>
      </div>
      <div id='home-bio'>
        <div id='home-top'>
          <div>
          <h2 id='home-name'>{name}</h2>
        
        <ul id='titles'>
          {titles.map((title, index) => (
            <li key={index}>
              {title}
            </li>
          ))}
        </ul>
          </div>
          <Link to='/for-palantirs-eyes-only' style={{ textDecoration: 'none'}}><button id='home-p-btn'><p>For</p>  <p className='palantir'>^ Palantir</p></button></Link>
        
        </div>

        {/* Paragraphs Animation */}
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
        <p>Offline, I <a target='_blank' href="https://www.strava.com/athletes/97182597">bike long distance,</a> <a target='_blank' href="https://open.spotify.com/artist/5zS9BwA5bdCOQCoVsQgx1J?si=0NsE8Ad0SSq6UobFPYdaHw&nd=1&dlsi=d5bb5bccffa14332">sing with the CU Buffoons,</a> and really love cooking for my friends.</p>

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