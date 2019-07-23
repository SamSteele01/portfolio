import React, { Component } from 'react';
import PropTypes from 'prop-types';

TitleBar.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default function TitleBar({ category, description }) {
  return (
    <div className="title-bar">
      <h1>{category}</h1>
      <p>{description}</p>
    </div>
  );
}
