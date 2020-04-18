import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import SignUp from '../../SignUpForm/SignUpForm';
import Login from '../../LoginForm/Login';

const PopUp = () => (
    <Tabs fill variant="tabs" defaultActiveKey="signUp">
        <Tab eventKey="signUp" title="Sign Up">
            <SignUp />
        </Tab>
        <Tab eventKey="login" title="Login">
            <Login />
        </Tab>
    </Tabs>
)
    
export default PopUp;