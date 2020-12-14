import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    p{
        margin-left: 1rem;
    }
`

const Label = styled.label`
    position: relative;
    width: 65px;
    height: 25px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.text};
    border-radius: 25px;
    cursor: pointer;

`
const Input = styled.input`
    opacity:0;
    width: 0;
    height: 0;
`

const Ball = styled.span`
    align-self: center;
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: ${({theme}) => theme.box };
    transition: transform 250ms ease;
    transform: ${(props) => props.move ? 'translateX(5px)' : 'translateX(40px)'};
`

const Mode = (props) => {
    
    return(
        <Wrapper>
            <Label>
                <Input type="checkbox" onChange={() => props.switch()}/>
                <Ball move={props.dark}/>
            </Label>
            <p>{props.dark === true ? 'Light' : 'Dark'} Mode</p>
        </Wrapper>
    )
}

export default Mode;