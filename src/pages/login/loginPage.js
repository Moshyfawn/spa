import React, { Component } from 'react';

import LoginForm from '../../components/loginForm';

 export default class LoginPage extends Component {

    componentDidUpdate = (prevProps) => {
        if (Object.keys(prevProps.user).length === 0 && Object.keys(this.props.user).length !== 0) {
            this.props.history.push('/')
        };
    }

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.props.login} />
                <div>{this.props.error}</div>
            </div>
        );
    };
};