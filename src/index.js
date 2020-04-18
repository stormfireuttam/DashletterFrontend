//import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
//import Browse Router
import { BrowserRouter } from 'react-router-dom';
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importing the app
import App from './App';


const app = (
    <BrowserRouter><App /></BrowserRouter>
);

ReactDOM.render(app, document.querySelector('#root'));