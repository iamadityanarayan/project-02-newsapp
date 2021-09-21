import React, { Component } from 'react';
import { API_1 } from '../components/Api';
import NavBar from '../components/NavBar';
import News from '../components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class Home extends Component {
  pageSize = 15;  
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News key='general' country='in' category='general' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/business"><News key='business' country='in' category='business' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/entertainment"><News key='entertainment' country='in' category='entertainment' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/general"><News key='general' country='in' category='general' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/health"><News key='health' country='in' category='health' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/science"><News key='science' country='in' category='science' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/sports"><News key='sports' country='in' category='sports' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/technology"><News key='technology' country='in' category='technology' apiKey={API_1} pageSize={this.pageSize} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
