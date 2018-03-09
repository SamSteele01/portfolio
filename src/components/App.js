import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
import Toolbelt from './Toolbelt.jsx';
import Footer from './Footer.jsx';
import FlipMove from 'react-flip-move';
// import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggleDisplay = this.toggleDisplay.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      displayContact: false,
      direction:'top',
      lastScrollPos:0
    };
  }

  // componentDidMount() {
  //     window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // }

  // componentDidMount() {
  //   Events.scrollEvent.register('begin', function(to, element) {
  //     console.log("begin", arguments);
  //   });
  //   Events.scrollEvent.register('end', function(to, element) {
  //     console.log("end", arguments);
  //   });
  // }

  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

  // handleScroll(event) {
  //   console.log('scrollY', window.scrollY);
  //   console.log('scrollTop', window.scrollTop);
  //   if(this.state.lastScrollPos > scroll ) {
  //     this.setState({
  //       direction:'top',
  //       lastScrollPos:window.scrollY
  //     });
  //   }
  //   if(this.state.lastScrollPos < scroll ) {
  //     this.setState({
  //       direction:'bottom',
  //       lastScrollPos:window.scrollY
  //     });
  //   }
    // this.setState({
    //   lastScrollPos:window.scrollY
    // });
  // }

  toggleDisplay(){
    this.setState({displayContact: !this.state.displayContact});
  }

  render() {
    return (
      <div className="App">
        <Header displayContact={this.toggleDisplay}/>
        <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
          {this.state.displayContact &&
            <Contact/>
          }
        </FlipMove>
        <Projects/>
        <Toolbelt/>
        <div className='footer app-bottom'>
          <span>This site was made using React. See the code on gitHub.</span>    
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
