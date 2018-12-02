import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import NewsCreateModel from '../../components/newsCreateModel';

export default class newsPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            isFormOpen: false
        };
    };

    componentDidMount = () => {
        this.props.getNews();
    };

    handleClick = (e) => {
        this.setState({ isFormOpen: !this.state.isFormOpen })
    } 

    render() {

        let newsList = []

        if(this.props.news.length > 0){
            newsList = this.props.news.map(item =>
                <News key={item.id} isFormOpen={this.state.isFormOpen} >
                    <H3>{item.title}</H3>
                    <div>{item.body}</div>
                </News>    
            )
        }
        return (
            <Grid>
                <Row>
                    <Col lg='4' lgOffset={4}>
                        {newsList.length > 0 && newsList}
                    </Col>

                    <Col lg='4'>
                        <button onClick={this.handleClick}>{this.state.isFormOpen ? 'Cancel' : 'Create'}</button>
                    </Col>
                </Row>
                {this.state.isFormOpen && <NewsCreateModel />}
            </Grid>
        );
    };
};

const News = styled.div`
    text-align: center;
    background: #D3D3D3;
    opacity: ${props => props.isFormOpen ? '.3' : '1'}
`;

// margin: auto;
// padding: 1em;
// width: 50em;

const H3 = styled.h3`
    text-transform: uppercase; 
    margin: 0;
`;