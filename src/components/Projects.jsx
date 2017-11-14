import React, {Component} from 'react';
import Hero from './Hero.jsx';
import Single from './Single.jsx';
import TitleBar from './TitleBar.jsx';
import projectText from '../data/projectText.js';
import placeholder from '../styles/responsive-design-dark-blue.png';
import Image1 from '../styles/EZ-tour.png';
import Image2 from '../styles/slack-overflow.png';
import Image3 from '../styles/etsy.png';
import Image4 from '../styles/robot-linkedin.png';
import Image5 from '../styles/Code-snippet2.png';
import Image7 from '../styles/memory-game.png';
import Image8 from '../styles/bent-creek.png';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImg1: "heroImg1",
      herotext1: "Hello",
      title1: "EZ-Tour",
      title2: "Slack-overflow",
      title3: "Etsy",
      title4: "LinkedIn for Robots",
      title5: "Code snippet organizer",
      title6: "Schema for a collection",
      title7: "Memory game",
      title8: "Bent Creek Ceramics",
      link1: "https://eztour.herokuapp.com/",
      link2: "https://blooming-shore-88321.herokuapp.com/",
      link3: "https://tiy-durham-etsy-project.github.io/Etsy-group-project/",
      category1: "Group Projects",
      description1: "Using GitHub, Trello, and an Agile methodology",
      category2: "Backend Projects",
      description2: "",
      category3: "Games",
      description3: ""
    }
  }

  render() {
    return (
      <div className="project">
        <Hero imageClassName={this.state.heroImg1} text={this.state.herotext1}/>
        <TitleBar category={this.state.category1} description={this.state.description1} />
        <Single title={this.state.title1} image={Image1} placeholder={placeholder} link={this.state.link1} text={projectText[1]}/>
        <Single title={this.state.title2} image={Image2} placeholder={placeholder} link={this.state.link2} text={projectText[2]} backward={true}/>
        <Single title={this.state.title3} image={Image3} placeholder={placeholder} link={this.state.link3} text={projectText[3]}/>
        <Hero imageClassName={this.state.heroImg1} text={this.state.herotext1}/>
        <TitleBar category={this.state.category2} description={this.state.description2} />
        <Single title={this.state.title4} image={Image4} placeholder={placeholder} text={projectText[4]} backward={true}/>
        <Single title={this.state.title5} image={Image5} placeholder={placeholder} text={projectText[5]}/>
        <Single title={this.state.title6} image={this.state.image1} placeholder={placeholder} text={this.state.text6} backward={true}/>
        <Hero imageClassName={this.state.heroImg1} text={this.state.herotext1}/>
        <TitleBar category={this.state.category3} description={this.state.description3} />
        <Single title={this.state.title7} image={Image7} placeholder={placeholder} text={this.state.text7}/>
        <Single title={this.state.title8} image={Image8} placeholder={placeholder} text={this.state.text8} backward={true}/>
      </div>
    );
  }
}

Projects.propTypes = {
};
