import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import Image4 from './assets/Image4@2x.png';
import Image3 from './assets/Image3@2x.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//import { Select } from 'antd';

class ProjectPreview extends React.Component {
  render() {
    return (
      <Link to="/project" className = "link">
        <div className = "project-box">
          <h1> Democratic Primary </h1>
          <p> South Carolina, the last of the first four early states, votes today.
          We'll start seeing results shortly after polls close at 7 p.m. Eastern.</p>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left'
          }}>
            <img className = "collaborator-images" src = {Image4}/>
            <img className = "collaborator-images" src = {Image3}/>
          </div>
          <p style = {{
            color: 'lightgray'
          }}> 2 days ago</p>
        </div>
      </Link>
    );
  }
}

const newsOptions = [
  'Breaking News', 'two', 'three'
];
const defaultNewsOption = newsOptions[0];
const labelOptions = [
  'In Progress', 'Published', 'three'
];
const defaultLabelOption = labelOptions[0];
const categoryOptions = [
  'Internal', 'two', 'three'
];
const defaultCategoryOption = categoryOptions[0];
const sortOptions = [
  'By Date', 'two', 'three'
];
const defaultSortOption = sortOptions[0];

class Dashboard extends React.Component {
  render() {
    return (
      <div className = "dashboard" style = {{
        width: 1050,
        height: window.innerHeight
      }}>
        <div style = {{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div className = "drop-down">
            <p>News</p>
            <Dropdown options={newsOptions} onChange={this._onSelect} value={defaultNewsOption} placeholder="Select an option" />
          </div>
          <div className = "drop-down">
            <p>Label</p>
            <Dropdown options={labelOptions} onChange={this._onSelect} value={defaultLabelOption} placeholder="Select an option" />
          </div>
          <div className = "drop-down">
            <p>Category</p>
            <Dropdown options={categoryOptions} onChange={this._onSelect} value={defaultCategoryOption} placeholder="Select an option" />
          </div>
          <div className = "drop-down">
            <p>Sort</p>
            <Dropdown options={sortOptions} onChange={this._onSelect} value={defaultSortOption} placeholder="Select an option" />
          </div>
        </div>
        <div style = {{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'space-between',
        }}>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
          }}>
          <ProjectPreview/>
          <ProjectPreview/>
          <ProjectPreview/>
          </div>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
          }}>
          <ProjectPreview/>
          <ProjectPreview/>
          <ProjectPreview/>
          </div>
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
          }}>
          <ProjectPreview/>
          <ProjectPreview/>
          <ProjectPreview/>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
