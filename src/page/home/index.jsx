import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
  changeScreen = () => {

  }
  render() {
    return (
      <div className="App">
        <Link to='/blog'>Blog</Link>
      </div>
    );
  }
}

export default Home;
