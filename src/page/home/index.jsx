import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { Header } from '../../component';

class Home extends Component {
  changeScreen = () => {

  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default Home;
