import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
// import placeholder from '../styles/responsive-design-dark-blue.png';
const snapSize = 750;

export default class VideoSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      mobileView: false,
      initdropdown: false,
      dropdownclassname: "text-container-minimized",
      dropDownButtonText: "+ More",
      videoClassName: "has-media-controls-hidden",
      svgClassName: "video-overlay-play-button",
      spanClassName: "video-hover-span"
    };
    this.setMedia = this.setMedia.bind(this);
    this.handledropdown = this.handledropdown.bind(this);
    this.videoClickHandler = this.videoClickHandler.bind(this);
  }

  setMedia() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount(){
    window.addEventListener("resize", this.setMedia);
    let textContainer = document.getElementsByClassName('text-container')[0];
    if (textContainer !== undefined && this.state.initdropdown === false){
      const lineheight = document.defaultView.getComputedStyle(textContainer, null);
      if (parseInt(lineheight.height, 10) > 150){
        this.setState({ initdropdown: true });
      }
    }
  }

  videoClickHandler(event){
    event.preventDefault();
    this.setState({
      videoClassName: null,
      svgClassName: "video-overlay-play-button is-hidden",
      spanClassName: "video-hover-span-is-hidden"
    });
    this.refs.video.play();
  }

  handledropdown(event){
    event.preventDefault();
    if (this.state.dropdownclassname === "text-container-full"){
      this.setState({ dropdownclassname: "text-container-minimized", dropDownButtonText: "+ More" });
    } else if (this.state.dropdownclassname === "text-container-minimized"){
      this.setState({ dropdownclassname: "text-container-full", dropDownButtonText: "- Less" });
    }
  }

  render() {
    let media = this.state.windowWidth;

    const {
      title,
      image,
      video,
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

    let divVideo =
      <div className="flex-column">
        <div className="video-wrapper" onClick={this.videoClickHandler}>
          <video src={video} poster={picture} alt="Video" controls ref="video" className={this.state.videoClassName}/>
          <svg className={this.state.svgClassName} viewBox="-70 -70 350 350" preserveAspectRatio="xMidYMid meet" alt="Play video">
            <circle cx="100" cy="100" r="90" fill="none" strokeWidth="15" stroke="#fff"/>
            <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>
          </svg>
          <div className={this.state.spanClassName}>
            <span>See our presentation from demo day.</span>
          </div>
        </div>
        {link &&
          <a href={link} target="_blank">See it deployed</a>
        }
      </div>

    let divText =
      <div className="text-container flex-column">  
        {this.state.initdropdown ? (
          <div>
            <div className={this.state.dropdownclassname}>
              {paragraphs}
            </div>
            <button onClick={this.handledropdown}>{this.state.dropDownButtonText}</button>
          </div>
        ) : (
          <div className="text-container-full">
            {paragraphs}
          </div>
        )}
        <a href={gitHub} target="_blank">See the code on GitHub</a>
      </div>

    return (
      <div>
        {(media < snapSize) ?
          <div className="single">
            <h3>{title}</h3>
            <div className="flex-column">
              {divVideo}
              {divText}
            </div>
          </div> :
          <div className="single">
            <h2>{title}</h2>
            {this.props.backward ?
              <div className="flex-row">
                {divText}
                {divVideo}
              </div> :
              <div className="flex-row">
                {divVideo}
                {divText}
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

VideoSingle.propTypes = {
  // title:
  // image:
  // placeholder:
  // text:
};
