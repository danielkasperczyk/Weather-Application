import styled from 'styled-components';
import { useState } from 'react';

const City = styled.button`
    transition: width 500ms ease;
    border: none;
    outline: 0;
    width: ${(props) => props.shrink ? '84%' : '100%'};
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.box};
    color: #EEEFF7;
    padding: 1.2rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    z-index: 0;
    cursor: pointer;
    align-items: center;
    p:first-child{
        flex: 4;
        text-align: start;
    }
    p:nth-child(2){
        flex: 1;
    }
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #c41212;
    color: white;
    outline: 0;
    padding: 0.5rem;
    position: absolute;
    transition: width 500ms ease;
    top: 5px;
    bottom: 5px;
    right: 0;
    width: ${(props) => props.shrink ? '50px' : '0px'};
    border-radius: 0 5px 5px 0;
    z-index: ${(props) => props.shrink ? '0' : '-1'};
    cursor: pointer;
`

const OtherCity = ({remove, city}) => {
    const [shrink, setShrink] = useState(false);

    const buttonClick = (e) => {
        remove(e);
        setShrink(!shrink);
    }

    return(
        <>
            <City onClick={e=> setShrink(!shrink)} shrink={shrink}>
                <p>{city.city}</p>
                <p>{city.temp} &#x2103;</p>
            </City>
            <Button id={city.id} type="button" shrink={shrink} onClick={buttonClick}>X</Button>
        </>
    )
}

export default OtherCity;