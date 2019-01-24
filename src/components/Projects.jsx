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

        <div className="title-bar">
          <h2>Blockchain</h2>
          <p>
            With all the hype in late 2017, I just had to learn first hand what
            this blockchain stuff was all about. My biggest takeaways:
            Blockchain technologies have the potential to add value, but are
            just another microservice and need to be part of an architecture
            that can utilize what they have to offer. Smart contracts are easy
            to write, but there is a lot to consider about security
            vunerabilities, gas fees, and updating the contracts. That is, you
            really want to spend the time and get it 100% right before deploying
            a contract to a mainnet.
          </p>
        </div>
        <Single
          id={0}
          title="Cryptocurrency Payment Gateway"
          image={Image7}
          placeholder={placeholder}
          text={projectText[7]}
        />
        <VideoSingle
          id={0}
          title="BookLocal"
          videoM4a={strings.videoM4a2}
          // videoWebm={strings.videoWebm1}
          image={Image6}
          hoverMessage="Watch the demo video"
          placeholder={placeholder}
          link={strings.link6}
          text={projectText[6]}
          backward={true}
        />

        <Hero imageClassName="iron-yard-glass" />

        <TitleBar
          category="The Iron Yard"
          description="The Iron Yard is a 12-week coding boot camp specializing
            in highly focused, immersive training centered on language fluency,
            object-oriented programming, and project-based learning. Team
            projects using GitHub, Trello, and an Agile methodology. There was a
             final project that took an additional month. My two biggest
             takaways were learning how to Google my way through any problem and
              getting use to writing code for 60 hours a week."
        />
        <VideoSingle
          id={1}
          title="EZ-Tour"
          videoM4a={strings.videoM4a1}
          videoWebm={strings.videoWebm1}
          image={Image1}
          hoverMessage="See our presentation from demo day"
          placeholder={placeholder}
          link={strings.link1}
          text={projectText[1]}
          gitHub={strings.gitHub1}
        />
        <Single
          id={1}
          title="Slack-overflow"
          image={Image2}
          placeholder={placeholder}
          link={strings.link2}
          text={projectText[2]}
          gitHub={strings.gitHub2}
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

        <Hero imageClassName="heroImg2" />

        <TitleBar
          category="Back End Projects"
          description={strings.description2}
        />
        <Single
          id={3}
          title="Code snippet organizer"
          image={Image4}
          placeholder={placeholder}
          text={projectText[4]}
          gitHub={strings.gitHub4}
          backward={true}
        />
        <Single
          id={4}
          title="LinkedIn for Robots"
          image={Image5}
          placeholder={placeholder}
          text={projectText[5]}
          gitHub={strings.gitHub5}
        />
      </div>
    );
  }
}

Projects.propTypes = {};
