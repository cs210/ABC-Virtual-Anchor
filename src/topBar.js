import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.state = {
      driveSelected: false,
      projectsSelected: true,
     
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
          <Link to="/fileSystem2">
              <button className= "button" > Create File </button>             
          </Link>  
         
      </div>
    );
  }
}

  export default TopBar;
