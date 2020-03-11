import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './dashboard';
import Project from './project';
import * as serviceWorker from './serviceWorker';
import AnchorpersonLogo from './assets/anchorpersonLogo.png';
import Image12 from './assets/Image12.png';
import Trash from './assets/trash.png';

const routing = (
  // put the sticky stuff here
  <div style = {{
    display: 'flex',
    flexDirection: 'row'
  }}>
    <div className = 'left-bar'>
      <img src = {Image12}/>
      <img src = {Trash}/>
    </div>
    <div>
      <Router>
        <div className = 'top-bar'>
          <img src = {AnchorpersonLogo}/>
          <Link to="/dashboard" className='selected'>
            Projects
          </Link>
          <Link to="/" className='unselected'>
            Drive
          </Link>
        </div>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/project" component={Project} />
        </div>
      </Router>
    </div>
    <div className = 'right-bar'>
      right bar
    </div>
  </div>

);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
