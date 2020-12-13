import React, { Component } from 'react'
import styled from 'styled-components';
// import Marker from '../icons/marker.svg';
const City = styled.div`
    margin-top: 1rem;
    width: 100%;
    max-width: 450px;
    background: ${({theme}) => theme.purple};
    background: #445878;
    border-radius: 10px;
    color: ${({theme}) => theme.light};
    height: 150px;

`;

class MainCity extends Component {
    render() {
        return (
            <>
                <City>
                    <h1> Work </h1>
                </City>
            </>
        )
    }
}

export default MainCity;