import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './pages/app';
import Login from './pages/login';
import Home from './pages/home'


export default function IRouter(){
    return <Router>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
        </Switch>
    </Router>
}