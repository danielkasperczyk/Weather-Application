import React, { Component } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './units/theme';
import { Wrapper } from './units/style';
import { getWeather, getCityName } from './units/helpers';

import Mode from './components/Mode';
import SearchButton from './components/SearchButton';
import MainCity from './components/MainCity';

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
  }
  body {
    transition: background-color 500ms ease;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    margin: 1rem;
    padding: 0;
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

    this.state = {
      theme: true,
      currentCityWeather: {},
      currentCity: '',
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getLocation)
  }

  switchTheme() {
    const currentTheme = this.state.theme;
    this.setState({ theme: !currentTheme })
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

  render() {
    const cityExist = Object.keys(this.state.currentCityWeather).length !== 0 ? true : false
    return (
      <ThemeProvider theme={this.state.theme === true ? darkTheme : lightTheme} >
        <>
        <GlobalStyles />
          <Mode switch={this.switchTheme} dark={this.state.theme}/>
          <Wrapper>
            {cityExist && 
            <MainCity 
              city={this.state.currentCity}
              weather={this.state.currentCityWeather}/>}
          </Wrapper>            
          <SearchButton />
        </>
      </ThemeProvider>
    )
  }
}


export default App