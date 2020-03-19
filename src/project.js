import React from 'react';

import TopBar from './singleProjectComponents/topBar/topBar';
import SideBar from './sideBar';
import VideoPlayer from './singleProjectComponents/VideoPlayer/VideoPlayer';
import RichTextEditor from './singleProjectComponents/RichTextEditor/RichTextEditor';
import {css } from 'emotion'


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
        var side =  document.getElementById("side");
        if (header == null){
          return;
        } else {
          var sticky = header.offsetTop;
        }

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            right.classList.add("right-sticky");
            left.classList.add("left-not-sticky");
            side.classList.add("side-sticky");
        } else {
            header.classList.remove("sticky");
            right.classList.remove("right-sticky");
            left.classList.remove("left-not-sticky");
            side.classList.remove("side-sticky");
        }
    }

    render(){
      return (
        <div       
        className={
          css`
            display: flexbox;
            flex-direction: column;  
            height: 100vh;
            width: 100vw;
           `
        }>
          <RichTextEditor/>
          <VideoPlayer/>
        </div>
      )
    }
}
export default Project;
