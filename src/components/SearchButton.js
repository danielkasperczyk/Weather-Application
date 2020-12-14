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
    p{
        font-size: 3rem;
    }
`

const SearchButton = () => {
    return(
        <Circle type="button">
            <p>+</p>
        </Circle>
    )
}

export default SearchButton;