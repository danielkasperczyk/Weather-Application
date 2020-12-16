import styled from 'styled-components';
import { useState } from 'react';

import Loader from './Loader';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => theme.search};
    transition: all 500ms ease;
    transform: ${(props) => props.isOpen === true ? 'translate(0, 0)' : 'translate(75%, 75%)'};
    border-radius: ${(props) => props.isOpen ? '0' : '50%'};
    opacity: ${(props) => props.isOpen ? '1' : '0'};
`
const Box = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
`
const Form =  styled.form`
    width: 100%;
    input{
        width: 100%;
        border: none;
        background: transparent;
        outline: 0;
        padding: 1rem;
        border-bottom: 3px solid ${({theme}) => theme.text};
        color: ${({theme}) => theme.text};
        ::placeholder{
            color: ${({theme}) => theme.text}
        }
    }
`
const Search = props => {
    const [ city, setCity ] = useState('');
    return(
        <Container isOpen={props.isOpen}>
            <Box>
                <Form onSubmit={props.find}>
                    <input 
                        type="text" 
                        placeholder="Search your city" 
                        name="city" 
                        autoComplete="off"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}/>
                </Form>
                <Loader />
            </Box>     
        </Container>
    )
}

export default Search;