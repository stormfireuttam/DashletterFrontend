import React from 'react';
// import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import '../../UserPage/Toolbar/Toolbar.css';

class Toolbar extends React.Component {
    render() {
        return(
                <Navbar sticky="top" expand="lg" className="bar">
                <Navbar.Brand className="ml-3 mr-4 my-auto"><h2><b>Dashletter</b></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/" className="mr-4"><h5>Blog</h5></Nav.Link>
                    </Navbar.Collapse>
                    <Button 
                        color = "#5581FF"
                        onClick={this.props.clicked} 
                        >{this.props.text}</Button>
                </Navbar.Collapse>
                </Navbar>
        );
    }
} 

export default Toolbar;