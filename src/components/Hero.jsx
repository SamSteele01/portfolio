import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hero extends Component {
  render() {
    const { imageClassName, heroText, height } = this.props;
    let heroHeight = height;
    if (window.innerWidth < 450) {
      heroHeight = 60;
    }
    return (
      <div
        style={{ height: heroHeight + 'vh' }}
        className={`hero-img ${imageClassName}`}
      >
        {/* <p className="hero-text">{this.props.heroText}</p> */}
        <p className="pixeled-text">{heroText}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  imageClassName: PropTypes.string,
  heroText: PropTypes.string,
  height: PropTypes.number,
};
