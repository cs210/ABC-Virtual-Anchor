import React, { useState }  from 'react';
import { Menu, Dropdown } from 'antd';

import JohnTravolta from '../../assets/john_tree.svg';
import HollyWood from '../../assets/cinema.svg';
import Camera from '../../assets/camera.svg';
import FPS from '../../assets/technology.svg';

import { DownOutlined } from '@ant-design/icons';
import {css } from 'emotion';

const ModelToolBar = (props) => {
    const [anchorKey, setAnchorKey]  = useState("0");
    const [setKey, setSetKey]  = useState("0");

    const idToStateMapper = {
        'anchor' : setAnchorKey,
        'set' : setSetKey
    }


    const handleClick = (id, e) => {
        idToStateMapper[id](e.key)    
        props.setSkybox(e.key)
    }
    const anchor_menu = () => {
        return (
            <Menu onClick={(e) => {handleClick('anchor', e)}}>
                <Menu.Item key="0">
                    {props.fieldToAnchorMapper['0']}
                </Menu.Item>
                <Menu.Item key="1" disabled>
                    {props.fieldToAnchorMapper['1']}
                </Menu.Item>
                <Menu.Item key="2" disabled>
                    {props.fieldToAnchorMapper['2']}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                    {props.fieldToAnchorMapper['3']}
                </Menu.Item>
            </Menu>
        );
    }
    const set_menu = () => {
        return (
            <Menu onClick={(e) => {handleClick('set', e)}}>
                <Menu.Item key="0">
                    {props.fieldToSetMapper['0']}
                </Menu.Item>
                <Menu.Item key="1">
                    {props.fieldToSetMapper['1']}
                </Menu.Item>
                <Menu.Item key="2">
                    {props.fieldToSetMapper['2']}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                    {props.fieldToSetMapper['3']}
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
            background-color: #fff;
            padding: 30px;
            `
        }>
            <div    
            className={
                css`
                display: flex;
                flex-direction: column;
                justify-content: center;
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
                        `
                }>Set</div>
                {editable_attribute(props.fieldToAnchorMapper[anchorKey], anchor_menu, JohnTravolta, "News Anchor")}
                {editable_attribute(props.fieldToSetMapper[setKey], set_menu, HollyWood, "Set Location")}
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
        </div>
        )
}

export default ModelToolBar;
