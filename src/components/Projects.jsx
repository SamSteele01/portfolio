import React, {Component} from 'react';
import Single from './Single.jsx';
import placeholder from '../styles/responsive-design-dark-blue.png'

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image1: {placeholder},
      text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image2: "",
      text2: "",
      image3: "",
      text3: "",
      image4: "",
      text4: "",
      image5: "",
      text5: "",
      image6: "",
      text6: "",
      image7: "",
      text7: "",
      image8: "",
      text8: ""
    }
  }

  render() {
    return (
      <div className="project">
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
        <Single image={placeholder} text={this.state.text1}/>
      </div>
    );
  }
}

Projects.propTypes = {
};
