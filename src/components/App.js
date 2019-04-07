import React, { Component } from 'react';
import Header from './Header.jsx';
import Projects from './Projects.jsx';
import Toolbelt from './Toolbelt.jsx';
import Footer from './Footer.jsx';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Toolbelt />
        <div className="footer app-bottom">
          <span>This site was made using React. See the code on gitHub.</span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
