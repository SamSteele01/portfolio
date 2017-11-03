import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero/>
        <Projects/>
      </div>
    );
  }
}

export default App;
