import React, { Component, PropTypes } from 'react';
const snapSize = 750;

export default class Single extends Component {
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

  setMedia() {
    this.setState({ windowWidth: window.innerWidth });
    let textContainer = document.getElementsByClassName('single-image')[
      this.props.id
    ];
    let paragraphsElem = document.getElementsByClassName('paragraphs')[
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

  componentDidMount() {
    this.setMedia();
    window.addEventListener('resize', this.setMedia);
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

    const { title, image, placeholder, link, text, gitHub } = this.props;

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
      <div className="flex-column">
        <img
          src={picture}
          alt="screenshot of application"
          className="single-image"
        />
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
