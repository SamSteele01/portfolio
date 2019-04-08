import React from 'react';
// import PropTypes from 'prop-types';

import Hero from './Hero.jsx';
import Single from './Single.jsx';
import VideoSingle from './VideoSingle.jsx';
import CarouselSingle from './CarouselSingle';
import TitleBar from './TitleBar.jsx';

import heroText from '../data/heroText.js';
import projectText from '../data/projectText.js';
import { links } from '../data/links';

import blocX from '../styles/projectImages/blocX-demo-screenshot.png';
import contractVis from '../styles/projectImages/zeppelin-contract-vis.png';
import Image1 from '../styles/projectImages/EZ-tour.png';
import Image2 from '../styles/projectImages/slack-overflow.png';
import Image3 from '../styles/projectImages/etsy.png';
// import Image4 from '../styles/projectImages/Code-snippet2.png';
// import Image5 from '../styles/projectImages/robot-linkedin.png';
import Image6 from '../styles/projectImages/logo.png';
import Image7 from '../styles/projectImages/Payment-gateway.png';

import eosHackathonImage from '../styles/heroImages/eos-sf-pano2.jpg';
import bufficorn from '../styles/hackathonImages/bufficorn.jpeg';
import foodTruck from '../styles/hackathonImages/food-truck-qr.jpeg';
import smsDiagram from '../styles/hackathonImages/SMS-protocol-DB.png';
import wyoRoom from '../styles/hackathonImages/wyoHack-room.jpg';
import wyoTable from '../styles/hackathonImages/wyoHackathon-table.jpg';
import dcc from '../styles/hackathonImages/dcc-diagram.png';
import wyoPitch from '../styles/hackathonImages/WyoHackathon-final-pitch-1.jpeg';
import wyoStage from '../styles/hackathonImages/wyohackathon-stage.jpeg';

export default function Projects() {
  return (
    <div className="project">
      <Hero imageClassName="blockchain-image" />
      <TitleBar category="Blockchain" description={projectText.blockchain} />
      <Single
        id={0}
        title="BlocX Demo Wallet"
        image={blocX}
        link="http://blocx-demo-wallet.s3-website-us-east-1.amazonaws.com/"
        text={projectText.blocX}
      />
      <Single
        id={1}
        title="Cryptocurrency Payment Gateway"
        image={Image7}
        text={projectText.vendible}
        backward={true}
      />
      <VideoSingle
        id={0}
        title="BookLocal"
        videoM4a={links.videoM4a2}
        // videoWebm={links.videoWebm1}
        image={Image6}
        hoverMessage="Watch the demo video"
        link={links.link6}
        text={projectText.booklocal}
      />

      <img
        src={eosHackathonImage}
        alt="screenshot of application"
        className="pano-image"
      />

      <TitleBar category="Hackathons" description="uh ..." />
      {/* EthDenver */}
      <CarouselSingle
        id={0}
        title="EthDenver 2019"
        images={[bufficorn, smsDiagram, foodTruck]}
        text={projectText.ethDenver}
        backward={true}
      />
      {/* WyoHackathon */}
      <CarouselSingle
        id={1}
        title="WyoHackathon 2018"
        images={[wyoRoom, wyoTable, dcc, wyoPitch, wyoStage]}
        text={projectText.wyoHackathon}
        // backward={true}
      />
      {/* EthMemphis */}

      <Hero imageClassName="react-code-screen" />

      <TitleBar
        category="Practice Projects"
        description={projectText.practiceProjects}
      />
      {/* contract visualizer */}
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
        /> */}

      <Hero imageClassName="iron-yard-glass" />
      <TitleBar
        category="The Iron Yard"
        description={projectText.theIronYard}
      />
      <VideoSingle
        id={1}
        title="EZ-Tour"
        videoM4a={links.videoM4a1}
        videoWebm={links.videoWebm1}
        image={Image1}
        hoverMessage="See our presentation from demo day"
        link={links.link1}
        text={projectText.ezTour}
        gitHub={links.gitHub1}
      />
      <Single
        id={3}
        title="Slack-overflow"
        image={Image2}
        link={links.link2}
        text={projectText.slackOverflow}
        gitHub={links.gitHub2}
        backward={true}
      />
      <Single
        id={4}
        title="Etsy"
        image={Image3}
        link={links.link3}
        text={projectText.etsy}
        gitHub={links.gitHub3}
      />

      {/* <Hero imageClassName="heroImg2" />

        <TitleBar
          category="Back End Projects"
          description={links.description2}
        />
        <Single
          id={3}
          title="Code snippet organizer"
          image={Image4}
          text={projectText[4]}
          gitHub={links.gitHub4}
          backward={true}
        />
        <Single
          id={4}
          title="LinkedIn for Robots"
          image={Image5}
          text={projectText[5]}
          gitHub={links.gitHub5}
        /> */}
    </div>
  );
}
