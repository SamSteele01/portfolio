import React, {Component} from 'react';
import heroImg from '../styles/html-code-screen.png'

export default class Hero extends Component {
  render() {

    const {
      text,
      imageClassName,
    } = this.props

    return (
      <div className={`hero-img ${imageClassName}`}>
        <p>{text}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  // imagePath:
};
