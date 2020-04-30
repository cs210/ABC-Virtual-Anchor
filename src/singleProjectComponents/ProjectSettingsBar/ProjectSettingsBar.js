import React, { useState }  from 'react';
import {css } from 'emotion';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import JohnTravolta from '../../assets/john_tree.svg';
import HollyWood from '../../assets/cinema.svg';
import Camera from '../../assets/camera.svg';
import FPS from '../../assets/technology.svg';

import { Button } from 'antd';

const ProjectSettingsBar = () => {
    const [anchorKey, setAnchorKey]  = useState("0");
    const [setKey, setSetKey]  = useState("0");

    const idToStateMapper = {
        'anchor' : setAnchorKey,
        'set' : setSetKey
    }

    const fieldToAnchorMapper = {
        '0' : "John Travolta",
        '1' : "Uma Thurman",
        '2' : "Samuel L. Jackson",
        '3' : "Quentin Tarantino",
    }; 

    const fieldToSetMapper = {
        '0' : "New York, New York",
        '1' : "Hollywood Boulevard",
        '2' : "Asteroid Belt",
    }; 

    const handleClick = (id, e) => {
        idToStateMapper[id](e.key)    
    }
    const anchor_menu = () => {
        return (
            <Menu onClick={(e) => {handleClick('anchor', e)}}>
                <Menu.Item key="0">
                    {fieldToAnchorMapper['0']}
                </Menu.Item>
                <Menu.Item key="1">
                    {fieldToAnchorMapper['1']}
                </Menu.Item>
                <Menu.Item key="2">
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
                    <div>{val}</div>
                    <div>{text}</div>
                </div>

            </div>
        );
    }

    return (
    <div       
    className={
        css`
        display: flexbox;
        flex-direction: row;  
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        background-color: #fbfbfb;
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
            {editable_attribute(fieldToAnchorMapper[anchorKey], anchor_menu, JohnTravolta, "News Anchor")}
            {editable_attribute(fieldToSetMapper[setKey], set_menu, HollyWood, "Set Location")}
            {uneditable_attribute(Camera, "Cameras", "2")}
            {uneditable_attribute(FPS, "FPS", "60")}
            
        </div>
    </div>
    )
}

export default ProjectSettingsBar;





