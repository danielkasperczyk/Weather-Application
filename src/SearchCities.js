import styled from 'styled-components';


const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    font-size: 1.5rem;
    list-style: none;

    li{
        padding: 1rem;
    }
`

const SearchCities = props => {
    return(
        <List>
            {props.cities.map(city => <li key={city.index}>{city.formatted}</li>)}
        </List>
    )
}

export default SearchCities;