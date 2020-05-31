import React, { useState }  from 'react';
// import '@google/model-viewer/dist/model-viewer';
import ModelViewer from './singleProjectComponents/ModelViewer/modelViewer'
import ModelToolBar from './singleProjectComponents/ModelViewer/modelToolBar'
import EditorsNavigationBar from './singleProjectComponents/EditorsNavigationBar/editorsNavigationBar';

import {css } from 'emotion';

const Studio = () => {
    const [skybox, setSkybox] = useState('0')

    const changeSkyBox = (id) => {
        console.log(id)
        setSkybox(id)
    }
    const fieldToSetMapper = {
        '0' : "Dusk",
        '1' : "Starry Night",
        '2' : "Janet's Void",
    }; 

    const fieldToAnchorMapper = {
        '0' : "John Travolta",
        '1' : "Uma Thurman",
        '2' : "Samuel L. Jackson",
        '3' : "Quentin Tarantino",
    }; 

    const anchorperson_settings = {
        anchor:  true,
        scale: 7,
        y_offset: 5000,
        rotation: true
    }

    const studio_settings = {
        anchor:  false,
        scale: 3,
        y_offset: 500,
        rotation: true
    }

    const viewer = anchorperson_settings;

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
            {console.log('Reloading')}
            {console.log(skybox)}
            <EditorsNavigationBar url={"/project/"}/>
            <div
                className= {
                    css`
                        width: 45%;
                        height: 100%;
                    `
                }
            >
                <ModelToolBar setSkybox={changeSkyBox} fieldToAnchorMapper={fieldToAnchorMapper} fieldToSetMapper={fieldToSetMapper} />
            </div>
            <div
                className= {
                    css`
                        width: 50%;
                        height: 100%;
                    `
                }
            >
                <ModelViewer skybox={skybox} anchor={viewer.anchor} scale={viewer.scale} y_offset={viewer.y_offset} rotation={viewer.rotation} /> 
            </div>
        </div>
    )
    
  }

export default Studio;
