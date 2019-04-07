import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageLoader from 'react-load-image';

import placeholder from '../styles/projectImages/responsive-design-dark-blue.png';

const snapSize = 750;

export default class Single extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.any,
    text: PropTypes.array.isRequired,
    link: PropTypes.string,
    gitHub: PropTypes.string,
    backward: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      // mobileView: false,
      initdropdown: false,
      dropdownclassname: 'text-container-minimized',
      dropDownButtonText: 'v More',
    };
    this.handledropdown = this.handledropdown.bind(this);
    this.setMedia = this.setMedia.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('onload', this.setMedia);
    window.addEventListener('resize', this.setMedia);
    // this.setMedia();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMedia);
  }

  setMedia() {
    // console.log('loading', this.props.id);
    this.setState({ windowWidth: window.innerWidth });
    let imageContainer = document.getElementsByClassName('single-image')[
      this.props.id
    ];
    let paragraphsElem = document.getElementsByClassName('paragraphs')[
      this.props.id
    ];
    if (imageContainer !== undefined && paragraphsElem !== undefined) {
      const imageheight = imageContainer.getBoundingClientRect().height;
      // console.log(this.props.id, 'image LINEHEIGHT', imageheight);
      const paragraphsElemHeight = paragraphsElem.getBoundingClientRect()
        .height;
      // console.log(this.props.id, 'PARAGRAPHSELEMHEIGHT', paragraphsElemHeight);
      if (parseInt(imageheight, 10) < parseInt(paragraphsElemHeight, 10)) {
        this.setState({ initdropdown: true });
      }
      if (parseInt(imageheight, 10) > parseInt(paragraphsElemHeight, 10)) {
        this.setState({ initdropdown: false });
      }
    }
  }

  handledropdown(event) {
    event.preventDefault();
    if (this.state.dropdownclassname === 'text-container-full') {
      this.setState({
        dropdownclassname: 'text-container-minimized',
        dropDownButtonText: 'v More',
      });
    } else if (this.state.dropdownclassname === 'text-container-minimized') {
      this.setState({
        dropdownclassname: 'text-container-full',
        dropDownButtonText: '^ Less',
      });
    }
  }

  render() {
    let media = this.state.windowWidth;

    const { title, image, link, text, gitHub } = this.props;

    let picture = '';
    if (image) {
      picture = image;
    } else {
      picture = placeholder;
    }

    let paragraphs = <div className="paragraphs" />;
    let textPs = <div />;

    if (text) {
      textPs = text.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      });
      paragraphs = <div className="paragraphs">{textPs}</div>;
    }

    let divImage = (
      <div className="image-container flex-column">
        <ImageLoader src={picture} onLoad={this.setMedia}>
          <img className="single-image" />
          <div>Error!</div>
          {/* <Preloader /> */}
        </ImageLoader>
        {/* <img
          src={picture}
          alt="screenshot of application"
          className="single-image"
        /> */}
        {link && (
          <a href={link} target="_blank">
            See it deployed
          </a>
        )}
      </div>
    );

    let divText = (
      <div className="text-container flex-column">
        {this.state.initdropdown ? (
          <div>
            <div className={this.state.dropdownclassname}>{paragraphs}</div>
            <button onClick={this.handledropdown}>
              {this.state.dropDownButtonText}
            </button>
          </div>
        ) : (
          <div className="text-container-full">{paragraphs}</div>
        )}
        {gitHub && (
          <a href={gitHub} target="_blank">
            See the code on GitHub
          </a>
        )}
      </div>
    );

    return (
      <div>
        <hr />
        {media < snapSize ? (
          <div className="single">
            <h3>{title}</h3>
            <div className="flex-column">
              {divImage}
              {divText}
            </div>
          </div>
        ) : (
          <div className="single">
            <h2>{title}</h2>
            {this.props.backward ? (
              <div className="flex-row">
                {divText}
                {divImage}
              </div>
            ) : (
              <div className="flex-row">
                {divImage}
                {divText}
              </div>
            )}
          </div>
        )}
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
