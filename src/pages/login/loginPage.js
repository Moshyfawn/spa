import React, { Component } from 'react';

import LoginForm from '../../components/loginForm';

 export default class LoginPage extends Component {
    render() {
        console.log(this.props.user, this.props.error)
        return (
            // loginForm
            <div>
                <LoginForm onSubmit={this.props.login} />
                <div>{this.props.error}</div>
            </div>
        );
    };
};