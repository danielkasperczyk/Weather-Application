import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Div = styled.div`
    margin-top: 2rem;
    align-self: center;
    display: inline-block;
    width: 60px;
    height: 60px;
    ::after{
        content: " ";
        display: block;
        width: 54px;
        height: 54px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid ${({theme}) => theme.text};
        border-color: ${({theme}) => theme.text} transparent ${({theme}) => theme.text} transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`

const Loader = () => {
    return(
        <Div />
    )
}

export default Loader;