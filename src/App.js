import React, { Component } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import uniqid from 'uniqid';

import { lightTheme, darkTheme } from './units/theme';
import { Wrapper } from './units/style';
import { getWeather, getCityName, reverseGeolocation, areSame } from './units/helpers';

import Mode from './components/Mode';
import SearchButton from './components/SearchButton';
import MainCity from './components/MainCity';
import Search from './components/Search';
import OtherCities from './components/OtherCities';


const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 10px;
    font-family: 'Lato', sans-serif;
  }
  body {
    height: 100%;
    width: 100vw;
    transition: background-color 500ms ease;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    padding: 0;
    overflow-x: hidden;
    overflow-y: ${(props) => props.modal && 'hidden'}
  }
  p{
    font-size: 1.5rem;
  }
`

class App extends Component {
  constructor(){
    super();
    this.switchTheme = this.switchTheme.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.setCity = this.setCity.bind(this);
    this.removeCity = this.removeCity.bind(this);

    this.state = {
      theme: true,
      currentCityWeather: {},
      currentCity: '',
      search: false,
      otherCities: []
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getLocation);
    if(localStorage.getItem('cities')){
      this.setState({otherCities: JSON.parse(localStorage.getItem('cities'))})
    }

  }

  switchTheme() {
    const currentTheme = this.state.theme;
    this.setState({ theme: !currentTheme })
  }
  showSearch(){
    const currentState = this.state.search;
    this.setState({search: !currentState});
  }

  async getLocation({coords} ){
    const pos = {
      lat: coords.latitude,
      long: coords.longitude
    }
    const weather = await getWeather(pos.lat, pos.long);
    const currentWeather = weather.current
    const city = await getCityName(pos.lat, pos.long);
    this.setState({currentCity: city, currentCityWeather: currentWeather});
  }

  async setCity(e){
    const city = e.target.textContent;
    const data = await reverseGeolocation(city);
    const {lat, lng} = await data[0].geometry;
    const weather = await getWeather(lat,lng);
    const cityObj = {
      city,
      temp: Math.round(weather.current.temp),
      id: uniqid()
    }
    if(!areSame(cityObj ,this.state.otherCities)){
      this.setState(prevState => ({
        otherCities: [...prevState.otherCities , cityObj]
    }))
      localStorage.setItem('cities', JSON.stringify(this.state.otherCities))
    }
    
  }

  removeCity(e){
    const { id } = e.target;
    const filteredState = this.state.otherCities.filter(city => city.id !==id)
    this.setState({otherCities: filteredState});
    localStorage.setItem('cities', JSON.stringify(filteredState));
  }

  render() {
    const cityExist = Object.keys(this.state.currentCityWeather).length !== 0 ? true : false
    return (
      <ThemeProvider theme={this.state.theme === true ? darkTheme : lightTheme} >
        <>
        <GlobalStyles modal={this.state.search}/>
          <Mode switch={this.switchTheme} dark={this.state.theme}/>
          <Wrapper>
            {cityExist && 
            <MainCity 
              city={this.state.currentCity}
              weather={this.state.currentCityWeather}/>}
          </Wrapper>
          <Search 
              hideSearch={this.showSearch} 
              isOpen={this.state.search} 
              click={this.setCity}/>
          {this.state.otherCities.length > 0 && 
            <OtherCities 
              cities={this.state.otherCities}
              remove={this.removeCity}/>}
          <SearchButton 
              click={this.showSearch} 
              rotate={this.state.search}/>
        </>
      </ThemeProvider>
    )
  }
}


export default App