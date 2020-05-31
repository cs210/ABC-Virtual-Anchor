import React, { useState }  from 'react';
import {useHistory} from 'react-router-dom';
import {css } from 'emotion';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import JohnTravolta from '../../assets/john_tree.svg';
import HollyWood from '../../assets/cinema.svg';
import Camera from '../../assets/camera.svg';
import FPS from '../../assets/technology.svg';

import { Button } from 'antd';
import {Icon} from '../RichTextEditor/components'

const ProjectSettingsBar = () => {
    const history = useHistory();
    const [anchorKey, setAnchorKey]  = useState("0");
    const [setKey, setSetKey]  = useState("0");

    const idToStateMapper = {
        'anchor' : setAnchorKey,
        'set' : setSetKey
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

    const handleClick = (id, e) => {
        idToStateMapper[id](e.key)    
    }
    const anchor_menu = () => {
        return (
            <Menu onClick={(e) => {handleClick('anchor', e)}}>
                <Menu.Item key="0" >
                    {fieldToAnchorMapper['0']}
                </Menu.Item>
                <Menu.Item key="1" disabled>
                    {fieldToAnchorMapper['1']}
                </Menu.Item>
                <Menu.Item key="2" disabled>
                    {fieldToAnchorMapper['2']}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                    {fieldToAnchorMapper['3']}
                </Menu.Item>
            </Menu>
        );
    }
    const set_menu = () => {
        return (
            <Menu onClick={(e) => {handleClick('set', e)}}>
                <Menu.Item key="0">
                    {fieldToSetMapper['0']}
                </Menu.Item>
                <Menu.Item key="1">
                    {fieldToSetMapper['1']}
                </Menu.Item>
                <Menu.Item key="2">
                    {fieldToSetMapper['2']}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                    {fieldToSetMapper['3']}
                </Menu.Item>
            </Menu>
        );
    }

    const editable_attribute = (val, menu, img, text,) => {
        return (
            <div
                className={
                    css` 
                    display: flex;
                    margin-left: 10px;
                    margin-bottom: 4px;
                    `
                }
            >
                <div>
                    <img 
                    className={
                        css` 
                        width: 50px;
                        height: 50px;
                        border: solid;
                        border-radius: 100%;
                        margin: 0px 10px;
                        `
                    }
                    src={img}/>
                </div>
                <div
                    className= {
                        css`
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                        `
                    }
                >
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {val} <DownOutlined />
                        </a>
                    </Dropdown>
                    <div>{text}</div>
                </div>

            </div>
        );
    }

    const render_button = (val) => {
        return (
            <div className={
                css`
                background: #6672FB 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #00000029;
                border-radius: 29px;
                opacity: 1;
                text-align: center;
                font: Circular Std;
                font-size: 20px;
                letter-spacing: 0;
                color: #FFFFFF;
                width: 90%;
                cursor: pointer;
                height: 40px;
            `
            } onClick={() => {window.alert("Your script has been enqueued for rendering. When it has been completely rendered it will appear under rendered videos.");}}>{val}</div>
        );
    }

    const video_links = (val) => {
        return (
            <div className={
                css`
                background: #F7F9FB 0% 0% no-repeat padding-box;
                opacity: 1;
                text-align: center;
                font: Circular Std;
                font-size: 12px;
                letter-spacing: 0;
                width: 90%;
                cursor: pointer;
                height: 40px;
                margin-bottom: 20px;
            `
            }>{val}</div>
        );
    }


    const uneditable_attribute = (img, val, text) => {
        return (
            <div
                className={
                    css` 
                    display: flex;
                    margin-left: 10px;
                    margin-bottom: 4px;
                    `
                }
            >
                <div
                    className= {
                        css`
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                        `
                    }
                >
                    <div
                        className= {
                        css`
                            margin-bottom: 3px;
                        `
                        }
                    >
                    {val}</div>
                    <div
                        className= {
                        css`
                            border-left: solid #32a1ce;
                        `
                        }
                    >
                        <div
                            className= {
                            css`
                                margin-left: 5px;
                            `
                            
                            }
                        >{text}</div>
                    </div>
                </div>

            </div>
        );
    }

    return (
    <div       
    className={
        css`
        display: flex;
        flex-direction: column;  
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
        width: 20%;
        background-color: #fff;
        `
    }>
        <div    
        className={
            css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 45%;
            width: 100%;
            `
        }>
            <div
                className={
                    css`
                    font-size: 1.4em;
                    font-weight: bold;
                    width: 90%;
                    border-bottom: 1px solid;
                    padding: 5px;
                    margin-bottom: 15px;
                    cursor: pointer;
                    `
                }
                onClick={ ()=> {
                    history.replace("/studio/");
                 }}
            >Set 
                <span
                    className={
                        css`
                        
                        margin-left: 7px;
                        `
                    }
                ><Icon>create</Icon></span>
            </div>
            {editable_attribute(fieldToAnchorMapper[anchorKey], anchor_menu, JohnTravolta, "News Anchor")}
            {editable_attribute(fieldToSetMapper[setKey], set_menu, HollyWood, "Set Location")}
            <div
                className={
                    css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    width: 80%;
                    `
            }>
                {uneditable_attribute(Camera, "Cameras", "2")}
                {uneditable_attribute(FPS, "FPS", "60")}
            </div>
        </div>
        <div
            className={
                css`
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 15%;
                justify-content: space-between;
                margin-bottom: 30px;
                `
        }>

        <div
            className={
                css`
                font-size: 0.75em;
                font-weight: bold;
                width: 90%;
                border-bottom: 1px solid;
                padding: 5px;
                margin-bottom: 15px;
                `
        } alt={"When your video is rendered it will appear here"}>Rendered Videos</div>
            {video_links("🎥 Corona Virus v0.001 May 16 2020")}
            {render_button("Render Video")}
        </div>

    </div>
    )
}

export default ProjectSettingsBar;





