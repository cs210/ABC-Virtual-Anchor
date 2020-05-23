import React from 'react';
// import '@google/model-viewer/dist/model-viewer';
import ModelViewer from './singleProjectComponents/ModelViewer/modelViewer'
import ModelToolBar from './singleProjectComponents/ModelViewer/modelToolBar'

import {css } from 'emotion';

class Studio extends React.Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div
                className= {
                    css`
                        display: flex;
                        width: 100vw;
                        height: 100vh;
                    `
                }
            >
                <div
                    className= {
                        css`
                            width: 50%;
                            height: 100%;
                        `
                    }
                >
                    <ModelToolBar/>
                </div>
                <div
                    className= {
                        css`
                            width: 50%;
                            height: 100%;
                        `
                    }
                >
                    <ModelViewer/> 
                </div>
            </div>
           
        )
      }
  }

export default Studio;
