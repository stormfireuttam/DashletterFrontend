import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import Body from './Body/Body';
import './Userpage.scss';
import Inbox from '../Inbox/Inbox';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';

class UserPage extends React.Component {

    render() {

            return (
                <React.Fragment>
                    <Toolbar/>
                    <div className="wrapper">
                    <Router>
                        <div className="sidebar">
                            <h5>Osama Abrar</h5>
                            <ul>
                                <div activeclassname="active"><li><NavLink exact to="/user/inbox"><i className="fas fa-envelope-open-text"></i>INBOX</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user"><i className="fas fa-home"></i>Home</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/favourites"><i className="fas fa-star"></i>Favourites</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/trending"><i className="fas fa-fire"></i>Trending</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/subscribed"><i className="fas fa-atlas"></i>Subscribed</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/settings"><i className="fas fa-users-cog"></i>Settings</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/create">Create a Team</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/folders"><i className="fas fa-folder"></i>Folders</NavLink></li></div>
                                <div activeclassname="active"><li><NavLink exact to="/user/trash"><i className="fas fa-trash-alt"></i>Trash</NavLink></li></div>
                            </ul> 
                        </div>
                        <div className="main_content">
                            <Route exact path="/user" component={Body}/>
                            <Route path="/user/inbox" render={() => <Inbox title="Inbox"/>}/>  
                            <Route path="/user/favourites" render={() => <Inbox title="Favourites"/>}/>  
                            <Route path="/user/trending" render={() => <Inbox title="Trending"/>}/>  
                            <Route path="/user/subscribed" render={() => <Inbox title="Subscribed"/>}/>  
                            <Route path="/user/create" render={() => <Inbox title="Create"/>}/>            
                        </div>
                        </Router>
                    </div>
                </React.Fragment>
            );
        }
    }


export default UserPage;