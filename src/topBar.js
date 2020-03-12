import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.state = {
      driveSelected: false,
      projectsSelected: true
    };
  }
  switchTab() {
    if (this.state.driveSelected) {
      this.setState({driveSelected: false, projectsSelected:true})
    } else {
      this.setState({driveSelected: true, projectsSelected:false})
    }
  }

  render() {
    return (
      <div className = 'top-bar'>
          <Link to="/fs/" className= {this.state.projectsSelected ? 'selected' : 'unselected'}
          onClick={this.switchTab}>
              Projects
          </Link>
          <Link to="/fs/drive"  className= {this.state.driveSelected ? 'selected' : 'unselected'}
          onClick={this.switchTab}>
              Drive
          </Link>
          <button>
              Create File
          </button>
      </div>
    );
  }
}

  export default TopBar;
