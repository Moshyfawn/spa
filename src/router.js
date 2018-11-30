import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPageContainer from './pages/login/loginPageContainer';
import ProfilePage from './pages/profile/profilePage';
import MainPage from './pages/mainPage/mainPage'

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/login' component={LoginPageContainer} />
                <Route exact path='/profile' component={ProfilePage} />
            </Switch>
        );
    };
};

export default Router;