import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function MainRouter() {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/home'  component={Home}/>
                <Route exact path='/about'  component={About}/>
                <Route exact path='/contact'  component={Contact}/>
                <Redirect to='/home'/>
            </Switch>
        </Router>
    )
}