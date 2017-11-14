import React, {Component} from 'react';
import heroImg from '../styles/html-code-screen.png'

export default class Hero extends Component {
  render() {

    const {
      color,
      isActive,
    } = this.props

    return (
      <div className="hero-img hero1">
        {/* <img src={heroImg} className="hero-img" alt="hero" /> */}
      </div>
    );
  }
}

Hero.propTypes = {
  // imagePath:
};
