import React from 'react';

import './drive.css';
import {Link, Redirect, useHistory} from 'react-router-dom';
import { IconContext  } from "react-icons";
import Image4 from './assets/Image4@2x.png';
import PDF from './assets/pdf.png';
import Excel from './assets/excel.png';
import Other from './assets/docs.png';
import EndIcons from './assets/file-end-icons.png'
import Image3 from './assets/Image3@2x.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { RiFolderUserLine } from "react-icons/ri";
import {IoMdMore} from "react-icons/io"

class PDFFiles extends React.Component {
  render() {
    return (
      <div className = "files-box">
        <div style = {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <img src = {PDF} alt = "PDF" height = "50" width = "35"/>
          <div style = {{
            paddingTop: 10,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 18,
            fontWeight: "bold"
          }}> Coronavirus Outbreak 1/20/20 Article
          </div>
          <div style = {{
            paddingTop: 12,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 16,
          }}>  10 Collaborators
          </div>
          <div style = {{
             paddingTop: 12,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 16,
          }}>  Feb. 29, 2020
          </div>
          <img src = {EndIcons} alt = "Ending Icons" height = "50" width = "100"/>
        </div>
      </div>
    );
  }
}

class ExcelFiles extends React.Component {
  render() {
    return (
      <div className = "files-box">
        <div style = {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <img src = {Excel} alt = "Excel" height = "50" width = "35"/>
          <div style = {{
            paddingTop: 10,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 18,
            fontWeight: "bold"
          }}> Coronavirus Outbreak WHO Numbers
          </div>
          <div style = {{
            paddingTop: 12,
            paddingLeft: 7,
            paddingRight: 5,
            fontSize: 16,
          }}>  10 Collaborators
          </div>
          <div style = {{
             paddingTop: 12,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 16,
          }}>  Feb. 29, 2020
          </div>
          <img src = {EndIcons} alt = "Ending Icons" height = "50" width = "100"/>
        </div>
      </div>
    );
  }
}
class OtherFiles extends React.Component {
  render() {
    return (
      <div className = "files-box">
        <div style = {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <img src = {Other} alt = "Other icon" height = "50" width = "35"/>
          <div style = {{
            paddingTop: 10,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 18,
            fontWeight: "bold"
          }}> Sanders Wins New Hampshire Primary
          </div>
          <div style = {{
            paddingTop: 12,
            paddingLeft: 3,
            paddingRight: 5,
            fontSize: 16,
          }}>  10 Collaborators
          </div>
          <div style = {{
             paddingTop: 12,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 16,
          }}>  Feb. 29, 2020
          </div>
          <img src = {EndIcons} alt = "Ending Icons" height = "50" width = "100"/>
        </div>
      </div>
    );
  }
}

class ProjectPreview1 extends React.Component {
  render() {
    return (
      <div onClick={this.props.callback}>
        <div className = "project-box-1">
          <div className = "drive-folder-buttons">
            <IconContext.Provider value={{size: 40, color: 'white'}}>
              <RiFolderUserLine/>        
            </IconContext.Provider>
            <IconContext.Provider value={{size: 40, color: 'white'}}>
              <IoMdMore/>        
            </IconContext.Provider>
          </div>
          <div style = {{
                marginTop: '0',
                marginBottom: '0.5em',
                color: 'rgba(0, 0, 0)',
                fontWeight: '500',
          }}>  </div>
          <p style = {{
            color: 'white',
            fontWeight: 900,
            fontSize: '20px',
          }}> 
              2020 Election Coverage</p>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left'
          }}>
            <img className = "collaborator-images" src = {Image4}/>
            <img className = "collaborator-images" src = {Image3}/>
          </div>
          <p style = {{
            color: 'white'
          }}> 2 days ago</p>
        </div>
      </div>
    );
  }
}
class ProjectPreview2 extends React.Component {
  render() {
    return (
      <div onClick={this.props.callback}>
        <div className = "project-box-2">
          <div className = "drive-folder-buttons">
            <IconContext.Provider value={{size: 40, color: 'white'}}>
              <RiFolderUserLine/>        
            </IconContext.Provider>
            <IconContext.Provider value={{size: 40, color: 'white'}}>
              <IoMdMore/>        
            </IconContext.Provider>
          </div>
          <div style = {{
                marginTop: '0',
                marginBottom: '0.5em',
                color: 'rgba(0, 0, 0)',
                fontWeight: '500',
          }}>  </div>
          <p style = {{
            color: 'white',
            fontWeight: 900,
            fontSize: '20px',
          }}> 
              2020 Election Coverage</p>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left'
          }}>
            <img className = "collaborator-images" src = {Image4}/>
            <img className = "collaborator-images" src = {Image3}/>
          </div>
          <p style = {{
            color: 'white'
          }}> 2 days ago</p>
        </div>
      </div>
    );
  }
}
class ProjectPreview3 extends React.Component {
  render() {
    return (
      <div onClick={this.props.callback}>
        <div className = "project-box-3">
          <div className = "drive-folder-buttons">
            <IconContext.Provider value={{size: 40, color: 'white'}}>
              <RiFolderUserLine/>        
            </IconContext.Provider>
            <IconContext.Provider value={{size: 40, color: 'white'}}>
              <IoMdMore/>        
            </IconContext.Provider>
          </div>
          <div style = {{
                marginTop: '0',
                marginBottom: '0.5em',
                color: 'rgba(0, 0, 0)',
                fontWeight: '500',
          }}>  </div>
          <p style = {{
            color: 'white',
            fontWeight: 900,
            fontSize: '20px',
          }}> 
              2020 Election Coverage</p>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left'
          }}>
            <img className = "collaborator-images" src = {Image4}/>
            <img className = "collaborator-images" src = {Image3}/>
          </div>
          <p style = {{
            color: 'white'
          }}> 1 week ago</p>
        </div>
      </div>
    );
  }
}
const categoryOptions = [
  'Internal', 'two', 'three'
];
const defaultCategoryOption = categoryOptions[0];
const sortOptions = [
  'By Date', 'two', 'three'
];
const defaultSortOption = sortOptions[0];

const Drive = () => {
  const history = useHistory();

  const callBackRedirect = () => {
    history.replace("/project");
  }


  return (
    <div className = "drive" style = {{
      width: 1050,
      height: window.innerHeight
    }}>
      <div style = {{
        display: 'flex',
        flexDirection: 'row-reverse',
      }}>
        <div className = "drive-category">
          <div className = "drop-down">
            <p>Category</p>
            <Dropdown options={categoryOptions} value={defaultCategoryOption} placeholder="Select an option" />
          </div>
          <div className = "drop-down">
            <p>Sort</p>
            <Dropdown options={sortOptions} value={defaultSortOption} placeholder="Select an option" />
          </div>
        </div>
      </div>
      <div style = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'space-between',
      }}>
        <div className = "drive-heading">Folders</div>
        <div style = {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          paddingLeft: 15,
        }}>
        <ProjectPreview1 callback={callBackRedirect}/>
        <ProjectPreview2 callback={callBackRedirect}/>
        <ProjectPreview3 callback={callBackRedirect}/>
        </div>
        <div className = "drive-heading">Recent Files</div>
      </div>
      <PDFFiles/>
      <ExcelFiles/>
      <OtherFiles/>
    </div>
  );
}


export default Drive;
