import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const name = 'Brandon A. Perez';

  const titles = ['Coder', '|', 'Biker', '|', 'Cook', '|', 'Singer'];
  const preferences = [
    'Action > Daydreams',
    'Good Questions > Answers',
    'Touching Grass > Code',
  ];
  const paragraphs = [
    "Software Developer interested in Deep Learning applications that can help enable communities and businesses alike.",
    "My coding career started around 8 years old, building mods for Minecraft with Java. From there, I went on to teach Video Game Design, complete a bootcamp on Full Stack Development, and focus my collegiate studies towards Machine Learning. Now, I am conducting research with CU Boulder's Natural Language Processing lab, BLAST, and interning for Splunk's Cloud Computing team. I'm also on the hunt for fast-paced internships for the Summer of 2025",
    "Offline, I bike long distance, sing with the CU Buffoons, and really love cooking for friends.",
  ];

  const night_images = [
    1,
    2,
    3,
    4,
    5,
    6
  ];

  const day_images = [
    1,
    2,
    3,
    4,
    5,
    6
  ];

  return (
    <div id='home-page'>
      <div id='pic-carousel'></div>
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
            <li key={index}>
              {preference}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;