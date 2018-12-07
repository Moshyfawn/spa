import React, { Component } from 'react';
import styled from 'styled-components';

import NewsUpdateForm from './newsUpdateForm';


// onSubmit={this.props.onSubmit} initialValues={this.props.initialValues}

export default class NewsCreateModel extends Component {
    render() {
        return (
            <Container>
                <NewsUpdateForm  {...this.props} />
            </Container>
        )
    }
}

const Container = styled.div`
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60em;
    height: 30em;
    margin-top: -15em; /* Half the height */
    margin-left: -30em;
    background-color: #a3a3a3;
    border-radius: 5px;
    border: 2px #808000 solid;
    box-shadow: 0 2px #000080;
`;