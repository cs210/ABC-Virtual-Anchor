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
          <RichTextEditor callback={this.textToSpeech}/>
          
        </div>
      )
    }
}
export default Project;
