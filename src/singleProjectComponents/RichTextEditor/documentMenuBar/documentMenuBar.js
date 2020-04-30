import React from 'react';
import {useHistory} from 'react-router-dom';
import {css} from 'emotion'

import ToolKit from '../toolKit/toolKit'
import DocIcon from '../../../assets/doc_orange.svg';

{/* <div className = "arrow-wrapper" onClick={(event) => {
  textToSpeech(value)
}}>
    <IconContext.Provider value={{ className: "toggle", size: 30}}>
        <div className="arrow"><IoIosHeadset/></div>
    </IconContext.Provider>
</div>
<div className = "arrow-wrapper">
<Link to="/fs/">
    <IconContext.Provider value={{ className: "toggle", size: 30}}>
        <div className="arrow"><IoIosArrowBack/></div>
    </IconContext.Provider>
</Link>
</div> */}
const DocumentMenuBar = (props) => {
    const history = useHistory();

    return (
        <div
          className= {
            css`
              display: flex;
              justify-content:flex-start;
              width: 100%;
            `
          }
        > 
          <div
            className= {
              css`
                margin: 5px;
                cursor: pointer;
              `
            }
            onClick={ ()=> {
                history.replace("/fs/");
             }}
          >
            <img src={DocIcon}/>
          </div>
          <div          
            className= {
              css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 100%;
              `
            }
          >
            <div style = {{
              fontSize: '1.2em',
              fontWeight: 'bold',
              marginLeft: '6px',
              marginTop: '10px'
            }}>{props.title}</div>
            <ToolKit/>
          </div>
        </div>
        );
}

export default DocumentMenuBar;



