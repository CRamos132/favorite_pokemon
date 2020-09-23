import React from 'react';

import { Provider } from 'react-redux'

import storeSaved from './stores/storeSaved'
import DisplayPokemons from './components/DisplayPokemons';
import SearchBar from './components/SearchBar';
import Datalist from './components/Datalist';

function App() {
  return (
    <Provider store={storeSaved}>
      <SearchBar />
      <Datalist />
      <DisplayPokemons />
    </Provider>
  );
}

export default App;
