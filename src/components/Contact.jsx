import React, {Component, PropTypes} from 'react';
import Icon1 from '../styles/icons/email-icon.png';
import Icon2 from '../styles/icons/linkedin-icon.jpg';
import Icon3 from '../styles/icons/gitHub-icon.svg';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

// email, linkedIn, gitHub
  render() {
    return (
      <div className="contact flex-row">
        <div className="icon">
          Email!
          <img src={Icon1}/>
        </div>
        <div className="icon">
          LinkedIn!
          <img src={Icon2}/>
        </div>
        <div className="icon">
          GitHub!
          <img src={Icon3}/>
        </div>
      </div>
    );
  }
}
