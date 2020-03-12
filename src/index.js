import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

//Pages
import App from './App';
import Dashboard from './dashboard';
import Project from './project';
import Drive from './drive';


import fileSystem from './fileSystem';
//Nav bars
import SideBar from './sideBar';
import RightBar from './rightBar';
import TopBar from './topBar';

import * as serviceWorker from './serviceWorker';
import AnchorpersonLogo from './assets/anchorpersonLogo.png';
import Image12 from './assets/Image12.png';
import Trash from './assets/trash.png';

const Routing = () => {
  // put the sticky stuff here

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/fs" component={fileSystem} />
        <Route path="/project" component={Project} />
      </Switch>
    </Router>
  );
};



ReactDOM.render(<Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
