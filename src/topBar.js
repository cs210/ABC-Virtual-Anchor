import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import './index.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      driveSelected: false,
      projectsSelected: true,
      modalVisible: false,
      modalIsOpen: false,
      modalVisible: false

    };
  }
  switchTab() {
    if (this.state.driveSelected) {
      this.setState({driveSelected: false, projectsSelected:true})
    } else {
      this.setState({driveSelected: true, projectsSelected:false})
    }
  }
  toggleModal = () => {
    console.log("toggled")
    console.log(this.state.modalVisible)
    this.state.modalVisible
      ? this.setState({
        modalVisible: false
      })
      : this.setState({ modalVisible: true });
  };

  setModalVisible() {
    if(this.state.modalVisible){
        this.setState({modalVisible: false});
    } else {
        this.setState({modalVisible: true});
    }
    
  }

  openModal() {
    console.log("opened")
    this.setState({modalIsOpen:true});
  }
 
   afterOpenModal() {

  }
 
   closeModal(){

    this.setState({modalIsOpen:false});;
  }

  
  
  render() {
    return (
      <div className = 'top-bar'>
          <Link to="/fs/" className= {this.state.projectsSelected ? 'selected' : 'unselected'}
          onClick={this.switchTab}>
              Projects
          </Link>
          <Link to="/fs/drive"  className= {this.state.driveSelected ? 'selected' : 'unselected'}
          onClick={this.switchTab}>
              Drive
          </Link>
          <Link to="/modal"
              onClick={() => this.toggleModal()}>
              <button className= "button" onClick={() => this.toggleModal()}> Create File </button>
              
          </Link>
          {/* <Modal modalVisible={this.state.modalVisible} /> */}
        <div>
            {/* <button onClick={() => this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
            
              style={customStyles}
              contentLabel="Example Modal"
            >
    
              <h2 >Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
            <div onClick={() => this.toggleModal()}>Contact Us</div>
            <Modal modalVisible={true} /> */}
      </div>   
      </div>
    );
  }
}

  export default TopBar;
