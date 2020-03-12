import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './sideBar.css';
import logo from './assets/logo.png';
import dots from './assets/dots.png';
import activity from './assets/activity.png';
import folder from './assets/folder.png';
import trash from './assets/trash@2x.png';
import AnchorpersonLogo from './assets/anchorpersonLogo.png';
import Image12 from './assets/Image12.png';
import Trash from './assets/trash.png';

class SideBar extends React.Component {

    render() {
        return (
          <nav>
           <div class="flex-container-sidebar" id="side">
                <div class="side-icons">
                    <img src = {AnchorpersonLogo}
                    value = {{}}
                />
                </div>
                <div class = "side-icons">
                    <img src = {Image12} alt="dots"
                    value = {{}}
                />
                </div>
            </div>
            <div class = "bottom-icon" id = "side">
                <div class = "side-icons">
                  <img src = {Trash} alt="activity"
                    value = {{}}
                    />
                </div>
            </div>
          </nav>
        );
      }


}

export default SideBar;
