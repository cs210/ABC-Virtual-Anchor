import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import './modal.css';
import { IoIosAddCircleOutline, IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";
import Mail from './assets/mail.png';
import Arrow from './assets/arrow.png';

class Invitation extends React.Component {
    render() {
      return (
        <div className = "invitation-box">
          <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <img src={Mail} />
            <div style = {{
              paddingLeft: 5,
              paddingRight: 5
            }}> Samantha Williams has invited you to collaborate on State of the Union.
            </div>
            <img src={Arrow} />
          </div>
        </div>
      );
    }
  }

class MyModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          projectName: 'Project Name',
          description: 'Give a short description of your project..'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({projectName: event.target.projectName});
        this.setState({description: event.target.description});
      }
    
      handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
      }
    
   render() {
        return (
            <div >

                <div className = 'modal'>
                    <div className = "back-wrapper">
                        <Link to="/fs"  className= "">
                            <IconContext.Provider value={{size: 30, color: 'gray'}}>
                                <IoIosClose/>
                            </IconContext.Provider>
                        </Link>
                    </div>
                    <div className = "left-justify-modal">
                        <div className = 'heading'>Create A New Project</div>
                        <div className = 'subheading-wrapper'>
                            <div className = 'subheading'>Project Name</div>
                            <div className = 'astric'>    *    </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            <textarea value={this.state.projectName} onChange={this.handleChange} cols = '37' rows = '2'/>
                            </label>
                            
                        </form>
                        <div className = 'subheading'>Invite Collaborators</div>
                        <div class = "add-wrapper">
                            <IconContext.Provider value={{size: 30, color: 'gray'}}>
                                <IoIosAddCircleOutline/>
                            </IconContext.Provider>
                        </div>
                        <div className = 'subheading'>Choose Project Type</div>
                        <div className = 'buttons'>
                            <div className = "button-wrapper">
                                <button className= "one"> Breaking News </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "two"> International </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "three"> Business </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "four"> Opinion </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "five">     Tech     </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "six"> Science </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "seven"> Politics </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "eight"> Arts and Culture </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "nine"> Real Estate </button>
                            </div>
                            <div className = "button-wrapper">
                                <button className= "ten"> Other </button>
                            </div>      
                        </div>

                        <div className = 'subheading-wrapper'>
                            <div className = 'subheading'>Project Description</div>
                            <div className = 'astric'>    *    </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            <textarea value={this.state.description} onChange={this.handleChange} cols = '37' rows = '6' />
                            </label>
                            
                        </form>
                    </div>
                
                    <div className = 'create-wrapper'>
                        <Link to = "/project">
                            <button className= "create"> Create Project </button>
                        </Link>
                    </div>
                </div>
                
               
            
                <Invitation/>
                <Invitation/>

            </div>

        
       

        );
            
        
    }
};

export default MyModal ;
