import React from 'react';

import { Provider } from 'react-redux'

import styled from 'styled-components'
import './App.css'

import storeSaved from './stores/storeSaved'
import DisplayPokemons from './components/DisplayPokemons';
import SearchBar from './components/SearchBar';
import Datalist from './components/Datalist';

const Wrapper = styled.main`
  text-align: center;
  background-color: #DEDEDE;
  border-radius: 20px;
  width: 60vw;
  margin-top: 5vh;
  margin-left: 15vw;
  margin-right: 15vw;
  padding: 5vh 5vw;
  @media (max-width: 768px) {
    width: 80vw;
    margin-left: 5vw;
  }
`;

function App() {
  return (
    <Wrapper>
      <Provider store={storeSaved}>
        <SearchBar />
        <Datalist />
        <DisplayPokemons />
      </Provider>
    </Wrapper>
  );
}

export default App;
