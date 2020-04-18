import React from 'react';
import { Container } from 'react-bootstrap';
import './Inbox.css';

class UserPage extends React.Component {
    render() {
        return (
            <Container>
               <h2 className="heading">{this.props.title}</h2>
               <div className="block">
                   Now receive your favourite Newsletter here.
                   <br/><br/>
                   Say, goodbye to traditional dashboard.
               </div>
            </Container>
        );
    }
}

export default UserPage;