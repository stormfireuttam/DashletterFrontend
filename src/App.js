import React from 'react';
import IndexPage from'./Components/IndexPage/IndexPage';
import { Route, Switch } from 'react-router-dom';
import UserPage from './Components/UserPage/UserPage';

class App extends React.Component{
    render(){
        return (
        <Switch>
                <Route path="/user" component={UserPage} />
                <Route path="/" component={IndexPage} />
        </Switch>
      );
    }
}

export default App;