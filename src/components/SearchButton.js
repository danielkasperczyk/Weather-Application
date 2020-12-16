import styled from 'styled-components';

const Circle = styled.button`
    border: none;
    outline: 0;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: ${({theme}) => theme.add};
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1C1D21;
    transition: transform 500ms ease;
    outline: 0;
    transform: ${(props) => props.rotate ? 'rotate(225deg)' : 'rotate(0)'};
    p{
        font-size: 3rem;
    }
`

const SearchButton = props => {
    return(
        <Circle type="button" onClick={props.click} rotate={props.rotate}>
            <p>+</p>
        </Circle>
    )
}

export default SearchButton;