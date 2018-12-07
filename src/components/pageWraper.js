import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';

export default class PageWraper extends Component {
    render() {
        return(
            <Container>
                <Header />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </Container>
        );
    };
};

const Container = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    flex: 1 0 auto;
`;