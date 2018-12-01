import React, { Component } from 'react';

import styled from 'styled-components';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            login: '',
            password: ''
        };
    };

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    };

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <Label>Login </Label>
                    <Input name='login' type='text' value={this.state.login} onChange={this.handleChange} />
                </div>
                <div>
                    <Label>Password </Label>
                    <Input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        );
    };
};


const Input = styled.input`
    border-radius: .5px;
    
    &:focus {
        box-shadow: 0 2px #000080;
    `;

const Label = styled.label`
    font-size: .8em;
    color: grey;
    `;

const Button = styled.button`
    margin-top: 0.7em;
    margin-left: 5.6em;
    font-size: .8em;
    text-align: center;
    border-radius: 7px;
    background: #adadad;
    color: black;

    &:hover {
        box-shadow: 0 2px #555;
      }
    `;
