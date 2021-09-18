import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import News from '../components/News';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}
