import React from 'react';
import Modal from '../../UI/Modal/Modal';
import Toolbar from './IndexPageToolbar/Toolbar';
import Body from './IndexPageBody/Body';
import Popup from './IndexPagePopup/Popup';

class IndexPage extends React.Component {
    state = {
        showModal : false
    }
    onClickHandler = () => {
        this.setState({showModal : true});
    }
    cancelModal = () => {
        this.setState({showModal : false});
    }
    render() {
        return(
            <React.Fragment>
                <Modal show={this.state.showModal} modalClosed={this.cancelModal}>
                    <Popup />               
                </Modal> 
                <Toolbar 
                    title = 'Dashletter'
                    text = 'SignUp'
                    clicked = {this.onClickHandler}/>
                <Body className="mt-5"/>
                
            </React.Fragment>
        );
    }
}

export default IndexPage;