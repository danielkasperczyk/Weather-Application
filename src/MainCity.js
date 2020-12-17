import React from 'react'
import styled from 'styled-components';
import { Wrapper } from '../units/style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const City = styled.div`
    margin-top: 1rem;
    width: 100%;
    max-width: 450px;
    background: ${({theme}) => theme.purple};
    background: #445878;
    border-radius: 10px;
    color: #EEEFF7;
    height: 150px;
    display: flex;  
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    h1{
        font-size: 3rem;
        margin-top: 1rem;
    }
    p{
        margin-bottom: 1rem;
    }
`;
const Flex = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 2.75rem;
        align-self: center;
    }
    img{
        margin-right: 3rem;
    }
`
const Span = styled.span`
    margin-left: 1rem;
    color: $${({theme}) => theme.light};
`
const  MainCity = ({ city, weather }) => {
    return (
        <Wrapper>
            <Span>
                <p>Current City <Span><FontAwesomeIcon icon={faMapMarkerAlt}/></Span></p>
            </Span>
            <City>
                <h1>{city}</h1>
                <Flex>
                    <img src ={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="wthr img" />
                    <h2>{Math.round(weather.temp)} &#x2103;</h2>
                </Flex>
                <p>Feels like: {Math.round(weather.feels_like)}</p>
             </City>
        </Wrapper>
    )
}

export default MainCity;