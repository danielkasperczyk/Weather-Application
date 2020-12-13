import React, { Component } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './units/theme';
import Mode from './components/Mode';
import SearchButton from './components/SearchButton';
import MainCity from './components/MainCity';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
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
`

const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {
  constructor(){
    super();
    this.switchTheme = this.switchTheme.bind(this);

    this.state = {
      theme: true
    }
  }

  switchTheme() {
    const currentTheme = this.state.theme;
    this.setState({ theme: !currentTheme })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme === true ? darkTheme : lightTheme} >
        <>
        <GlobalStyles />
          <Mode switch={this.switchTheme} dark={this.state.theme}/>
          <Wrapper>
            <MainCity />
          </Wrapper>            
          <SearchButton />
        </>
      </ThemeProvider>
    )
  }
}


export default App