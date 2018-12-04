import React, { Component } from 'react';
import styled from 'styled-components';

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
                <Title>{item.title}</Title>
                <Body>{item.body}</Body>
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.handleOpenForm}>Update</button>
                {this.state.isFormOpen && <NewsCreateModel onSubmit={this.handleChangeNews} initialValues={item} />}
            </Container>
            
        )
    }
}

const Container = styled.div`
    text-align: center;
    padding: 0 0.5em;
`;

const Title = styled.h3`
    text-transform: uppercase; 
    margin-top: 1.5em;
    margin-bottom: 0.5em;
`;

const Body = styled.div`
`;