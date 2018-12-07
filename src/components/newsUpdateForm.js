import React, { Component } from 'react';
import styled from 'styled-components';
import InputCounts from './inputCounts';
import TextareaCounts from './textareaCounts';

export default class newsUpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: this.props.initialValues ? this.props.initialValues.title : '',
            body: this.props.initialValues ? this.props.initialValues.body : '',
            isButtonDisabled: false
        };
    };

    toggleButton = (buttonDisabled) => {
        this.setState({ isButtonDisabled: buttonDisabled })
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })

    };

    handleSubmit = (e) => {
        e.preventDefault()
        let res = {}
        if(this.props.initialValues){
            res = {...this.props.initialValues}
        }
        this.props.onSubmit({...res, ...this.state})
    }

    

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input>
                    <Label>Title</Label>
                    <InputCounts value={this.state.title} onChange={this.handleChange} toggleButton={this.toggleButton} />
                </Input>
                <Input>
                    <Label>Body</Label>
                    <TextareaCounts name='body' value={this.state.body} onChange={this.handleChange} toggleButton={this.toggleButton} />
                </Input>
                <Button type='submit' disabled={this.state.isButtonDisabled ? true : false} >Submit</Button>
            </Form>
        );
    };
};


const Input = styled.div`
    width: 25.6em;
    margin: auto;
`;

const Label = styled.h2`
    margin: 0;
    padding: .1em;
    color: grey;
    `;

const Button = styled.button`
    padding: 1em 4em 1em 4em;
    margin: 4em 0 0 0;
    font-size: .8em;
    border-radius: 7px;
    background: #adadad;
    color: black;

    &:hover {
        box-shadow: 0 2px #555;
      }
    `;

const Form = styled.form`
    margin: auto;
    padding: .3em;

`;
