import React, { Component } from 'react';
import '../styles/cLess.css';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Toolbelt from './Toolbelt.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image1: ""
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Hero imagePath={this.state.image1}/>
        <Projects/>
        <Hero/>
        <Projects/>
        <Hero/>
        <Projects/>
        <Toolbelt/>
      </div>
    );
  }
}

export default App;
