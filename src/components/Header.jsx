import React, {Component} from 'react';
import logo from '../styles/Logo.png';

export default class Header extends Component {
  render() {
    return(
      <div >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Portfolio</h1> */}
        </header>
      </div>
    )
  }
}

Header.propTypes = {
};
