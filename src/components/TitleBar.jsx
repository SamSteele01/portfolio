import React, {Component, PropTypes} from 'react';

export default class TitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let category = this.props.category;
    let description = this.props.description;
    return (
      <div className="title-bar">
        <h2>{category}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

TitleBar.propTypes = {
  // category:
  // description:
};
