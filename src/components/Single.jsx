import React, {Component, PropTypes} from 'react';
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
          <a href={this.props.link} ><img src={picture} alt="Video screenshot" className="single-image"/></a>
          <textarea >{this.props.text}</textarea>
        </div>
      </div>
    );
  }
}

Single.propTypes = {
  // title:
  // image:
  // placeholder:
  // text:
};
