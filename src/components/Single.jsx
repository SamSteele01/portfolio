import React, {Component, PropTypes} from 'react';
// import placeholder from '../styles/responsive-design-dark-blue.png';

export default class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    const {
      title,
      image,
      placeholder,
      link,
      text,
      gitHub
    } = this.props

    let picture = "";
    if(image){
      picture = image;
    }else{
      picture = placeholder;
    }

    let paragraphs = (<p></p>);

    if(text){
      paragraphs = text.map((paragraph, index) =>{
        return( < p key={index} >{paragraph}</p> )
      });
    }

    return (
      <div className="single">
        <h2>{title}</h2>
        {this.props.backward ?
          <div className="flex-row">
            <div className="flex-column">
              {/* <textarea value={text} readOnly></textarea> */}
              {paragraphs}
              <a href={gitHub} target="_blank">See the code on GitHub</a>
            </div>
            <div className="flex-column">
              <img src={picture} alt="Video screenshot" className="single-image"/>
              {link &&
                <a href={link} target="_blank">See it deployed</a>
              }
            </div>
          </div> :
          <div className="flex-row">
            <div className="flex-column">
              <img src={picture} alt="Video screenshot" className="single-image"/>
              {link &&
                <a href={link} target="_blank">See it deployed</a>
              }
            </div>
            <div className="flex-column">
              {/* <textarea value={text} readOnly></textarea> */}
              {paragraphs}
              <a href={gitHub} target="_blank">See the code on GitHub</a>
            </div>
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
