import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
  imageClassName: PropTypes.string,
  heroText: PropTypes.string,
  height: PropTypes.number,
};

export default function Hero({ imageClassName, heroText, height }) {
  let heroHeight = height;
  if (window.innerWidth < 450) {
    heroHeight = 60;
  }
  return (
    <div
      // style={{ height: heroHeight + 'vh' }}
      className={`hero-img ${imageClassName}`}
    >
      {/* <p className="hero-text">{this.props.heroText}</p> */}
      <p className="pixeled-text">{heroText}</p>
    </div>
  );
}
