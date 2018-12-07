import React, { Component } from 'react';
import styled from 'styled-components';
import { AccordionItem,
        AccordionItemTitle,
        AccordionItemBody } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';

import NewsCreateModel from './newsCreateModel';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state={
            isFormOpen: false
        };
    };

    componentDidUpdate = (prevProps) => {
        if (JSON.stringify(prevProps.item) !== JSON.stringify(this.props.item)) {
            this.setState({ isFormOpen: false })
        };
    }

    handleOpenForm = () => {
        this.setState({ isFormOpen: !this.state.isFormOpen })
    }

    handleChangeNews = (item) => {
        this.props.updateNews(item);
    }

    handleDelete = () => {
        this.props.deleteNews(this.props.item.id);
    }

    render() {
        // const item = this.props.item
        const {item} = this.props
        return (
            <Container>
                <AccordionItem>
                    <AccordionItemTitle>
                        <Title>{item.title}</Title>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <Body>{item.body}</Body>
                    </AccordionItemBody>
                </AccordionItem>
                
                <Options>
                <Delete onClick={this.handleDelete}>Delete</Delete>
                <Update onClick={this.handleOpenForm}>Update</Update>
                {this.state.isFormOpen && <NewsCreateModel onSubmit={this.handleChangeNews} initialValues={item} />}
                </Options>
                
            </Container>
            
        )
    }
}
// 
const Container = styled.div`
    text-align: center;
    padding: 0 0 0.5em 0;
`;

const Title = styled.h3`
    text-transform: uppercase;
    text-align: center;
    margin: 0.2em 0.2em 0.5em 0.2em;
`;

const Body = styled.div`
`;

const Options = styled.div`
    margin-top: 0.5em;
`;

const Delete = styled.button`
    width: 7em;
    padding: 0.5em 0.9em;
    margin: 0 0.4em;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: #f3f4f5;
    color: #777777;

`;

const Update = styled.button`
    width: 7em;
    padding: 0.5em 0.9em;
    margin: 0 0.4em;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: #f3f4f5;
    color: #777777;
`;