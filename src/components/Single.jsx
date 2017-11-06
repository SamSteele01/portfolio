import React, {Component} from 'react';
// import placeholder from '../styles/responsive-design-dark-blue.png';

export default class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    let picture = "";
    if(this.props.image){
      picture = this.props.image;
    }else{
      picture = this.props.placeholder;
    }
    return (
      <div className="single">
        <h3>{this.props.title}</h3>
        <div className="flex-row">
          <img src={picture} alt="Video screenshot" className="single-image"/>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

Single.propTypes = {
};
