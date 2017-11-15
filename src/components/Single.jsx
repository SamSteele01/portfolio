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
        <h2>{this.props.title}</h2>
        {this.props.backward ?
          <div className="flex-row">
            <textarea value={this.props.text} readOnly></textarea>
            <a href={this.props.link} ><img src={picture} alt="Video screenshot" className="single-image"/></a>
          </div> :
          <div className="flex-row">
            <a href={this.props.link} ><img src={picture} alt="Video screenshot" className="single-image"/></a>
            <textarea value={this.props.text} readOnly></textarea>
          </div>
        }
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
