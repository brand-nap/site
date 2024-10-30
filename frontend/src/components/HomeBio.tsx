import React from 'react'

const HomeBio = () => {
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

    return (
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
          
            </div>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))}
            <p>Offline, I <a target='_blank' href="https://www.strava.com/athletes/97182597">bike long distance,</a> <a target='_blank' href="https://open.spotify.com/artist/5zS9BwA5bdCOQCoVsQgx1J?si=0NsE8Ad0SSq6UobFPYdaHw&nd=1&dlsi=d5bb5bccffa14332">sing with the CU Buffoons,</a> and really love cooking for my friends.</p>

            <ul id='preferences'>
                {preferences.map((preference, index) => (
                    <li key={index} className='preference'>
                        {preference}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeBio