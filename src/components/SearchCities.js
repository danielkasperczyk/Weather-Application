import styled from 'styled-components';


const List = styled.ul`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    font-size: 1.5rem;
    list-style: none;
    &::-webkit-scrollbar {
    display: none;
}             
    li{
        padding: 1rem;
        width: 100%;
    }
`

const Button = styled.button`
    text-align: start;
    width: 100%;
    padding: 1rem;
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.text};
`

const SearchCities = props => {
    return(
        <List>
            {props.cities.map(city => 
                <li key={city.index}>
                    <Button 
                        type="button"
                        onClick={props.click}>
                        {city.formatted} 
                    </Button>
                </li>)}
        </List>
    )
}

export default SearchCities;