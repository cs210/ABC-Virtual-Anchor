import React, { useState }  from 'react';
import {css } from 'emotion';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

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


    return (
    <div       
    className={
        css`
        display: flexbox;
        flex-direction: column;  
        height: 100%;
        width: 100%;
        `
    }>
        <div    
        className={
            css`
            display: flexbox;
            flex-direction: column;
            height: 100%;
            width: 100%;
            `
        }>
            <div>
                <Dropdown overlay={anchor_menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {fieldToAnchorMapper[anchorKey]} <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <br/>
            <div>
                <Dropdown overlay={set_menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {fieldToSetMapper[setKey]} <DownOutlined />
                    </a>
                </Dropdown>
            </div>

        </div>
    </div>
    )
}

export default ProjectSettingsBar;





