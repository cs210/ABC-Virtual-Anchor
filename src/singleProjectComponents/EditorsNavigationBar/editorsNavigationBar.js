import React from 'react';
import {useHistory} from 'react-router-dom';
import {css} from 'emotion'
import BackArrow from '../../assets/back.png';

const EditorsNavigationBar = (props) => {
    const history = useHistory();
    return (
        <div
        className= {
          css`
            width: 5%;
            margin-top: 20px;
            display: flex;
            justify-content: center;
          `
        }
      >
        <div        

            className={
                css`
                cursor: pointer;
                `
            }
            onClick={ ()=> {
            history.replace("/fs/");
         }}>
            <img src = {BackArrow}></img>
        </div>
      </div>

    );

}

export default EditorsNavigationBar;