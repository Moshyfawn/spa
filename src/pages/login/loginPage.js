import React, { Component } from 'react';

import styled from 'styled-components';

import LoginForm from '../../components/loginForm';

 export default class LoginPage extends Component {

    componentDidUpdate = (prevProps) => {
        if (Object.keys(prevProps.user).length === 0 && Object.keys(this.props.user).length !== 0) {
            this.props.history.push('/profile')
        };
    }

    render() {
        return (
            <Div>
                <Error className='error'>{this.props.error}</Error>
                <LoginForm onSubmit={this.props.login} />
            </Div>
        );
    };
};

const Div = styled.div`
    text-align: right;
    margin: auto;
    margin-top: 10em;
    padding: 3em;
    width: 9.3em;
    background: #D3D3D3;
    border-radius: .3em;
`;

const Error = styled.div`
    font-size: .8em;
    color: red;
`;