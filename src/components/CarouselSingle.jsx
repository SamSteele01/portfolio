import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const snapSize = 750;

export default class CarouselSingle extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    text: PropTypes.array.isRequired,
    link: PropTypes.string,
    gitHub: PropTypes.string,
    backward: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      mobileView: false,
      initdropdown: false,
      dropdownclassname: 'text-container-minimized',
      dropDownButtonText: 'v More',
    };
    this.handledropdown = this.handledropdown.bind(this);
    this.setMedia = this.setMedia.bind(this);
  }

  componentDidMount() {
    this.setMedia();
    window.addEventListener('resize', this.setMedia);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMedia);
  }

  setMedia() {
    this.setState({ windowWidth: window.innerWidth });
    let textContainer = document.getElementsByClassName('single-image')[
      this.props.id
    ];
    let paragraphsElem = document.getElementsByClassName('carousel-paragraphs')[
      this.props.id
    ];
    if (textContainer !== undefined && paragraphsElem !== undefined) {
      const lineheight = textContainer.getBoundingClientRect();
      const paragraphsElemHeight = paragraphsElem.getBoundingClientRect()
        .height;
      if (
        parseInt(lineheight.height, 10) < parseInt(paragraphsElemHeight, 10)
      ) {
        this.setState({ initdropdown: true });
      }
      if (
        parseInt(lineheight.height, 10) > parseInt(paragraphsElemHeight, 10)
      ) {
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

    const { title, images, link, text, gitHub } = this.props;

    let paragraphs = <div className="carousel-paragraphs" />;
    let textPs = <div />;

    if (text) {
      textPs = text.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      });
      paragraphs = <div className="carousel-paragraphs">{textPs}</div>;
    }

    let carouselImages = images.map(image => {
      return (
        <div className="single-image">
          <img src={image} />
        </div>
      );
    });

    let divCarousel = (
      <div className="image-container flex-column">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          // width="50vw"
        >
          {carouselImages}
        </Carousel>
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
          <div className="carousel-single">
            <h3>{title}</h3>
            <div className="flex-column">
              {divCarousel}
              {divText}
            </div>
          </div>
        ) : (
          <div className="carousel-single">
            <h2>{title}</h2>
            {this.props.backward ? (
              <div className="flex-row">
                {divText}
                {divCarousel}
              </div>
            ) : (
              <div className="flex-row">
                {divCarousel}
                {divText}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
