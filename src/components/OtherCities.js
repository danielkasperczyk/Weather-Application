import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import OtherCity from './OtherCity';

const Container = styled.div`
    width: 100%;
    max-width: 280px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    p:first-child{
        margin: 0.5rem 0;
    }
`
const Wrapper = styled.div`
    display: flex;
    position:relative;
    width: 100%;
`

const OtherCities = props => {
    return(
        <Container>
            <p>Other Locations <FontAwesomeIcon icon={faMap}/></p>
            {props.cities.map(city => 
                <Wrapper>
                    <OtherCity remove={props.remove} city={city}/>
                </Wrapper>
            )}
        </Container>
    )
}

export default OtherCities;