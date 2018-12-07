import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return(
            <div>
                <FooterStyled>Some footer content</FooterStyled>
                <div></div>
            </div>
        );
    };
};

const FooterStyled = styled.footer`
    padding: 4em 0;
    margin: 2em 0 0 0;
    text-align: center;
    background-color: #a3a3a3;
    flex-shrink: 0;
`;     
