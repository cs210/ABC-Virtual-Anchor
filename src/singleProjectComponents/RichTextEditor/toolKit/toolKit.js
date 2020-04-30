import React from 'react';
import {css} from 'emotion'

import './toolKit.css';


const ToolKit = () => {
    //This is largely a placeholder section
    // Need to be expanded later
    const Button = (buttonText) => {
        return(
            <div

            > {buttonText}</div>
        );
    }
    const createButtons = () => {
        const buttons = ["File", "Edit", "View", "Insert",
                         "Format", "Tools", "Add-ons", "Help"]
        const comps = buttons.map((text) => 
                        <div 
                        className = "textEditorToolKit"
                        key={text}>{text}</div>);
        console.log(comps)
        return (
            <div
            style = {{
                display: 'flex',
                width: '100%',
            }}
            >{comps}
            </div>
        )
    }

    return createButtons()
}

export default ToolKit;

