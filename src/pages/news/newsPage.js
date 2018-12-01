import React, { Component } from 'react';

import styled from 'styled-components';

export default class newsPage extends Component {

    componentDidMount = () => {
        this.props.getNews();
    };

    render() {

        let newsList = []

        if(this.props.news.length > 0){
            newsList = this.props.news.map(item =>
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div>{item.body}</div>
                </div>    
            )
        }
        console.log(this.props.news)
        return (
            <div>
                {newsList.length > 0 && newsList}
            </div>
        );
    };
};