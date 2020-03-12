import React from 'react';

import TopBar from './singleProjectComponents/topBar/topBar';
//import SideBar from './singleProjectComponents/sideBar/sideBar';
import RightScreen from './singleProjectComponents/rightScreen/rightScreen';
import LeftScreen from './singleProjectComponents/leftScreen/leftScreen';



class Project extends React.Component {

  componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var header = document.getElementById("myHeader");
        var right = document.getElementById("right");
        var left = document.getElementById("left");
        //var side =  document.getElementById("side");
        if (header == null){
          return;
        } else {
          var sticky = header.offsetTop;
        }

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            right.classList.add("right-sticky");
            left.classList.add("left-not-sticky");
          //  side.classList.add("side-sticky");
        } else {
            header.classList.remove("sticky");
            right.classList.remove("right-sticky");
            left.classList.remove("left-not-sticky");
          //  side.classList.remove("side-sticky");
        }
    }
  render() {
    return (

      <div>
        <div class = "with-nav">
          <div class = "else">
            <div>
              <TopBar/>
            </div>
            <div class = "left-right">
              <div class = "item">
                <LeftScreen/>
              </div>
              <div class = "item">
                <RightScreen/>
              </div>
            </div>
          </div>
        </div>
     </div>
    )
  }
}
export default Project;
