import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
import Toolbelt from './Toolbelt.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleDisplay = this.toggleDisplay.bind(this);

    this.state = {
      displayContact: false
    }
  }

  toggleDisplay(){
    this.setState({displayContact: !this.state.displayContact});
  }

  render() {
    return (
      <div className="App">
        <Header displayContact={this.toggleDisplay}/>
        {this.state.displayContact &&
          <Contact/>
        }
        <Projects/>
        <Toolbelt/>
      </div>
    );
  }
}

export default App;
