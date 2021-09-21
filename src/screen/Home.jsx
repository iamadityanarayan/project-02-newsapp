import React, { Component } from 'react';
import { API_2 } from '../components/Api';
import NavBar from '../components/NavBar';
import News from '../components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/"><News country='in' category='general' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/business"><News country='in' category='business' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/entertainment"><News country='in' category='entertainment' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/general"><News country='in' category='general' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/health"><News country='in' category='health' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/science"><News country='in' category='science' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/sports"><News country='in' category='sports' apiKey={API_2} pageSize={5} /></Route>
            <Route path="/technology"><News country='in' category='technology' apiKey={API_2} pageSize={5} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
