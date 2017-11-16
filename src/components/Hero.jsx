import React, {Component} from 'react';

export default class Hero extends Component {
  render() {

    const {
      imageClassName
      // heroText,
    } = this.props

    return (
      <div className={`hero-img ${imageClassName}`}>
        {/* <p className="hero-text">{this.props.heroText}</p> */}
        <p>{this.props.heroText}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  // imagePath:
};    
