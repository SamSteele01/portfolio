import React, {Component} from 'react';
import Hero from './Hero.jsx';
import Single from './Single.jsx';
import TitleBar from './TitleBar.jsx';
import heroText from '../data/heroText.js';
import projectText from '../data/projectText.js';
import placeholder from '../styles/responsive-design-dark-blue.png';
import Image1 from '../styles/EZ-tour.png';
import Image2 from '../styles/slack-overflow.png';
import Image3 from '../styles/etsy.png';
import Image4 from '../styles/Code-snippet2.png';
import Image5 from '../styles/robot-linkedin.png';
import Image6 from '../styles/memory-game.png';
import Image7 from '../styles/bent-creek.png';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImg1: "heroImg1",
      heroImg2: "heroImg2",
      heroImg3: "heroImg3",
      title1: "EZ-Tour",
      title2: "Slack-overflow",
      title3: "Etsy",
      title4: "Code snippet organizer",
      title5: "LinkedIn for Robots",
      title6: "Memory game",
      title7: "Bent Creek Ceramics",
      link1: "https://eztour.herokuapp.com/",
      link2: "https://blooming-shore-88321.herokuapp.com/",
      link3: "https://tiy-durham-etsy-project.github.io/Etsy-group-project/",
      gitHub1: "https://github.com/SamSteele01/Final_Project",
      gitHub2: "https://github.com/TIY-Durham-Slackoverflow-project/Slackoverflow",
      gitHub3: "https://github.com/TIY-Durham-Etsy-project/Etsy-group-project/tree/master",
      gitHub4: "https://github.com/SamSteele01/Robot-LinkedIn",
      gitHub5: "https://github.com/SamSteele01/Code-snippet-organizer",
      gitHub6: "https://github.com/SamSteele01/memory-game",
      gitHub7: "https://github.com/SamSteele01/Week-one-project",
      category1: "Group Projects",
      description1: "Using GitHub, Trello, and an Agile methodology",
      category2: "Back End Projects",
      description2: "",
      category3: "Front End Projects",
      description3: ""
    }
  }

  render() {
    return (
      <div className="project">
        <div className="take-Up-Space"></div>
        <Hero imageClassName={this.state.heroImg1} heroText={heroText[1]}/>

        <TitleBar category={this.state.category1} description={this.state.description1} />
        <Single title={this.state.title1} image={Image1} placeholder={placeholder} link={this.state.link1} text={projectText[1]} gitHub={this.state.gitHub1}/>
        <Single title={this.state.title2} image={Image2} placeholder={placeholder} link={this.state.link2} text={projectText[2]} gitHub={this.state.gitHub2} backward={true}/>
        <Single title={this.state.title3} image={Image3} placeholder={placeholder} link={this.state.link3} text={projectText[3]} gitHub={this.state.gitHub3}/>

        <Hero imageClassName={this.state.heroImg2}
        // heroText={heroText[2]}
        />

        <TitleBar category={this.state.category2} description={this.state.description2} />
        <Single title={this.state.title4} image={Image4} placeholder={placeholder} text={projectText[4]} gitHub={this.state.gitHub4} backward={true}/>
        <Single title={this.state.title5} image={Image5} placeholder={placeholder} text={projectText[5]} gitHub={this.state.gitHub5} />
        {/* <Single title={this.state.title5} image={this.state.image1} placeholder={placeholder} text={this.state.text6} backward={true}/> */}

        {/* <Hero imageClassName={this.state.heroImg3}
        // heroText={heroText[3]}
        /> */}

        {/* <TitleBar category={this.state.category3} description={this.state.description3} />
        <Single title={this.state.title6} image={Image6} placeholder={placeholder} text={this.state.text6} gitHub={this.state.gitHub6} backward={true}/>
        <Single title={this.state.title7} image={Image7} placeholder={placeholder} text={this.state.text7} gitHub={this.state.gitHub7} /> */}
      </div>
    );
  }
}

Projects.propTypes = {
};
