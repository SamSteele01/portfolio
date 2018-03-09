import React, {Component} from 'react';
import logo from '../styles/Logo.png';
import Headroom from 'react-headroom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // want to have a contact button
  render() {
    return(
      <div className='header-wrapper'>
        <Headroom disableInlineStyles={true}>
            
          <header className="App-header">
            <div className="take-Up-Space"></div>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <h1 className="App-title">Portfolio</h1> */}
            <button className="contact-button" onClick={this.props.displayContact}>Contact</button>
          </header>
        </Headroom>
      </div>
    );
  }
}

Header.propTypes = {
};
