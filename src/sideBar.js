import React from 'react';
import './sideBar.css';

import AnchorpersonLogo from './assets/anchorpersonLogo.png';
import Image12 from './assets/Image12.png';
import Trash from './assets/trash.png';

class SideBar extends React.Component {

    render() {
        return (
        <div className = 'left-bar'>
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
        </div>
        );
      }


}

export default SideBar;
