import React, { Component } from 'react';
import styled from 'styled-components';

import NewsCreateForm from './newsCreateForm';

export default class NewsCreateModel extends Component {
    render() {
        return (
            <Container>
                <NewsCreateForm />
            </Container>
        )
    }
}

const Container = styled.div`
    z-index: 2;
    position: fixed;
    top: 20em;
    left: 46.3em;
    padding: 100px;
    background-color: #006400;
    border-radius: 5px;
    border: 2px #808000 solid;
    box-shadow: 0 2px #000080;
`;