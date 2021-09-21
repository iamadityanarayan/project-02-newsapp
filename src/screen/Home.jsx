import React, { Component } from 'react';
import { API_1 } from '../components/Api';
import NavBar from '../components/NavBar';
import News from '../components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class Home extends Component {
  pageSize = 15;  

  state = {
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='blue'
        height={4}
        progress={this.state.progress}
      />
          <NavBar />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} setProgress={this.setProgress} key='general' country='in' category='general' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key='business' country='in' category='business' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key='entertainment' country='in' category='entertainment' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} key='general' country='in' category='general' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key='health' country='in' category='health' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key='science' country='in' category='science' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key='sports' country='in' category='sports' apiKey={API_1} pageSize={this.pageSize} /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key='technology' country='in' category='technology' apiKey={API_1} pageSize={this.pageSize} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
