import React, { Component } from 'react';
import styled from 'styled-components';

import NewsCreateForm from './newsCreateForm';
import NewsUpdateForm from './newsUpdateForm';

export default class NewsCreateModel extends Component {
    render() {
        return (
            <Container>
                {this.props.initialValues
                    ? <NewsUpdateForm onSubmit={this.props.onSubmit} initialValues={this.props.initialValues} />
                    : <NewsCreateForm onSubmit={this.props.onSubmit} />
                }
            </Container>
        )
    }
}

const Container = styled.div`
    z-index: 2;
    position: absolute;
    top: 20em;
    left: 41.7em;
    padding: 100px;
    background-color: #006400;
    border-radius: 5px;
    border: 2px #808000 solid;
    box-shadow: 0 2px #000080;
`;