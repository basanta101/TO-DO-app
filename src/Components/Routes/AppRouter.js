import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from '../Dashboard';
import About from '../About';
import Login from '../Login/LoginContainer';
import Notfound from '../Notfound';
import Logout from '../Logout';
import PrivateRoute from './PrivateRoute';

const AppRouter = () =>{
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/about" component={About}/>
            <PrivateRoute path='/logout' component={Logout}/>
            <Route  component={Notfound}/>
          </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;