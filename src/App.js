import React, { Component } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './units/theme';
import { Wrapper } from './units/style';
import { getWeather, getCityName } from './units/helpers';

import Mode from './components/Mode';
import SearchButton from './components/SearchButton';
import MainCity from './components/MainCity';
import Search from './components/Search';

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
    height: 100vh;
    width: 100vw;
    transition: background-color 500ms ease;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    margin: 1rem;
    padding: 0;
    overflow: hidden;
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
    this.findCity = this.findCity.bind(this);

    this.state = {
      theme: true,
      currentCityWeather: {},
      currentCity: '',
      search: false,
      city: ''
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getLocation)
  }

  switchTheme() {
    const currentTheme = this.state.theme;
    this.setState({ theme: !currentTheme })
  }
  showSearch(){
    const currentState = this.state.search;
    this.setState({search: !currentState});
  }
  async findCity(e){
      e.preventDefault()
      await this.setState({city: e.target.city.value});
      e.target.city.value = '';
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
          <Search isOpen={this.state.search} find={this.findCity}/>
          <SearchButton click={this.showSearch} rotate={this.state.search}/>
        </>
      </ThemeProvider>
    )
  }
}


export default App