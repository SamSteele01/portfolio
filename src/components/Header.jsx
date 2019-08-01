import React, { Component } from 'react';
import Headroom from 'react-headroom';
import FlipMove from 'react-flip-move';

import Contact from './Contact.jsx';
import logo from '../styles/Logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayContact: false,
      lastScrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.lastScrollPos < window.scrollY) {
      this.setState({
        displayContact: false,
      });
    }
    this.setState({
      lastScrollPos: window.scrollY,
    });
  }

  toggleDisplay = () => {
    this.setState({ displayContact: !this.state.displayContact });
  };

  render() {
    return (
      <div className="header-wrapper">
        <Headroom disableInlineStyles={true}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1
            // className="pixeled-text "
            >
              Portfolio
            </h1>
            <button className="contact-button" onClick={this.toggleDisplay}>
              Contact
            </button>
          </header>
          <FlipMove
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
          >
            {this.state.displayContact && <Contact />}
          </FlipMove>
        </Headroom>
      </div>
    );
  }
}

Header.propTypes = {};
