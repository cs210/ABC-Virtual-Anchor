
import React from 'react';

import Search from './assets/search.png';
import Profile from './assets/profile.png';
import ProjectTracker from './assets/projectTracker.png'
import Notifications from './assets/notifications.png';
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
  

class RightBar extends React.Component {
    render() {
      return (
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
      );
    }
  }

  export default RightBar;