import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {IoIosArrowBack} from "react-icons/io";
import {FaToggleOn } from "react-icons/fa";
import { IconContext } from "react-icons";

import Button from '@material-ui/core/Button';
import './topBar.css';


class TopBar extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
        
            <div class="header" id="myHeader">
            <div class = "flex-container1">
                <div class = "arrow-wrapper">
                    <Link to="/fs/">
                        <IconContext.Provider value={{ className: "toggle", size: 30}}>
                            <div class="arrow"><IoIosArrowBack/></div>
                        </IconContext.Provider>
                    </Link>
                   
                </div>
                <div class = "flex-container2">
                    <div class="title">Corona Virus Outbreak (Draft)</div>
                    <Link class="sub">Add to Folder </Link>
                </div>
                
               
                
                <div class="flex-container">
                    <IconContext.Provider value={{ className: "toggle", size: 40}}>
                        <Link> <FaToggleOn  /></Link>
                    </IconContext.Provider>
                    <div class="sub">Auto-Animate </div>
                </div>
                
            </div>

             
            </div>
         
        );
      }


}

export default TopBar;