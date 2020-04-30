import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css'; //TODO Check these


import App from './App';
import Dashboard from './dashboard';
import Project from './project';
import Drive from './drive';
//Nav bars
import SideBar from './sideBar';
import RightBar from './rightBar';
import TopBar from './topBar';

import MyModal from './modal';




class fileSystem2 extends React.Component {
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
                        <Dashboard/>
                  </div>
              </div>

                <div>
                  <MyModal/>
                </div>
              

          </div>
      );
    }
  }

  export default fileSystem2;