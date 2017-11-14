import React, { Component } from 'react';
import '../styles/cLess.css';
import Header from './Header.jsx';
import Projects from './Projects.jsx';
import Toolbelt from './Toolbelt.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="App">
        <Header />
        <Projects/>
        <Toolbelt/>
      </div>
    );
  }
}

export default App;
