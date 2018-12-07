import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Loader from 'react-loader';
import { Accordion } from 'react-accessible-accordion';
import { ifProp } from 'styled-tools';

import NewsCreateModel from '../../components/newsCreateModel';
import News from '../../components/news';
import PageWraper from '../../components/pageWraper';

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
        // Loader options 
        const options = {
            lines: 3,
            length: 15,
            width: 5,
            radius: 10,
            scale: 1.00,
            corners: 1,
            color: '#000',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 24,
            zIndex: 2e9,
            top: '50%',
            left: '50%',
            shadow: true,
            hwaccel: false,
            position: 'absolute'
        };

        let newsList = []
        if(this.props.news.length > 0){
            newsList = this.props.news.map(item =>
                <Accordion key={item.id}>
                    <News item={item} deleteNews={this.props.deleteNews} updateNews={this.props.updateNews} />
                </Accordion>
                    
            )
        }
        return (
            <PageWraper>
                    <Loader loaded={!this.props.isLoading} options={options} >
                        <Grid >
                            <Row>  
                                <Col lg={8} lgOffset={2}>
                                    <StyledColNews isFormOpen={this.state.isFormOpen}>
                                        {newsList.length > 0 && newsList}
                                    </StyledColNews>
                                </Col>
                                <Col lg={2}>
                                    <StyledColOptions>
                                        <button onClick={this.handleClick}>{this.state.isFormOpen ? 'Cancel' : 'Create'}</button>
                                    </StyledColOptions>
                                </Col>
                            </Row>
                                {this.state.isFormOpen && <NewsCreateModel onSubmit={this.props.createNews} />}
                        </Grid>
                    </Loader>
            </PageWraper>
            
        );
    };
};

const StyledColNews = styled.div`
    background: #f3f4f5;
    padding: 0;
    opacity: ${ifProp({ isFormOpen : true }, '0.2', '1' )};
    `;

const StyledColOptions = styled.div`
    position: fixed;
    z-index: 1;
`;
