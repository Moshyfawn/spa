import React, { Component } from 'react';

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

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Login </label>
                    <input name='login' type='text' value={this.state.login} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Password </label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    };
};