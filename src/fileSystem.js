import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css'; //TODO Check these


import App from './App';
import Dashboard from './dashboard';
import Project from './project';
import Studio from './studio';
import Drive from './drive';
//Nav bars
import SideBar from './sideBar';
import RightBar from './rightBar';
import TopBar from './topBar';

import MyModal from './modal';

class fileSystem extends React.Component {
    render() {
      console.log(this.props.match)
      return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row'
          }}>
              <SideBar />
              <div>
                  <TopBar />
                  <div>
                    <Route exact path="/fs/" component={Dashboard} />
                    <Route path="/fs/drive" component={Drive} />
                    <Route path="/project" component={Project} />
                  </div>
              </div>

                <div>
                  <RightBar/>
                </div>
              

          </div>
      );
    }
  }

  export default fileSystem;