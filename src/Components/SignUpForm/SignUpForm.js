import React from 'react';
import './SignUpForm.css';
import {Container, Button, ButtonGroup} from 'react-bootstrap';
import Axios from 'axios';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            loggedIn
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    login = (email, password) => {
        const request = Axios.post("https://dashletter-backend.herokuapp.com/signup", 
        { email,  password})
        .then((response) => console.log(response))
        .catch((err) => console.log("Something went wrong!", err));
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const {email, password} = this.state
        this.login(email, password)
    }
    render() {
        return(
            <div>
            <h1><b>Welcome to Dashletter</b></h1>
            <Container>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label forhtml="email">Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} id="email"/>
                </div>
                <div className="form-group">
                    <label forhtml="password">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label forhtml="password">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-danger btn-block">Submit</button>
            </form> 
            <hr/>    
            <div className="d-flex flex-column">
            <ButtonGroup>
                <Button variant="danger" className="googlelogo">Login with Google+</Button>
                <Button className="fblogo">Login with Facebook</Button>
            </ButtonGroup>
            </div> 
        </Container>  
        </div>  
        );
    }
}
        
export default SignUp;