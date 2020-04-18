import React from 'react';
import {Container} from 'react-bootstrap';
import Axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        try {
            const token = Axios.post('https://dashletter-backend.herokuapp.com/login', {email,password})
            localStorage.setItem("token", token)
            this.setState({
                loggedIn: true
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
        console.log(this.state)
    }
    render() {
       return(
        <Container className="containBlock">
            <h1>Dashletter</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label forhtml="email">Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} id="email"/>
                </div>
                <div className="form-group">
                    <label forhtml="pwd">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={this.handleChange}/>
                </div><br/>
                <button type="submit" className="btn btn-danger btn-block">Submit</button>
                </form> 
        </Container>      

       );
   }
}

export default Login;