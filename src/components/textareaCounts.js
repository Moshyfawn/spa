import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';


import { errors } from '../utils/messages'

export default class TextareaCounts extends Component {

    constructor(props) {
        super(props);
        this.state={
            value: '',
            cur_char: '0',
            left_char: this.props.max_char,
            isLimit: false,
            isLimitOnMount: false
        };
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.isLimit !== this.state.isLimit ) {
            this.props.toggleButton(this.state.isLimit)
        } else if (prevState.isLimitOnMount !== this.state.isLimitOnMount) {
            this.props.toggleButton(this.state.isLimitOnMount)
        }
    }

    componentDidMount = () => {
        let value = this.props.value ? this.props.value : '';
        if (value.length > this.props.max_char) {
            value = value.substr(0, this.props.max_char)
            this.errorOnMount();
        }

        this.setState({ value,
            left_char: this.state.max_char - value.length,
            cur_char: value.length })
    }

    errorOnMount = () => {
        this.setState({ isLimitOnMount: true }, () => {
            setTimeout(() => {this.setState({ isLimitOnMount: false })}, 2000);
        });
    };

    error = () => {
        this.setState({ isLimit : true }, () => {
            setTimeout(() => {this.setState({ isLimit: false })}, 2000);
        });
        

    }

    handleChange = (e) => {
        if (e.currentTarget.value.length < this.props.max_char) {
            this.setState({
                left_char: this.props.max_char - e.currentTarget.value.length,
                value: e.currentTarget.value,
                cur_char: e.currentTarget.value.length
            })
        } else{
            this.error();
        }         
    };

    render() {

        return (
            <Container>
                <InputGroup>
                    <Textarea placeholder='Enter description here...' required={true} maxLength={parseFloat(this.props.max_char)} value={this.state.value} onChange={this.handleChange}/>
                    <ProgressBarStyled >
                        <CircularProgressbar
                            percentage={this.state.cur_char*2}
                            text={`${this.state.left_char}`- 1}
                            initialAnimation={true}
                            backgroundPadding={1}
                            styles={{
                                root: {width: '1em'},
                                path: {strokeLinecap: "square", stroke: this.state.isLimit ? '#ff0000' : this.state.cur_char > 40 ? '#FFFF00' : '#3e98c7' },
                                text: { fill: '#ffffff', fontSize: '3em'},
                                trail: { strokeWidth: '.5em', strokeDasharray: '5.65', strokeDashoffset: '2' },
                            }}
                        />
                    </ProgressBarStyled>
                </InputGroup>
                {this.state.isLimit &&
                    <Warning>
                        {errors.charLimitError}
                    </Warning>
                }
                {this.state.isLimitOnMount &&
                     <Warning>
                        {errors.charLimitOnMountError}
                    </Warning>
                }
                   
            </Container>
        );
    };
};


TextareaCounts.defaultProps = {max_char: 101};

const Container = styled.div`
    height: 15em;
`;

const Textarea = styled.textarea`
    resize: none;
    height: 18em;
    width: 29.3em;

        &:focus {

            box-shadow: 0 0 4px #9fe7f7;
    }
`;

const InputGroup = styled.div`
`;

const ProgressBarStyled = styled.div`
    padding-left: .2em;
    display: inline;

`;

// const hide = keyframes`
//   from {
//     opacity: 1;
//     visibility: visible;
//   }

//   to {
//     opacity: ${ifProp({ isLimit : true }, '0', '1' )};
//     visibility: ${ifProp({ isLimit : true }, 'hidden', 'visible' )};
//   }
// `;

const Warning = styled.div`
  color: red;
  font-size: .8em;
  text-align: left;
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0 0
  `;
  
  /* animation: ${hide} 2s ease-in .2s forwards; 
  
  import styled, { keyframes } from 'styled-components';
  import { ifProp } from 'styled-tools'; */