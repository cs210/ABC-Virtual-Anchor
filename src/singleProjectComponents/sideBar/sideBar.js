import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './sideBar.css';
import logo from './images/logo.png';
import dots from './images/dots.png';
import activity from './images/activity.png';
import folder from './images/folder.png';
import trash from './images/trash.png';

class SideBar extends React.Component {
    

    render() {
        return (
          <nav>
           <div class="flex-container-sidebar" id="side">
                <Link class="side-icons">
                    <img src={logo} alt="logo"
                    value = {{}}
                />
                </Link>
                <Link class = "side-icons">
                    <img src={dots} alt="dots"
                    value = {{}}
                />
                </Link>
                <Link class = "side-icons">
                    <img src={activity} alt="activity"
                    value = {{}}
                />
                </Link>
                <Link class = "side-icons">
                    <img src={folder} alt="folder"
                    value = {{}}
                />
                </Link>
            </div>
            <div class = "bottom-icon" id = "side">
                <Link class = "side-icons">
                    <img src={trash} alt="trash"
                        value = {{}}
                    />
                </Link>
            </div>
          </nav>
        );
      }


}

export default SideBar;