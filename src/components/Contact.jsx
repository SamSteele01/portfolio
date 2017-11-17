import React, {Component, PropTypes} from 'react';
import Icon1 from '../styles/icons/email-icon.png';
import Icon2 from '../styles/icons/linkedin-icon.jpg';
import Icon3 from '../styles/icons/gitHub-icon.svg';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    }

    this.setMedia = this.setMedia.bind(this)
  };

  setMedia() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount(){
    window.addEventListener("resize", this.setMedia);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.setMedia);
  }


// email, linkedIn, gitHub
  render() {

    let flexType = "";
    if(this.state.windowWidth > 750){
      flexType = "flex-row";
    }else{
      flexType = "flex-column";
    }

    return (
      <div className={`contact ${flexType}`}>
        <div className="icon">
          <img src={Icon1}/>
          <p>ssteele017@gmail.com</p>
        </div>
        <div className="icon">
          <img src={Icon2}/>
          <p><a href="www.linkedin.com/in/samuel-steele" target="_blank">linkedin.com/in/samuel-steele</a></p>
        </div>
        <div className="icon">
          <img src={Icon3}/>
          <p><a href="www.github.com/SamSteele01" target="_blank">github.com/SamSteele01</a></p>
        </div>
      </div>
    );
  }
}
