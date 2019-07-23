import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero.jsx';
import Single from './Single.jsx';
import VideoSingle from './VideoSingle.jsx';
import TitleBar from './TitleBar.jsx';
import heroText from '../data/heroText.js';
import projectText from '../data/projectText.js';
import placeholder from '../styles/projectImages/responsive-design-dark-blue.png';
import Image1 from '../styles/projectImages/EZ-tour.png';
import Image2 from '../styles/projectImages/slack-overflow.png';
import Image3 from '../styles/projectImages/etsy.png';
import Image4 from '../styles/projectImages/Code-snippet2.png';
import Image5 from '../styles/projectImages/robot-linkedin.png';
import Image6 from '../styles/projectImages/logo.png';
import Image7 from '../styles/projectImages/Payment-gateway.png';

export default class Projects extends React.Component {
  render() {
    const strings = {
      heroImg3: 'heroImg3',
      videoM4a2:
        'https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/Pitch+Video+R2D1.mov',
      videoM4a1:
        'https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.mp4',
      videoWebm1:
        'https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.webm',
      // title6: 'Memory game',
      link1: 'https://eztour.herokuapp.com/',
      link2: 'https://blooming-shore-88321.herokuapp.com/',
      link3: 'https://tiy-durham-etsy-project.github.io/Etsy-group-project/',
      link6: 'https://travel.booklocal.in/',
      gitHub1: 'https://github.com/SamSteele01/Final_Project',
      gitHub2:
        'https://github.com/TIY-Durham-Slackoverflow-project/Slackoverflow',
      gitHub3:
        'https://github.com/TIY-Durham-Etsy-project/Etsy-group-project/tree/master',
      gitHub4: 'https://github.com/SamSteele01/Robot-LinkedIn',
      gitHub5: 'https://github.com/SamSteele01/Code-snippet-organizer',
      gitHub6: 'https://github.com/SamSteele01/memory-game',
      gitHub7: 'https://github.com/SamSteele01/Week-one-project',
      description1: 'Using GitHub, Trello, and an Agile methodology',
      category2: 'Back End Projects',
      description2: '',
      category3: 'Front End Projects',
      description3: '',
    };

    return (
      <div className="project">
        <Hero imageClassName="heroImg1" heroText={heroText[1]} />

      <TitleBar category="Hackathons" description={projectText.hackathons} />

      {/* EthNewYork */}

      {/* Ethereal Virtual */}

      <CarouselSingle
        id={0}
        title="EthDenver 2019"
        images={[bufficorn, smsDiagram, foodTruck]}
        text={projectText.ethDenver}
        backward={true}
      />

      <CarouselSingle
        id={1}
        title="WyoHackathon 2018"
        images={[wyoRoom, wyoTable, dcc, wyoPitch, wyoStage]}
        text={projectText.wyoHackathon}
        // backward={true}
      />
      {/* EthMemphis */}

        <Hero imageClassName="iron-yard-glass" />

      <TitleBar
        category="Practice Projects"
        description={projectText.practiceProjects}
      />

      <Single
        id={2}
        title="Contract Visualizer"
        image={contractVis}
        text={projectText.contractVis}
        link={links.contractVis}
        gitHub={links.contractVisGithub}
        backward={true}
      />
      {/* web assembly */}
      {/* <Single
          id={3}
          title="Fractals in Web Assembly"
          image={contractVis}
          text={projectText.fractals}
          backward={true}
        />
        <Single
          id={2}
          title="Etsy"
          image={Image3}
          placeholder={placeholder}
          link={strings.link3}
          text={projectText[3]}
          gitHub={strings.gitHub3}
        />

      {/* Memory game */}
    </div>
  );
}
