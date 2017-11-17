import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
// import placeholder from '../styles/responsive-design-dark-blue.png';
const snapSize = 750;

export default class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      mobileView: false
    }
    this.setMedia = this.setMedia.bind(this)
  };

  setMedia() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount(){
    window.addEventListener("resize", this.setMedia);
  }

  // componentDidMount() {
  //   $(window).resize(() => {
  //     this.setState({ windowWidth: $(window).width() })
  //   })
  // }

  render() {
    let media = this.state.windowWidth;

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

    let divImage =
      <div className="flex-column">
        <img src={picture} alt="Video screenshot" className="single-image"/>
        {link &&
          <a href={link} target="_blank">See it deployed</a>
        }
      </div>

    let divText =
      <div className="flex-column">
        {/* <textarea value={text} readOnly></textarea> */}
        {paragraphs}
        <a href={gitHub} target="_blank">See the code on GitHub</a>
      </div>

    return (
      <div>
        {(media < snapSize) ?
          <div className="single">
            <h3>{title}</h3>
            <div className="flex-column">
              {divImage}
              {divText}
            </div>
          </div> :
          <div className="single">
            <h2>{title}</h2>
            {this.props.backward ?
              <div className="flex-row">
                {divText}
                {divImage}
              </div> :
              <div className="flex-row">
                {divImage}
                {divText}
              </div>
            }
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
