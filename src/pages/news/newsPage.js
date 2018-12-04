import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import NewsCreateModel from '../../components/newsCreateModel';
import News from '../../components/news';

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

    componentDidUpdate = (prevProps) => {
        if (prevProps.news.length < this.props.news.length) {
            this.setState({ isFormOpen: false })
        };
    }

    render() {

        let newsList = []
        // console.log(this.props.news)
        if(this.props.news.length > 0){
            newsList = this.props.news.map(item =>
                <News key={item.id} item={item} deleteNews={this.props.deleteNews} updateNews={this.props.updateNews} />
            )
        }
        return (
            <Grid fluid >
                <Row >
                    <StyledCol lg={4} lgOffset={4} isFormOpen={this.state.isFormOpen}>
                        {newsList.length > 0 && newsList}
                    </StyledCol>

                    <Col lg={4}>
                        <button onClick={this.handleClick}>{this.state.isFormOpen ? 'Cancel' : 'Create'}</button>
                    </Col>
                </Row>
                {this.state.isFormOpen && <NewsCreateModel onSubmit={this.props.createNews} />}
            </Grid>
        );
    };
};

const StyledCol = styled(Col)`
    background: #f3f4f5;
    padding: 0;
    opacity: ${props => props.isFormOpen ? '.2' : '1'};
`;