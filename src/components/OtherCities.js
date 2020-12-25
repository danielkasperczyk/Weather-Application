import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:first-child{
        margin: 0.5rem 0;
    }
`
const City = styled.div`
    width: 100%;
    max-width: 280px;
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.box};
    color: #EEEFF7;
    padding: 1.2rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    cursor: pointer;
    align-items: center;
    p:first-child{
        flex: 5;
    }
    p:nth-child(2){
        flex: 1;
    }

`

const OtherCities = props => {
    console.log(props)
    return(
        <Container>
            <p>Other Locations <FontAwesomeIcon icon={faMap}/></p>
            {props.cities.map(city => <City key={city.id}>
                    <p>{city.city}</p>
                    <p>{city.temp} &#x2103;</p>
                </City>
            )}
        </Container>
    )
}

export default OtherCities;