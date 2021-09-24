import React, { useState } from 'react';
import { API_1 } from '../components/Api';
import NavBar from '../components/NavBar';
import News from '../components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const Home = () => {

  const [progress, setProgress] = useState(0);
  const pageSize = 15;

  let apiKey = API_1;

  const progressBar=(progress)=>{
    setProgress(progress)
  }

    return (
      <div>
        <Router>
        <LoadingBar
        color='blue'
        height={4}
        progress={progress}
      />
          <NavBar />
          <Switch>
            <Route exact path="/"><News progressBar={progressBar} key='general' country='in' category='general' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/business"><News progressBar={progressBar} key='business' country='in' category='business' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/entertainment"><News progressBar={progressBar} key='entertainment' country='in' category='entertainment' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/general"><News progressBar={progressBar} key='general' country='in' category='general' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/health"><News progressBar={progressBar} key='health' country='in' category='health' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/science"><News progressBar={progressBar} key='science' country='in' category='science' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/sports"><News progressBar={progressBar} key='sports' country='in' category='sports' apiKey={apiKey} pageSize={pageSize} /></Route>
            <Route exact path="/technology"><News progressBar={progressBar} key='technology' country='in' category='technology' apiKey={apiKey} pageSize={pageSize} /></Route>
          </Switch>
        </Router>
      </div>
    )
}
export default Home;