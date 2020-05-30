import React from 'react';


import ProjectSettingsBar from './singleProjectComponents/ProjectSettingsBar/ProjectSettingsBar';
import EditorsNavigationBar from './singleProjectComponents/EditorsNavigationBar/editorsNavigationBar';
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
          <EditorsNavigationBar url={"/fs/"}/>
          <RichTextEditor callback={this.textToSpeech}/>
          <ProjectSettingsBar/>
        </div>
      )
    }
}
export default Project;
