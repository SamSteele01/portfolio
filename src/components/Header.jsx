import React, {Component} from 'react';
import logo from '../styles/Logo.png';

export default class Header extends Component {

  // want to have a contact button
  render() {
    return(
      <div >
        <header className="App-header">
          <div className="take-Up-Space"></div>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Portfolio</h1> */}
          <button className="contact-button" onClick={this.props.displayContact}>Contact</button>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
};
