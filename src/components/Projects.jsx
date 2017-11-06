import React, {Component} from 'react';
import Single from './Single.jsx';
import placeholder from '../styles/responsive-design-dark-blue.png';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title1: "EZ-Tour",
      image1: "",
      text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title2: "Slack-overflow",
      image2: "",
      text2: "",
      title3: "Etsy",
      image3: "",
      text3: "",
      title4: "LinkedIn for Robots",
      image4: "",
      text4: "",
      title5: "Code snippet organizer",
      image5: "",
      text5: "",
      title6: "Schema for a collection",
      image6: "",
      text6: "",
      title7: "Word game",
      image7: "",
      text7: "",
      title8: "Memory game",
      image8: "",
      text8: ""
    }
  }

  render() {
    return (
      <div className="project">
        <Single title={this.state.title1} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title2} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title3} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title4} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title5} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title6} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title7} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
        <Single title={this.state.title8} image={this.state.image1} placeholder={placeholder} text={this.state.text1}/>
      </div>
    );
  }
}

Projects.propTypes = {
};
