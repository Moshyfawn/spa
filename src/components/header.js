import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
    render() {
        return(
                <Container>
                    <div>Some header content</div>
                </Container>
        );
    };
};

const Container = styled.header`
    padding: 4em 0;
    margin: 0 0 2em 0;
    text-align: center;
    background-color: #a3a3a3;
    flex-shrink: 0;
`;     
