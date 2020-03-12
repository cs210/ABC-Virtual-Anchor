import React from 'react';
import {Link} from 'react-router-dom';

class TopBar extends React.Component {
    render() {
      return (
        <div className = 'top-bar'>
            <Link to="/fs/" className='selected'>
                Projects
            </Link>
            <Link to="/fs/drive" className='unselected'>
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