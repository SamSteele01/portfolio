import React, {Component} from 'react';
import Single from './Single.jsx';
import TitleBar from './TitleBar.jsx';
import projectText from '../data/projectText.js';
import placeholder from '../styles/responsive-design-dark-blue.png';
import Image4 from '../styles/robot-linkedin.png'
import Image5 from '../styles/code-snippet.png'

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title1: "EZ-Tour",
      title2: "Slack-overflow",
      title3: "Etsy",
      title4: "LinkedIn for Robots",
      title5: "Code snippet organizer",
      title6: "Schema for a collection",
      title7: "Word game",
      title8: "Memory game",
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
        <TitleBar category={this.state.category1} description={this.state.description1} />
        <Single title={this.state.title1} image={this.state.image1} placeholder={placeholder} text={projectText[1]}/>
        <Single title={this.state.title2} image={this.state.image1} placeholder={placeholder} text={projectText[2]}/>
        <Single title={this.state.title3} image={this.state.image1} placeholder={placeholder} text={projectText[3]}/>
        <TitleBar category={this.state.category2} description={this.state.description2} />
        <Single title={this.state.title4} image={Image4} placeholder={placeholder} text={projectText[4]}/>
        <Single title={this.state.title5} image={Image5} placeholder={placeholder} text={projectText[5]}/>
        <Single title={this.state.title6} image={this.state.image1} placeholder={placeholder} text={this.state.text6}/>
        <TitleBar category={this.state.category3} description={this.state.description3} />
        <Single title={this.state.title7} image={this.state.image1} placeholder={placeholder} text={this.state.text7}/>
        <Single title={this.state.title8} image={this.state.image1} placeholder={placeholder} text={this.state.text8}/>
      </div>
    );
  }
}

Projects.propTypes = {
};
