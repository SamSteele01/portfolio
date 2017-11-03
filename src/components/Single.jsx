import React, {Component} from 'react';

export default class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="single">
        <h3>Single Project</h3>
        <div className="flex-row">
          <img src={this.props.image} alt="" className="single-image"/>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

Single.propTypes = {
};
