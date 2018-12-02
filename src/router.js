import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPageContainer from './pages/login/loginPageContainer';
import ProfilePageContainer from './pages/profile/profilePageContainer';
import NewsPageContainer from './pages/news/newsPageContainer';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={LoginPageContainer} />
                <Route exact path='/profile' component={ProfilePageContainer} />
                <Route exact path='/news' component={NewsPageContainer} />
            </Switch>
        );
    };
};

export default Router;