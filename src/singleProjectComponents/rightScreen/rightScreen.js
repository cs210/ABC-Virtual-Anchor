import React from 'react';
import lilMiq from './lilMiq.png';
import {FaPlay, FaPause } from "react-icons/fa";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

import { Line, Circle } from 'rc-progress';
import './rightScreen.css';


class RightScreen extends React.Component {
    
    
    render() {
        return (
          <nav>
            
            <div class="flex-container-right" id="right">
                <div class = "image">
                    <img src={lilMiq} alt="lil miquela"
                    value = {{}}
                />
                </div>
                
                <div class = "box"> 
                    <div class="play">
                        <Link class=""><IoIosSkipBackward/></Link>
                        <Link class=""><FaPlay/></Link>
                        <Link class=""><IoIosSkipForward/></Link>
                        
                    </div>
                    
                </div>
                
                       
                
                   
            </div>

          </nav>
        );
      }


}

export default RightScreen;