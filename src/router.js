import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPageContainer from './pages/login/loginPageContainer';
import ProfilePage from './pages/profile/profilePage';
import NewsPageContainer from './pages/news/newsPageContainer';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={LoginPageContainer} />
                <Route exact path='/profile' component={ProfilePage} />
                <Route exact path='/news' component={NewsPageContainer} />
            </Switch>
        );
    };
};

export default Router;