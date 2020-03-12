import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './dashboard';
import Project from './project';
import SideBar from './sideBar';
import * as serviceWorker from './serviceWorker';
import AnchorpersonLogo from './assets/anchorpersonLogo.png';
import Image12 from './assets/Image12.png';
import Trash from './assets/trash.png';
import Notifications from './assets/notifications.png';
import Search from './assets/search.png';
import Profile from './assets/profile.png';
import ProjectTracker from './assets/projectTracker.png'
import Mail from './assets/mail.png'
import Arrow from './assets/arrow.png'

class Invitation extends React.Component {
  render() {
    return (
      <div className = "invitation-box">
        <div style = {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <img src={Mail} />
          <div style = {{
            paddingLeft: 5,
            paddingRight: 5
          }}> Samantha Williams has invited you to collaborate on State of the Union.
          </div>
          <img src={Arrow} />
        </div>
      </div>
    );
  }
}

const routing = (
  // put the sticky stuff here
  <div style = {{
    display: 'flex',
    flexDirection: 'row'
  }}>
  <div className = 'left-bar'>
    <SideBar />
  </div>
    <div>
      <Router>
        <div className = 'top-bar'>
          <Link to="/dashboard" className='selected'>
            Projects
          </Link>
          <Link to="/" className='unselected'>
            Drive
          </Link>
          <button>
            Create File
          </button>
        </div>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/project" component={Project} />
        </div>
      </Router>
    </div>
    <div className = 'right-bar'>
      <div style = {{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}>
        <div> <img src = {Search} /> </div>
        <div> <img src = {Notifications} /> </div>
      </div>
      <img src = {Profile} />
      <hr width="90%"/>
      <img src = {ProjectTracker} />
      <hr width="90%"/>
      <div>
        <h2>Invitations </h2>
        <p style = {{
          color: '#B4B4B4'
        }}> You have 6 pending invitations to collaborate on projects.</p>
      </div>
      <Invitation/>
      <Invitation/>
      <Invitation/>
      <Invitation/>
      <Invitation/>
      <Invitation/>
    </div>
  </div>

);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
