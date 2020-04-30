import React from 'react';
import lilMiq from './lilMiq.png';
import {FaPlay, FaPause } from "react-icons/fa";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

import { Line, Circle } from 'rc-progress';
import './VideoPlayer.css';

import {css} from 'emotion'
import ReactPlayer from 'react-player'


class RightScreen extends React.Component {
    
    render() {
        return (
        <div 
            className = {
                css`
                width: 20%;
                display: flex;
                justify-content: center;
                padding-top: 5%;
                `
            }
        >    
            <ReactPlayer 
                light
                playIcon={
                    <img 
                    className= {
                        css`
                            width: 540px;
                            height: 360px;
                        `
                    }
                     src={lilMiq}/>
                }
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                width= "540px"
                className='react-player' 
            />
        </div>
        );
      }


}

export default RightScreen;