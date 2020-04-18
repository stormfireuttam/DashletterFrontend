import React from 'react';
import {Navbar, InputGroup, FormControl} from 'react-bootstrap';
import './Toolbar.css';

class Toolbar extends React.Component {
    render() {
        return(
            <Navbar sticky="top" expand="lg" className="bar">
                <Navbar.Brand href="/" className="ml-4 mr-5"><h2><b>Dashletter</b></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <InputGroup className="mx-5" size="sm">
                    <FormControl
                            placeholder="Search..."
                            style={{backgroundColor: '#f2f2f2'}}/>   
                    </InputGroup>
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

export default Toolbar;
