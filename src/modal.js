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

                <div className = "modal-back-wrapper">
                    <Link to="/fs"  className= "">
                        <IconContext.Provider value={{size: 30, color: 'gray'}}>
                            <IoIosClose/>
                        </IconContext.Provider>
                    </Link>
                </div>
                <div className = "left-justify-modal">
                    <div className = 'modal-heading'>Create A New Project</div>
                    <div className = 'modal-subheading-wrapper'>
                        <div className = 'modal-subheading'>Project Name</div>
                        <div className = 'modal-astric'>    *    </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        <textarea value={this.state.projectName} onChange={this.handleChange} cols = '37' rows = '2'/>
                        </label>
                        
                    </form>
                    <div className = 'modal-subheading'>Invite Collaborators</div>
                    <div class = "modal-add-wrapper">
                        <IconContext.Provider value={{size: 30, color: 'gray'}}>
                            <IoIosAddCircleOutline/>
                        </IconContext.Provider>
                    </div>
                    <div className = 'modal-subheading'>Choose Project Type</div>
                    <div className = 'modal-buttons'>
                        <div className = "button-wrapper">
                            <button className= "modal-one"> Breaking News </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-two"> International </button>
                        </div>
                        <div className = "button-wrapper">
                            <button className= "modal-three"> Business </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-four"> Opinion </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-five">     Tech     </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-six"> Science </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-seven"> Politics </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-eight"> Arts and Culture </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-nine"> Real Estate </button>
                        </div>
                        <div className = "modal-button-wrapper">
                            <button className= "modal-ten"> Other </button>
                        </div>      
                    </div>

                    <div className = 'modal-subheading-wrapper'>
                        <div className = 'modal-subheading'>Project Description</div>
                        <div className = 'modal-astric'>    *    </div>
                    </div>
                    <form className={"modal-form"} onSubmit={this.handleSubmit}>
                        <label>
                        <textarea 
                            style={{height: '30px'}}
                            value={this.state.description} onChange={this.handleChange} cols = '37' rows = '6' />
                        </label>
                        
                    </form>
                </div>
                
               
            
                <Invitation/>
                <Invitation/>

            </div>

        
       

        );
            
        
    }
};

export default MyModal ;
